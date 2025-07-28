# Restaurant Management Application

<p align="center">
  <img src="https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Java-21-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
</p>

A comprehensive restaurant management system built with Spring Boot and Angular, designed to streamline restaurant operations including order management, menu management, inventory tracking, and customer relationship management.

## 🌟 Features

- **User Authentication & Authorization**
  - Secure login and signup functionality
  - Role-based access control (Admin, Staff, Customer)
  - JWT token-based authentication

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

- **Responsive UI**
  - Modern interface built with Angular
  - PrimeNG and Ng-Zorro components
  - Mobile-friendly design

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
- **Chart.js** - For data visualization
- **Bootstrap** 5.3 - For responsive design

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
   - Update `src/main/resources/application.properties` with your database credentials if needed

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
2. Login with the following default credentials:
   - **Admin:** admin@restaurant.com / admin123
   - **Staff:** staff@restaurant.com / staff123
   - **Customer:** Register a new account through the signup page

## 📊 API Documentation

The API documentation is available at `http://localhost:8081/swagger-ui.html` once the backend server is running.

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
│   │   │   │       ├── controller/ # REST endpoints
│   │   │   │       ├── dto/        # Data Transfer Objects
│   │   │   │       ├── entity/     # JPA entities
│   │   │   │       ├── enums/      # Enum types
│   │   │   │       ├── repository/ # Database access
│   │   │   │       ├── services/   # Business logic
│   │   │   │       └── util/       # Utility classes
│   │   │   └── resources/
│   │   │       └── application.properties # App configuration
│   │   └── test/                  # Test cases
│   └── pom.xml                    # Maven dependencies
│
└── Restaurant_FE/                 # Frontend Angular Application
    ├── src/
    │   ├── app/
    │   │   ├── auth/              # Authentication components
    │   │   ├── services/          # API services
    │   │   └── shared/            # Shared modules & components
    │   └── assets/                # Static assets
    ├── angular.json               # Angular configuration
    └── package.json               # NPM dependencies
```

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
