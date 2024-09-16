import React from "react";

const Recipe = ({ title, category, area, image, instructions }) => (
  <div className="recipe">
    <h3 className="meal-head">{title}</h3>
    <p>
      <strong>Category:</strong> {category}
    </p>
    <p>
      <strong>Area:</strong> {area}
    </p>
    <img src={image} className="image-size" alt={title} />
    <p className="recipe-details">{instructions}</p>
  </div>
);

export default Recipe;
