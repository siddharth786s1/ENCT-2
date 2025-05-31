import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { Sequelize } from 'sequelize';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import departmentRoutes from './routes/departments.js';
import courseRoutes from './routes/courses.js';
import newsEventRoutes from './routes/newsEvents.js';
import admissionRoutes from './routes/admissions.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const sequelize = new Sequelize(
  process.env.DB_NAME || 'enct_college',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

// Test database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync models with database
    await sequelize.sync({ alter: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/news-events', newsEventRoutes);
app.use('/api/admissions', admissionRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to ENCT College API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { sequelize };
export default app;