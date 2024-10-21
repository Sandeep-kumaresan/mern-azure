import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import routes from './Routes/product.route.js';

// Initialize express app
const app = express();

// Configure environment variables
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Set up routes
app.use('/api/products', routes);

// Set port from environment variable or default to 4000
const PORT = process.env.PORT || 4000;

// Connect to the database and start the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://mern-azure-app-dwgtcbhze3cxgjh7.southindia-01.azurewebsites.net:${PORT}`);
});
