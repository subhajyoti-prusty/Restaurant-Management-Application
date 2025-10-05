import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnInit } from '@angular/core';

export interface UploadResult {
  file: File | null;
  preview: string | ArrayBuffer | null;
  error: string | null;
}

@Component({
  selector: 'app-img-upload',
  standalone: false,
  templateUrl: './img-upload.component.html',
  styleUrl: './img-upload.component.scss'
})
export class ImgUploadComponent implements OnInit {
  
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  
  @Input() maxFileSize: number = 1024 * 1024; // 1MB default
  @Input() acceptedFormats: string[] = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
  @Input() placeholder: string = 'Click to upload or drag files here';
  @Input() showPreview: boolean = true;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() existingImage: string | ArrayBuffer | null = null;
  
  @Output() fileSelected = new EventEmitter<UploadResult>();
  @Output() fileRemoved = new EventEmitter<void>();
  
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  error: string | null = null;
  isDragOver: boolean = false;
  isUploading: boolean = false; // Add flag to prevent double clicks
  showExistingImage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Initialize with existing image if provided
    if (this.existingImage && !this.selectedFile) {
      this.showExistingImage = true;
      this.imagePreview = this.existingImage;
    }
  }

  onFileSelected(event: any): void {
    try {
      const file = event.target.files?.[0];
      this.processFile(file);
    } catch (error) {
      this.handleError('Error selecting file');
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    
    try {
      const files = event.dataTransfer?.files;
      if (files && files.length > 0) {
        this.processFile(files[0]);
      }
    } catch (error) {
      this.handleError('Error processing dropped file');
    }
  }

  private processFile(file: File): void {
    this.clearError();

    if (!file) {
      this.handleError('No file selected');
      return;
    }

    // Validate file type
    if (!this.isValidFileType(file)) {
      this.handleError(`Invalid file type. Accepted formats: ${this.getAcceptedFormatsString()}`);
      return;
    }

    // Validate file size
    if (!this.isValidFileSize(file)) {
      this.handleError(`File size exceeds limit. Maximum size: ${this.formatFileSize(this.maxFileSize)}`);
      return;
    }

    this.selectedFile = file;
    this.showExistingImage = false; // Hide existing image when new file is selected
    
    // Generate preview
    if (this.showPreview && file.type.startsWith('image/')) {
      this.generatePreview(file);
    } else {
      this.imagePreview = null;
      this.emitResult();
    }
  }

  private generatePreview(file: File): void {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        this.imagePreview = e.target?.result || null;
        this.emitResult();
      } catch (error) {
        this.handleError('Error generating image preview');
      }
    };

    reader.onerror = () => {
      this.handleError('Error reading file');
    };

    try {
      reader.readAsDataURL(file);
    } catch (error) {
      this.handleError('Error processing file');
    }
  }

  private isValidFileType(file: File): boolean {
    return this.acceptedFormats.some(format => 
      file.type === format || file.type === format.replace('jpg', 'jpeg')
    );
  }

  private isValidFileSize(file: File): boolean {
    return file.size <= this.maxFileSize;
  }

  private handleError(message: string): void {
    this.error = message;
    this.selectedFile = null;
    this.imagePreview = null;
    this.emitResult();
  }

  private clearError(): void {
    this.error = null;
  }

  private emitResult(): void {
    const result: UploadResult = {
      file: this.selectedFile,
      preview: this.imagePreview,
      error: this.error
    };
    this.fileSelected.emit(result);
  }

  removeFile(): void {
    this.selectedFile = null;
    this.clearError();
    this.isUploading = false; // Reset the uploading flag
    
    // Restore existing image if available, otherwise clear preview
    if (this.existingImage) {
      this.showExistingImage = true;
      this.imagePreview = this.existingImage;
    } else {
      this.showExistingImage = false;
      this.imagePreview = null;
    }
    
    this.fileRemoved.emit();
    this.emitResult();
    
    // Clear file input using ViewChild reference
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  triggerFileUpload(): void {
    if (this.disabled || this.isUploading) return;
    
    // Use ViewChild reference instead of document.querySelector
    if (this.fileInput) {
      this.isUploading = true; // Set flag to prevent double clicks
      this.fileInput.nativeElement.click();
      
      // Reset flag after a short delay to allow for file dialog
      setTimeout(() => {
        this.isUploading = false;
      }, 500);
    }
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getAcceptedFormatsString(): string {
    return this.acceptedFormats.map(format => format.split('/')[1].toUpperCase()).join(', ');
  }

  getFileName(): string {
    return this.selectedFile?.name || '';
  }

  getFileSize(): string {
    return this.selectedFile ? this.formatFileSize(this.selectedFile.size) : '';
  }

  // Method to reset the component from parent
  reset(): void {
    this.selectedFile = null;
    this.clearError();
    this.isDragOver = false;
    this.isUploading = false; // Reset uploading flag
    
    // Restore existing image if available, otherwise clear preview
    if (this.existingImage) {
      this.showExistingImage = true;
      this.imagePreview = this.existingImage;
    } else {
      this.showExistingImage = false;
      this.imagePreview = null;
    }
    
    // Clear file input using ViewChild reference
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
    
    // Emit the reset result
    this.emitResult();
  }
}
