---

# File Upload Form Project

This project demonstrates a simple file upload form built with React and TypeScript on the frontend and an Express.js server with MongoDB on the backend.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Structure

```
FileUploadFormProject
│
├── backend
│   ├── models
│   │   └── User.js
│   ├── uploads
│   ├── index.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── FileUploadForm.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public
│   ├── package.json
│   ├── tsconfig.json
│   └── .gitignore
│
└── README.md
```

## Features

- Upload a file along with user details (name, address, email).
- Store the uploaded file on the server and user details along with file path in MongoDB.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.
- React development environment setup.

## Installation

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Backend

1. Start the MongoDB server.

2. Run the backend server:
   ```bash
   npm start
   ```

   The backend server will start at `http://localhost:3000`.

### Frontend

1. Run the React development server:
   ```bash
   npm start
   ```

   The frontend development server will start at `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.

2. Fill in the form with your name, address, email, and select a file to upload.

3. Submit the form. The file and user details will be sent to the backend server and stored in MongoDB.

## API Endpoints

### POST /submit

- **Description**: Endpoint to handle form submission.
- **Request Body**:
  - `name`: string
  - `address`: string
  - `email`: string
  - `file`: file
- **Response**: A success message or an error message.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript

- **Backend**:
  - Express.js
  - MongoDB
  - Mongoose
  - Multer

## License

This project is licensed under the MIT License.

---

Feel free to modify this README to better fit your project's specific details and requirements!