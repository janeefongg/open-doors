import React, { Component } from 'react';
import ProgressArc from './progress-arc';
// import './company.scss';

class CompanyProfile extends Component {
  render() {
    return (
      <div>
        <h1>Company Profile Goes Here</h1>
        <div className="stats-container">
          Female
          <ProgressArc
            height={150}
            width={150}
            innerRadius={50}
            outerRadius={55}
            id="d3-arc"
            duration={1000}
            backgroundColor="#e6e6e6"
            foregroundColor="#E338A3"
            percentComplete={.28}
          />
          Male
          <ProgressArc
            height={150}
            width={150}
            innerRadius={50}
            outerRadius={55}
            id="d3-arc"
            duration={1000}
            backgroundColor="#e6e6e6"
            foregroundColor="#E338A3"
            percentComplete={.78}
          />
        </div>
      </div>
    );
  }
}

export default CompanyProfile;
