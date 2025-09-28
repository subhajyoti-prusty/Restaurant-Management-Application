# Restaurant Management System - API Documentation

## Overview
This document provides comprehensive documentation for all REST API endpoints in the Restaurant Management System. The system follows RESTful principles and returns standardized responses.

## Base URL
- **Development**: `http://localhost:8081/api`
- **Backend Port**: 8081
- **Frontend Port**: 4200

## Standard Response Format
All API endpoints return responses in the following standardized format:

```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Operation completed successfully",
  "data": { ... },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

### Status Types
- `SUCCESS` - Operation completed successfully
- `CREATED` - Resource created successfully  
- `ERROR` - Operation failed
- `NOT_FOUND` - Resource not found
- `BAD_REQUEST` - Invalid request parameters
- `UNAUTHORIZED` - Authentication required
- `FORBIDDEN` - Insufficient permissions

---

# Authentication APIs

## 1. User Registration
**Endpoint**: `POST /api/auth/signup`  
**Description**: Register a new user account  
**Authentication**: None required  

### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Success Response (201)
```json
{
  "statusCode": 201,
  "status": "CREATED",
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "CUSTOMER"
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

### Error Response (400)
```json
{
  "statusCode": 400,
  "status": "BAD_REQUEST",
  "message": "Email already exists",
  "data": null,
  "timestamp": "2025-09-27T22:30:00",
  "errors": ["User with this email already exists"]
}
```

## 2. User Login
**Endpoint**: `POST /api/auth/login`  
**Description**: Authenticate user and receive JWT token  
**Authentication**: None required  

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "CUSTOMER"
    }
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

### Error Response (401)
```json
{
  "statusCode": 401,
  "status": "UNAUTHORIZED",
  "message": "Invalid credentials",
  "data": null,
  "timestamp": "2025-09-27T22:30:00",
  "errors": ["Email or password is incorrect"]
}
```

---

# Category Management APIs

## 3. Create Category
**Endpoint**: `POST /api/admin/category`  
**Description**: Create a new food category  
**Authentication**: JWT Token required (Admin role)  
**Content-Type**: `multipart/form-data`  

### Request Body (Form Data)
```
name: "Appetizers"
description: "Delicious starters and appetizers"
img: [File] (Optional - JPG/JPEG/PNG/GIF, max 5MB)
```

