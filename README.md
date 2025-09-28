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

A comprehensive restaurant management system built with Spring Boot and Angular. This project features a complete authentication system, full-stack category and product management, hierarchical menu structure with vegetarian classification, and 29 fully documented REST API endpoints.

**Current Status**: Core restaurant management features are complete and production-ready. The system includes comprehensive category management, advanced product management with vegetarian/non-vegetarian classification, hierarchical subcategory structure, and a standardized API response system. Demonstrates best practices in full-stack development with secure APIs, responsive UI, comprehensive validation, robust error handling, and complete API documentation.

## 🌟 Current Features

### ✅ Implemented
- **User Authentication & Authorization**
  - Secure JWT-based authentication
  - User registration and login functionality
  - Role-based access control (Admin, Customer)
  - Password encryption and security
  - JWT authorization for admin endpoints
  - 24-hour token expiration with proper error handling

- **Admin Dashboard Foundation**
  - Admin routing and module structure
  - Dashboard component framework
  - Role-based navigation and access control
  - Comprehensive admin service integration

- **Complete Category Management System**
  - Full CRUD operations (Create, Read, Update, Delete)
  - Category entity with name, description, and image support
  - Image upload with preview and validation (max 5MB, JPG/PNG/GIF)
  - Search categories by name functionality
  - **Frontend Category Management UI** (Complete)
    - Fully functional Add Category component
    - View all categories with image display
    - Reactive form validation with real-time feedback
    - File validation service for security
    - Error handling and user notifications
    - Integration with all backend category APIs

- **Complete Subcategory Management System**
  - Full CRUD operations for subcategories under categories
  - Category-subcategory relationship management
  - Search subcategories by name
  - Public endpoints for customer access
  - Admin-only management endpoints
  - Hierarchical category structure support

- **Advanced Product Management System**
  - Full CRUD operations for products
  - **Vegetarian/Non-Vegetarian Classification** with `isVeg` field
  - Product-category-subcategory relationships
  - Image upload support for products
  - Price management and validation
  - **Advanced Filtering Capabilities**:
    - Filter by vegetarian/non-vegetarian status
    - Filter by category and vegetarian status
    - Filter by subcategory and vegetarian status
    - Search products by name
  - **Frontend Product Management UI** (Complete)
    - Add Product component with category/subcategory selection
    - View Product component with hierarchical display
    - Product editing and deletion capabilities
    - Form validation with price and vegetarian status
    - Integration with all backend product APIs

- **Hierarchical Menu Structure**
  - Three-level hierarchy: Categories → Subcategories → Products
  - Lazy loading for optimal performance
  - Expandable/collapsible interface
  - Real-time product counting per subcategory
  - Dynamic category and subcategory selection

- **Standardized API Response System**
  - Generic `ApiResponse<T>` wrapper for consistent response format
  - Standardized response structure with status codes, messages, and data
  - ResponseUtil utility for creating consistent API responses
  - Comprehensive error handling with detailed status messages
  - 29 fully documented API endpoints

- **Enhanced Error Handling & Validation**
  - Custom exception classes for specific error scenarios
  - Global exception handler for centralized error management
  - File type and size validation with security checks
  - Real-time form validation with custom validators
  - Comprehensive error messages and user notifications
  - Input sanitization and security validation

- **Responsive UI Framework**
  - Angular-based frontend with advanced routing
  - PrimeNG and Ng-Zorro component integration
  - Admin and Customer module structure with lazy loading
  - Shared modules for consistent UI components
  - Material Design principles with custom theming
  - Mobile-responsive design patterns

### 🚧 In Development
- **Enhanced Dashboard Analytics**
  - Admin analytics dashboard with charts
  - Product statistics and category insights
  - Real-time data visualization

- **Customer Menu Interface**
  - Public menu browsing interface
  - Category and product filtering for customers
  - Product search and dietary preference filtering

### 📋 Planned Features
- **Order Processing System**
  - Create and manage customer orders
  - Shopping cart functionality
  - Order status tracking in real-time
  - Generate bills and receipts
  - Order history and management

- **Enhanced Dashboard Features**
  - Advanced admin analytics with charts
  - Customer order dashboard
  - Real-time statistics and reports
  - Revenue and sales tracking

- **Inventory Management**
  - Track ingredient usage and stock levels
  - Low-stock alerts and notifications
  - Supplier management
  - Cost analysis and profit margins

- **Customer Features**
  - Customer profiles and preferences
  - Order history and favorites
  - Rating and review system
  - Loyalty program integration

- **Advanced Reporting & Analytics**
  - Comprehensive sales reports
  - Popular items and trend analysis
  - Revenue tracking and forecasting
  - Customer behavior analytics

- **System Enhancements**
  - Email notifications for orders
  - SMS integration for notifications
  - Payment gateway integration
  - Multi-language support

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
3. **Current Features Available:**

