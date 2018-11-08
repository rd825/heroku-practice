const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET /products');
})

router.get('/:id', (req, res) => {
    res.send(`GET /products/${req.params.id}`)
})

module.exports = router;