package com.my.restaurant.controller;

import com.my.restaurant.dto.ApiResponse;
import com.my.restaurant.dto.CategoryDto;
import com.my.restaurant.services.admin.AdminService;
import com.my.restaurant.util.ResponseUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/category")
    public ResponseEntity<ApiResponse<CategoryDto>> postCategory(@ModelAttribute CategoryDto categoryDto) throws IOException {
        CategoryDto createdCategoryDto = adminService.postCategory(categoryDto);
        if (createdCategoryDto == null) {
            return ResponseUtil.badRequest("Failed to create category");
        }
        return ResponseUtil.created(createdCategoryDto, "Category created successfully");
    }

    @GetMapping("/getCategories")
    public ResponseEntity<ApiResponse<List<CategoryDto>>> getAllCategories() {
        List<CategoryDto> categoryDtoList = adminService.getAllCategories();
        if (categoryDtoList == null) {
            return ResponseUtil.notFound("No categories found");
        }
        return ResponseUtil.success(categoryDtoList, "Categories retrieved successfully");
    }

    @GetMapping("/searchCategories/{title}")
    public ResponseEntity<ApiResponse<List<CategoryDto>>> getCategoriesByTitle(@PathVariable String title) {
        List<CategoryDto> categoryDtoList = adminService.getCategoriesByTitle(title);
        if (categoryDtoList == null) {
            return ResponseUtil.notFound("No categories found");
        }
        return ResponseUtil.success(categoryDtoList, "Categories retrieved successfully");
    }
}
