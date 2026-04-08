const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (username === 'test' && password === '1234') {
        const token = 'my-secret-token';

        return res.json({
            success: true,
            token: token,
            user: {
                username: 'test',
                name: 'Test User',
                email: 'test@example.com',
                role: 'Student'
            }
        });
    }

    res.json({
        success: false
    });
});

module.exports = router;