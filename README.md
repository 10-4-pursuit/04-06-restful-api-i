# Exercise: Building RESTful Endpoints in Express

## Objective
Practice building RESTful endpoints with Express by creating a CRUD API for a simple resource, stored in memory. This exercise will enhance your understanding of Express application structure, route definitions, handling HTTP methods, and crafting responses.

## Resource Description
**Resource:** Book
- **Fields:**
  - `id` (number): Unique identifier for the book.
  - `title` (string): Book title.
  - `author` (string): Author's name.
  - `year` (number): Publication year.

## Setup Instructions

### 1. Fork and Clone the Repository
- **Fork** the provided GitHub repository to create your own copy.
- **Clone** your forked repository to your local machine.

### 2. Initialize Your Project
- Navigate to the cloned repository directory.
- Run `npm init -y` to initialize a Node.js project.
- Install Express: `npm install express`.
- Install testing dependencies: `npm install --save-dev jest supertest`.
- Add the "test" script to package.json by adding the key-value pair of "test": "jest" to the scripts section of the package.json file.

### 3. Setup Your Express Application
- Create `index.js`: Define your Express app and routes here.
- Export the Express app from `index.js`.

### 4. Setup Server Listener
- Create `server.js`: Import your Express app from `index.js` and set it to listen on port 3000.

## Implementation Tasks

### Define RESTful Endpoints
Implement CRUD operations for the Book resource:
- `GET /books`: List all books.
- `POST /books`: Add a new book.
- `GET /books/:id`: Get a book by ID.
- `PUT /books/:id`: Update a book by ID.
- `DELETE /books/:id`: Remove a book by ID.

### Start the Server
- Use `server.js` to start your server with `node server.js`.

## Testing Your Application

### Setup Tests
- A test file (`bookRoutes.test.js`) is provided.
- Ensure your `package.json` includes a test script: `"test": "jest"`.

### Running Tests
- Run `npm test` to execute the tests, verifying your RESTful endpoints.

## Submission Guidelines

### Push Your Changes
- Commit and push your changes to your forked repository on GitHub.

### Create a Pull Request
- Navigate to the original repository you forked from.
- Initiate a pull request to submit your work for review.

## Tips for Success
- Ensure HTTP status codes are appropriately used.
- Consider using tools like Postman for manual API testing.
- Consult the Express documentation for help with routing and responses.

This exercise aims to solidify your skills in developing RESTful APIs with Express, focusing on practical application design and testing strategies.
