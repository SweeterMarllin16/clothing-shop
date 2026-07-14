const express = require('express');
const path = require('path');
const { PORT } = require('./config/env');
const contactRoutes = require('./routes/contact');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// API routes
app.use('/api/contact', contactRoutes);

// SPA fallback: serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});