const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    /\.loca\.lt$/,  // Cho phép tất cả subdomain của loca.lt (localtunnel)
    /\.ngrok-free\.app$/,  // Cho phép ngrok nếu cần
    /\.ngrok\.io$/
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/services', require('./routes/services'));
app.use('/api/pricing', require('./routes/pricing'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contacts', require('./routes/contacts'));

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Dịch vụ Bốc Xếp Nhanh 24h',
    version: '1.0.0',
    endpoints: {
      services: '/api/services',
      pricing: '/api/pricing',
      projects: '/api/projects',
      contacts: '/api/contacts'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

