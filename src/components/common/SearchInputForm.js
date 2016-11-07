// @flow
import React, { Component } from 'react';

type Props = {
  defaultInput: string,
  handleInputChange: Function,
  customClass: string
}

class SearchInputForm extends Component {
  props: Props;

  state: {
    currentInput: string,
  }

  static defaultProps: { defaultInput: '', customClass: 'search-input-container' };

  handleOnChange: () => void;
  setCustomClass: () => string;

  constructor(props: Props) {
    super(props);
    this.state = {
      currentInput: props.defaultInput,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    const inputValue = this.refs.searchInput.value;
    const hasNotChangedBefore = this.state.currentInput === this.props.defaultInput;
    this.props.handleInputChange(this.props.defaultInput, inputValue, hasNotChangedBefore);
    this.setState({ currentInput: inputValue });
  }

  render() {
    return (
      <div className={this.props.customClass}>
        <input ref="searchInput" type="text" onChange={this.handleOnChange} placeholder={this.props.defaultInput} />
      </div>
    );
  }
}

SearchInputForm.defaultProps = {
  defaultInput: '',
  customClass: 'search-input-container'
}

export default SearchInputForm;
