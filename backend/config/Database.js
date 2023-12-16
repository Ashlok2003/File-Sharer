require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    /* MongoDB Database connection :) */

    mongoose.connect(String(process.env.MONGODB_URL))
        .then(() => console.log("Connection Successfully Established !"))
        .catch((error) => console.log("Error", error));

}

module.exports = connectDB;