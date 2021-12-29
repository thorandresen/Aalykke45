const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send('Hello World!')
})

app.post('/booking', (req, res) => {
    // console.log(req.body.title);
    console.log(req.headers);
    res.status(200).send('Skrrt');
    // res.status(500).send('failed bro');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})