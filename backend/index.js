const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const db = require('./models');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// Read orders
app.get('/orders', async (req, res) => {
    try {
        const orders = await db.Order.findAll({ order: [['id', 'DESC']] });
        res.json(orders);
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));