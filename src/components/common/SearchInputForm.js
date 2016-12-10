import React, { Component } from 'react';

type Props = {
  defaultInput: string,
  handleInputChange: Function,
  customClass: string,
  label: string
}

class SearchInputForm extends Component {
  props: Props;

  state: {
    currentInput: string,
  }

  static defaultProps: { defaultInput: '' };

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
        <div className='search-input-label'>
          {this.props.label}
        </div>
        <input className='input-form' ref='searchInput' type='text' onChange={this.handleOnChange} placeholder={this.props.defaultInput} />
      </div>
    );
  }
}

SearchInputForm.defaultProps = {
  defaultInput: '',
  customClass : 'search-input-container',
}

export default SearchInputForm;
