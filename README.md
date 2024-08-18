# Assignment Future Skill

1. How can you implement shared functionality across a component tree?
   
Answer: There are multiple ways to implement shared functionality across a component tree in React such as Context Api, Custom Hooks, HOCs
        Among these I have used Context Api in the project.

2. Why is the useState hook appropriate for handling state in a complex component?

Answer: Local State Management: useState allows us to handle state directly in functional components.
        Encapsulation: It keeps state logic within the component, making it easier to understand and manage, especially when dealing with complex state                     interactions.

## Overview

This project is a Help Center application built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes features for managing help center cards, with functionalities to fetch, add, and view individual cards.

## Features

- **Search Functionality**: Search cards by title or description.
- **Card Management**: Fetch all cards, view details of a specific card, and add new cards.
- **Context API**: Use React Context API to manage state across the application.

## Technologies

- **Frontend**: React, React Router, SCSS
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install the required packages:
    ```
    
    npm install

    ```

3. Create a data folder in root directory and a `config.env` file in the data directory and add your MongoDB connection string:
    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the backend server:
    ```bash
    
    npm start
    ```

### Frontend Setup

1. Navigate to the root directory:
   ```
   cd frontend
   ```

2. Install the required packages:
    ```
    
    npm install
    ```

3. Start the frontend development server:
    ```
    npm start
    ```

The application should now be running at `http://localhost:3000`.

## Usage

- **Home Page**: View and search through the help center cards.
- **Adding a Card**: Use the form on the home page to add a new card to the help center.
- **Viewing a Card**: Search and view detailed information about a specific card.

## API Endpoints

- **GET /cards**: Fetch all cards
- **GET /cards/:title**: Fetch a card by title
- **POST /cards**: Add a new card


## Contact

For any questions or issues, please contact [ram8176970175@gmail.com] or open an issue on GitHub.

