// @flow
import React from 'react';

type Props = {
  text: string,
  handleClick: Function,
}

const Button = (props: Props) => {
  const setButtonClass = props.customClass || "btn";
  return (
    <button type="button" className={setButtonClass} onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

Button.defaultProps = {
  customClass: "btn",
}

export default Button;
