import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="content-section">
          <div className="title"></div>
          <div className="content">
            <h1>About Us</h1>
            <p>
              {" "}
              Welcome to Camp haven, your ultimate camping destination!
              <br /> We are a company that provides campers with access to a
              diverse range of stunning camping grounds across the country. Our
              mission is to connect nature lovers with the great outdoors and
              provide them with the best camping experience possible. With a
              passion for the wilderness and years of experience in the camping
              industry, our team is dedicated to providing you with a memorable
              and enjoyable stay.
            </p>
            <p>
              {" "}
              At Camp haven, we offer a variety of camping options to suit every
              taste, from serene lakeside campsites to rugged backcountry spots.
              Our extensive network of camping grounds includes well-equipped
              sites with modern amenities and breathtaking natural
              surroundings.We believe that camping is a great way to escape from
              the hustle and bustle of everyday life and connect with nature,
              that's why we strive to make your camping experience as smooth and
              stress-free as possible, from the booking process to the moment
              you pitch your tent.
            </p>
            <p>
              Thank you for choosing Camp haven and we can't wait to host you on
              your next outdoor adventure!
            </p>
            <button type="submit" value="submit">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Home"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
