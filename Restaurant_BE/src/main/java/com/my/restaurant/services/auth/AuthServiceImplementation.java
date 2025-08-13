package com.my.restaurant.services.auth;

import com.my.restaurant.dto.SignupRequest;
import com.my.restaurant.dto.UserDto;
import com.my.restaurant.entity.User;
import com.my.restaurant.enums.UserRole;
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

        if (signupRequest == null || signupRequest.getEmail() == null || signupRequest.getPassword() == null) {
            throw new RuntimeException("Invalid signup request");
        }

        // Validation for email format using regex
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        if (!signupRequest.getEmail().matches(emailRegex)) {
            throw new RuntimeException("Invalid email format");
        }
        
        // Check if the user already exists
        User existingUser = userRepo.findByEmail(signupRequest.getEmail());
        if (existingUser != null) {
            throw new RuntimeException("Email already exists");
        }
        
        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setUserRole(UserRole.CUSTOMER);
        User createUser = userRepo.save(user);
        UserDto createdUserDto = new UserDto();
        createdUserDto.setId(createUser.getId());
        createdUserDto.setName(createUser.getName());
        createdUserDto.setEmail(createUser.getEmail());
        createdUserDto.setUserRole(createUser.getUserRole());
        return createdUserDto;
    }
}
