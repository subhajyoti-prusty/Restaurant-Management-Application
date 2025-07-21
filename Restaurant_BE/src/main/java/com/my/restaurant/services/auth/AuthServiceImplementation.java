package com.my.restaurant.services.auth;

import com.my.restaurant.dto.SignupRequest;
import com.my.restaurant.dto.UserDto;
import com.my.restaurant.entity.User;
import com.my.restaurant.enums.UserRole;
import com.my.restaurant.repository.UserRepo;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImplementation implements AuthService {

    private final UserRepo userRepo;

    public AuthServiceImplementation(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDto createUser(SignupRequest signupRequest) {
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
