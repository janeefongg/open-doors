import User from './user.model';
import Company from './company.model';
import Review from './review.model';

// Associations
Company.hasMany(Review);
User.hasMany(Review);

export {
  User,
  Company,
  Review,
};
