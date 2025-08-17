package com.my.restaurant.services.admin;

import com.my.restaurant.dto.CategoryDto;
import com.my.restaurant.entity.Category;
import com.my.restaurant.repository.CategoryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AdminServiceImplementation implements AdminService{

    private final CategoryRepo categoryRepo;


    @Override
    public CategoryDto postCategory(CategoryDto categoryDto) throws IOException {
        Category category = new Category();
        category.setName(categoryDto.getName());
        category.setDescription(categoryDto.getDescription());
        category.setImg(categoryDto.getImg().getBytes());
        Category createdCategory = categoryRepo.save(category);
        CategoryDto createdCategoryDto = new CategoryDto();
        createdCategoryDto.setId(createdCategoryDto.getId());
        return createdCategoryDto;
    }
}
