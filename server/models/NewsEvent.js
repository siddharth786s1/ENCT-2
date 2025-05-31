import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

const NewsEvent = sequelize.define('NewsEvent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('news', 'event', 'announcement'),
    allowNull: false,
    defaultValue: 'news',
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eventDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  eventLocation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'archived'),
    allowNull: false,
    defaultValue: 'published',
  },
});

export default NewsEvent;