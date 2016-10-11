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

const reviews = [
  {
    'message': 'great company, love the work!',
    'interactions': 5,
    'harassment': 5,
    'advancement': 5,
    'family-support': 5,
    'work-life-balance': 5,
    'equal-pay': 5,
    'companyId': 1,
    'userId': 1
  },
  {
    'message': 'pretty good workplace, I feel supported and overall think the male/female ratio is even.',
    'interactions': 4,
    'harassment': 4,
    'advancement': 5,
    'family-support': 5,
    'work-life-balance': 4,
    'equal-pay': 4,
    'companyId': 1,
    'userId': 2
  },
  {
    'message': 'sometimes I feel like I am being treated unfairly, but I like my boss',
    'interactions': 3,
    'harassment': 3,
    'advancement': 4,
    'family-support': 2,
    'work-life-balance': 4,
    'equal-pay': 3,
    'companyId': 1,
    'userId': 3
  }
];

// get the sequelize instance
var sequelize = require('../server/db/db').default;

// require the models
var models = require('../server/models/');
var User = models.User;
var Company = models.Company;
var Review = models.Review;

// make users
Promise.all(
  users.map(function(userObj) {
    return User.create(userObj)
      .then(function(user) {
        console.log('success creating user');
      })
      .catch(function(err) {
        console.log('error creaitng user. err = ', err);
      });
  })
).then(function() {

  // make companies
  return Promise.all(
    companies.map(function(companyData) {
      return Company.create(companyData)
        .then(function(company) {
          console.log('success creating company');
        })
        .catch(function(err) {
          console.log('error creating company. err = ', err);
        })
    })
  );
}).then(function() {

  // make reviews
  return Promise.all(
    reviews.map(function(reviewData) {
      return Review.create(reviewData)
        .then(function(review) {
          console.log('success creating review');
        })
        .catch(function(err) {
          console.log('error creating review. err = ', err);
        })
    })
  );
});

