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
- **Features**: Many features mentioned in the initial planning are not yet implemented.
- **Testing**: Unit and integration tests need to be expanded.
- **Documentation**: API documentation with Swagger/OpenAPI needs to be added.

A restaurant management system built with Spring Boot and Angular. This project is currently in early development and focuses on establishing the core authentication and authorization foundation for future restaurant management features.

## 🌟 Current Features

### ✅ Implemented
- **User Authentication & Authorization**
  - Secure JWT-based authentication
  - User registration and login functionality
  - Role-based access control (Admin, Customer)
  - Password encryption and security

### 🚧 In Development
- **Responsive UI Framework**
  - Angular-based frontend with routing
  - PrimeNG and Ng-Zorro component integration
  - Admin and Customer module structure

### 📋 Planned Features
- **Menu Management**
  - Create, update, and delete menu items
  - Categorize menu items
  - Set pricing and availability

- **Order Processing**
  - Create and manage customer orders
  - Track order status in real-time
  - Generate bills and receipts

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
- **Maven** for dependency management
- **RESTful API** architecture

### Frontend
- **Angular** 19.2
- **PrimeNG** 19.1.3 - UI component library
- **Ng-Zorro** 19.3.1 - Ant Design for Angular
- **RxJS** - Reactive programming
- **Chart.js** 4.5.0 - For future data visualization
- **Bootstrap** 5.3.7 - For responsive design
- **JWT Decode** - Token handling
- **Sass** - Styling

## 📋 Prerequisites

- JDK 21+
- Node.js 18+
- npm 10+
- MySQL 8+
- Maven 3.8+

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
   - Basic routing to admin and customer dashboards (UI structure only)

**Note**: This is an early development version. Most management features are not yet implemented.

## 📊 API Documentation

API documentation will be available once Swagger/OpenAPI is integrated. Currently, the following endpoints are available:

### Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User authentication

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
│   │   │   │       ├── controller/ # REST endpoints (Auth only)
│   │   │   │       ├── dto/        # Data Transfer Objects
│   │   │   │       ├── entity/     # JPA entities (User)
│   │   │   │       ├── enums/      # Enum types (UserRole)
│   │   │   │       ├── exception/  # Exception handling
│   │   │   │       ├── repository/ # Database access (UserRepo)
│   │   │   │       ├── services/   # Business logic (Auth services)
│   │   │   │       └── util/       # Utility classes (JWT)
│   │   │   └── resources/
│   │   │       └── application.properties # App configuration
│   │   └── test/                  # Test cases
│   └── pom.xml                    # Maven dependencies
│
└── Restaurant_FE/                 # Frontend Angular Application
    ├── src/
    │   ├── app/
    │   │   ├── auth/              # Authentication components (Login/Signup)
    │   │   ├── management/        # Admin & Customer modules (Structure only)
    │   │   ├── services/          # API services (Auth & Storage)
    │   │   └── shared/            # Shared modules (NgZorro, PrimeNG)
    │   └── assets/                # Static assets
    ├── angular.json               # Angular configuration
    └── package.json               # NPM dependencies
```

## 🚧 Development Status & Roadmap

### Phase 1: Foundation (Current) ✅
- [x] Project structure setup
- [x] Spring Boot backend with MySQL integration
- [x] Angular frontend with routing
- [x] JWT-based authentication system
- [x] User registration and login
- [x] Basic security configuration

### Phase 2: Core Features (Next)
- [ ] Menu management system
- [ ] Order processing workflow
- [ ] Admin dashboard implementation
- [ ] Customer dashboard implementation
- [ ] API documentation with Swagger

### Phase 3: Advanced Features (Future)
- [ ] Inventory management
- [ ] Reporting and analytics
- [ ] Real-time notifications
- [ ] Payment integration
- [ ] Mobile optimization

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
