const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./routes/routes');

app.use("/api", routes);
app.use("*", (req, res) => {
    res.status(404).json({ "message": "Endpoint not found" });
})

mongoose.connect(process.env.DB_CONNECTION)
    .then(res => console.log("Database Connected: " + res))
    .catch(err => console.log("Database Error: " + err))

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("Error " + err);
    }
    else console.log(`Server work on ${process.env.PORT}`)
})