package com.my.restaurant.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.my.restaurant.services.jwt.UserService;
import com.my.restaurant.util.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserService userService;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response, @NonNull FilterChain filterChain)
            throws ServletException, IOException {
        
        // Skip JWT filter for authentication endpoints
        String path = request.getRequestURI();
        if (path.startsWith("/api/auth/")) {
            filterChain.doFilter(request, response);
            return;
        }
        
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        
        if (StringUtils.isEmpty(authHeader) || !StringUtils.startsWith(authHeader,"Bearer")) {
            filterChain.doFilter(request, response);
            return;
        }
        
        jwt = authHeader.substring(7);
        
        try {
            userEmail = jwtUtil.extractUserName(jwt);
            if (userEmail != null && !userEmail.isEmpty()
                    && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = userService.UserDetailsService().loadUserByUsername(userEmail);
                if (jwtUtil.isTokenValid(jwt, userDetails)) {
                    SecurityContext context = SecurityContextHolder.createEmptyContext();
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    context.setAuthentication(authToken);
                    SecurityContextHolder.setContext(context);
                }
            }
        } catch (ExpiredJwtException ex) {
            handleJwtException(response, "JWT_TOKEN_EXPIRED", "Your session has expired. Please login again.", HttpStatus.UNAUTHORIZED);
            return;
        } catch (MalformedJwtException ex) {
            handleJwtException(response, "INVALID_JWT_TOKEN", "Invalid JWT token format", HttpStatus.UNAUTHORIZED);
            return;
        } catch (SignatureException ex) {
            handleJwtException(response, "INVALID_JWT_SIGNATURE", "Invalid JWT token signature", HttpStatus.UNAUTHORIZED);
            return;
        } catch (Exception ex) {
            handleJwtException(response, "JWT_PROCESSING_ERROR", "Error processing JWT token", HttpStatus.UNAUTHORIZED);
            return;
        }
        
        filterChain.doFilter(request, response);
    }
    
    private void handleJwtException(HttpServletResponse response, String error, String message, HttpStatus status) throws IOException {
        response.setStatus(status.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", error);
        errorResponse.put("message", message);
        errorResponse.put("type", "authentication");
        
        ObjectMapper objectMapper = new ObjectMapper();
        response.getWriter().write(objectMapper.writeValueAsString(errorResponse));
    }
}
