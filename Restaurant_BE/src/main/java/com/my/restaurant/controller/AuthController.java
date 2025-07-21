package com.my.restaurant.controller;

import com.my.restaurant.dto.SignupRequest;
import com.my.restaurant.dto.UserDto;
import com.my.restaurant.services.auth.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signupUser(@Valid @RequestBody SignupRequest signupRequest, BindingResult bindingResult) {
        // Check for validation errors
        if (bindingResult.hasErrors()) {
            StringBuilder errorMsg = new StringBuilder();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMsg.append(error.getField()).append(": ").append(error.getDefaultMessage()).append("; ");
            }
            return new ResponseEntity<>(errorMsg.toString(), HttpStatus.BAD_REQUEST);
        }

        try {
            UserDto createdUserDto = authService.createUser(signupRequest);
            
            if (createdUserDto == null) {
                return new ResponseEntity<>("User not created.", HttpStatus.BAD_REQUEST);
            }
            
            return new ResponseEntity<>(createdUserDto, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

}
