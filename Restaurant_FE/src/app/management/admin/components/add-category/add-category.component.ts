import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FileValidationService } from '../../../../services/file-validation.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {

  categoryForm: FormGroup;

  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    public fileValidationService: FileValidationService
  ) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required]
    });

    // Add real-time validation for name and description
    this.categoryForm.get('name')?.valueChanges.subscribe(value => {
      if (value && value.trim().length > 0) {
        const validation = this.fileValidationService.validateCategoryName(value);
        if (!validation.isValid) {
          this.categoryForm.get('name')?.setErrors({ 'custom': validation.errorMessage });
        }
      }
    });

    this.categoryForm.get('description')?.valueChanges.subscribe(value => {
      if (value && value.trim().length > 0) {
        const validation = this.fileValidationService.validateCategoryDescription(value);
        if (!validation.isValid) {
          this.categoryForm.get('description')?.setErrors({ 'custom': validation.errorMessage });
        }
      }
    });
  }

  saveData() {
    // Validate form inputs before submission
    const nameValidation = this.fileValidationService.validateCategoryName(this.categoryForm.get('name')?.value);
    const descriptionValidation = this.fileValidationService.validateCategoryDescription(this.categoryForm.get('description')?.value);

    if (!nameValidation.isValid) {
      this.notification.error('Validation Error', nameValidation.errorMessage!, { nzDuration: 5000 });
      return;
    }

    if (!descriptionValidation.isValid) {
      this.notification.error('Validation Error', descriptionValidation.errorMessage!, { nzDuration: 5000 });
      return;
    }

    if (this.categoryForm.valid) {
      // Additional validation for file selection
      if (!this.selectedFile) {
        this.notification.warning(
          'Missing Image',
          'Please select an image for the category.',
          { nzDuration: 3000 }
        );
        return;
      }
      
      const formData = new FormData();
      formData.append('name', this.categoryForm.get('name')?.value);
      formData.append('description', this.categoryForm.get('description')?.value);
      formData.append('img', this.selectedFile);
      
      this.adminService.postCategory(formData).subscribe({
        next: (response) => {
          this.notification.success('SUCCESS',
            'Category added successfully!',
            { nzDuration: 5000 });
          // Reset form and file selection
          this.categoryForm.reset();
          this.selectedFile = null;
          this.imagePreview = null;
          // Clear file input
          const fileInput = document.getElementById('upload_profile_image') as HTMLInputElement;
          if (fileInput) {
            fileInput.value = '';
          }
        },
        error: (error) => {
          console.error('Error adding category:', error);
          let errorMessage = 'Error adding category!';
          let errorTitle = 'ERROR';
          
          // Handle specific error messages from backend
          if (error.error && error.error.type) {
            switch (error.error.type) {
              case 'file_validation':
                errorTitle = 'File Validation Error';
                break;
              case 'input_validation':
                errorTitle = 'Input Validation Error';
                break;
              case 'authentication':
                errorTitle = 'Authentication Error';
                // Don't show notification for auth errors as interceptor handles it
                return;
              case 'server_error':
                errorTitle = 'Server Error';
                break;
              default:
                errorTitle = 'ERROR';
            }
          }
          
          if (error.error && error.error.message) {
            errorMessage = error.error.message;
          } else if (error.error && typeof error.error === 'string') {
            errorMessage = error.error;
          } else if (error.message) {
            errorMessage = error.message;
          }
          
          this.notification.error(errorTitle, errorMessage, { nzDuration: 5000 });
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.categoryForm.controls).forEach(key => {
        this.categoryForm.get(key)?.markAsTouched();
      });
      
      this.notification.warning(
        'Form Validation',
        'Please fill in all required fields correctly.',
        { nzDuration: 3000 }
      );
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Use the file validation service
      const validationResult = this.fileValidationService.validateImageFile(file);
      
      if (!validationResult.isValid) {
        this.notification.error(
          'File Validation Error',
          validationResult.errorMessage!,
          { nzDuration: 5000 }
        );
        // Clear the input
        event.target.value = '';
        this.selectedFile = null;
        this.imagePreview = null;
        return;
      }
      
      this.selectedFile = file;
      this.previewImage(file);
    }
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

}
