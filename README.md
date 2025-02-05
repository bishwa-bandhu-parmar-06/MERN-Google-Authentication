# Google and MERN Authentication System

## Live Link
[Google and MERN Authentication System](https://mern-google-authentication.onrender.com/)

## Overview
This project is a **Google and MERN Authentication System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It includes traditional email/password authentication, OTP-based authentication, password reset, and Google authentication.

## Features
- **User Registration & Login**
- **JWT Authentication & Authorization**
- **OTP Verification for Login**
- **Forgot Password with OTP Reset**
- **Google OAuth Login**
- **Role-Based Access Control (RBAC)**
- **User Management API**

## Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/mern-google-authentication.git](https://github.com/bishwa-bandhu-parmar-06/MERN-Google-Authentication.git)
   cd mern-google-authentication
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following environment variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     ```

4. Start the server:
   ```bash
   npm start
   ```

## API Routes

### Authentication Routes
- `POST /register` → Register a new user
- `POST /login` → Login user
- `POST /google-login` → Google OAuth Login

### OTP-Based Authentication
- `POST /send-otp` → Generate and send OTP
- `POST /verify-otp` → Verify OTP and login

### Password Recovery
- `POST /forgot-password` → Send OTP to reset password
- `POST /verify-reset-otp` → Verify OTP for password reset
- `POST /reset-password` → Reset user password

### User Management
- `GET /get-users` → Get all users (Protected, requires authentication)
- `GET /get-current-user` → Get details of the logged-in user (Protected)
- `POST /logout` → Logout user

## Technologies Used
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
- **Frontend:** React.js
- **Authentication:** Passport.js (Google OAuth), JWT, OTP
- **Deployment:** Render.com

## Live Demo
Check out the live version: [Google and MERN Authentication System](https://mern-google-authentication.onrender.com/)

## Contributing
Feel free to fork this repository and contribute. PRs are welcome!

## License
This project is licensed under the MIT License.

