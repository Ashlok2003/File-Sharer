require('dotenv').config();

const express = require('express');
const connectDB = require('./config/Database');
const app = express();
const path = require('path');
const cors = require('cors');
const cron = require('node-cron');
const fs = require('fs');

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

/* 
! Adding the scheduler to delete the files in every 12 hours interval */

cron.schedule('0 */12 * * *', () => {
    console.log('Scheduler Called !')
    const directory = path.join(__dirname, 'Uploads/');
    
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.log("Error Reading Directory !", err);
            return;
        }

        if (files.length > 0) {
            files.forEach(file => {
                fs.unlink(path.join(directory, file), err => {
                    if (err) {
                        console.log('Error Deleting files !', err);
                    } else {
                        console.log(`File ${file} deleted successfully.`);
                    }
                });
            });
        } else {
            console.log("No files to delete !");
        }
    });
}, {
    scheduled: true,
    timezone: 'Asia/Kolkata'
});


