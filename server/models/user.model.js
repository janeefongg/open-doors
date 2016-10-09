import Sequelize from 'sequelize';
import sequelize from '../db/db';

const User = sequelize.define('users', {
  username: {
    type    : Sequelize.STRING,
    validate: {
      notNull: true,
    },
  },
  email: {
    type    : Sequelize.STRING,
    validate: {
      notNull: true,
      isEmail: true,
    },
  },
  password: {
    type    : Sequelize.STRING,
    validate: {
      notNull: true,
    },
  },
});

export default User;
