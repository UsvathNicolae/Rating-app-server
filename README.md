# Rating-app-server

## Technologies:
Nodejs

## Database:
MySQL + Sequalize ORM

## Starting project:

Install docker desktop

Create a .env file and use your password

In root server directory run docker-compose up

Go to the adminer page (localhost:9000) and manually create a database with the name rating

In root server directory run npx sequelize-cli db:migrate

In root server directory run npx sequelize-cli db:seed:all

With the docker container running run npm start

The server is running
