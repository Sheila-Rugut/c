import React, { useState } from "react";
import "./FilterCampground.css";

const Filter = ({ campground }) => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();

    
      campground.filter(
        (campground) =>
          (location === "" || campground.location === location) &&
          (price === 0 || campground.price_per_night <= price)
      )
    
  };

  return (
    <form className="filter-form" onSubmit={handleFilterSubmit}>
      <label className="filter-label">
        Location:
        <select value={location} onChange={handleLocationChange}>
          <option value="">All</option>
          <option value="Wyoming, Montana, Idaho">Oregon</option>
          <option value="Oregon">California</option>
          <option value="California">Sagana</option>
        </select>
      </label>
      <br />
      <label className="filter-label">
        Price:
        <select value={price} onChange={handlePriceChange}>
          <option value={0}>All</option>
          <option value={20}>$20</option>
          <option value={25}>$25</option>
          <option value={30}>$30</option>
        </select>
      </label>
      <br />
      <button
        className="filter-button"
        type="submit"
        key={campground.id}
        onClick={handleFilterSubmit}
      >
        Filter
      </button>
    </form>
  );
};

export default Filter;
