# Couchsurfing Interview Exercise
## Calculating distance between users

### Instructions

* Has a resource that is a user
* User should have an attribute that describes its relationship to other uses (think friends)
* Seeds user data (static list or DB whichever is preferred)
* Serves CRUD endpoints for the user resource
* Has an additional endpoint that finds the relationship distance from one user to another user (this user is a 2nd, 3rd, distance relationship)

#### Tasks

1. Koa App Setup
    - sqlite db
    - Knex connection
    - health endpoint
    - Dockerfile

2. Data
    - Schema migration
    - Users (nodes) have Connections (edges) to other a Users (“friends”)
    - Users (id, firstName, lastName, userName, email)
    - Connections (id, x, y)
    - Mock data
    - Generate mock data and store in repo
    - Load mock data to db tables

3. Distance Function
    - unit tests
    - logging
    - error handling
    - implementation

4. CRUD: Users
    - unit tests
    - logging
    - error handling
    - implementation

### Building the container

    docker build -t couchsurfing-distace-app .

### Runnging the container

    docker run -p 3000:3000 --name cda couchsurfing-distance-app
