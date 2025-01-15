# Expense Tracker Backend

This is the backend part of the **Expense Tracker** application, a simple app to manage and track your expenses. The backend is built using Node.js and Express, providing a RESTful API to interact with the frontend.

## Features

- **User Authentication:** Secure login and registration for users.
- **Expense Management:** Add, update, delete, and view expenses.
- **Categories for Expenses:** Organize expenses into various categories like food, travel, etc.
- **Database Integration:** Uses MongoDB to store user and expense data.
- **RESTful API:** All backend functionality is exposed through a RESTful API.

## Tech Stack

- **Node.js:** Server-side JavaScript environment.
- **Express.js:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing data.
- **Mongoose:** ODM library for MongoDB.
- **JWT:** JSON Web Tokens for secure authentication.

## Project Structure

```
expense-tracker-backend-main/
│
├── config/                # Configuration files (database, environment variables)
├── controllers/           # Express route controllers for handling business logic
├── models/                # Mongoose models for data structure
├── routes/                # Express route definitions
├── middleware/            # Middleware functions (e.g., for authentication)
├── server.js              # Entry point for the backend server
├── .gitignore             # Git ignore file to avoid pushing unnecessary files
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
```

## Installation

### Prerequisites
- **Node.js** (version 14 or later)
- **MongoDB** (local or remote database)

### Steps to Set Up

1. **Clone the repository:**
   ```bash
   git clone https://github.com/haseenakathat/expense-tracker-backend-main.git
   cd expense-tracker-backend-main
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** to store sensitive environment variables such as database URI and JWT secret:
   ```bash
   touch .env
   ```

   Example of `.env` file:
   ```plaintext
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Run the server locally:**
   ```bash
   npm start
   ```

   The server will now be running on `http://localhost:5000`.

## API Endpoints

### 1. **POST /auth/register**
   - Register a new user.
   - **Body:**
     ```json
     {
       "username": "user123",
       "email": "user@example.com",
       "password": "securepassword"
     }
     ```

### 2. **POST /auth/login**
   - Login for existing users.
   - **Body:**
     ```json
     {
       "email": "user@example.com",
       "password": "securepassword"
     }
     ```

### 3. **GET /expenses**
   - Get all expenses of the authenticated user.
   - **Authorization**: Bearer Token

### 4. **POST /expenses**
   - Add a new expense.
   - **Body:**
     ```json
     {
       "category": "Food",
       "amount": 20,
       "description": "Lunch"
     }
     ```

### 5. **PUT /expenses/:id**
   - Update an existing expense by its ID.

### 6. **DELETE /expenses/:id**
   - Delete an expense by its ID.

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-xyz`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Node.js** and **Express.js** for building the backend.
- **MongoDB** for data storage.
- **JWT** for secure user authentication.
