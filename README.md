# Clarivate Shared ORM

This project contains the shared ORM (Object-Relational Mapping) entities and database connection logic for the Clarivate application. It uses TypeORM for database interactions and includes entities for `Product` and `Category`.

## Project Setup

To set up the project, install the dependencies:

`npm install`

## Build the Project

To compile the TypeScript code to JavaScript:

`npm run build`

## Database Migrations

To generate a new migration:

`npm run migration:generate`

To run the migrations:

`npm run migration:run`

To revert the last migration:

`npm run migration:revert`

## Seeding the Database

To seed the database with initial data:

`npm run seed`

## Entities

The project includes the following entities:

- `Product`: Represents a product in the database.
- `Category`: Represents a category in the database.

## Environment Variables

The project uses environment variables to configure the database connection. Create a `.env` file in the root directory with the following variables:

- DB_HOST=localhost 
- DB_PORT=3306 
- DB_USERNAME=root 
- DB_PASSWORD=your_password 
- DB_DATABASE=clarivate_db 
- DB_LOGGING=true