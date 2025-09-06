import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FileValidationService } from '../../../../services/file-validation.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    public fileValidationService: FileValidationService
  ) { }
  
  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.adminService.getCategories().subscribe({
      next: (response) => {
        // Handle new ApiResponse structure
        if (response.status === 'SUCCESS' && response.data) {
          console.log('Categories fetched successfully:', response.data);
          // You can store the categories in a component property if needed
          // this.categories = response.data;
        } else {
          this.notification.error('Error', 
            response.message || 'Failed to load categories', 
            { nzDuration: 5000 });
        }
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
        let errorMessage = 'Failed to load categories';
        
        // Handle new ApiResponse error structure
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
