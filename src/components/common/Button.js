// @flow
import React from 'react';

type Props = {
  customClass: string,
  children: Element,
  handleClick: Function
}

const Button = (props: Props) => {
  const buttonClass = () => props.customClass ? "btn " + props.customClass : "btn";
  return (
    <button type="button" className={buttonClass()} onClick={props.handleClick}>
      {props.children}
    </button>
  )
}

export default Button;
