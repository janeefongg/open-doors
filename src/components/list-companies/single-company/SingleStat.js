import React from 'react';

import './SingleStat.scss';

const SingleStat = ({ number, label }) => (
  <div className="single-stat col-xs-4">
    <h4 className="single-stat-number">{number}</h4>
    <p className="single-stat-label">{label}</p>
  </div>
);

export default SingleStat;
