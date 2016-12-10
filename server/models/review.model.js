import Sequelize from 'sequelize';
import { pick } from 'lodash';
import sequelize from '../db/db';
import Company from './company.model';

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

Review.hook('afterCreate', async (review) => {
  const company = await Company.findById(review.companyId);
  company.set('ratings', pick(review.dataValues, [
    'interactions',
    'harassment',
    'advancement',
    'familySupport',
    'workLifeBalance',
    'equalPay',
  ]));
  return sequelize.Promise.resolve();
});


export default Review;
