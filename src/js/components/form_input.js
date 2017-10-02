import React from 'react';

const FormInput = (props) => {
    let label = null;
    if (props.has_label) {
      label = <label htmlFor={props.type_name}>{props.label_name}</label>;
    }
    return (
      <div>
        {label}
        <input
          className={props.class_name}
          type={props.type_name}
          name={props.name_name}
        />
      </div>
    )
}

export default FormInput;
