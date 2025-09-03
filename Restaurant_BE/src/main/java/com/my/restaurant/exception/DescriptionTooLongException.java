package com.my.restaurant.exception;

public class DescriptionTooLongException extends RuntimeException {
    
    public DescriptionTooLongException(String message) {
        super(message);
    }
    
    public DescriptionTooLongException(String message, Throwable cause) {
        super(message, cause);
    }
}
