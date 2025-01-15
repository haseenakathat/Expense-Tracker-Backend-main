# Expense Tracker Backend

This is the backend of the **Expense Tracker** app. It is built using **Node.js** and **Express.js**, and it allows users to track their expenses by interacting with a RESTful API.

## Features

- **User Authentication:** Register and log in securely.
- **Expense Management:** Add, edit, delete, and view expenses.
- **Categories for Expenses:** Track expenses by categories like Food, Travel, etc.
- **Database:** Uses MongoDB to store user and expense data.

## Tech Stack

- **Node.js** and **Express.js** for the server-side logic.
- **MongoDB** for database management.
- **JWT** for secure authentication.

## Installation

### Steps:

1. Clone the repo:
   ```bash
   git clone https://github.com/haseenakathat/expense-tracker-backend-main.git
   cd expense-tracker-backend-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for sensitive data:
   ```bash
   touch .env
   ```

   Example `.env` file:
   ```
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Run the server:
   ```bash
   npm start
   ```

   The server will run at `http://localhost:5000`.

## API Endpoints

1. **POST /auth/register** – Register a new user.
2. **POST /auth/login** – Login an existing user.
3. **GET /expenses** – Get all expenses for a user.
4. **POST /expenses** – Add a new expense.
5. **PUT /expenses/:id** – Update an expense.
6. **DELETE /expenses/:id** – Delete an expense.

## License

This project is licensed under the **MIT License**. You can use, modify, and distribute it as long as you include the license.

## Acknowledgments

- Thanks to **Node.js**, **Express.js**, and **MongoDB** for the tools used in this project.
