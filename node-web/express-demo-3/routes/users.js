const express = require('express')
const router = express.Router();
router.get('/', ((req, res, next) => {
        res.send('a')
    }
))
router.get('/:id', ((req, res, next) => {
        res.send('b')
    }
))
router.get('/:id/edit', ((req, res, next) => {

        res.send('c')
    }
))

module.exports = router

