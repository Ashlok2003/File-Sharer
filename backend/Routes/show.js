const express = require('express');
const router = express.Router();
const File = require('../models/file.model');
const QRCode = require('qrcode');
/* Attempting to convert it into post to send response and handle at react-end ;) */
router.post('/:uuid', async (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        console.log(file);
        if (!file) {
            return res.render('FileNotFound');

        } else {
            const data = `${process.env.FILE_SHARER_APP_BASE_URL}/files/download/${file.uuid}`;

            try {

                console.log("QR Code Builder and Saved Successfully !");

                QRCode.toDataURL(data, (error, url) => {
                    if (error) throw error;

                    return res.send(JSON.stringify({
                        uuid: file.uuid,
                        filename: file.filename,
                        filesize: file.size,
                        qr_code: url,
                        download_url: `http://localhost:3000/files/download/${file.uuid}`,
                    }));

                    /*
                    res.render('Download', {
                        uuid: file.uuid,
                        filename: file.filename,
                        filesize: file.size,
                        qr_code: url,
                        download: `${process.env.FILE_SHARER_APP_BASE_URL}/files/download/${file.uuid}`,
                    });
                    */
                })

            } catch (error) {
                console.error("Error generating QR code:", error);
                /* return res.render('Error'); */

                return res.send(JSON.stringify({ error: "Please Try Again Later" }));
            }
        }

    } catch (error) {
        console.error("Error:", error);
        /*  return res.render('Error'); */
        return res.send(JSON.stringify({ error: "Please Try Again Later" }));
    }
});

module.exports = router;
