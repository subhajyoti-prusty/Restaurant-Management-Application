import { TestBed } from '@angular/core/testing';

import { FileValidationService } from './file-validation.service';

describe('FileValidationService', () => {
  let service: FileValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Image File Validation', () => {
    it('should validate file size correctly', () => {
      // Create a mock file with size > 1MB
      const largeFile = new File([''], 'test.jpg', { type: 'image/jpeg' });
      Object.defineProperty(largeFile, 'size', { value: 2 * 1024 * 1024 }); // 2MB

      const result = service.validateImageFile(largeFile);
      expect(result.isValid).toBeFalsy();
      expect(result.errorMessage).toContain('exceeds the maximum allowed limit');
    });

    it('should validate file type correctly', () => {
      // Create a mock file with invalid type
      const invalidFile = new File([''], 'test.txt', { type: 'text/plain' });
      Object.defineProperty(invalidFile, 'size', { value: 500 * 1024 }); // 500KB

      const result = service.validateImageFile(invalidFile);
      expect(result.isValid).toBeFalsy();
      expect(result.errorMessage).toContain('valid image file');
    });

    it('should accept valid file', () => {
      // Create a mock valid file
      const validFile = new File([''], 'test.jpg', { type: 'image/jpeg' });
      Object.defineProperty(validFile, 'size', { value: 500 * 1024 }); // 500KB

      const result = service.validateImageFile(validFile);
      expect(result.isValid).toBeTruthy();
      expect(result.errorMessage).toBeUndefined();
    });
  });

  describe('Category Name Validation', () => {
    it('should reject empty name', () => {
      const result = service.validateCategoryName('');
      expect(result.isValid).toBeFalsy();
      expect(result.errorMessage).toContain('required');
    });

    it('should reject name that is too long', () => {
      const longName = 'A'.repeat(101); // 101 characters
      const result = service.validateCategoryName(longName);
      expect(result.isValid).toBeFalsy();
      expect(result.errorMessage).toContain('too long');
    });

    it('should accept valid name', () => {
      const validName = 'Valid Category Name';
      const result = service.validateCategoryName(validName);
      expect(result.isValid).toBeTruthy();
      expect(result.errorMessage).toBeUndefined();
    });
  });

  describe('Category Description Validation', () => {
    it('should reject empty description', () => {
      const result = service.validateCategoryDescription('');
      expect(result.isValid).toBeFalsy();
      expect(result.errorMessage).toContain('required');
    });

    it('should reject description that is too long', () => {
      const longDescription = 'A'.repeat(501); // 501 characters
      const result = service.validateCategoryDescription(longDescription);
      expect(result.isValid).toBeFalsy();
      expect(result.errorMessage).toContain('too long');
    });

    it('should accept valid description', () => {
      const validDescription = 'This is a valid category description.';
      const result = service.validateCategoryDescription(validDescription);
      expect(result.isValid).toBeTruthy();
      expect(result.errorMessage).toBeUndefined();
    });
  });

  describe('Utility Methods', () => {
    it('should format file size correctly', () => {
      expect(service.formatFileSize(0)).toBe('0 Bytes');
      expect(service.formatFileSize(1024)).toBe('1 KB');
      expect(service.formatFileSize(1048576)).toBe('1 MB');
    });

    it('should return correct max values', () => {
      expect(service.getMaxFileSizeInMB()).toBe(1);
      expect(service.getMaxDescriptionLength()).toBe(500);
      expect(service.getMaxNameLength()).toBe(100);
    });
  });
});
