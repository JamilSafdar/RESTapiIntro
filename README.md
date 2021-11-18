# RESTapiIntro

Before you can use this app you will need to run "npm i"  on your machine and add a .env file with your own connection string from a DB.
'npm run dev' in terminal before calling endpoints in Insomnia/Postman

## urls:

### login
POST http://localhost:5000/login

### add user
POST http://localhost:5000/user

### find user
POST http://localhost:5000/user/login

### delete user
DELETE http://localhost:5000/user/username

### update user
PUT http://localhost:5000/user/update

### authenticate user
GET http://localhost:5000/token
