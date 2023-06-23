const express = require('express')

const {
    loginUser,
    registerUser,
    logoutUser,
} = require('../controller/UserController')

const router = express.Router()

router.post('/login', loginUser)

router.post('/register', registerUser)

router.get('/logout/:id', logoutUser)

module.exports = router