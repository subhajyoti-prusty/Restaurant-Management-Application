package com.my.restaurant.controller;

import com.my.restaurant.dto.ApiResponse;
import com.my.restaurant.dto.UserDto;
import com.my.restaurant.util.ResponseUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

/**
 * Example controller demonstrating the usage of the new ApiResponse structure
 * This controller shows different response scenarios using the standardized format
 */
@RestController
@RequestMapping("/api/example")
public class ExampleController {

    /**
     * Example of successful response with data
     */
    @GetMapping("/success-with-data")
    public ResponseEntity<ApiResponse<UserDto>> getSuccessWithData() {
        UserDto user = new UserDto();
        user.setId(1L);
        user.setName("John Doe");
        user.setEmail("john@example.com");
        
        return ResponseUtil.success(user, "User data retrieved successfully");
    }

    /**
     * Example of successful response with list data
     */
    @GetMapping("/success-with-list")
    public ResponseEntity<ApiResponse<List<String>>> getSuccessWithList() {
        List<String> items = Arrays.asList("Item 1", "Item 2", "Item 3");
        return ResponseUtil.success(items, "Items retrieved successfully");
    }

    /**
     * Example of created response (201)
     */
    @PostMapping("/create")
    public ResponseEntity<ApiResponse<UserDto>> createResource(@RequestBody UserDto userDto) {
        // Simulate creating a user
        userDto.setId(2L);
        return ResponseUtil.created(userDto, "User created successfully");
    }

    /**
     * Example of bad request response (400)
     */
    @GetMapping("/bad-request")
    public ResponseEntity<ApiResponse<Object>> getBadRequest() {
        return ResponseUtil.badRequest("Invalid request parameters provided");
    }

    /**
     * Example of validation error response (400) with multiple errors
     */
    @PostMapping("/validation-error")
    public ResponseEntity<ApiResponse<Object>> getValidationError() {
        List<String> errors = Arrays.asList(
            "Name is required",
            "Email must be a valid format",
            "Password must be at least 8 characters long"
        );
        return ResponseUtil.validationError("Input validation failed", errors);
    }

    /**
     * Example of unauthorized response (401)
     */
    @GetMapping("/unauthorized")
    public ResponseEntity<ApiResponse<Object>> getUnauthorized() {
        return ResponseUtil.unauthorized("You must be logged in to access this resource");
    }

    /**
     * Example of forbidden response (403)
     */
    @GetMapping("/forbidden")
    public ResponseEntity<ApiResponse<Object>> getForbidden() {
        return ResponseUtil.forbidden("You don't have permission to access this resource");
    }

    /**
     * Example of not found response (404)
     */
    @GetMapping("/not-found")
    public ResponseEntity<ApiResponse<Object>> getNotFound() {
        return ResponseUtil.notFound("The requested resource was not found");
    }

    /**
     * Example of internal server error response (500)
     */
    @GetMapping("/server-error")
    public ResponseEntity<ApiResponse<Object>> getServerError() {
        return ResponseUtil.internalServerError("An unexpected error occurred on the server");
    }

    /**
     * Example of no content response (204)
     */
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse<Object>> deleteResource(@PathVariable Long id) {
        // Simulate deletion
        return ResponseUtil.noContent("Resource deleted successfully");
    }
}
