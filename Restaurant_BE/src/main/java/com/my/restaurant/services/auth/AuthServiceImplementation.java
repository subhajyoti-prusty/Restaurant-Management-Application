package com.my.restaurant.services.auth;

import com.my.restaurant.dto.SignupRequest;
import com.my.restaurant.dto.UserDto;
import com.my.restaurant.entity.User;
import com.my.restaurant.enums.UserRole;
import com.my.restaurant.exception.InvalidEmailFormatException;
import com.my.restaurant.exception.InvalidSignupRequestException;
import com.my.restaurant.exception.UserAlreadyExistsException;
import com.my.restaurant.repository.UserRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImplementation implements AuthService {

    private final UserRepo userRepo;

    public AuthServiceImplementation(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @PostConstruct
    public void createAdminAccount(){
        User adminAccount = userRepo.findByUserRole(UserRole.ADMIN);
        if(adminAccount == null){
            User user = new User();
            user.setName("Admin");
            user.setEmail("admin@test.com");
            user.setPassword(new BCryptPasswordEncoder().encode("Admin"));
            user.setUserRole(UserRole.ADMIN);
            userRepo.save(user);
        }
    }

    @Override
    public UserDto createUser(SignupRequest signupRequest) {

        // Validate signup request
        if (signupRequest == null) {
            throw new InvalidSignupRequestException("Signup request cannot be null");
        }
        
        if (signupRequest.getEmail() == null || signupRequest.getEmail().trim().isEmpty()) {
            throw new InvalidSignupRequestException("Email is required and cannot be empty");
        }
        
        if (signupRequest.getPassword() == null || signupRequest.getPassword().trim().isEmpty()) {
            throw new InvalidSignupRequestException("Password is required and cannot be empty");
        }
        
        if (signupRequest.getName() == null || signupRequest.getName().trim().isEmpty()) {
            throw new InvalidSignupRequestException("Name is required and cannot be empty");
        }

        // Validate password strength
        if (signupRequest.getPassword().length() < 6) {
            throw new InvalidSignupRequestException("Password must be at least 6 characters long");
        }

        // Validate email format using regex
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        if (!signupRequest.getEmail().trim().matches(emailRegex)) {
            throw new InvalidEmailFormatException("Please enter a valid email address format (e.g., user@example.com)");
        }
        
        // Check if the user already exists
        User existingUser = userRepo.findByEmail(signupRequest.getEmail().trim().toLowerCase());
        if (existingUser != null) {
            throw new UserAlreadyExistsException("An account with this email address already exists. Please use a different email or try logging in.");
        }
        
        try {
            User user = new User();
            user.setName(signupRequest.getName().trim());
            user.setEmail(signupRequest.getEmail().trim().toLowerCase());
            user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
            user.setUserRole(UserRole.CUSTOMER);
            
            User createdUser = userRepo.save(user);
            
            UserDto createdUserDto = new UserDto();
            createdUserDto.setId(createdUser.getId());
            createdUserDto.setName(createdUser.getName());
            createdUserDto.setEmail(createdUser.getEmail());
            createdUserDto.setUserRole(createdUser.getUserRole());
            
            return createdUserDto;
        } catch (Exception e) {
            throw new InvalidSignupRequestException("Failed to create user account. Please try again.");
        }
    }
}
