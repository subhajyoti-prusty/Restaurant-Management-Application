package com.my.restaurant.services.admin;

import com.my.restaurant.dto.CategoryDto;

import java.io.IOException;

public interface AdminService {
    CategoryDto postCategory(CategoryDto categoryDto) throws IOException;
}
