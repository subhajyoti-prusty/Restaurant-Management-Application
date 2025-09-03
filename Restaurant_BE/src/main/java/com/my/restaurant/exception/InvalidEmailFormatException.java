package com.my.restaurant.exception;

public class InvalidEmailFormatException extends RuntimeException {
    
    public InvalidEmailFormatException(String message) {
        super(message);
    }
    
    public InvalidEmailFormatException(String message, Throwable cause) {
        super(message, cause);
    }
}
