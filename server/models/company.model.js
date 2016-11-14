import Sequelize from 'sequelize';
import sequelize from '../db/db';

const Company = sequelize.define('companies', {
  name: {
    type     : Sequelize.STRING,
    allowNull: false,
    unique   : true,
  },
  address: {
    type     : Sequelize.TEXT,
    allowNull: false,
  },
  overallRating: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  // average rating between 000~500, to be converted to decimal later
  interactions: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  harassment: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  advancement: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  familySupport: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  workLifeBalance: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
  equalPay: {
    type        : Sequelize.INTEGER,
    defaultValue: 0,
  },
});

export default Company;
