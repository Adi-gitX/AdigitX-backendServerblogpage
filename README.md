
---

# AdigitX Backend Server for Blog Page

**AdigitX** is a robust RESTful API built with Node.js, Express, and Prisma, designed to manage a blogging platform. This API supports user authentication, blog management, tagging functionalities, and provides a user-friendly interface for interaction.

## Table of Contents

- Features
- Technologies Used
- Installation
- Environment Variables
- API Endpoints
  - User Authentication
  - User Profile Management
  - Blog Management
  - Tag Management
- Usage Examples
- Contributing
- License

## Features

- User registration and secure authentication
- Create, retrieve, update, and delete blogs
- Tagging system for effective blog categorization
- Search functionality to find blogs by title, content, or tags
- User profile management for personalized experience

## Technologies Used

- Node.js
- Express
- Prisma
- MySQL
- JWT (JSON Web Tokens)
- Bcrypt.js
- dotenv

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```
   git clone https://github.com/Adi-gitX/AdigitX-backendServerblogpage.git
   cd AdigitX-backendServerblogpage
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Create a `.env` file** in the root directory and set the necessary environment variables:
   ```
   JWT_SECRET=your_jwt_secret
   DATABASE_URL=mysql://user:password@localhost:3306/yourdb
   ```

4. **Run the database migrations**:
   ```
   npx prisma migrate dev --name init
   ```

5. **Start the server**:
   ```
   npm start
   ```

## Environment Variables

| Variable       | Description                             |
|----------------|-----------------------------------------|
| JWT_SECRET     | Secret key for JWT signing              |
| DATABASE_URL   | Connection string for the MySQL database|

## API Endpoints

### User Authentication

- **POST** `/api/register`: Register a new user
- **POST** `/api/login`: Authenticate user and receive a token

### User Profile Management

- **GET** `/api/profile`: Get user profile information
- **PUT** `/api/profile`: Update user profile information

### Blog Management

- **POST** `/api/blogs`: Create a new blog
- **GET** `/api/blogs`: Get all blogs (supports pagination)
- **GET** `/api/blogs/:id`: Get a specific blog by ID
- **PUT** `/api/blogs/:id`: Update a specific blog by ID
- **DELETE** `/api/blogs/:id`: Soft delete a specific blog by ID

### Tag Management

- **POST** `/api/tags`: Create a new tag
- **GET** `/api/tags`: Get all tags
- **GET** `/api/tags/:id`: Get a specific tag by ID
- **DELETE** `/api/tags/:id`: Delete a specific tag by ID

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

This project is licensed under the MIT License - see the LICENSE file for details.

---

### Summary of Changes
- Enhanced structure for improved readability and organization.
- Used tables for environment variables for clarity.
- Clearly delineated API endpoints by category for better navigation.
- Expanded usage examples for comprehensive understanding.
- Clear instructions for contributing to foster community engagement.


