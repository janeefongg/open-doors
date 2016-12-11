import React from 'react';

import SingleRating from './SingleRating';

const SingleCompany = ({ id, name, url, address, ratings }) => (
  <div className="single-company col-md-12" id={`company-id-${id}`}>

    <div className="company-title row">
      <div className="company-graphic col-xs-1 col-xs-offset-1">I</div>
      <div className="company-meta col-xs-7">
        <h3 className="company-name">{name}</h3>
        <h4 className="company-details">{url} | <span className="company-location">{address}</span></h4>
      </div>
      <div className="review-link-container col-xs-2">
        <a href="#">Add a Review</a>
      </div>
    </div>

    <SingleRating ratings={ratings} />

    <div className="featured-review row">
      <p className="featured-review-highlight">

      </p>
      <p className="featured-review-normal">

      </p>
      <a className="see-all-reviews">See All Reviews</a>

    </div>

  </div>
);

export default SingleCompany;
