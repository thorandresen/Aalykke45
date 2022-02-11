// https://stackoverflow.com/questions/51980436/nodemailer-throws-error-invalid-login-534-5-7-14
const express = require('express')
var nodemailer = require('nodemailer');
const app = express()
const port = 443
const password = process.env.PASSWORD;
var cors = require('cors')

app.use(cors())
app.use(express.json());

app.post('/booking', (req, res) => {
    console.log('hej');
    var mailOptions = {
        from: 'andreastermansen@gmail.com',
        to: 'andreastermansen@gmail.com',
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
        from: 'andreastermansen@gmail.com',
        to: req.body['emailInputControl'],
        subject: `Buchungsbestätigung`,
        text: 'Der Gastgeber wird Sie in Kürze mit weiteren Informationen kontaktieren. Liebe Grüße Andreas Termansen'
    };

    let sendMailPromise = new Promise((res, rej) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
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
                        console.log(error)
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