### For Admin Users:
- **Complete Category Management:**
  - Create categories with image upload and validation
  - View all categories in a responsive grid layout
  - Search categories by name
  - Edit and update category details and images
  - Delete categories with confirmation

- **Advanced Subcategory Management:**
  - Create subcategories under specific categories
  - View and manage subcategory hierarchies
  - Edit and delete subcategories
  - Search subcategories by name

- **Comprehensive Product Management:**
  - Create products with category/subcategory assignment
  - Vegetarian/Non-vegetarian classification
  - Upload product images with validation
  - Set pricing and detailed descriptions
  - View products in hierarchical structure (Categories → Subcategories → Products)
  - Filter products by dietary preferences (vegetarian/non-vegetarian)
  - Search products by name
  - Edit and update product details
  - Delete products with confirmation

- **Advanced Filtering and Search:**
  - Filter products by category and dietary preferences
  - Filter products by subcategory and dietary preferences
  - Real-time search across categories, subcategories, and products
  - Hierarchical navigation with expandable sections

- **Dashboard Features:**
  - Centralized admin dashboard
  - Quick access to all management modules
  - Statistics and overview (foundation ready)

### System Features:
- **Secure Authentication:** JWT-based login with role-based access control
- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Real-time Validation:** Form validation with instant feedback
- **Image Upload:** Support for JPG, PNG, GIF files up to 5MB
- **Error Handling:** Comprehensive error messages and notifications
- **API Integration:** 29 REST endpoints for complete system management

### For Developers:
- **Complete API Documentation:** See [API_Documentation.md](API_Documentation.md)
- **Standardized Response Format:** All APIs return consistent `ApiResponse<T>` format
- **Testing Endpoints:** Development endpoints for API testing and validation
- **cURL Examples:** Ready-to-use command line examples for all endpoints

**Note**: Customer interface, order processing, and inventory management features are planned for upcoming releases. The current system provides a complete foundation for restaurant menu management with advanced categorization and product classification.

## 📊 API Documentation

**Complete API Documentation**: See [API_Documentation.md](API_Documentation.md) for comprehensive API documentation including:
- All 29 REST API endpoints with detailed specifications
- Request/response examples for every endpoint
- Authentication and authorization details
- Error handling and status codes
- Data models and schemas
- Testing examples with cURL commands
- Postman collection information

### Quick API Reference

#### Authentication APIs
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User authentication with JWT

#### Category Management APIs (Admin Only)
- `POST /api/admin/category` - Create category with image upload
- `GET /api/admin/getCategories` - Get all categories
- `GET /api/admin/searchCategories/{title}` - Search categories
- `GET /api/admin/category/{categoryId}` - Get category by ID
- `PUT /api/admin/category/{categoryId}` - Update category
- `DELETE /api/admin/category/{categoryId}` - Delete category

#### Subcategory Management APIs (Admin Only)
- `POST /api/subcategories/create` - Create subcategory
- `GET /api/subcategories/all` - Get all subcategories
- `GET /api/subcategories/by-category/{categoryId}` - Get subcategories by category
- `PUT /api/subcategories/update/{subcategoryId}` - Update subcategory
- `DELETE /api/subcategories/delete/{subcategoryId}` - Delete subcategory

#### Product Management APIs (Admin Only)
- `POST /api/admin/{categoryId}/product` - Create product with veg/non-veg classification
- `GET /api/admin/getProducts` - Get all products
- `GET /api/admin/searchProducts/{title}` - Search products
- `GET /api/admin/products/subcategory/{subcategoryId}` - Get products by subcategory
- `GET /api/admin/products/veg/{isVeg}` - Filter products by vegetarian status
- `PUT /api/admin/product/{productId}` - Update product
- `DELETE /api/admin/product/{productId}` - Delete product

### Recent API Updates
- **✅ Product Vegetarian Classification**: Added `isVeg` field to products with filtering APIs
- **✅ Subcategory Management**: Complete CRUD operations for subcategories
- **✅ Enhanced Product APIs**: Support for category and subcategory associations
- **✅ Standardized Response Format**: All APIs now use consistent `ApiResponse<T>` wrapper
- **✅ Advanced Filtering**: Products can be filtered by category, subcategory, and vegetarian status
- **✅ Image Upload Support**: Categories and products support image upload with validation

### API Features
- **JWT Authentication**: Secure token-based authentication for protected endpoints
- **File Upload Support**: Image upload for categories and products (max 5MB, JPG/PNG/GIF)
- **Input Validation**: Comprehensive server-side validation with detailed error messages
- **Error Handling**: Standardized error responses with proper HTTP status codes
- **CORS Configuration**: Configured for frontend integration

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

