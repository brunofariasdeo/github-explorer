import React from 'react';
import './styles.scss';

type Props = {
  text: string;
  type: "button"|"submit";
}

const ButtonIcon = ({text, type}:Props) => (
  <div className="d-flex">
    <button type={type} className = "btn btn-primary text-decoration-none">
      <h5>{text}</h5>
    </button>
  </div>
);

export default ButtonIcon; 