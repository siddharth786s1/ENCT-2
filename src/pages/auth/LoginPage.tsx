import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const { login, error } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    
    try {
      await login(data.email, data.password);
      
      // Redirect based on user role (handled in AuthContext)
      navigate('/dashboard');
    } catch (err) {
      // Error handling is done in AuthContext
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 flex flex-col justify-center bg-neutral-50">
      <div className="container-custom mx-auto">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-primary-500">Welcome Back</h1>
                <p className="text-neutral-600 mt-2">Sign in to your ENCT account</p>
              </div>
              
              {error && (
                <div className="mb-6 bg-error-500/10 border border-error-500/30 text-error-500 px-4 py-3 rounded flex items-start">
                  <AlertCircle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`input ${errors.email ? 'border-error-500 focus:ring-error-500' : ''}`}
                    placeholder="Your email address"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className={`input ${errors.password ? 'border-error-500 focus:ring-error-500' : ''}`}
                    placeholder="Your password"
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-error-500">{errors.password.message}</p>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
                      Remember me
                    </label>
                  </div>
                  
                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary-500 hover:text-primary-600">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn btn-primary py-3 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <p className="text-neutral-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-medium text-primary-500 hover:text-primary-600">
                    Register now
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;