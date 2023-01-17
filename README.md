# Todo App

This is a simple Todo App created using React. It allows users to create, delete, and mark tasks as complete. The tasks are stored using a provided REST API.

## Usage
To use the app, clone the repository and install the dependencies. 
### `git clone https://github.com/[YOUR_USERNAME]/todo-app.git`
### `cd todo-app`
### `npm install`
You may need to install axios, use the following command:
### `npm install axios`

Next, start the app by running:
### `npm start`

The app will be served at http://localhost:3000.

## Assumptions Made
* The API URL is unique to each user and will be provided. URL can be changed in config.js
* The API is functioning properly and is able to perform all necessary CRUD operations on tasks.
* The user wants a simple, intuitive interface for managing their tasks.

## Code Quality and Best Practices
I have tried to adhere to best practices and maintain good code quality in this app. This includes:

* Using functional components and hooks where appropriate
* Splitting up the app into logical components
* Using clear and descriptive names for variables and functions
* Providing comments where necessary for better understanding of the code
* Writing tests for the TodosList component using Jest and Enzyme (could not verify my test on my local environment, unfortunately)

## Code Organization
The code is organized into the following main directories:

* src/components: contains the various components that make up the app
* src/service: contains the service file that handles communication with the API and config.js 
* src/tests: contains the tests for the TodosList component
