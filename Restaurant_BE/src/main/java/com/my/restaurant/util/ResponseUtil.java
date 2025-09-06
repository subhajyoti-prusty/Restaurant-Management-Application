package com.my.restaurant.util;

import com.my.restaurant.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * Utility class for creating standardized API responses
 */
public class ResponseUtil {

    private ResponseUtil() {
        // Private constructor to prevent instantiation
    }

    /**
     * Create a successful response with data
     */
    public static <T> ResponseEntity<ApiResponse<T>> success(T data, String message) {
        return ResponseEntity.ok(ApiResponse.success(data, message));
    }

    /**
     * Create a successful response with data and custom status
     */
    public static <T> ResponseEntity<ApiResponse<T>> success(T data, String message, HttpStatus status) {
        return new ResponseEntity<>(ApiResponse.success(data, message, status), status);
    }

    /**
     * Create a created response (201)
     */
    public static <T> ResponseEntity<ApiResponse<T>> created(T data, String message) {
        return new ResponseEntity<>(ApiResponse.created(data, message), HttpStatus.CREATED);
    }

    /**
     * Create a no content response (204)
     */
    public static <T> ResponseEntity<ApiResponse<T>> noContent(String message) {
        return new ResponseEntity<>(ApiResponse.success(message), HttpStatus.NO_CONTENT);
    }

    /**
     * Create a bad request response (400)
     */
    public static <T> ResponseEntity<ApiResponse<T>> badRequest(String message) {
        return new ResponseEntity<>(ApiResponse.error(message, HttpStatus.BAD_REQUEST), HttpStatus.BAD_REQUEST);
    }

    /**
     * Create a validation error response (400)
     */
    public static <T> ResponseEntity<ApiResponse<T>> validationError(String message, List<String> errors) {
        return new ResponseEntity<>(ApiResponse.validationError(message, errors), HttpStatus.BAD_REQUEST);
    }

    /**
     * Create an unauthorized response (401)
     */
    public static <T> ResponseEntity<ApiResponse<T>> unauthorized(String message) {
        return new ResponseEntity<>(ApiResponse.unauthorized(message), HttpStatus.UNAUTHORIZED);
    }

    /**
     * Create a forbidden response (403)
     */
    public static <T> ResponseEntity<ApiResponse<T>> forbidden(String message) {
        return new ResponseEntity<>(ApiResponse.forbidden(message), HttpStatus.FORBIDDEN);
    }

    /**
     * Create a not found response (404)
     */
    public static <T> ResponseEntity<ApiResponse<T>> notFound(String message) {
        return new ResponseEntity<>(ApiResponse.notFound(message), HttpStatus.NOT_FOUND);
    }

    /**
     * Create an internal server error response (500)
     */
    public static <T> ResponseEntity<ApiResponse<T>> internalServerError(String message) {
        return new ResponseEntity<>(ApiResponse.error(message, HttpStatus.INTERNAL_SERVER_ERROR), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Create a custom error response
     */
    public static <T> ResponseEntity<ApiResponse<T>> error(String message, HttpStatus status) {
        return new ResponseEntity<>(ApiResponse.error(message, status), status);
    }
}
