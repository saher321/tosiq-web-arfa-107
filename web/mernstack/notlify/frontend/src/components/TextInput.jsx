import React from 'react';

const TextInput = (props) => {
  const { type = "text", hint, className, ...otherProps } = props;

  return (
    <input
      {...otherProps}
      type={type}
      placeholder={hint}
      className={className}
    />
  );
};

export default TextInput;