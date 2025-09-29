package com.my.restaurant.controller;

import com.my.restaurant.dto.ApiResponse;
import com.my.restaurant.dto.CategoryDto;
import com.my.restaurant.dto.CategoryRequest;
import com.my.restaurant.services.category.CategoryService;
import com.my.restaurant.util.ResponseUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin/category")
@RequiredArgsConstructor
@Tag(name = "Category Management", description = "APIs for managing categories in the restaurant system")
@SecurityRequirement(name = "bearerAuth")
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Create a new category", 
               description = "Creates a new category with name, description and optional image")
    public ResponseEntity<ApiResponse<CategoryDto>> postCategory(
            @Valid @ModelAttribute CategoryRequest categoryRequest) throws IOException {
        CategoryDto createdCategoryDto = categoryService.createCategory(categoryRequest);
        if (createdCategoryDto == null) {
            return ResponseUtil.badRequest("Failed to create category");
        }
        return ResponseUtil.created(createdCategoryDto, "Category created successfully");
    }

    @GetMapping("/getCategories")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Get all categories", description = "Retrieves a list of all categories in the system")
    public ResponseEntity<ApiResponse<List<CategoryDto>>> getAllCategories() {
        List<CategoryDto> categoryDtoList = categoryService.getAllCategories();
        if (categoryDtoList == null) {
            return ResponseUtil.notFound("No categories found");
        }
        return ResponseUtil.success(categoryDtoList, "Categories retrieved successfully");
    }

    @GetMapping("/searchCategories/{title}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Search categories by title", 
               description = "Finds categories by title using partial matching")
    public ResponseEntity<ApiResponse<List<CategoryDto>>> getCategoriesByTitle(
            @Parameter(description = "Title or partial title to search for") 
            @PathVariable String title) {
        List<CategoryDto> categoryDtoList = categoryService.getCategoriesByTitle(title);
        if (categoryDtoList == null) {
            return ResponseUtil.notFound("No categories found");
        }
        return ResponseUtil.success(categoryDtoList, "Categories retrieved successfully");
    }

    @GetMapping("/getById/{categoryId}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Get category by ID", 
               description = "Fetches detailed information of a category using its unique ID")
    public ResponseEntity<ApiResponse<CategoryDto>> getCategoryById(
            @Parameter(description = "ID of the category to retrieve") 
            @PathVariable Long categoryId) {
        CategoryDto categoryDto = categoryService.getCategoryById(categoryId);
        return ResponseUtil.success(categoryDto, "Category retrieved successfully");
    }

    @PutMapping("/update/{categoryId}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Update category", 
               description = "Updates category details including name, description and image")
    public ResponseEntity<ApiResponse<CategoryDto>> updateCategory(
            @Parameter(description = "ID of the category to update") 
            @PathVariable Long categoryId, 
            @Valid @ModelAttribute CategoryRequest categoryRequest) throws IOException {
        CategoryDto updatedCategoryDto = categoryService.updateCategory(categoryId, categoryRequest);
        return ResponseUtil.success(updatedCategoryDto, "Category updated successfully");
    }

    @DeleteMapping("/delete/{categoryId}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Delete category", description = "Deletes a category by its ID")
    public ResponseEntity<ApiResponse<String>> deleteCategory(
            @Parameter(description = "ID of the category to delete") 
            @PathVariable Long categoryId) {
        categoryService.deleteCategory(categoryId);
        return ResponseUtil.success("Category deleted successfully", "Category with id " + categoryId + " deleted successfully");
    }
}
