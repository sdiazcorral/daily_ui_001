import React from 'react';

const Button = (props) => {
  return (
    <button className={props.class_name}>{props.label}</button>
  )
}

export default Button;
