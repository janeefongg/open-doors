import React, { Component } from 'react';
import './review.scss';
import Header from '../common/Header';
import InputForm from '../common/InputForm';
import Button from '../common/Button';
import Slider from './Slider';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(message) {
    this.setState({ message });
  }

  handleOnClick() {
    console.log('Post review!');
  }

  renderSliders() {
    const sliders = ['Interactions', 'Harassment', 'Advancement', 'Family Support', 'Work Life Balance', 'Equal Pay'];
    return sliders.map((item, i) => {
      return (
        <div className="row" key={i}>
          <div className="col-xs-12">
            <div className="slider-container">
              <span className="slider-label">{item}</span>
              <Slider />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="review-page">
        <div className="row">
          <div className="col-xs-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-3 col-xs-6">
            <div className="row">
              <div className="col-xs-12 center-xs">
                <span className="review-title">{`Write a Review for "Digital Insight"`}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <InputForm saveData={this.handleOnChange} placeholder='Write a little review' />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="rate-company-container">
                  Leave a 1-5 Review
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="sliders-container">

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 button-container">
                <Button customClass='lg-btn' text='Post Your Review' handleOnClick={this.handleOnClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
