package com.my.restaurant.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Generic API Response wrapper for standardized response format
 * 
 * @param <T> Type of data being returned
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {
    
    private int statusCode;
    private String status;
    private String message;
    private T data;
    private LocalDateTime timestamp;
    private String path;
    private List<String> errors;

    /**
     * Create a successful response with data
     */
    public static <T> ApiResponse<T> success(T data, String message) {
        return ApiResponse.<T>builder()
                .statusCode(HttpStatus.OK.value())
                .status("SUCCESS")
                .message(message)
                .data(data)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create a successful response with data and custom status code
     */
    public static <T> ApiResponse<T> success(T data, String message, HttpStatus httpStatus) {
        return ApiResponse.<T>builder()
                .statusCode(httpStatus.value())
                .status("SUCCESS")
                .message(message)
                .data(data)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create a successful response without data
     */
    public static <T> ApiResponse<T> success(String message) {
        return ApiResponse.<T>builder()
                .statusCode(HttpStatus.OK.value())
                .status("SUCCESS")
                .message(message)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create a successful response for created resources
     */
    public static <T> ApiResponse<T> created(T data, String message) {
        return ApiResponse.<T>builder()
                .statusCode(HttpStatus.CREATED.value())
                .status("SUCCESS")
                .message(message)
                .data(data)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create an error response
     */
    public static <T> ApiResponse<T> error(String message, HttpStatus httpStatus) {
        return ApiResponse.<T>builder()
                .statusCode(httpStatus.value())
                .status("ERROR")
                .message(message)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create an error response with errors list
     */
    public static <T> ApiResponse<T> error(String message, List<String> errors, HttpStatus httpStatus) {
        return ApiResponse.<T>builder()
                .statusCode(httpStatus.value())
                .status("ERROR")
                .message(message)
                .errors(errors)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create an error response with path information
     */
    public static <T> ApiResponse<T> error(String message, HttpStatus httpStatus, String path) {
        return ApiResponse.<T>builder()
                .statusCode(httpStatus.value())
                .status("ERROR")
                .message(message)
                .path(path)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create a validation error response
     */
    public static <T> ApiResponse<T> validationError(String message, List<String> errors) {
        return ApiResponse.<T>builder()
                .statusCode(HttpStatus.BAD_REQUEST.value())
                .status("VALIDATION_ERROR")
                .message(message)
                .errors(errors)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create an unauthorized response
     */
    public static <T> ApiResponse<T> unauthorized(String message) {
        return ApiResponse.<T>builder()
                .statusCode(HttpStatus.UNAUTHORIZED.value())
                .status("UNAUTHORIZED")
                .message(message)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create a forbidden response
     */
    public static <T> ApiResponse<T> forbidden(String message) {
        return ApiResponse.<T>builder()
                .statusCode(HttpStatus.FORBIDDEN.value())
                .status("FORBIDDEN")
                .message(message)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Create a not found response
     */
    public static <T> ApiResponse<T> notFound(String message) {
        return ApiResponse.<T>builder()
                .statusCode(HttpStatus.NOT_FOUND.value())
                .status("NOT_FOUND")
                .message(message)
                .timestamp(LocalDateTime.now())
                .build();
    }
}
