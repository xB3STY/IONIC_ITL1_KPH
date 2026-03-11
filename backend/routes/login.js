const express = require('express');
const router = express.Router();

// POST /login
router.post('/', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "1234") {

        res.json({
            success: true,
            message: "Login successful"
        });

    } else {

        res.json({
            success: false,
            message: "Invalid credentials"
        });

    }

});

module.exports = router;