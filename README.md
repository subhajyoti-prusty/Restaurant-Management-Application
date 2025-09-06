# Restaurant Management Application

<p align="center">
  <img src="https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Java-21-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Status-In_Development-yellow?style=for-the-badge" alt="Status" />
</p>

## ⚠️ Important Notes

- **Security**: This is a development version. Database credentials are currently hard-coded and should be moved to environment variables before production.
- **Features**: Category management system is fully implemented with both backend and frontend components. Menu item management and order processing features are planned for upcoming phases.
- **Testing**: Unit and integration tests need to be expanded.
- **Documentation**: API documentation with Swagger/OpenAPI needs to be added.

A comprehensive restaurant management system built with Spring Boot and Angular. This project features a complete authentication system and a fully functional category management module, providing a solid foundation for restaurant operations including menu management, order processing, and inventory tracking.

**Current Status**: Core authentication and category management features are complete and production-ready. A standardized API response system has been implemented for consistent client-server communication. The system demonstrates best practices in full-stack development with secure APIs, responsive UI, comprehensive validation, and robust error handling.

## 🌟 Current Features

### ✅ Implemented
- **User Authentication & Authorization**
  - Secure JWT-based authentication
  - User registration and login functionality
  - Role-based access control (Admin, Customer)
  - Password encryption and security
  - JWT authorization for admin endpoints

- **Admin Dashboard Foundation**
  - Admin routing and module structure
  - Dashboard component framework
  - Role-based navigation and access control

- **Complete Category Management System**
  - Category entity with name, description, and image support
  - POST API endpoint for creating categories (`/api/admin/category`)
  - GET API endpoint for retrieving all categories (`/api/admin/getCategories`)
  - Admin service layer for category operations
  - Database integration with MySQL
  - **Frontend Category Management UI**
    - Fully functional Add Category component
    - Reactive form validation with real-time feedback
    - Image upload with preview functionality
    - File validation service for security
    - Input validation for name and description fields
    - Error handling and user notifications
    - Integration with backend category APIs

- **Standardized API Response System**
  - Generic `ApiResponse<T>` wrapper for consistent response format
  - Standardized response structure with status codes, messages, and data
  - ResponseUtil utility for creating consistent API responses
  - Comprehensive error handling with detailed status messages
  - Example controller demonstrating best practices

- **Menu Item Management Foundation**
  - Add Product component structure (Frontend)
  - Product routing and navigation setup
  - Integration with category service for product categorization
  - Prepared infrastructure for menu item CRUD operations

- **Enhanced Error Handling & Validation**
  - Custom exception classes for specific error scenarios
  - Global exception handler for centralized error management
  - File type and size validation
  - Real-time form validation with custom validators
  - Comprehensive error messages and user notifications

- **Responsive UI Framework**
  - Angular-based frontend with routing
  - PrimeNG and Ng-Zorro component integration
  - Admin and Customer module structure
  - Shared modules for consistent UI components
  - Comprehensive UI component library integration

### 🚧 In Development
- **Category Management Enhancements**
  - View all categories functionality (Backend complete, Frontend in progress)
  - Category editing and deletion capabilities
  - Category search and filtering

- **Menu Item Management System**
  - Menu item entity and backend APIs
  - Create, update, and delete menu items
  - Categorize menu items with existing categories
  - Set pricing and availability
  - Menu item UI components (Foundation complete)

### 📋 Planned Features
- **Order Processing System**
  - Create and manage customer orders
  - Track order status in real-time
  - Generate bills and receipts
  - Order history and tracking

- **Enhanced Dashboard Features**
  - Admin analytics dashboard
  - Customer order dashboard
  - Real-time statistics and charts

- **Inventory Management**
  - Track ingredient usage
  - Manage stock levels
  - Low-stock alerts

- **Reporting & Analytics**
  - Sales reports
  - Popular items analysis
  - Revenue tracking

## 🛠️ Tech Stack

### Backend
- **Spring Boot** 3.5.3
- **Java** 21
- **MySQL** Database
- **Spring Security** with JWT authentication
- **Spring Data JPA** for database operations
- **Maven** for dependency management
- **Lombok** for reducing boilerplate code
- **JSON Web Token (JWT)** for secure authentication
- **Apache Commons Lang** for utilities
- **RESTful API** architecture
- **Custom Exception Handling** for better error management
- **File Upload Support** with validation
- **CORS Configuration** for frontend integration

