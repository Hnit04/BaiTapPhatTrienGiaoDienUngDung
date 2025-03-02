import React, { useState } from "react";
import "./FiltersSidebar.css";
import timeFilterImage from "../img/slider.png";
import rating1 from "../img/rating_1.png";
import rating2 from "../img/rating_2.png";
import rating3 from "../img/rating_3.png";
import rating4 from "../img/rating_4.png";
import rating5 from "../img/rating_5.png";

const FiltersSidebar = () => {
  
  const [openSections, setOpenSections] = useState({
    type: true,
    time: true,
    rating: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="filters-sidebar">
      <h3>⚙️ FILTERS</h3>


      <div className="filter-section">
        <h4 onClick={() => toggleSection("type")} className="section-title">
          Type
          <span className={`arrow ${openSections.type ? "open" : ""}`}>&#9650;</span>
        </h4>
        {openSections.type && (
          <div className="filter-options">
            <div className="column">
              <label><input type="checkbox" /> Pan-fried</label>
              <label><input type="checkbox" /> Grilled</label>
              <label><input type="checkbox" /> Sauteed</label>
              <label><input type="checkbox" /> Steamed</label>
            </div>
            <div className="column">
              <label><input type="checkbox" /> Stir-fried</label>
              <label><input type="checkbox" /> Roasted</label>
              <label><input type="checkbox" /> Baked</label>
              <label><input type="checkbox" /> Stewed</label>
            </div>
          </div>
        )}
      </div>

   
      <div className="filter-section">
        <h4 onClick={() => toggleSection("time")} className="section-title">
          Time
          <span className={`arrow ${openSections.time ? "open" : ""}`}>&#9650;</span>
        </h4>
        {openSections.time && (
          <img src={timeFilterImage} alt="Time Filter" className="filter-image" />
        )}
      </div>


      <div className="filter-section">
        <h4 onClick={() => toggleSection("rating")} className="section-title">
          Rating
          <span className={`arrow ${openSections.rating ? "open" : ""}`}>&#9650;</span>
        </h4>
        {openSections.rating && (
          <div className="rating-options single-column">
            <label><input type="checkbox" /><img src={rating5} alt="5 stars" /></label>
            <label><input type="checkbox" /><img src={rating4} alt="4 stars" /></label>
            <label><input type="checkbox" /><img src={rating3} alt="3 stars" /></label>
            <label><input type="checkbox" /><img src={rating2} alt="2 stars" /></label>
            <label><input type="checkbox" /><img src={rating1} alt="1 star" /></label>
          </div>
        )}
      </div>

      <button className="apply-btn">Apply</button>
    </div>
  );
};

export default FiltersSidebar;
