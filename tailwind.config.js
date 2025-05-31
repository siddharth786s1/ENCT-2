/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eef4',
          100: '#ccdee9',
          200: '#99bcd3',
          300: '#669abd',
          400: '#3379a7',
          500: '#0A3D62', // primary blue
          600: '#09315e',
          700: '#07254a',
          800: '#051a37',
          900: '#020e23',
        },
        secondary: {
          50: '#f8e5e9',
          100: '#f1ccd4',
          200: '#e399a9',
          300: '#d5667e',
          400: '#c83353',
          500: '#B71540', // secondary maroon
          600: '#921033',
          700: '#6e0c26',
          800: '#4b081a',
          900: '#27040d',
        },
        accent: {
          50: '#fef9e8',
          100: '#fdf3d1',
          200: '#fbe7a3',
          300: '#f9db75',
          400: '#f8cf47',
          500: '#F7B731', // accent gold
          600: '#c68f28',
          700: '#946b1e',
          800: '#624714',
          900: '#31240a',
        },
        success: {
          500: '#10B981', // emerald green
        },
        warning: {
          500: '#F59E0B', // amber
        },
        error: {
          500: '#EF4444', // red
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'card': '0.5rem',
      }
    },
  },
  plugins: [],
};