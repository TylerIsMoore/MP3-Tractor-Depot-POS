require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/customers', require('./controllers/customers'))

app.get('/', (req, res) => {
    res.render('login')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.get('/', (req, res) => {
    let customers = [{
        name: 'Tyler Moore',
        number: '7579452882',
        email: 'tylernmoore07@gmail.com',
        loyalty: '477791'
    }]
    res.render('customers/assign', { customers })
})

app.listen(process.env.PORT)