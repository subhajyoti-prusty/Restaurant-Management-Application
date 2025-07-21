package com.my.restaurant.dto;

import com.my.restaurant.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {

    private long id;

    private String name;

    private String email;

    private String Password;

    private UserRole userRole;

}
