import express from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';

const router = express.Router();

// Register a new user
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please include a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('role')
      .isIn(['student', 'faculty'])
      .withMessage('Role must be either student or faculty'),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;

    try {
      // Check if user already exists
      let user = await User.findOne({ where: { email } });

      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create new user
      user = await User.create({
        name,
        email,
        password,
        role,
      });

      // Create JWT payload
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      // Sign token
      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET || 'jwtSecret',
        { expiresIn: '24h' }
      );

      // Update last login time
      await user.update({ lastLogin: new Date() });

      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// Login user
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please include a valid email'),
    body('password').exists().withMessage('Password is required'),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if user exists
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Check if password matches
      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create JWT payload
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      // Sign token
      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET || 'jwtSecret',
        { expiresIn: '24h' }
      );

      // Update last login time
      await user.update({ lastLogin: new Date() });

      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// Verify token
router.get('/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.json({ valid: false });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'jwtSecret');
    
    // Check if user still exists
    const user = await User.findByPk(decoded.id);
    
    if (!user) {
      return res.json({ valid: false });
    }
    
    return res.json({ valid: true });
  } catch (err) {
    return res.json({ valid: false });
  }
});

export default router;