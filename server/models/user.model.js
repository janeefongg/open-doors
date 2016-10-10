import Sequelize from 'sequelize';
import { promisify } from 'bluebird';
import { hash } from 'bcrypt-nodejs';
import sequelize from '../db/db';

const hashPassword = promisify(hash);

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
  // we use instance methods for abstracting common tasks on a model
  instanceMethods: {

    hashPassword: async (password) => {
      // this binding is being thrown off here
      try {
        const hashedPw = await hashPassword(password, null, null);
        this.password = hashedPw;
      } catch (err) {
        console.log('error hashing password. err = ', err.toString());
      }
    },
  },

});

export default User;
