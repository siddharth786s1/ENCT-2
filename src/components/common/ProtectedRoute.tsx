import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: 'student' | 'faculty' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role && user?.role !== role) {
    // Redirect to appropriate dashboard based on user role
    if (user?.role === 'student') {
      return <Navigate to="/dashboard/student\" replace />;
    } else if (user?.role === 'faculty') {
      return <Navigate to="/dashboard/faculty" replace />;
    } else if (user?.role === 'admin') {
      return <Navigate to="/dashboard/admin\" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;