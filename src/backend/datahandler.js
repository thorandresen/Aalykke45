const express = require('express')
var nodemailer = require('nodemailer');
const app = express()
const port = 3000
const password = process.env.PASSWORD;
var cors = require('cors')

app.use(cors())
app.use(express.json());

app.post('/booking', (req, res) => {
    console.log('hej');
    var mailOptions = {
        from: 'garskespillercs@gmail.com',
        to: 'thorg3@gmail.com',
        subject: `Booking from ${req.body['emailInputControl']}`,
        html:
            `
            <p>
                <b>Name: </b> ${req.body['nameInputControl']}<br>
                <b>Email: </b> ${req.body['emailInputControl']}<br>
                <b>Phone: </b> ${req.body['phoneInputControl']}<br>
                <b>Amount of people: </b> ${req.body['personInputControl']}<br>
                <b>Comments: </b> ${req.body['commentInputControl']}<br>
                <b>Start date: </b> ${req.body['start']}<br>
                <b>End date: </b> ${req.body['end']}
            </p>
        `
    };

    var verificationOptions = {
        from: 'garskespillercs@gmail.com',
        to: req.body['emailInputControl'],
        subject: `Mail Vertification from Aalykke45`,
        text: 'The host will soon contact you with further information about your booking.'
    };

    let sendMailPromise = new Promise((res, rej) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                rej('' + error)
            } else {
                res('' + info.response);
            }
        });
    });

    sendMailPromise
        .then(() => {
            return new Promise((res, rej) => {
                transporter.sendMail(verificationOptions, function (error, info) {
                    if (error) {
                        rej('' + error)
                    } else {
                        res('' + info.response);
                    }
                });
            });
        })
        .then(() => { res.status(200).send(JSON.stringify('200')) })
        .catch(() => { res.status(500).send(JSON.stringify('500')) });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'garskespillercs@gmail.com',
        pass: password
    }
});








