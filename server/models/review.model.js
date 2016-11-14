import Sequelize from 'sequelize';
import sequelize from '../db/db';

const Review = sequelize.define('reviews', {
  message: {
    type     : Sequelize.TEXT,
    allowNull: false,
  },
  // ratings (1-5)
  interactions: {
    type     : Sequelize.INTEGER,
    allowNull: false,
    validate : {
      min: 1,
      max: 5,
    },
  },
  harassment: {
    type     : Sequelize.INTEGER,
    allowNull: false,
    validate : {
      min: 1,
      max: 5,
    },
  },
  advancement: {
    type     : Sequelize.INTEGER,
    allowNull: false,
    validate : {
      min: 1,
      max: 5,
    },
  },
  familySupport: {
    type     : Sequelize.INTEGER,
    allowNull: false,
    validate : {
      min: 1,
      max: 5,
    },
  },
  workLifeBalance: {
    type     : Sequelize.INTEGER,
    allowNull: false,
    validate : {
      min: 1,
      max: 5,
    },
  },
  equalPay: {
    type     : Sequelize.INTEGER,
    allowNull: false,
    validate : {
      min: 1,
      max: 5,
    },
  },
});

export default Review;
