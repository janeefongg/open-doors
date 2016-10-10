import Sequelize from 'sequelize';
import sequelize from '../db/db';

const Company = sequelize.define('companies', {
  'name': {
    type     : Sequelize.INTEGER,
    allowNull: false,
  },
  'address': {
    type     : Sequelize.INTEGER,
    allowNull: false,
  },
  'overall-rating': {
    type     : Sequelize.INTEGER,
    allowNull: false,
    validate : {
      defaultValue: 0,
    },
  },
  // average rating between 000~500, to be converted to decimal later
  'interactions'     : Sequelize.INTEGER,
  'harassment'       : Sequelize.INTEGER,
  'advancement'      : Sequelize.INTEGER,
  'family-support'   : Sequelize.INTEGER,
  'work-life-balance': Sequelize.INTEGER,
  'equal-pay'        : Sequelize.INTEGER,
});

export default Company;
