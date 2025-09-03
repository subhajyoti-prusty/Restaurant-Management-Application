package com.my.restaurant.exception;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(FileSizeExceededException.class)
    public ResponseEntity<Map<String, String>> handleFileSizeExceededException(FileSizeExceededException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "FILE_SIZE_EXCEEDED");
        error.put("message", ex.getMessage());
        error.put("type", "file_validation");
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidFileTypeException.class)
    public ResponseEntity<Map<String, String>> handleInvalidFileTypeException(InvalidFileTypeException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_FILE_TYPE");
        error.put("message", ex.getMessage());
        error.put("type", "file_validation");
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DescriptionTooLongException.class)
    public ResponseEntity<Map<String, String>> handleDescriptionTooLongException(DescriptionTooLongException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "DESCRIPTION_TOO_LONG");
        error.put("message", ex.getMessage());
        error.put("type", "input_validation");
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidInputException.class)
    public ResponseEntity<Map<String, String>> handleInvalidInputException(InvalidInputException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_INPUT");
        error.put("message", ex.getMessage());
        error.put("type", "input_validation");
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<Map<String, String>> handleExpiredJwtException(ExpiredJwtException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "JWT_TOKEN_EXPIRED");
        error.put("message", "Your session has expired. Please login again.");
        error.put("type", "authentication");
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(JwtTokenExpiredException.class)
    public ResponseEntity<Map<String, String>> handleJwtTokenExpiredException(JwtTokenExpiredException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "JWT_TOKEN_EXPIRED");
        error.put("message", ex.getMessage());
        error.put("type", "authentication");
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(MalformedJwtException.class)
    public ResponseEntity<Map<String, String>> handleMalformedJwtException(MalformedJwtException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_JWT_TOKEN");
        error.put("message", "Invalid JWT token format");
        error.put("type", "authentication");
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(SignatureException.class)
    public ResponseEntity<Map<String, String>> handleSignatureException(SignatureException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_JWT_SIGNATURE");
        error.put("message", "Invalid JWT token signature");
        error.put("type", "authentication");
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }

    // Authentication and User Management Exceptions
    
    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<Map<String, String>> handleUserAlreadyExistsException(UserAlreadyExistsException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "USER_ALREADY_EXISTS");
        error.put("message", ex.getMessage());
        error.put("type", "signup_validation");
        return new ResponseEntity<>(error, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(InvalidEmailFormatException.class)
    public ResponseEntity<Map<String, String>> handleInvalidEmailFormatException(InvalidEmailFormatException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_EMAIL_FORMAT");
        error.put("message", ex.getMessage());
        error.put("type", "signup_validation");
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidSignupRequestException.class)
    public ResponseEntity<Map<String, String>> handleInvalidSignupRequestException(InvalidSignupRequestException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_SIGNUP_REQUEST");
        error.put("message", ex.getMessage());
        error.put("type", "signup_validation");
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<Map<String, String>> handleInvalidCredentialsException(InvalidCredentialsException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_CREDENTIALS");
        error.put("message", ex.getMessage());
        error.put("type", "login_validation");
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(UserNotActiveException.class)
    public ResponseEntity<Map<String, String>> handleUserNotActiveException(UserNotActiveException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "USER_NOT_ACTIVE");
        error.put("message", ex.getMessage());
        error.put("type", "login_validation");
        return new ResponseEntity<>(error, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleUserNotFoundException(UserNotFoundException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_CREDENTIALS");  // Changed to use same error code as invalid credentials for security
        error.put("message", "Invalid email or password. Please check your credentials and try again.");  // Consistent message
        error.put("type", "login_validation");
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);  // Changed to 401 for consistency
    }

    // Spring Security Exceptions - These should be caught in the controller now, but keeping as fallback
    
    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Map<String, String>> handleBadCredentialsException(BadCredentialsException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INVALID_CREDENTIALS");
        error.put("message", "Invalid email or password. Please check your credentials and try again.");
        error.put("type", "login_validation");
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(DisabledException.class)
    public ResponseEntity<Map<String, String>> handleDisabledException(DisabledException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "USER_DISABLED");
        error.put("message", "User account is disabled");
        error.put("type", "login_validation");
        return new ResponseEntity<>(error, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleUsernameNotFoundException(UsernameNotFoundException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "USERNAME_NOT_FOUND");
        error.put("message", "User with provided email not found");
        error.put("type", "login_validation");
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    // Validation Exceptions
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationException(MethodArgumentNotValidException ex) {
        Map<String, Object> error = new HashMap<>();
        Map<String, String> fieldErrors = new HashMap<>();
        
        BindingResult bindingResult = ex.getBindingResult();
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            fieldErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        
        error.put("error", "VALIDATION_FAILED");
        error.put("message", "Input validation failed");
        error.put("type", "validation");
        error.put("fieldErrors", fieldErrors);
        
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<Map<String, String>> handleMaxUploadSizeExceededException(MaxUploadSizeExceededException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "UPLOAD_SIZE_EXCEEDED");
        error.put("message", "File size exceeds the maximum allowed limit of 1MB");
        error.put("type", "file_validation");
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGenericException(Exception ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "INTERNAL_SERVER_ERROR");
        error.put("message", "An unexpected error occurred");
        error.put("type", "server_error");
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
