require('babel-register');
require('babel-polyfill');

/**
 * 
 *  makeData.js
 * 
 *  Imports dummy data into the database
 * 
 */
var users = [
  {
    username: 'kan',
    email   : 'kan@kan.com',
    password: 'kan100'
  },
  {
    username: 'jane',
    email   : 'jane@jane.com',
    password: 'jane100'
  },
  {
    username: 'danny',
    email   : 'danny@danny.com',
    password: 'danny100'
  }
];

var companies = [
  {
    'name'             : 'Jadaka 1000',
    'address'          : '315 Jadabulous Lane, Jane CA, 90008',
    'interactions'     : 234,
    'harassment'       : 258,
    'advancement'      : 498,
    'family-support'   : 378,
    'work-life-balance': 484,
    'equal-pay'        : 267
  },
  {
    'name'             : 'Jadacious Publications',
    'address'          : '41552 La Jabrea Ave, Danny CA, 92776',
    'interactions'     : 340,
    'harassment'       : 269,
    'advancement'      : 450,
    'family-support'   : 412,
    'work-life-balance': 434,
    'equal-pay'        : 398
  },
  {
    'name'             : 'Jadakalaka!',
    'address'          : '3580 Jashington Drive, Kan CA, 90550',
    'interactions'     : 299,
    'harassment'       : 360,
    'advancement'      : 381,
    'family-support'   : 382,
    'work-life-balance': 488,
    'equal-pay'        : 412
  },
];

// get the sequelize instance
var sequelize = require('../server/db/db').default;

// require the models
var models = require('../server/models/');
var User = models.User;
var Company = models.Company;

// make users
users.forEach(function(userObj) {
  // edit here, i don't know what i'm doing.
  const user = User.build(userObj);
  user.hashPassword(userObj.password)
    .then(function() {
      user.save();
    });
  // ---------------
});
