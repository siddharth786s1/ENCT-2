import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Public Pages
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import DepartmentsPage from './pages/public/DepartmentsPage';
import DepartmentDetailPage from './pages/public/DepartmentDetailPage';
import CoursesPage from './pages/public/CoursesPage';
import CourseDetailPage from './pages/public/CourseDetailPage';
import AdmissionsPage from './pages/public/AdmissionsPage';
import NewsEventsPage from './pages/public/NewsEventsPage';
import EventDetailPage from './pages/public/EventDetailPage';
import ContactPage from './pages/public/ContactPage';
import GalleryPage from './pages/public/GalleryPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Dashboard Pages
import StudentDashboard from './pages/dashboard/student/StudentDashboard';
import FacultyDashboard from './pages/dashboard/faculty/FacultyDashboard';
import AdminDashboard from './pages/dashboard/admin/AdminDashboard';

// Not Found Page
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="departments" element={<DepartmentsPage />} />
            <Route path="departments/:id" element={<DepartmentDetailPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:id" element={<CourseDetailPage />} />
            <Route path="admissions" element={<AdmissionsPage />} />
            <Route path="news-events" element={<NewsEventsPage />} />
            <Route path="news-events/:id" element={<EventDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Student Routes */}
            <Route 
              path="student/*" 
              element={
                <ProtectedRoute role="student">
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Faculty Routes */}
            <Route 
              path="faculty/*" 
              element={
                <ProtectedRoute role="faculty">
                  <FacultyDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Routes */}
            <Route 
              path="admin/*" 
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;