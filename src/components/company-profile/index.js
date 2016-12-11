import React, { Component } from 'react';
import ProgressArc from './progress-arc';
import StatBar from './stat-bar';
// import './company.scss';

class CompanyProfile extends Component {
  render() {
    return (
      <div>
        <h1>Company Profile Goes Here</h1>
        <div className="stats-container row">
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
          <div className="stat-bar-container col-xs-2">
            <StatBar
              rating={341}
              label="Equal Pay"
            />
          </div>
          <div className="stat-bar-container col-xs-2">
            <StatBar
              rating={388}
              label="Harassment"
            />
          </div>
          <div className="stat-bar-container col-xs-2">
            <StatBar
              rating={480}
              label="Advancement"
            />
          </div>
          <div className="stat-bar-container col-xs-2">
            <StatBar
              rating={379}
              label="Family Support"
            />
          </div>
          <div className="stat-bar-container col-xs-2">
            <StatBar
              rating={411}
              label="Work Life Balance"
            />
          </div>
          <div className="stat-bar-container col-xs-2">
            <StatBar
              rating={425}
              label="Interactions"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyProfile;
