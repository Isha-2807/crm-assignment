const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

require('./utils/passport'); // Google strategy config

const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customers');
const campaignRoutes = require('./routes/campaigns');
const deliveryRoutes = require('./routes/delivery');
const aiRoutes = require('./routes/ai');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('MongoDB connected');
});

app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/ai', aiRoutes);

const PORT = 5502;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
