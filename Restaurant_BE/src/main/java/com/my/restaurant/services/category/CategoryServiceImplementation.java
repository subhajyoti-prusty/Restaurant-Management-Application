package com.my.restaurant.services.category;

import com.my.restaurant.dto.CategoryDto;
import com.my.restaurant.dto.CategoryRequest;
import com.my.restaurant.entity.Category;
import com.my.restaurant.exception.CategoryNotFoundException;
import com.my.restaurant.exception.InvalidInputException;
import com.my.restaurant.repository.CategoryRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryServiceImplementation implements CategoryService {

    private final CategoryRepo categoryRepo;

    @Override
    public CategoryDto createCategory(CategoryRequest categoryRequest) throws IOException {
        validateCategoryRequest(categoryRequest);
        
        Category category = new Category();
        category.setName(categoryRequest.getName());
        category.setDescription(categoryRequest.getDescription());
        
        if (categoryRequest.getImg() != null && !categoryRequest.getImg().isEmpty()) {
            category.setImg(categoryRequest.getImg().getBytes());
        }

        Category savedCategory = categoryRepo.save(category);
        log.info("Category created successfully with ID: {}", savedCategory.getId());
        
        return savedCategory.getCategoryDto();
    }

    @Override
    public CategoryDto updateCategory(Long categoryId, CategoryRequest categoryRequest) throws IOException {
        validateCategoryRequest(categoryRequest);
        
        Category category = categoryRepo.findById(categoryId)
                .orElseThrow(() -> new CategoryNotFoundException("Category not found with ID: " + categoryId));

        category.setName(categoryRequest.getName());
        category.setDescription(categoryRequest.getDescription());
        
        if (categoryRequest.getImg() != null && !categoryRequest.getImg().isEmpty()) {
            category.setImg(categoryRequest.getImg().getBytes());
        }

        Category updatedCategory = categoryRepo.save(category);
        log.info("Category updated successfully with ID: {}", updatedCategory.getId());
        
        return updatedCategory.getCategoryDto();
    }

    @Override
    public void deleteCategory(Long categoryId) {
        if (!categoryRepo.existsById(categoryId)) {
            throw new CategoryNotFoundException("Category not found with ID: " + categoryId);
        }
        
        categoryRepo.deleteById(categoryId);
        log.info("Category deleted successfully with ID: {}", categoryId);
    }

    @Override
    public CategoryDto getCategoryById(Long categoryId) {
        Category category = categoryRepo.findById(categoryId)
                .orElseThrow(() -> new CategoryNotFoundException("Category not found with ID: " + categoryId));
        
        return category.getCategoryDto();
    }

    @Override
    public List<CategoryDto> getAllCategories() {
        List<Category> categories = categoryRepo.findAll();
        
        return categories.stream()
                .map(Category::getCategoryDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<CategoryDto> getCategoriesByTitle(String title) {
        if (title == null || title.trim().isEmpty()) {
            throw new InvalidInputException("Search title cannot be empty");
        }
        
        List<Category> categories = categoryRepo.findAllByNameContaining(title);
        
        return categories.stream()
                .map(Category::getCategoryDto)
                .collect(Collectors.toList());
    }

    @Override
    public boolean existsById(Long categoryId) {
        return categoryRepo.existsById(categoryId);
    }

    private void validateCategoryRequest(CategoryRequest categoryRequest) {
        if (categoryRequest == null) {
            throw new InvalidInputException("Category data cannot be null");
        }
        
        if (categoryRequest.getName() == null || categoryRequest.getName().trim().isEmpty()) {
            throw new InvalidInputException("Category name cannot be empty");
        }
        
        if (categoryRequest.getName().length() > 100) {
            throw new InvalidInputException("Category name cannot exceed 100 characters");
        }
        
        if (categoryRequest.getDescription() != null && categoryRequest.getDescription().length() > 500) {
            throw new InvalidInputException("Category description cannot exceed 500 characters");
        }
    }
}