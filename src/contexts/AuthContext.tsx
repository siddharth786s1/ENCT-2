import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'faculty' | 'admin';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: 'student' | 'faculty') => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          // Verify token validity
          const response = await axios.get('http://localhost:5000/api/auth/verify', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
          if (response.data.valid) {
            const decodedToken: any = jwtDecode(token);
            setUser({
              id: decodedToken.id,
              name: decodedToken.name,
              email: decodedToken.email,
              role: decodedToken.role
            });
            setIsAuthenticated(true);
          } else {
            // Token invalid, clear localStorage
            localStorage.removeItem('token');
            setIsAuthenticated(false);
          }
        } catch (err) {
          // Clear token on error
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      
      const { token, user } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      // Set user data
      setUser(user);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred during login');
      setLoading(false);
      throw err;
    }
  };

  const register = async (name: string, email: string, password: string, role: 'student' | 'faculty') => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        role
      });
      
      const { token, user } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      // Set user data
      setUser(user);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred during registration');
      setLoading(false);
      throw err;
    }
  };

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    // Reset state
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};