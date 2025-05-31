import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
const auth = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization')?.split(' ')[1];

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'jwtSecret');

    // Add user from payload to request
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Middleware to check if user has required role
const checkRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const { role } = req.user;

    if (!roles.includes(role)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  };
};

export { auth, checkRole };