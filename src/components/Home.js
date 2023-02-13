import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="home-container">
        <div className="hero">
          <div className="hero-content">
            <h1>Discover the Great Outdoors</h1>
            <p className="hero__subtitle">
              Find the best camping spots, gear and tips for your next
              adventure.{" "}
            </p>
            <button className="hero-button" onClick={() => navigate("/about")}>
              Explore more
            </button>
          </div>
        </div>

        <div className="featured-destinations">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-description">
            Check out some of our most popular camping spots
          </p>
          <div className="destination-cards">
            <div className="destination-card">
              <img
                className="destination-card__image"
                src="https://images.unsplash.com/photo-1654094464002-25f6850454c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=" Aberdare National Park"
              />
              <h3 className="destination-card__title">
                Aberdare National Park
              </h3>
              <p className="destination-card__description">
                Discover the breathtaking beauty of Aberdare's cliffs and
                waterfalls.
              </p>
              <button className="destination-card__btn">Learn More</button>
            </div>
            <div className="destination-card">
              <img
                className="destination-card__image"
                src="https://uzamart.com/wp-content/uploads/2021/01/Camp-Carnellys-1024x683.jpg"
                alt="Camp Carnellys Lake Naivasha"
              />
              <h3 className="destination-card__title">
                Camp Carnellys Lake Naivasha
              </h3>
              <p className="destination-card__description">
                Enjoy a tranquil and scenic camping experience with breathtaking
                views of Lake Naivasha and stunning sunsets in a serene and peaceful
                environment.
              </p>
              <button className="destination-card__btn">Learn More</button>
            </div>
            <div className="destination-card">
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
            </div>
          </div>
        </div>
        <div className="featured-gear">
          <h2 className="section-title">Features & Gear</h2>
          <p className="section-description">
            Discover the best camping gear to make your next adventure a
            success
          </p>

          <div className="featured-gear-cards">
            {/* <div className="feature-card">
              <img
                className="feature-card__image"
                src="feature1.jpg"
                alt="Feature 1"
              />
              <h3 className="feature-card__title">Feature 1</h3>
              <p className="feature-card__description">
                Description of Feature 1 goes here
              </p>
            </div>

            <div className="feature-card">
              <img
                className="feature-card__image"
                src="feature2.jpg"
                alt="Feature 2"
              />
              <h3 className="feature-card__title">Feature 2</h3>
              <p className="feature-card__description">
                Description of Feature 2 goes here
              </p>
            </div>

            <div className="feature-card">
              <img
                className="feature-card__image"
                src="feature3.jpg"
                alt="Feature 3"
              />
              <h3 className="feature-card__title">Feature 3</h3>
              <p className="feature-card__description">
                Description of Feature 3 goes here
              </p>
            </div> */}

            <div className="gear-card">
              <img className="gear-card__image" src="gear1.jpg" alt="Gear 1" />
              <h3 className="gear-card__title">Gear 1</h3>
              <p className="gear-card__description">
                Description of Gear 1 goes here
              </p>
              <button className="gear-card__btn">Learn More</button>
            </div>

            <div className="gear-card">
              <img className="gear-card__image" src="gear2.jpg" alt="Gear 2" />
              <h3 className="gear-card__title">Gear 2</h3>
              <p className="gear-card__description">
                Description of Gear 2 goes here
              </p>
              <button className="gear-card__btn">Learn More</button>
            </div>

            <div className="gear-card">
              <img className="gear-card__image" src="gear3.jpg" alt="Gear 3" />
              <h3 className="gear-card__title">Gear 3</h3>
              <p className="gear-card__description">
                Description of Gear 3 goes here
              </p>
              <button className="gear-card__btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
