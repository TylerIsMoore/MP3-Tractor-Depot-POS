request('dotenv').config()
const express = require('express')
const app = express()

app.use('/scan-book', require('./controllers/scan-book'))

app.get('/', (req, res) => {
    res.send('Welcome to Tractor Depot Inc.!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)