package com.my.restaurant.services.auth;

import com.my.restaurant.dto.SignupRequest;
import com.my.restaurant.dto.UserDto;

public interface AuthService {


    UserDto createUser(SignupRequest signupRequest);
}
