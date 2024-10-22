import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import routes from './Routes/product.route.js';

// Initialize express app
const app = express();

// Configure environment variables
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Set up routes
app.use('/api/products', routes);

// Serve the React app for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

// Set port from environment variable or default to 4000
const PORT = process.env.PORT || 4000;

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database', err);
});
