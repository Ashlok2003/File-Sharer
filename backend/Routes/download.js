const router = require('express').Router();
const path = require('path');
const File = require('../models/file.model');

router.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });

        if (!file)
            return res.render('FileNotFound');

        const filePath = path.join(__dirname, '..', `${file.path}`);
        /* console.log(filePath) */
        res.download(filePath);
    }
    catch (error) {
        res.render('Error');
        console.log("Error : ", error);
    }
});

module.exports = router;