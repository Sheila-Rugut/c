import React, { useRef } from "react";
import "./Contact.css";
//import map_image from "../img/map.png"

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  return (
    <div className="contact">
      <div className="form">
        <h3 className="contact-title">Send us a Message</h3>
        <form>
          <div className="labels">
            <br />
            <input
              type="text"
              id="contact-details"
              placeholder="Full Name"
              required
              ref={nameRef}
            />
          </div>
          <div className="labels">
            <br />
            <input
              type="email"
              id="contact-details"
              placeholder="me@example.com"
              required
              ref={emailRef}
            />
          </div>
          <b>
            <div className="labels">
              <br />
              <textarea
                type="text"
                id="usermessage"
                placeholder="Enter your message here"
                style={{
                  height: "100px",
                  width: "98%",
                  borderRadius: "12px",
                  padding: "15px",
                }}
                defaultValue={""}
                ref={messageRef}
              />
            </div>
            <div className="btnclassName">
              <button type="submit" id="btn" value="submit">
                Submit
              </button>
            </div>
          </b>
        </form>
      </div>
      <b></b>
    </div>
  );
}

export default Contact;
