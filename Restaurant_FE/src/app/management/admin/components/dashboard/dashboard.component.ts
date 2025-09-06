import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FileValidationService } from '../../../../services/file-validation.service';
import { CategoryDto } from '../../../../Shared/interfaces/api-response.interface';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  categories: CategoryDto[] = [];
  validateForm!: FormGroup;
  size: NzButtonSize = 'large';
  isSpinning: boolean;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    public fileValidationService: FileValidationService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
    });
    this.getAllCategories();
  }

  getAllCategories() {
    this.categories = [];
    this.adminService.getCategories().subscribe({
      next: (response) => {
        if (response.status === 'SUCCESS' && response.data) {
          response.data.forEach(element => {
            if (element.returnedImg) {
              // Convert byte array to base64 string
              // Detect image format or default to jpeg for better compatibility
              const base64String = this.arrayBufferToBase64(element.returnedImg);
              const imageFormat = this.detectImageFormat(base64String) || 'jpeg';
              element.img = `data:image/${imageFormat};base64,${base64String}`;
            } else if (element.img && !element.img.startsWith('data:')) {
              const imageFormat = this.detectImageFormat(element.img) || 'jpeg';
              element.img = `data:image/${imageFormat};base64,${element.img}`;
            }
            this.categories.push(element);
          });
          console.log('Categories loaded:', this.categories);
        } else {
          this.notification.error('Error',
            response.message || 'Failed to load categories',
            { nzDuration: 5000 });
        }
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
        let errorMessage = 'Failed to load categories';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }

        this.notification.error('Error', errorMessage, { nzDuration: 5000 });
      }
    });
  }

  private arrayBufferToBase64(buffer: any): string {
    if (typeof buffer === 'string') {
      return buffer;
    }

    if (Array.isArray(buffer)) {
      // Convert byte array to base64
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
    }

    // If it's already a proper base64 string or other format
    return buffer.toString();
  }

  private detectImageFormat(base64String: string): string {
    const header = base64String.substring(0, 10);

    // Common image format signatures in base64
    if (header.startsWith('iVBORw0KGg')) return 'png';
    if (header.startsWith('/9j/')) return 'jpeg';
    if (header.startsWith('R0lGOD')) return 'gif';
    if (header.startsWith('UklGR')) return 'webp';

    // Default to jpeg for compatibility
    return 'jpeg';
  }

  onImageError(event: any, category: CategoryDto) {
    console.error('Failed to load image for category:', category.name, 'Image data:', category.img?.substring(0, 50) + '...');
  }

  submitForm() {
    this.categories = [];
    this.adminService.searchCategoriesByTitle(this.validateForm.get(['title'])!.value).subscribe({
      next: (response) => {
        if (response.status === 'SUCCESS' && response.data) {
          response.data.forEach(element => {
            if (element.returnedImg) {
              // Convert byte array to base64 string
              // Detect image format or default to jpeg for better compatibility
              const base64String = this.arrayBufferToBase64(element.returnedImg);
              const imageFormat = this.detectImageFormat(base64String) || 'jpeg';
              element.img = `data:image/${imageFormat};base64,${base64String}`;
            } else if (element.img && !element.img.startsWith('data:')) {
              const imageFormat = this.detectImageFormat(element.img) || 'jpeg';
              element.img = `data:image/${imageFormat};base64,${element.img}`;
            }
            this.categories.push(element);
          });
          console.log('Categories loaded:', this.categories);
        } else {
          this.notification.error('Error',
            response.message || 'Failed to load categories',
            { nzDuration: 5000 });
        }
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
        let errorMessage = 'Failed to load categories';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }

        this.notification.error('Error', errorMessage, { nzDuration: 5000 });
      }
    });
  }

}
