package com.my.restaurant.controller;

import com.my.restaurant.dto.AuthenticationRequest;
import com.my.restaurant.dto.AuthenticationResponse;
import com.my.restaurant.dto.SignupRequest;
import com.my.restaurant.dto.UserDto;
import com.my.restaurant.entity.User;
import com.my.restaurant.exception.InvalidCredentialsException;
import com.my.restaurant.exception.UserNotActiveException;
import com.my.restaurant.exception.UserNotFoundException;
import com.my.restaurant.repository.UserRepo;
import com.my.restaurant.services.auth.AuthService;
import com.my.restaurant.services.jwt.UserService;
import com.my.restaurant.util.JwtUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    private final AuthenticationManager authenticationManager;

    private final UserService userService;

    private final JwtUtil jwtUtil;

    private final UserRepo userRepo;


    @PostMapping("/signup")
    public ResponseEntity<?> signupUser(@Valid @RequestBody SignupRequest signupRequest) {
        try {
            // Validate request body
            if (signupRequest == null) {
                Map<String, String> error = new HashMap<>();
                error.put("error", "INVALID_REQUEST");
                error.put("message", "Request body cannot be empty");
                error.put("type", "signup_validation");
                return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
            }

            UserDto createdUserDto = authService.createUser(signupRequest);
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User registered successfully");
            response.put("user", createdUserDto);
            
            return new ResponseEntity<>(response, HttpStatus.CREATED);
            
        } catch (Exception e) {
            // All specific exceptions are handled by GlobalExceptionHandler
            // This is a fallback for any unexpected exceptions
            Map<String, String> error = new HashMap<>();
            error.put("error", "SIGNUP_FAILED");
            error.put("message", "An unexpected error occurred during signup");
            error.put("type", "signup_validation");
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Authenticates a user and returns a JWT token if successful.
     * 
     * Security Note: For security reasons, both non-existent users and wrong passwords
     * return the same error message to prevent user enumeration attacks.
     * 
     * @param authenticationRequest Contains email and password
     * @return ResponseEntity with authentication data or error message
     */
    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            // Validate request body
            if (authenticationRequest == null || 
                authenticationRequest.getEmail() == null || 
                authenticationRequest.getPassword() == null) {
                throw new InvalidCredentialsException("Email and password are required");
            }

            String email = authenticationRequest.getEmail().trim().toLowerCase();
            String password = authenticationRequest.getPassword();

            // Check if user exists first to provide better error messages
            Optional<User> existingUser = userRepo.findFirstByEmail(email);
            if (existingUser.isEmpty()) {
                throw new InvalidCredentialsException("Invalid email or password. Please check your credentials and try again.");
            }

            // Authenticate user
            try {
                authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
                );
            } catch (BadCredentialsException e) {
                throw new InvalidCredentialsException("Invalid email or password. Please check your credentials and try again.");
            } catch (DisabledException e) {
                throw new UserNotActiveException("Your account has been disabled. Please contact support for assistance.");
            }

            // Load user details
            UserDetails userDetails;
            try {
                userDetails = userService.UserDetailsService().loadUserByUsername(email);
            } catch (UsernameNotFoundException e) {
                throw new InvalidCredentialsException("Invalid email or password. Please check your credentials and try again.");
            }
            
            // Generate JWT token
            String jwt = jwtUtil.generateToken(userDetails);
            
            // Get user from database (we already checked it exists above)
            User user = existingUser.get();
            
            // Create response
            AuthenticationResponse authenticationResponse = new AuthenticationResponse();
            authenticationResponse.setJwt(jwt);
            authenticationResponse.setUserRole(user.getUserRole());
            authenticationResponse.setUserId(user.getId());
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("authentication", authenticationResponse);
            
            return new ResponseEntity<>(response, HttpStatus.OK);
            
        } catch (InvalidCredentialsException | UserNotActiveException | UserNotFoundException e) {
            // Re-throw custom exceptions to be handled by GlobalExceptionHandler
            throw e;
        } catch (Exception e) {
            // Log the exception for debugging
            System.err.println("Unexpected login error: " + e.getMessage());
            e.printStackTrace();
            
            Map<String, String> error = new HashMap<>();
            error.put("error", "LOGIN_FAILED");
            error.put("message", "An unexpected error occurred during login. Please try again.");
            error.put("type", "login_validation");
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
