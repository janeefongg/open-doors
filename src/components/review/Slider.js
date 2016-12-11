import React, { Component } from 'react';
import Rcslider from 'rc-slider'
import './Slider.scss';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnAfterChange(val) {
    this.props.onAfterChange(val);
  }

  handleOnChange(val) {
    console.log('val --- ', val);
    this.setState({ value: val });
  }

  render() {
    return (
      <Rcslider
        min={0}
        max={100}
        value={this.state.value}
        onChange={this.handleOnChange}
        defaultValue={0}
      />
    );
  }
}

export default Slider;