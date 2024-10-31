Here’s a complete and professional README for your GitHub project, including the `git clone` command and all relevant API endpoints. 

```markdown
# AdigitX Backend Server for Blog Page

## Overview

**AdigitX** is a robust RESTful API built with Node.js, Express, and Prisma, designed to manage a blogging platform. This API supports user authentication, blog management, tagging functionalities, and provides a user-friendly interface for interaction.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [User Authentication](#user-authentication)
  - [User Profile Management](#user-profile-management)
  - [Blog Management](#blog-management)
  - [Tag Management](#tag-management)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and secure authentication
- Create, retrieve, update, and delete blogs
- Tagging system for effective blog categorization
- Search functionality to find blogs by title, content, or tags
- User profile management for personalized experience

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming
- **Express**: Fast web framework for building APIs
- **Prisma**: ORM for managing database interactions
- **MySQL**: Relational database management system
- **JWT (JSON Web Tokens)**: Secure user authentication
- **Bcrypt.js**: Password hashing for enhanced security
- **dotenv**: Environment variable management

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Adi-gitX/AdigitX-backendServerblogpage.git
   cd AdigitX-backendServerblogpage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and set the necessary environment variables:
   ```plaintext
   JWT_SECRET=your_jwt_secret
   DATABASE_URL=mysql://user:password@localhost:3306/yourdb
   ```

4. **Run the database migrations**:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the server**:
   ```bash
   npm start
   ```

## Environment Variables

| Variable       | Description                             |
|----------------|-----------------------------------------|
| `JWT_SECRET`   | Secret key for JWT signing              |
| `DATABASE_URL` | Connection string for the MySQL database|

## API Endpoints

### User Authentication

| Method | Endpoint        | Description                          |
|--------|------------------|--------------------------------------|
| `POST` | `/api/register`   | Register a new user                  |
| `POST` | `/api/login`      | Authenticate user and receive a token|

### User Profile Management

| Method | Endpoint         | Description                          |
|--------|------------------|--------------------------------------|
| `GET`  | `/api/profile`    | Get user profile information          |
| `PUT`  | `/api/profile`    | Update user profile information       |

### Blog Management

| Method | Endpoint              | Description                               |
|--------|-----------------------|-------------------------------------------|
| `POST` | `/api/blogs`          | Create a new blog                         |
| `GET`  | `/api/blogs`          | Get all blogs (supports pagination)      |
| `GET`  | `/api/blogs/:id`      | Get a specific blog by ID                 |
| `PUT`  | `/api/blogs/:id`      | Update a specific blog by ID              |
| `DELETE` | `/api/blogs/:id`    | Soft delete a specific blog by ID         |

### Tag Management

| Method | Endpoint              | Description                                |
|--------|-----------------------|--------------------------------------------|
| `POST` | `/api/tags`           | Create a new tag                           |
| `GET`  | `/api/tags`           | Get all tags                               |
| `GET`  | `/api/tags/:id`       | Get a specific tag by ID                   |
| `DELETE` | `/api/tags/:id`     | Delete a specific tag by ID                |

## Usage Examples

### Register a User

```http
POST /api/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login a User

```http
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create a Blog

```http
POST /api/blogs
Authorization: Bearer your_jwt_token
Content-Type: application/json

{
  "title": "My First Blog",
  "content": "This is the content of my first blog.",
  "author": "John Doe",
  "category": "General",
  "tags": ["introduction", "welcome"]
}
```

### Get User Profile

```http
GET /api/profile
Authorization: Bearer your_jwt_token
```

## Contributing

We welcome contributions to **AdigitX**! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Features of the Updated README

1. **Clarity**: The structure is clear and professional, making it easy for users to navigate and understand the project.
2. **API Endpoints**: All endpoints are listed with descriptions, making it easy for developers to know how to interact with the API.
3. **Installation Instructions**: Clear step-by-step instructions for setting up the project locally, including the `git clone` command.
4. **Environment Variables**: A table is provided for clarity on necessary environment variables.
5. **Usage Examples**: Realistic examples for registering, logging in, creating blogs, and retrieving user profiles.
6. **Contributing Section**: Encourages collaboration and outlines how others can contribute to the project.

This README will help potential users and contributors understand and utilize your API effectively.
