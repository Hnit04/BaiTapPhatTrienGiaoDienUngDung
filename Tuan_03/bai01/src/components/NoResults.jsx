import React from "react";
import "./NoResults.css";
import noResultsImg from "../img/nothing.png"; 

function NoResults() {
  return (
    <div className="no-results">
      <h2>Sorry, no results were found for <strong>“cakescascasa”</strong></h2>
      <img src={noResultsImg} alt="No results found" className="no-results-img" />
      <p>We have all your Independence Day sweets covered.</p>

      <div className="suggestions">
        {["Sweet Cake", "Black Cake", "Pozole Verde", "Healthy food"].map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default NoResults;
