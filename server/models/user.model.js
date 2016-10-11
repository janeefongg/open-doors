import Sequelize from 'sequelize';
import { promisify } from 'bluebird';
import { hash, compare } from 'bcrypt';
import sequelize from '../db/db';

const hashPassword = promisify(hash);
const comparePassword = promisify(compare);


const User = sequelize.define('users', {
  username: {
    type     : Sequelize.STRING,
    allowNull: false,
    unique   : true,
  },
  email: {
    type     : Sequelize.STRING,
    allowNull: false,
    validate : {
      isEmail: true,
    },
  },
  password: {
    type     : Sequelize.STRING,
    allowNull: false,
  },
}, {
  // we use hooks for injecting common tasks to model events
  hooks: {
    beforeCreate: async (user) => {
      try {
        user.password = await hashPassword(user.password, 2);
        return sequelize.Promise.resolve(user);
      } catch (err) {
        return sequelize.Promise.reject(err);
      }
    },
  },
}, {
  instanceMethods: {
    checkPassword: (inputPass, hashedPass) => comparePassword(inputPass, hashedPass),
  },

});


export default User;
