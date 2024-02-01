
# MERN Todo List

A simple Todo list application built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features

- Add, edit, and delete tasks
- Mark tasks as complete
- Responsive and user-friendly interface
- Backend API using Node.js and Express.js
- MongoDB for storing tasks

## Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB

## Getting Started

1. Clone the repository:

   
   git clone https://github.com/Vaishakharekere/todo.git
   cd todo
   

2. Install dependencies:

   # Install backend dependencies
   cd backend
   npm install

   # Install Todo dependencies
   cd Todo
   npm install
   

4. Configure MongoDB:

   - Create a MongoDB database.
   - Update the MongoDB connection string in backend/.env

5. Run the application:

   bash
   # Run the server
   cd backend
   npm start

   # Run the client
   cd Todo
   npm run dev
   

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure

- Todo: React frontend
- backend: Node.js backend

## Technologies Used

- Frontend: React, React Router, Axios
- Backend: Node.js, Express.js
- Database: MongoDB

## Contributing

If you'd like to contribute, please fork the repository and create a new branch. Pull requests are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
