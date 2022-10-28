const express = require('express');
const dotenv = require("dotenv");
const DbConnection = require("./databaseconnection");
const port = 8081; //http://localhost:8081

const eventRoute = require('./routes/Events');

dotenv.config();
const app = express();

DbConnection();
app.use(express.json());
app.use('/events', eventRoute);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is up"
    });
});
app.get("*", (req, res) => {
    res.status(404).json({
        message: 'This method is not implemented'
    });
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});