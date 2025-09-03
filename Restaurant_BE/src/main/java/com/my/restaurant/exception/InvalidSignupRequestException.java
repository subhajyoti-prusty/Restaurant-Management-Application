package com.my.restaurant.exception;

public class InvalidSignupRequestException extends RuntimeException {
    
    public InvalidSignupRequestException(String message) {
        super(message);
    }
    
    public InvalidSignupRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}
