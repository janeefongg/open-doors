import Sequelize from 'sequelize';
import sequelize from '../db/db';

const Review = sequelize.define('reviews', {
  'message': {
    type    : Sequelize.TEXT,
    validate: {
      notNull: true,
    },
  },
  // ratings (1-5)
  'interactions': {
    type    : Sequelize.INTEGER,
    validate: {
      notNull: true,
      min    : 1,
      max    : 5,
    },
  },
  'harassment': {
    type    : Sequelize.INTEGER,
    validate: {
      notNull: true,
      min    : 1,
      max    : 5,
    },
  },
  'advancement': {
    type    : Sequelize.INTEGER,
    validate: {
      notNull: true,
      min    : 1,
      max    : 5,
    },
  },
  'family-support': {
    type    : Sequelize.INTEGER,
    validate: {
      notNull: true,
      min    : 1,
      max    : 5,
    },
  },
  'work-life-balance': {
    type    : Sequelize.INTEGER,
    validate: {
      notNull: true,
      min    : 1,
      max    : 5,
    },
  },
  'equal-pay': {
    type    : Sequelize.INTEGER,
    validate: {
      notNull: true,
      min    : 1,
      max    : 5,
    },
  },
});

export default Review;
