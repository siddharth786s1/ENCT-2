import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-neutral-100">
      {/* Sidebar */}
      <motion.aside
        className={`bg-primary-500 text-white w-64 fixed h-full z-20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial={false}
      >
        <div className="p-5 border-b border-primary-600">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">ENCT Dashboard</h2>
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-white focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center">
              <User size={20} />
            </div>
            <div className="ml-3">
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-primary-200 capitalize">{user?.role}</p>
            </div>
          </div>

          <nav className="space-y-1">
            {/* Navigation links will be added based on user role */}
            {user?.role === 'student' && (
              <>
                <a href="/dashboard/student\" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Dashboard
                </a>
                <a href="/dashboard/student/courses" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  My Courses
                </a>
                <a href="/dashboard/student/grades" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Grades
                </a>
                <a href="/dashboard/student/attendance" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Attendance
                </a>
                <a href="/dashboard/student/profile" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Profile
                </a>
              </>
            )}

            {user?.role === 'faculty' && (
              <>
                <a href="/dashboard/faculty" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Dashboard
                </a>
                <a href="/dashboard/faculty/courses" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  My Courses
                </a>
                <a href="/dashboard/faculty/students" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Students
                </a>
                <a href="/dashboard/faculty/materials" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Course Materials
                </a>
                <a href="/dashboard/faculty/profile" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Profile
                </a>
              </>
            )}

            {user?.role === 'admin' && (
              <>
                <a href="/dashboard/admin" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Dashboard
                </a>
                <a href="/dashboard/admin/users" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  User Management
                </a>
                <a href="/dashboard/admin/departments" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Departments
                </a>
                <a href="/dashboard/admin/courses" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Courses
                </a>
                <a href="/dashboard/admin/news" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  News & Events
                </a>
                <a href="/dashboard/admin/settings" className="block py-2 px-4 rounded hover:bg-primary-600 transition">
                  Settings
                </a>
              </>
            )}
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t border-primary-600">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full py-2 px-4 text-white bg-primary-600 rounded hover:bg-primary-700 transition"
          >
            <LogOut size={18} className="mr-2" />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        {/* Top bar */}
        <header className="bg-white shadow-sm h-16 flex items-center px-6">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-neutral-700 focus:outline-none"
          >
            <Menu size={24} />
          </button>
          <div className="ml-auto flex items-center space-x-4">
            <button className="text-neutral-700 hover:text-primary-500 focus:outline-none">
              <Settings size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center">
              {user?.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;