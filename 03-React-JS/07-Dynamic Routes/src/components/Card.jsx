import React from "react";

const Card = ({ title, thumbnail, price, showMore}) => {
  return (
    <div className="card">
      <img src={thumbnail} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>
        <button 
          className="card-button"
          onClick={showMore}
        >
          Show more..
        </button>
      </div>
    </div>
  );
};

export default Card;