### Frontend
- **Angular** 19.2
- **PrimeNG** 19.1.3 - UI component library
- **Ng-Zorro** 19.3.1 - Ant Design for Angular
- **RxJS** - Reactive programming
- **TypeScript** - Type-safe JavaScript
- **Chart.js** 4.5.0 - For future data visualization
- **Bootstrap** 5.3.7 - For responsive design
- **JWT Decode** - Token handling
- **Sass** - Advanced styling
- **NgX Cookie Service** - Cookie management
- **NgX Editor** - Rich text editing capabilities
- **NgX File Drop** - File upload functionality
- **Reactive Forms** - Angular reactive forms for validation

## 📋 Prerequisites

- **JDK** 21+
- **Node.js** 18+
- **npm** 10+
- **MySQL** 8+
- **Maven** 3.8+
- **Git** for version control

## 💻 Development Environment

This project is optimized for development with:
- **VS Code** with Angular and Java extensions
- **IntelliJ IDEA** for backend development
- **MySQL Workbench** for database management
- **Postman** for API testing (collection available on request)

## ⚙️ Installation & Setup

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/subhajyoti-prusty/Restaurant-Management-Application.git
   cd Restaurant-Management-Application/Restaurant_BE
   ```

2. **Configure MySQL database**
   - Create a database named `restaurant_management_db`
   - Set up database credentials (see [ENVIRONMENT.md](ENVIRONMENT.md) for detailed setup)
   - Either set environment variable `DB_PASSWORD` or update `application.properties`

3. **Build and run the Spring Boot application**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   The backend server will start on `http://localhost:8081`

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd ../Restaurant_FE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the Angular application**
   ```bash
   npm start
   ```
   The frontend application will start on `http://localhost:4200`

## 🚀 Usage

1. Access the application at `http://localhost:4200`
2. Register a new account through the signup page or login with existing credentials
3. Currently available features:
   - User registration and authentication
   - Role-based routing (Admin/Customer dashboards)
   - Admin: Complete category management system
     - Add new categories with images
     - Retrieve all categories (backend ready)
     - Form validation and error handling
     - Real-time input validation
     - Standardized API responses
   - Backend support for comprehensive category operations
   - Standardized error handling and API responses

**Note**: This is an active development version. Category listing UI, menu item management, order processing, and additional category features (edit, delete) are currently in development.

## 📊 API Documentation

API documentation will be available once Swagger/OpenAPI is integrated. Currently, the following endpoints are available:

### Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User authentication

### Admin Endpoints
- `POST /api/admin/category` - Create new food category (JWT required)
  - Supports multipart file upload for category images
  - Input validation for name and description
  - File type and size validation
  - Returns created category with ID and image data
- `GET /api/admin/getCategories` - Retrieve all categories (JWT required)
  - Returns standardized ApiResponse with category list
  - Includes category ID, name, description, and image data

### Standardized API Response Format
All endpoints now return responses in the standardized `ApiResponse<T>` format:
```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Operation completed successfully",
  "data": { ... },
  "timestamp": "2025-09-06T10:30:00",
  "errors": null
}
```

### Example Endpoints (Development/Testing)
- `GET /api/example/success-with-data` - Example successful response with data
- `GET /api/example/success-with-list` - Example successful response with list
- `POST /api/example/create` - Example resource creation
- `GET /api/example/validation-error` - Example validation error response

### File Upload Requirements
- **Supported formats**: JPG, JPEG, PNG, GIF
- **Maximum file size**: 5MB per image
- **Image processing**: Automatic compression and storage
- **Validation**: Real-time client and server-side validation

*More endpoints will be documented as features are implemented.*

## 📁 Project Structure

