require('./db/connection');
const express = require('express');
const cors= require('cors');
const userRouter = require('./user/user.routes');
const app = express();
const port = process.env.PORT || 5000;

 
app.use(express.json()); 
app.use(cors()); 
app.use(userRouter);

// The function below is a contoller to test server is working
app.get("/health", (req, res) => {
    res.send({ message: "Server's up"})
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});