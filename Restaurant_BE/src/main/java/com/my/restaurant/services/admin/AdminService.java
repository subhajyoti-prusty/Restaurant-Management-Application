package com.my.restaurant.services.admin;

import com.my.restaurant.dto.CategoryDto;

import java.io.IOException;
import java.util.List;

public interface AdminService {
    CategoryDto postCategory(CategoryDto categoryDto) throws IOException;

    List<CategoryDto> getAllCategories();

    List<CategoryDto> getCategoriesByTitle(String title);

}
