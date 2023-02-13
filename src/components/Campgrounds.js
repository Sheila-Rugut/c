import React, { useEffect, useState } from 'react'
import "./Campgrounds.css";

function Campgrounds() {
  const [campground, setCampground] = useState([])

  // get campgrounds from API
  useEffect(() => {
    fetch(' http://localhost:5000/campgrounds')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCampground(data)
      })
  }, [])
  return (
    <div>
      
       
      
      <div className="filter">
        
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            name="location"
            // value={filter.location}
            // onChange={handleChange}
          >
            <option value="">All</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            name="location"
            // value={filter.location}
            // onChange={handleChange}
          >
            <option value="">All</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
       
      </div>
     
      <div className="destination-container">
        {/* <h2 className="section-title">Featured Destinations</h2>
        <p className="section-description">
          Check out some of our most popular camping spots
        </p> */}
 {campground.map((campground) =>
        <div className="destination-cards">
          <div className="destination-card">
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
          {/* <div className="destination-card">
            <img
              className="destination-card__image"
              src="https://uzamart.com/wp-content/uploads/2021/01/Camp-Carnellys-1024x683.jpg"
              alt="Camp Carnellys Lake Naivasha"
            />
            <h3 className="destination-card__title">
              {campground.name}
            </h3>
            <p className="destination-card__description">
              Enjoy a tranquil and scenic camping experience with breathtaking
              views of Lake Naivasha and stunning sunsets in a serene and
              peaceful environment.
            </p>
            <button className="destination-card__btn">Learn More</button>
          </div> */}
          {/* <div className="destination-card">
            <img
              className="destination-card__image"
              src="https://images.unsplash.com/photo-1571636240366-1606c4a13f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Shipton's Camp Ground"
            />
            <h3 className="destination-card__title">Shipton's Camp Ground</h3>
            <p className="destination-card__description">
              Take in the lush, scenic beauty of Mount Kenya on your next
              camping trip.
            </p>
            <button className="destination-card__btn">Learn More</button>
          </div> */}
        </div>
        )}
      </div>
      
    </div>
  );
}

export default Campgrounds;

