package com.my.restaurant.services.category;

import com.my.restaurant.dto.CategoryDto;
import com.my.restaurant.dto.CategoryRequest;
import java.io.IOException;
import java.util.List;

public interface CategoryService {
    CategoryDto createCategory(CategoryRequest categoryRequest) throws IOException;

    CategoryDto updateCategory(Long categoryId, CategoryRequest categoryRequest) throws IOException;

    void deleteCategory(Long categoryId);

    CategoryDto getCategoryById(Long categoryId);

    List<CategoryDto> getAllCategories();

    List<CategoryDto> getCategoriesByTitle(String title);

    boolean existsById(Long categoryId);

}

