# Environment Configuration

## Database Setup

1. Create a MySQL database named `restaurant_management_db`
2. Set the database password either by:
   - Setting environment variable: `DB_PASSWORD=your_actual_password`
   - Or updating the `application.properties` file directly (not recommended for production)

## Environment Variables

For production deployment, consider using the following environment variables:

```bash
DB_PASSWORD=your_database_password
JWT_SECRET=your_jwt_secret_key
SERVER_PORT=8081
```

## Development Setup

For local development, you can either:
1. Set environment variables in your IDE
2. Create an `application-local.properties` file (add to .gitignore)
3. Update the default values in `application.properties` temporarily

## Security Notes

- Never commit sensitive information like passwords to version control
- Use strong, unique passwords for database access
- Consider using encrypted property sources for production
