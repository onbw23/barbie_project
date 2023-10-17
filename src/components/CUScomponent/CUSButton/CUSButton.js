import React from 'react';
import 'css/componentCss/button.scss';

const CUSButton = ({ className, labelText, onClick }) => {
  return (
    <button className={`button button-dark ${className}`} onClick={onClick}>
      {labelText}
    </button>
  );
}

export default CUSButton;
