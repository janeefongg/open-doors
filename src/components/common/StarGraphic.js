import React from 'react';
import FullStar from '../../assets/star-full.svg';
import HalfStar from '../../assets/star-half.svg';

const StarGraphic = ({ stars }) => {
  const starCount = Number(stars);
  const starArr = [];
  for (var i = 1; i < Number(stars); i++) {
    starArr.push("full");
  }
  if (starCount - Math.floor(starCount) > 0.2) {
    starArr.push("half");
  }
  return (
    <div>
      {starArr.map((starState, idx) => {
        if (starState === "full") {
          starState = FullStar;
        } else if (starState === "half") {
          starState = HalfStar;
        }
        return <img src={starState} key={idx} />;
      })}
    </div>
  );
}

export default StarGraphic;
