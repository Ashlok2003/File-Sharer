module.exports = ({ emailFrom, emailTo, downloadLink }) => {
    return `
        
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Files are Ready for Download!</title>
</head>
<body style="font-family: Arial, sans-serif;">

    <table cellpadding="0" cellspacing="0" width="100%" style="margin: auto; max-width: 600px; border-collapse: collapse;">
        <tr>
            <td bgcolor="#f5f5f5" style="padding: 20px; text-align: center;">
                <h1 style="color: #333;">Your Files are Ready for Download!</h1>
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" style="padding: 20px;">
                <p>Dear ${emailTo}, /</p>
                <p>Mr/Mrs/Ms. ${emailFrom} send your Files .via FileSharex</p>
                <p>We're excited to let you know that your files are now available for download on FileSharex! 📁🎉</p>
                <br>
                <p>These Files Will Expire After 12 Hours of being Uploaded !</p>
                <br>
                <p>To access your files, simply follow these steps:</p>
                
                    <p>Click on the download icon to start the download process.</p>
                
                <div style="text-align: center">
                    <a href='${downloadLink}' role='button' style='background-color: red; color: #fff; font-weight: 800; padding: 7px 15px; border: none;text-decoration : none;' >Download File</a>
                </div>
                <p>If you encounter any issues or have questions, don't hesitate to reach out to our support team at <a href="https://www.github.com/ashlok2003" style="text-decoration: none; color: #007bff;">ashlok2003@gmail.com</a>. We're here to help!</p>
                <p>Thank you for choosing FileSharex for your file storage and sharing needs.</p>
                <p><strong>Best & Warm Regards,</strong><br> <br>Ashlok Chaudhary - Developer<br>FileSharex, Mumbai Maharashtra</p>
                
                <p style="color : red; font-weight: 600">This is Just a Prototype, Just to showcase my development skills.</p>
            </td>
        </tr>
    </table>

</body>
</html>
`

}