import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import Department from './Department.js';

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  credits: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 3,
  },
  level: {
    type: DataTypes.ENUM('undergraduate', 'graduate', 'doctoral'),
    allowNull: false,
    defaultValue: 'undergraduate',
  },
  semester: {
    type: DataTypes.ENUM('Fall', 'Spring', 'Summer', 'Year-round'),
    allowNull: false,
    defaultValue: 'Fall',
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prerequisites: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Establish the relationship between Course and Department
Course.belongsTo(Department, {
  foreignKey: {
    name: 'departmentId',
    allowNull: false,
  },
  onDelete: 'CASCADE',
});

Department.hasMany(Course, {
  foreignKey: 'departmentId',
});

export default Course;