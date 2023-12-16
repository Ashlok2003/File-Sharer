require('dotenv').config();

const express = require('express');
const connectDB = require('./config/Database');
const app = express();
const path = require('path');
const cors = require('cors');

/*
! setting our allmighty handlebar templat engine :) */

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
}));
const PORT = process.env.PORT || 3000;

connectDB();

/*
! serving some static data-files :) */

app.use('/files/site', express.static(path.join(__dirname, 'public')));

app.use('/api/files', require('./Routes/files'));
app.use('/files', require('./Routes/show'));
app.use('/files/download', require('./Routes/download'));

app.get('/', (req, res) => {
    res.json("Hello");
});

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`)
});