### Phase 1: Foundation ✅ COMPLETED
- [x] Project structure setup
- [x] Spring Boot backend with MySQL integration
- [x] Angular frontend with routing
- [x] JWT-based authentication system
- [x] User registration and login
- [x] Basic security configuration
- [x] Role-based access control
- [x] Standardized API response system with ApiResponse wrapper

### Phase 2: Core Management Features ✅ COMPLETED
- [x] **Complete Category Management System**
  - [x] Backend APIs (Create, Read, Update, Delete, Search)
  - [x] Frontend UI components with full functionality
  - [x] Image upload and validation
  - [x] Form validation and error handling

- [x] **Complete Subcategory Management System**
  - [x] Backend APIs with category relationships
  - [x] CRUD operations and search functionality
  - [x] Public and admin endpoints
  - [x] Hierarchical structure support

- [x] **Advanced Product Management System**
  - [x] Backend APIs with full CRUD operations
  - [x] Vegetarian/Non-vegetarian classification with `isVeg` field
  - [x] Advanced filtering by category, subcategory, and dietary preferences
  - [x] Frontend UI with hierarchical product view
  - [x] Product creation, editing, and deletion interfaces
  - [x] Image upload and price validation

- [x] **Comprehensive API Documentation**
  - [x] 29 fully documented REST endpoints
  - [x] Request/response examples for all APIs
  - [x] Error handling documentation
  - [x] Authentication and authorization guide

### Phase 3: Enhanced Features (In Progress)
- [ ] **Advanced Dashboard Analytics**
  - [ ] Admin analytics with charts and statistics
  - [ ] Product performance metrics
  - [ ] Category and subcategory insights
  - [ ] Revenue tracking dashboard

- [ ] **Customer Interface Enhancements**
  - [ ] Public menu browsing interface
  - [ ] Advanced filtering for customers (vegetarian, category, price)
  - [ ] Product search and recommendation system
  - [ ] Mobile-optimized menu interface

- [ ] **System Optimizations**
  - [ ] Database indexing for performance
  - [ ] Caching mechanisms for frequently accessed data
  - [ ] Image compression and optimization
  - [ ] API rate limiting and security enhancements

### Phase 4: Advanced Features (Planned)
- [ ] **Order Processing System**
  - [ ] Shopping cart functionality
  - [ ] Order creation and management
  - [ ] Order status tracking
  - [ ] Receipt generation

- [ ] **Customer Management**
  - [ ] Customer profiles and preferences
  - [ ] Order history tracking
  - [ ] Loyalty program integration
  - [ ] Rating and review system

- [ ] **Advanced Analytics & Reporting**
  - [ ] Sales reports and trends
  - [ ] Popular items analysis
  - [ ] Customer behavior analytics
  - [ ] Inventory tracking and management

### Phase 5: Production & Scaling (Future)
- [ ] **Production Deployment**
  - [ ] Environment configuration management
  - [ ] Docker containerization
  - [ ] CI/CD pipeline setup
  - [ ] Production database configuration

- [ ] **Integration & Extensions**
  - [ ] Payment gateway integration
  - [ ] Email notification system
  - [ ] SMS notifications
  - [ ] Third-party service integrations

## Current Status Summary
- **Backend**: ✅ Production-ready with 29 API endpoints
- **Database**: ✅ Complete schema with relationships
- **Frontend**: ✅ Full admin interface with responsive design
- **Authentication**: ✅ Secure JWT-based system
- **Documentation**: ✅ Comprehensive API and setup documentation
- **Testing**: ✅ Build validation and error handling tested

**Overall Progress**: ~75% of core restaurant management features completed

## Recent Updates (Development Branch)
- **🆕 Complete Product Management System**: Implemented full CRUD operations for products with vegetarian/non-vegetarian classification
- **🆕 Advanced Product Filtering**: Added 8+ new API endpoints for filtering products by category, subcategory, and dietary preferences
- **🆕 Hierarchical Menu Structure**: Three-level hierarchy (Categories → Subcategories → Products) with lazy loading
- **🆕 Complete Subcategory Management**: Full CRUD operations with category relationships and search functionality
- **🆕 Comprehensive API Documentation**: 29 fully documented endpoints in [API_Documentation.md](API_Documentation.md)
- **🆕 Enhanced Frontend UI**: Complete product management interface with hierarchical display and advanced form validation
- **✅ Vegetarian Classification System**: Products now include `isVeg` field with database migration and API support
- **✅ Advanced Error Handling**: Comprehensive exception handling with custom exception classes and global exception handler
- **✅ File Upload & Validation Enhancements**: Improved file validation with detailed error handling and security checks
- **✅ UI Component Integration**: Enhanced PrimeNG and Ng-Zorro component integration for better user experience
- **✅ Type Safety Improvements**: Added comprehensive TypeScript interfaces for API responses and data models
- **✅ Database Schema Optimization**: Added indexes and constraints for better performance

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
