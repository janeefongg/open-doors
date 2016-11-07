// @flow
import React from 'react';

type Props = {
  text: string,
  handleOnClick: function,
}

const Button = (props: Props) => {
  const setButtonClass = props.customClass || "btn";
  return (
    <button type="button" className={setButtonClass} onClick={props.handleOnClick}>
      {props.text}
    </button>
  )
}

Button.defaultProps = {
  customClass: "btn",
}

export default Button;
