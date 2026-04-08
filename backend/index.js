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
app.use('/', loginRouter);


// Health check
app.get('/health', (req, res) => res.json({ ok: true }));


// Read orders
app.get('/orders', async (req, res) => {
    res.json([
        { id: 1, name: 'Test Order 1' },
        { id: 2, name: 'Test Order 2' }
    ]);
});

const PORT = 8101;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});