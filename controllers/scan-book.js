const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /scan-book')
})

module.exports = router