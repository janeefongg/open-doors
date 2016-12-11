import React from 'react';

import StarGraphic from '../../common/StarGraphic';
import SingleStat from './SingleStat';

const SingleRating = ({ ratings }) => {
  console.log('ratings = ', ratings);
  return (
    <div className="company-rating row">
      <div className="avg-rating-container col-xs-3 col-xs-offset-1">
        <p className="avg-rating-text">4.5</p>
        <StarGraphic stars="3.5" />
      </div>
      <div className="rating-stats col-xs-3 row col-xs-offset-4">
        <SingleStat number="22" label="Reviews" />
        <SingleStat number="18" label="Salaries" />
        <SingleStat number="4.58/5.00" label="Interactions" />
      </div>
    </div>
  );
};

export default SingleRating;
