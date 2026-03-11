// Express Server
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Database (Sequelize models)
const db = require('./models');

// Login Route importieren
const loginRouter = require('./routes/login');

// Session
const session = require('express-session');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Session Middleware
app.use(session({
    secret: 'myOwnSecret123',
    resave: true,
    saveUninitialized: true
}));

// Login Route
app.use('/login', loginRouter);


// Health check
app.get('/health', (req, res) => res.json({ ok: true }));


// Read orders
app.get('/orders', async (req, res) => {
    try {
        const orders = await db.Order.findAll({ order: [['id', 'DESC']] });
        res.json(orders);
    } catch (e) {
        console.error('Orders error:', e);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

const PORT = 8101;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});