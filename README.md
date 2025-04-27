# Clean Architecture Project

This repository implements a **Clean Architecture** solution, combining a robust backend built with .NET and a modern frontend developed using Next.js. The project is designed to be scalable, maintainable, and adaptable to evolving business needs.

## Project Structure

The repository is organized into the following key components:

- **Backend** ([CleanArchitecture.API](CleanArchitecture.API/)):

  - Built with .NET 8.0.
  - Implements RESTful APIs for seamless client-server communication.
  - Includes configuration files like `appsettings.json` for environment-specific settings.

- **Application Layer** ([CleanArchitecture.Application](CleanArchitecture.Application/)):

  - Contains business logic and application-specific rules.
  - Follows Clean Architecture principles for separation of concerns.

- **Core Layer** ([CleanArchitecture.Core](CleanArchitecture.Core/)):

  - Defines domain entities and core business rules.

- **Infrastructure Layer** ([CleanArchitecture.Infrastructure](CleanArchitecture.Infrastructure/)):

  - Handles data persistence and external integrations.

- **Frontend** ([user-management-nextjs](user-management-nextjs/)):
  - Built with Next.js for a modern, responsive user interface.
  - Deployed on Vercel for global scalability and performance.

## Features

- **Clean Architecture**: Ensures a modular, maintainable codebase with clear separation of concerns.
- **Scalability**: Designed to handle growing user demands and feature expansions.
- **Cross-Platform**: Combines .NET for backend reliability and Next.js for frontend flexibility.
- **CI/CD Integration**: Automated workflows for building, testing, and deploying the application.

## Getting Started

### Backend

1. Navigate to the `CleanArchitecture.API` directory.
2. Restore dependencies and run the application:
   ```bash
   dotnet restore
   dotnet run
   ```
3. Access the API at http://localhost:5000.

### Frontend

1. Navigate to the `user-management-nextjs` directory.
2. Install dependencies and start the development server:

   ```bash
   npm install
   npm run dev

   ```

3. Open http://localhost:3000 in your browser

### Deployment

- **Backend**: Can be hosted on any cloud platform supporting .NET (e.g., Azure, AWS, or Dockerized environments).
- **Frontend**: Deployed on [Vercel](https://vercel.com/) for fast, reliable delivery.

### Learn More

- [Clean Architecture Principles](https://github.com/ardalis/cleanarchitecture)
- [Next.js Documentation](https://nextjs.org/docs)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/)

### Contributing

Contributions are welcome! Please submit a pull request or open an issue for discussion.
