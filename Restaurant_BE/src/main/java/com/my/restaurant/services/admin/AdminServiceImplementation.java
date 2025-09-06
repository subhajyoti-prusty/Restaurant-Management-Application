package com.my.restaurant.services.admin;

import com.my.restaurant.dto.CategoryDto;
import com.my.restaurant.entity.Category;
import com.my.restaurant.exception.FileSizeExceededException;
import com.my.restaurant.exception.InvalidFileTypeException;
import com.my.restaurant.exception.DescriptionTooLongException;
import com.my.restaurant.exception.InvalidInputException;
import com.my.restaurant.repository.CategoryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImplementation implements AdminService {

    private final CategoryRepo categoryRepo;

    // Constants for validation
    private static final long MAX_FILE_SIZE = 1048576; // 1MB in bytes
    private static final int MAX_DESCRIPTION_LENGTH = 500; // Maximum description length
    private static final int MAX_NAME_LENGTH = 100; // Maximum name length
    private static final List<String> ALLOWED_IMAGE_TYPES = Arrays.asList(
            "image/jpeg", "image/jpg", "image/png", "image/gif");

    @Override
    public CategoryDto postCategory(CategoryDto categoryDto) throws IOException {
        // Validate input data
        validateCategoryInput(categoryDto);

        // Validate file if present
        if (categoryDto.getImg() != null && !categoryDto.getImg().isEmpty()) {
            validateImageFile(categoryDto.getImg());
        }

        Category category = new Category();
        category.setName(categoryDto.getName().trim());
        category.setDescription(categoryDto.getDescription().trim());

        if (categoryDto.getImg() != null && !categoryDto.getImg().isEmpty()) {
            category.setImg(categoryDto.getImg().getBytes());
        }

        Category createdCategory = categoryRepo.save(category);

        CategoryDto createdCategoryDto = new CategoryDto();
        createdCategoryDto.setId(createdCategory.getId());
        createdCategoryDto.setName(createdCategory.getName());
        createdCategoryDto.setDescription(createdCategory.getDescription());
        createdCategoryDto.setReturnedImg(createdCategory.getImg());

        return createdCategoryDto;
    }

    @Override
    public List<CategoryDto> getAllCategories() {
        return categoryRepo.findAll().stream().map(Category::getCategoryDto).collect(Collectors.toList());
    }

    private void validateCategoryInput(CategoryDto categoryDto) {
        // Check if name is null or empty
        if (categoryDto.getName() == null || categoryDto.getName().trim().isEmpty()) {
            throw new InvalidInputException("Category name is required and cannot be empty");
        }

        // Check if description is null or empty
        if (categoryDto.getDescription() == null || categoryDto.getDescription().trim().isEmpty()) {
            throw new InvalidInputException("Category description is required and cannot be empty");
        }

        // Check name length
        if (categoryDto.getName().trim().length() > MAX_NAME_LENGTH) {
            throw new InvalidInputException("Category name is too long. Maximum allowed length is "
                    + MAX_NAME_LENGTH + " characters. Current length: " + categoryDto.getName().trim().length());
        }

        // Check description length
        if (categoryDto.getDescription().trim().length() > MAX_DESCRIPTION_LENGTH) {
            throw new DescriptionTooLongException("Category description is too long. Maximum allowed length is "
                    + MAX_DESCRIPTION_LENGTH + " characters. Current length: "
                    + categoryDto.getDescription().trim().length());
        }
    }

    private void validateImageFile(MultipartFile file) {
        // Check file size
        if (file.getSize() > MAX_FILE_SIZE) {
            double fileSizeInMB = (double) file.getSize() / (1024 * 1024);
            throw new FileSizeExceededException("Image size (" + String.format("%.2f", fileSizeInMB)
                    + "MB) exceeds the maximum allowed limit of 1MB");
        }

        // Check file type
        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_IMAGE_TYPES.contains(contentType.toLowerCase())) {
            throw new InvalidFileTypeException("Invalid file type. Allowed types are: JPEG, JPG, PNG, GIF. " +
                    "Current type: " + (contentType != null ? contentType : "unknown"));
        }

        // Check if file is actually an image by checking file extension
        String originalFilename = file.getOriginalFilename();
        if (originalFilename != null) {
            String fileExtension = getFileExtension(originalFilename).toLowerCase();
            List<String> allowedExtensions = Arrays.asList("jpg", "jpeg", "png", "gif");
            if (!allowedExtensions.contains(fileExtension)) {
                throw new InvalidFileTypeException("Invalid file extension: " + fileExtension +
                        ". Allowed extensions are: " + String.join(", ", allowedExtensions));
            }
        }
    }

    private String getFileExtension(String filename) {
        if (filename == null || filename.lastIndexOf('.') == -1) {
            return "";
        }
        return filename.substring(filename.lastIndexOf('.') + 1);
    }
}
