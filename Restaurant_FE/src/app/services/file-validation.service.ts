import { Injectable } from '@angular/core';

export interface FileValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export interface TextValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FileValidationService {

  private readonly MAX_FILE_SIZE = 1048576; // 1MB in bytes
  private readonly ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  private readonly MAX_DESCRIPTION_LENGTH = 500; // Maximum description length
  private readonly MAX_NAME_LENGTH = 100; // Maximum name length

  constructor() { }

  validateImageFile(file: File): FileValidationResult {
    // Check if file exists
    if (!file) {
      return {
        isValid: false,
        errorMessage: 'Please select a file.'
      };
    }

    // Check file size
    if (file.size > this.MAX_FILE_SIZE) {
      const fileSizeInMB = (file.size / 1024 / 1024).toFixed(2);
      return {
        isValid: false,
        errorMessage: `Image size (${fileSizeInMB}MB) exceeds the maximum allowed limit of 1MB. Please select a smaller image.`
      };
    }

    // Check file type
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return {
        isValid: false,
        errorMessage: 'Please select a valid image file (JPEG, PNG, or GIF).'
      };
    }

    return {
      isValid: true
    };
  }

  validateCategoryName(name: string): TextValidationResult {
    if (!name || name.trim().length === 0) {
      return {
        isValid: false,
        errorMessage: 'Category name is required and cannot be empty.'
      };
    }

    if (name.trim().length > this.MAX_NAME_LENGTH) {
      return {
        isValid: false,
        errorMessage: `Category name is too long. Maximum allowed length is ${this.MAX_NAME_LENGTH} characters. Current length: ${name.trim().length}`
      };
    }

    return {
      isValid: true
    };
  }

  validateCategoryDescription(description: string): TextValidationResult {
    if (!description || description.trim().length === 0) {
      return {
        isValid: false,
        errorMessage: 'Category description is required and cannot be empty.'
      };
    }

    if (description.trim().length > this.MAX_DESCRIPTION_LENGTH) {
      return {
        isValid: false,
        errorMessage: `Description is too long. Maximum allowed length is ${this.MAX_DESCRIPTION_LENGTH} characters. Current length: ${description.trim().length}`
      };
    }

    return {
      isValid: true
    };
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  getMaxFileSizeInMB(): number {
    return this.MAX_FILE_SIZE / 1024 / 1024;
  }

  getAllowedImageTypes(): string[] {
    return [...this.ALLOWED_IMAGE_TYPES];
  }

  getMaxDescriptionLength(): number {
    return this.MAX_DESCRIPTION_LENGTH;
  }

  getMaxNameLength(): number {
    return this.MAX_NAME_LENGTH;
  }
}
