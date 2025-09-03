package com.my.restaurant.exception;

public class JwtTokenExpiredException extends RuntimeException {
    
    public JwtTokenExpiredException(String message) {
        super(message);
    }
    
    public JwtTokenExpiredException(String message, Throwable cause) {
        super(message, cause);
    }
}
