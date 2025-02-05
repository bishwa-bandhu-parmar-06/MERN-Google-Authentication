# Google and MERN Authentication System

## Introduction
This is a user authentication system built using the MERN stack (MongoDB, Express.js, React, Node.js) with support for Google authentication. It includes features like user registration, login, OTP-based authentication, password reset, and role-based access control.

## Features
- User Registration and Login
- OTP-based Authentication
- Password Reset with OTP Verification
- Google Authentication
- Middleware-based User Authentication
- Protected Routes

## Installation

1. Clone the repository:
   ```sh
   git clone [https://github.com/your-repo-url.git](https://github.com/bishwa-bandhu-parmar-06/MERN-Google-Authentication.git)
   cd google-mern-auth
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (`.env` file):
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Routes

### Authentication Routes

| Method | Endpoint            | Description |
|--------|---------------------|-------------|
| POST   | `/register`         | Register a new user |
| POST   | `/login`            | Login user |
| POST   | `/send-otp`         | Send OTP for authentication |
| POST   | `/verify-otp`       | Verify OTP and login |
| POST   | `/forgot-password`  | Send OTP to email for password reset |
| POST   | `/verify-reset-otp` | Verify reset OTP |
| POST   | `/reset-password`   | Reset user password |
| POST   | `/google-login`     | Authenticate using Google OAuth |
| POST   | `/logout`           | Logout user |

### User Routes

| Method | Endpoint               | Description |
|--------|------------------------|-------------|
| GET    | `/get-users`           | Get all users (protected) |
| GET    | `/get-current-user`    | Get current logged-in user (protected) |

## Middleware
- `userAuth`: Middleware to protect routes requiring authentication.

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, Google OAuth, OTP-based authentication

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes (`git commit -m 'Added a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

---

Feel free to contribute and enhance this authentication system! 🚀

