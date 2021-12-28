const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!')
})

app.post('/booking', (req, res) => {

    res.status(200).send('Skrrt');
    res.status(500).send('failed bro');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})