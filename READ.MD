# SBA-319 LAB

# Recipe Management API

## Description

This application is a Recipe Management API built using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete recipes and ingredients. The API is structured to manage three primary data collections: Users, Recipes, and Ingredients.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv for environment variable management
- body-parser for parsing incoming request bodies

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/murshyne/SBA-319.git
   cd your-repo-name
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables in a `.env` file:
   ```
   mongoURI=your_mongoDB_connection_string
   PORT=3000
   ```

4. Start the server:
   ```bash
   node server.mjs
   ```

## API Endpoints

### Users

- **Create a User**
  - `POST /users`
  - **Request Body**: 
    ```json
    {
      "username": "string",
      "email": "string"
    }
    ```
  - **Response**: Returns the created user object.

- **Get All Users**
  - `GET /users`
  - **Response**: Returns an array of all users.

### Recipes

- **Create a Recipe**
  - `POST /recipes`
  - **Request Body**:
    ```json
    {
      "name": "string",
      "ingredients": ["string"],
      "year": number
    }
    ```
  - **Response**: Returns the created recipe object.

- **Get All Recipes**
  - `GET /recipes`
  - **Response**: Returns an array of all recipes.

- **Update a Recipe**
  - `PUT /recipes/:id`
  - **Request Body**: Any field of the recipe object that you wish to update.
  - **Response**: Returns the updated recipe object.

- **Delete a Recipe**
  - `DELETE /recipes/:id`
  - **Response**: Returns the deleted recipe object.

### Ingredients

- **Create an Ingredient**
  - `POST /ingredients`
  - **Request Body**:
    ```json
    {
      "name": "string",
      "quantity": "string"
    }
    ```
  - **Response**: Returns the created ingredient object.

- **Get All Ingredients**
  - `GET /ingredients`
  - **Response**: Returns an array of all ingredients.

