import React from "react";
import styles from "./styles.css";

const Recipe = ({ title, category, area, image, instructions }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="recipe-card">
      <h3 className="meal-head">{title}</h3>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Area:</strong> {area}
      </p>
      <img src={image} className="image-size" alt={title} />
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide mealDetails" : "ShowMealDetails"}
      </button>
      {showDetails && (
        <div className="recipe-instructions">
          <h3>Instructions:</h3>
          <p>{instructions}</p>
        </div>
      )}
    </div>
  );
};
export default Recipe;
