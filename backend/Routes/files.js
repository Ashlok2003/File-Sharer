const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../models/file.model');
const { v4: uuidv4 } = require('uuid');

let storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, 'Uploads/'),

    filename: (req, file, callback) => {
        const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        callback(null, uniqueFilename);
    }
});

let upload = multer({
    storage,
    limits: { fileSize: 10000000 * 100 }
}).single('myfile'); /* Attribute myfile name should match while making requests...) */


router.post('/', (req, res) => {

    upload(req, res, async (error) => {
        if (!req.file) {
            return res.json({ error: "File Required !" });
        }

        if (error) {
            return res.status(500).send({ error: error.message });
        }

        const file = new File({
            filename: req.file.filename,
            uuid: uuidv4(),
            path: req.file.path,
            size: req.file.size,
        });

        try {
            const response = await file.save();
            return res.json({ uuid: `${response.uuid}` });
        } catch (saveError) {
            return res.status(500).send({ error: saveError.message });
        }
    });
});


router.post('/send', async (req, res) => {

    /* Fetching all the data from the request body */
    const { uuid, emailTo, emailFrom } = req.body;
    // console.log('Hello Inside the Send Function !')

    if (!uuid || !emailTo || !emailFrom)
        return res.status(422).send({ status: false, message: "Invalid Request !" });

    const file = await File.findOne({ uuid: uuid });
    // console.log(file);

    if (file.sender)
        return res.status(200).send({ status: false, message: "File Already Sent !" });

    file.sender = emailFrom;
    file.receiver = emailTo;

    const response = await file.save();

    const sendMail = require('../services/emailServices');
    sendMail({

        from: emailFrom,
        to: emailTo,
        subject: "🥳 File Sharer Received Files !",
        text: `${emailFrom} shared a file with you......🙂`,
        html: require('../services/emailTemplate')({
            emailFrom: emailFrom, emailTo: emailTo, downloadLink: `${process.env.FILE_SHARER_APP_BASE_URL}/files/download/${file.uuid}`
        }),

    });

    return res.status(200).send({ status: true, message: "File Sent Successfully !" });

})


module.exports = router;
