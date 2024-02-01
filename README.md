
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

   bash
   git clone https://github.com/your-username/mern-todo-list.git
   cd mern-todo-list
   

2. Install dependencies:

   bash
   # Install server dependencies
   npm install

   # Install client dependencies
   cd client
   npm install
   

3. Configure MongoDB:

   - Create a MongoDB database.
   - Update the MongoDB connection string in server/config/db.js.

4. Run the application:

   bash
   # Run the server
   npm start

   # Run the client
   cd client
   npm run dev
   

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

- client: React frontend
- server: Node.js backend

## Technologies Used

- Frontend: React, React Router, Axios
- Backend: Node.js, Express.js
- Database: MongoDB

## Contributing

If you'd like to contribute, please fork the repository and create a new branch. Pull requests are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
