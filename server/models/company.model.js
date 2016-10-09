import Sequelize from 'sequelize';
import sequelize from '../db/db';

const Company = sequelize.define('companies', {
  address: {
    type    : Sequelize.STRING,
    validate: {
      notNull: true,
    },
  },
  'overall-rating': {
    type    : Sequelize.INTEGER,
    validate: {
      notNull     : true,
      defaultValue: 0,
    },
  },
  // average rating between 1~5, stored as a 3-digit integer
  interactions        : Sequelize.INTEGER,
  harassment          : Sequelize.INTEGER,
  advancement         : Sequelize.INTEGER,
  'family-support'    : Sequelize.INTEGER,
  'work-life-balance' : Sequelize.INTEGER,
  'equal-pay'         : Sequelize.INTEGER,
  'men-to-women-ratio': Sequelize.INTEGER,
  // yes or no
  'dental-benefits'   : Sequelize.INTEGER,
  'medical-benefits'  : Sequelize.INTEGER,
  'vision-benefits'   : Sequelize.INTEGER,
});

export default Company;
