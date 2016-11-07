// @flow
import React, { Component } from 'react';

type Props = {
  defaultInput: string,
  handleInputChange: Function
}

class SearchInputForm extends Component {
  props: Props;

  state: {
    currentInput: string,
  }

  static defaultProps: { defaultInput: '' };

  handleOnChange: () => void;

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
      <input ref="searchInput" type="text" onChange={this.handleOnChange} placeholder={this.props.defaultInput} />
    );
  }
}

SearchInputForm.defaultProps = {
  defaultInput: '',
}

export default SearchInputForm;
