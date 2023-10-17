import React from 'react';
import 'css/componentCss/managerCard.scss'

const CUSManagerCard = ({ name, title, description, imageUrl }) => {
    const imgUrl = require(`assets/images/managerPhoto/${imageUrl}`)
    return (
        <div className="manager-card">
        <div className="manager-details">
            <h2 className="manager-name">{name}</h2>
            <p className="manager-title">{title}</p>
            <p className="manager-description">{description}</p>
        </div>
        <img src={imgUrl} alt={name} className="manager-image" />
        </div>
      );
}

export default CUSManagerCard;