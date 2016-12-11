import React from 'react';

import SingleRating from './SingleRating';

import './index.scss';

const SingleCompany = ({ id, name, url, address, ratings }) => (
  <div className="single-company col-md-12" id={`company-id-${id}`}>

    <div className="company-title row">
      <div className="company-graphic col-xs-1 col-xs-offset-1">{name[0].toUpperCase()}</div>
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
      <p className="featured-review-highlight col-xs-10 col-xs-offset-1">
        “Informz allows me to create new career paths while strengthening my current skill sets”
      </p>
      <p className="featured-review-normal col-xs-10 col-xs-offset-1">
        I began working at Informz as an HTML template designer. Within months they were having me professionally compose music for promotional videos...
        <a className="see-all-reviews">See All Reviews</a>
      </p>

    </div>

  </div>
);

export default SingleCompany;