### Success Response (201)
```json
{
  "statusCode": 201,
  "status": "CREATED",
  "message": "Category created successfully",
  "data": {
    "id": 1,
    "name": "Appetizers",
    "description": "Delicious starters and appetizers",
    "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
    "returnedImg": [Binary data]
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

### Error Response (400)
```json
{
  "statusCode": 400,
  "status": "BAD_REQUEST",
  "message": "Failed to create category",
  "data": null,
  "timestamp": "2025-09-27T22:30:00",
  "errors": ["Category name cannot be empty", "Invalid file type"]
}
```

## 4. Get All Categories
**Endpoint**: `GET /api/admin/getCategories`  
**Description**: Retrieve all categories  
**Authentication**: JWT Token required (Admin role)  

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Categories retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Appetizers",
      "description": "Delicious starters and appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    },
    {
      "id": 2,
      "name": "Main Course",
      "description": "Hearty main course dishes",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 5. Get Categories by Title
**Endpoint**: `GET /api/admin/searchCategories/{title}`  
**Description**: Search categories by name  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `title` (string): Category name to search for

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Categories retrieved successfully for title: Appetizers",
  "data": [
    {
      "id": 1,
      "name": "Appetizers",
      "description": "Delicious starters and appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 6. Get Category by ID
**Endpoint**: `GET /api/admin/category/{categoryId}`  
**Description**: Get specific category by ID  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `categoryId` (Long): Category ID

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Category retrieved successfully",
  "data": {
    "id": 1,
    "name": "Appetizers",
    "description": "Delicious starters and appetizers",
    "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
    "returnedImg": [Binary data]
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 7. Update Category
**Endpoint**: `PUT /api/admin/category/{categoryId}`  
**Description**: Update existing category  
**Authentication**: JWT Token required (Admin role)  
**Content-Type**: `multipart/form-data`  

### Path Parameters
- `categoryId` (Long): Category ID to update

### Request Body (Form Data)
```
name: "Updated Appetizers"
description: "Updated description for appetizers"
img: [File] (Optional - JPG/JPEG/PNG/GIF, max 5MB)
```

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Category updated successfully",
  "data": {
    "id": 1,
    "name": "Updated Appetizers",
    "description": "Updated description for appetizers",
    "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
    "returnedImg": [Binary data]
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 8. Delete Category
**Endpoint**: `DELETE /api/admin/category/{categoryId}`  
**Description**: Delete a category  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `categoryId` (Long): Category ID to delete

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Category deleted successfully",
  "data": "Category with id 1 deleted successfully",
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

---

# Subcategory Management APIs

## 9. Create Subcategory
**Endpoint**: `POST /api/subcategories/create`  
**Description**: Create a new subcategory under a category  
**Authentication**: JWT Token required (Admin role)  

### Request Body
```json
{
  "name": "Hot Appetizers",
  "description": "Warm and spicy appetizers",
  "categoryId": 1
}
```

### Success Response (201)
```json
{
  "statusCode": 201,
  "status": "CREATED",
  "message": "Subcategory created successfully",
  "data": {
    "id": 1,
    "name": "Hot Appetizers",
    "description": "Warm and spicy appetizers",
    "categoryId": 1,
    "categoryName": "Appetizers"
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 10. Get All Subcategories
**Endpoint**: `GET /api/subcategories/all`  
**Description**: Get all subcategories  
**Authentication**: JWT Token required (Admin role)  

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Subcategories retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Hot Appetizers",
      "description": "Warm and spicy appetizers",
      "categoryId": 1,
      "categoryName": "Appetizers"
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 11. Get Subcategories by Category
**Endpoint**: `GET /api/subcategories/by-category/{categoryId}`  
**Description**: Get subcategories for a specific category  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `categoryId` (Long): Category ID

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Subcategories retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Hot Appetizers",
      "description": "Warm and spicy appetizers",
      "categoryId": 1,
      "categoryName": "Appetizers"
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 12. Get Subcategories by Category (Public)
**Endpoint**: `GET /api/subcategories/public/by-category/{categoryId}`  
**Description**: Get subcategories for a specific category (public access)  
**Authentication**: None required  

### Path Parameters
- `categoryId` (Long): Category ID

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Subcategories retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Hot Appetizers",
      "description": "Warm and spicy appetizers",
      "categoryId": 1,
      "categoryName": "Appetizers"
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 13. Update Subcategory
**Endpoint**: `PUT /api/subcategories/update/{subcategoryId}`  
**Description**: Update existing subcategory  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `subcategoryId` (Long): Subcategory ID to update

### Request Body
```json
{
  "name": "Updated Hot Appetizers",
  "description": "Updated warm and spicy appetizers",
  "categoryId": 1
}
```

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Subcategory updated successfully",
  "data": {
    "id": 1,
    "name": "Updated Hot Appetizers",
    "description": "Updated warm and spicy appetizers",
    "categoryId": 1,
    "categoryName": "Appetizers"
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 14. Delete Subcategory
**Endpoint**: `DELETE /api/subcategories/delete/{subcategoryId}`  
**Description**: Delete a subcategory  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `subcategoryId` (Long): Subcategory ID to delete

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Subcategory deleted successfully",
  "data": "Subcategory deleted successfully",
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

---

# Product Management APIs

## 15. Create Product
**Endpoint**: `POST /api/admin/{categoryId}/product`  
**Description**: Create a new product  
**Authentication**: JWT Token required (Admin role)  
**Content-Type**: `multipart/form-data`  

### Path Parameters
- `categoryId` (Long): Category ID for the product

### Request Body (Form Data)
```
name: "Chicken Wings"
description: "Spicy buffalo chicken wings"
price: "12.99"
isVeg: false
subcategoryId: 1 (Optional)
img: [File] (Optional - JPG/JPEG/PNG/GIF, max 5MB)
```

### Success Response (201)
```json
{
  "statusCode": 201,
  "status": "CREATED",
  "message": "Product created successfully",
  "data": {
    "id": 1,
    "name": "Chicken Wings",
    "description": "Spicy buffalo chicken wings",
    "price": "12.99",
    "isVeg": false,
    "categoryId": 1,
    "categoryName": "Appetizers",
    "subcategoryId": 1,
    "subcategoryName": "Hot Appetizers",
    "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
    "returnedImg": [Binary data]
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 16. Get All Products
**Endpoint**: `GET /api/admin/getProducts`  
**Description**: Get all products  
**Authentication**: JWT Token required (Admin role)  

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Products retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Chicken Wings",
      "description": "Spicy buffalo chicken wings",
      "price": "12.99",
      "isVeg": false,
      "categoryId": 1,
      "categoryName": "Appetizers",
      "subcategoryId": 1,
      "subcategoryName": "Hot Appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 17. Search Products by Title
**Endpoint**: `GET /api/admin/searchProducts/{title}`  
**Description**: Search products by name  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `title` (String): Product name to search for

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Products retrieved successfully for title: Chicken",
  "data": [
    {
      "id": 1,
      "name": "Chicken Wings",
      "description": "Spicy buffalo chicken wings",
      "price": "12.99",
      "isVeg": false,
      "categoryId": 1,
      "categoryName": "Appetizers",
      "subcategoryId": 1,
      "subcategoryName": "Hot Appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 18. Get Products by Category
**Endpoint**: `GET /api/admin/{categoryId}/products`  
**Description**: Get all products in a category  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `categoryId` (Long): Category ID

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Products retrieved successfully for category ID: 1",
  "data": [
    {
      "id": 1,
      "name": "Chicken Wings",
      "description": "Spicy buffalo chicken wings",
      "price": "12.99",
      "isVeg": false,
      "categoryId": 1,
      "categoryName": "Appetizers",
      "subcategoryId": 1,
      "subcategoryName": "Hot Appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 19. Get Products by Subcategory
**Endpoint**: `GET /api/admin/products/subcategory/{subcategoryId}`  
**Description**: Get all products in a subcategory  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `subcategoryId` (Long): Subcategory ID

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Products retrieved successfully for subcategory ID: 1",
  "data": [
    {
      "id": 1,
      "name": "Chicken Wings",
      "description": "Spicy buffalo chicken wings",
      "price": "12.99",
      "isVeg": false,
      "categoryId": 1,
      "categoryName": "Appetizers",
      "subcategoryId": 1,
      "subcategoryName": "Hot Appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 20. Get Product by ID
**Endpoint**: `GET /api/admin/product/{productId}`  
**Description**: Get specific product by ID  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `productId` (Long): Product ID

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Product retrieved successfully",
  "data": {
    "id": 1,
    "name": "Chicken Wings",
    "description": "Spicy buffalo chicken wings",
    "price": "12.99",
    "isVeg": false,
    "categoryId": 1,
    "categoryName": "Appetizers",
    "subcategoryId": 1,
    "subcategoryName": "Hot Appetizers",
    "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
    "returnedImg": [Binary data]
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 21. Update Product
**Endpoint**: `PUT /api/admin/product/{productId}`  
**Description**: Update existing product  
**Authentication**: JWT Token required (Admin role)  
**Content-Type**: `multipart/form-data`  

### Path Parameters
- `productId` (Long): Product ID to update

### Request Body (Form Data)
```
name: "Updated Chicken Wings"
description: "Updated spicy buffalo chicken wings"
price: "14.99"
isVeg: false
subcategoryId: 1 (Optional)
img: [File] (Optional - JPG/JPEG/PNG/GIF, max 5MB)
```

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Product updated successfully",
  "data": {
    "id": 1,
    "name": "Updated Chicken Wings",
    "description": "Updated spicy buffalo chicken wings",
    "price": "14.99",
    "isVeg": false,
    "categoryId": 1,
    "categoryName": "Appetizers",
    "subcategoryId": 1,
    "subcategoryName": "Hot Appetizers",
    "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
    "returnedImg": [Binary data]
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 22. Delete Product
**Endpoint**: `DELETE /api/admin/product/{productId}`  
**Description**: Delete a product  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `productId` (Long): Product ID to delete

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Product deleted successfully",
  "data": "Product with id 1 deleted successfully",
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 23. Get Products by Vegetarian Status
**Endpoint**: `GET /api/admin/products/veg/{isVeg}`  
**Description**: Filter products by vegetarian/non-vegetarian status  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `isVeg` (Boolean): true for vegetarian, false for non-vegetarian

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Vegetarian products retrieved successfully",
  "data": [
    {
      "id": 2,
      "name": "Vegetable Spring Rolls",
      "description": "Crispy vegetable spring rolls",
      "price": "8.99",
      "isVeg": true,
      "categoryId": 1,
      "categoryName": "Appetizers",
      "subcategoryId": 1,
      "subcategoryName": "Hot Appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 24. Get Products by Category and Vegetarian Status
**Endpoint**: `GET /api/admin/products/category/{categoryId}/veg/{isVeg}`  
**Description**: Filter products by category and vegetarian status  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `categoryId` (Long): Category ID
- `isVeg` (Boolean): true for vegetarian, false for non-vegetarian

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Vegetarian products retrieved successfully for category ID: 1",
  "data": [
    {
      "id": 2,
      "name": "Vegetable Spring Rolls",
      "description": "Crispy vegetable spring rolls",
      "price": "8.99",
      "isVeg": true,
      "categoryId": 1,
      "categoryName": "Appetizers",
      "subcategoryId": 1,
      "subcategoryName": "Hot Appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 25. Get Products by Subcategory and Vegetarian Status
**Endpoint**: `GET /api/admin/products/subcategory/{subcategoryId}/veg/{isVeg}`  
**Description**: Filter products by subcategory and vegetarian status  
**Authentication**: JWT Token required (Admin role)  

### Path Parameters
- `subcategoryId` (Long): Subcategory ID
- `isVeg` (Boolean): true for vegetarian, false for non-vegetarian

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Vegetarian products retrieved successfully for subcategory ID: 1",
  "data": [
    {
      "id": 2,
      "name": "Vegetable Spring Rolls",
      "description": "Crispy vegetable spring rolls",
      "price": "8.99",
      "isVeg": true,
      "categoryId": 1,
      "categoryName": "Appetizers",
      "subcategoryId": 1,
      "subcategoryName": "Hot Appetizers",
      "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      "returnedImg": [Binary data]
    }
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

---

# Development/Testing APIs

## 26. Example Success Response
**Endpoint**: `GET /api/example/success-with-data`  
**Description**: Example endpoint demonstrating successful response format  
**Authentication**: None required  

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Data retrieved successfully",
  "data": {
    "id": 1,
    "message": "This is sample data",
    "timestamp": "2025-09-27T22:30:00"
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 27. Example List Response
**Endpoint**: `GET /api/example/success-with-list`  
**Description**: Example endpoint demonstrating list response format  
**Authentication**: None required  

### Success Response (200)
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "List retrieved successfully",
  "data": [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"}
  ],
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 28. Example Create Response
**Endpoint**: `POST /api/example/create`  
**Description**: Example endpoint demonstrating creation response format  
**Authentication**: None required  

### Request Body
```json
{
  "name": "New Item",
  "description": "Description of new item"
}
```

### Success Response (201)
```json
{
  "statusCode": 201,
  "status": "CREATED",
  "message": "Resource created successfully",
  "data": {
    "id": 3,
    "name": "New Item",
    "description": "Description of new item",
    "createdAt": "2025-09-27T22:30:00"
  },
  "timestamp": "2025-09-27T22:30:00",
  "errors": null
}
```

## 29. Example Validation Error
**Endpoint**: `GET /api/example/validation-error`  
**Description**: Example endpoint demonstrating validation error response format  
**Authentication**: None required  

### Error Response (400)
```json
{
  "statusCode": 400,
  "status": "BAD_REQUEST",
  "message": "Validation failed",
  "data": null,
  "timestamp": "2025-09-27T22:30:00",
  "errors": [
    "Name is required",
    "Description cannot exceed 500 characters"
  ]
}
```

---

# Error Handling

## Common HTTP Status Codes
- **200 OK**: Request successful
- **201 Created**: Resource created successfully
- **400 Bad Request**: Invalid request parameters
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

## Error Response Format
All error responses follow this format:
```json
{
  "statusCode": 400,
  "status": "BAD_REQUEST",
  "message": "Brief error description",
  "data": null,
  "timestamp": "2025-09-27T22:30:00",
  "errors": [
    "Detailed error message 1",
    "Detailed error message 2"
  ]
}
```

## File Upload Constraints
- **Supported formats**: JPG, JPEG, PNG, GIF
- **Maximum file size**: 5MB
- **Validation**: Server-side and client-side validation
- **Security**: File type verification and sanitization

## Authentication
- **Token Type**: JWT (JSON Web Token)
- **Header**: `Authorization: Bearer <token>`
- **Expiration**: 24 hours
- **Refresh**: Re-login required after expiration

## Rate Limiting
Currently not implemented but planned for production deployment.

## CORS Configuration
- **Allowed Origins**: `http://localhost:4200` (development)
- **Allowed Methods**: GET, POST, PUT, DELETE, OPTIONS
- **Allowed Headers**: Authorization, Content-Type
- **Credentials**: Allowed

---

# Data Models

## UserDto
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "CUSTOMER" // or "ADMIN"
}
```

## CategoryDto
```json
{
  "id": 1,
  "name": "Appetizers",
  "description": "Delicious starters and appetizers",
  "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
  "returnedImg": [Binary data]
}
```

## SubcategoryDto
```json
{
  "id": 1,
  "name": "Hot Appetizers",
  "description": "Warm and spicy appetizers",
  "categoryId": 1,
  "categoryName": "Appetizers"
}
```

## ProductDto
```json
{
  "id": 1,
  "name": "Chicken Wings",
  "description": "Spicy buffalo chicken wings",
  "price": "12.99",
  "isVeg": false,
  "categoryId": 1,
  "categoryName": "Appetizers",
  "subcategoryId": 1,
  "subcategoryName": "Hot Appetizers",
  "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
  "returnedImg": [Binary data]
}
```

---

# API Testing

## Postman Collection
A Postman collection with all endpoints and example requests is available on request.

## Testing Authentication
1. Register a user via `/api/auth/signup`
2. Login via `/api/auth/login` to get JWT token
3. Use the token in Authorization header for protected endpoints

## Example cURL Commands

### Register User
```bash
curl -X POST http://localhost:8081/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securePassword123"
  }'
```

### Login
```bash
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "securePassword123"
  }'
```

### Create Category (with image)
```bash
curl -X POST http://localhost:8081/api/admin/category \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "name=Appetizers" \
  -F "description=Delicious starters" \
  -F "img=@/path/to/image.jpg"
```

### Get All Categories
```bash
curl -X GET http://localhost:8081/api/admin/getCategories \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

# Changelog

## Version 1.0.0 (2025-09-27)
- Initial API documentation
- Added all authentication endpoints
- Added complete category management APIs
- Added subcategory management APIs  
- Added comprehensive product management APIs
- Added vegetarian/non-vegetarian filtering
- Added example/testing endpoints
- Standardized response format across all APIs
- Added detailed error handling documentation

---

This documentation will be updated as new features are added to the system.