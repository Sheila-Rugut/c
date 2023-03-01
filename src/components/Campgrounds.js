import React, { useEffect, useState } from 'react'
import "./Campgrounds.css";
import FilterCampground from "./FilterCampground";

function Campgrounds() {
  const [campground, setCampground] = useState([])

  // get campgrounds from API
  useEffect(() => {
    fetch("https://camp-haven-api.vercel.app/campgrounds")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCampground(data);
      });
  }, [])
  return (
    <div className="destination-container">
      <FilterCampground campground={campground} />

      <div className="destination-cards">
        {campground.map((campground) => (
          <div className="destination-card" key={campground.id}>
            <img
              className="destination-card__image"
              src={campground.image_url}
              alt=" Aberdare National Park"
            />
            <h3 className="destination-card__title">{campground.name}</h3>
            <p className="destination-card__description">
              {campground.description}
            </p>
            <button className="destination-card__btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campgrounds;