```
Restaurant-Management-Application/
│
├── Restaurant_BE/                 # Backend Spring Boot Application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/my/restaurant/
│   │   │   │       ├── config/     # Security & CORS configuration
│   │   │   │       ├── controller/ # REST endpoints (Auth, Admin & Example)
│   │   │   │       ├── dto/        # Data Transfer Objects (ApiResponse, CategoryDto, UserDto)
│   │   │   │       ├── entity/     # JPA entities (User, Category)
│   │   │   │       ├── enums/      # Enum types (UserRole)
│   │   │   │       ├── exception/  # Exception handling & Global exception handler
│   │   │   │       ├── repository/ # Database access (User & Category repos)
│   │   │   │       ├── services/   # Business logic (Auth & Admin services)
│   │   │   │       └── util/       # Utility classes (JWT, ResponseUtil)
│   │   │   └── resources/
│   │   │       └── application.properties # App configuration
│   │   └── test/                  # Test cases
│   └── pom.xml                    # Maven dependencies
│
└── Restaurant_FE/                 # Frontend Angular Application
    ├── src/
    │   ├── app/
    │   │   ├── auth/              # Authentication components (Login/Signup)
    │   │   ├── management/        # Admin & Customer modules
    │   │   │   ├── admin/         # Admin dashboard & category management
    │   │   │   │   ├── components/
    │   │   │   │   │   ├── add-category/  # Complete category creation UI
    │   │   │   │   │   ├── add-product/   # Menu item management foundation
    │   │   │   │   │   └── dashboard/     # Admin dashboard (basic)
    │   │   │   │   └── services/  # Admin-specific services (with category APIs)
    │   │   │   └── customer/      # Customer dashboard (structure)
    │   │   ├── services/          # API services (Auth, Storage, File Validation)
    │   │   └── shared/            # Shared modules (NgZorro, PrimeNG) & Interfaces
    │   └── assets/                # Static assets
    ├── angular.json               # Angular configuration
    └── package.json               # NPM dependencies

## 🔧 Troubleshooting

### Common Issues

1. **Port conflicts**: Backend runs on 8081, Frontend on 4200
2. **Database connection**: Ensure MySQL is running and credentials are correct
3. **CORS issues**: Check CORS configuration in backend if API calls fail
4. **JWT token expiration**: Tokens expire after 24 hours, re-login required

### Getting Help

- Check the [ENVIRONMENT.md](ENVIRONMENT.md) file for detailed setup instructions
- Ensure all prerequisites are installed with correct versions
- For database issues, verify MySQL service is running
- For frontend issues, clear npm cache: `npm cache clean --force`
```

## 🚧 Development Status & Roadmap

### Phase 1: Foundation ✅
- [x] Project structure setup
- [x] Spring Boot backend with MySQL integration
- [x] Angular frontend with routing
- [x] JWT-based authentication system
- [x] User registration and login
- [x] Basic security configuration
- [x] Role-based access control
- [x] Category entity and backend API
- [x] Admin controller with JWT authorization

### Phase 2: Core Features (In Progress)
- [x] Complete category management system (Frontend & Backend)
- [x] Category form validation and file upload
- [x] Category management UI with reactive forms
- [x] Standardized API response system with ApiResponse wrapper
- [x] Enhanced error handling and custom exceptions
- [x] Category retrieval API endpoint
- [x] Menu item management foundation (Frontend structure)
- [ ] Category listing, editing, and deletion UI components
- [ ] Complete menu item management system
- [ ] Order processing workflow
- [ ] Enhanced admin dashboard with analytics
- [ ] Customer dashboard implementation
- [ ] API documentation with Swagger

### Phase 3: Advanced Features (Future)
- [ ] Inventory management
- [ ] Reporting and analytics
- [ ] Real-time notifications
- [ ] Payment integration
- [ ] Mobile optimization

## Recent Updates (Development Branch)
- **Standardized API Response System**: Implemented generic `ApiResponse<T>` wrapper with ResponseUtil for consistent API responses
- **Enhanced Category Management**: Added GET endpoint for retrieving all categories with standardized response format
- **Menu Item Management Foundation**: Created Add Product component structure and routing for future menu item features
- **Advanced Error Handling**: Comprehensive exception handling with custom exception classes and global exception handler
- **Example Controller**: Added development/testing endpoints demonstrating API response best practices
- **File Upload & Validation Enhancements**: Improved file validation with detailed error handling
- **UI Component Integration**: Enhanced PrimeNG and Ng-Zorro component integration for better user experience
- **Type Safety Improvements**: Added comprehensive TypeScript interfaces for API responses and data models

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Subhajyoti Prusty - [GitHub](https://github.com/subhajyoti-prusty)

Project Link: [https://github.com/subhajyoti-prusty/Restaurant-Management-Application](https://github.com/subhajyoti-prusty/Restaurant-Management-Application)
