import React from "react";
import "./Contact.css";
import { FiPhoneIncoming } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

function finalcontact() {
  return (
    <section className="contact1" id="contact">
      <div classsName="title1">
        <h2 style={{ color: "white", fontSize: "2.5rem" }}>Contact Us</h2>
      </div>
      <div className="container">
        <div className="contactinfo">
          <div className="box">
            <icon>
              <FiPhoneIncoming size="30px" />
            </icon>
            <div className="text1">
              <h3>Give us a call</h3>
              <p>+216 23 23 8 666 / +216 27 618 164</p>
            </div>
          </div>
          <div className="box">
            <icon>
              <HiOutlineMail size="30px" />
            </icon>
            <div className="text1">
              <h3>Send us an E-mail</h3>
              <p>day1studi0@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <icon>
              <GoLocation size="30px" />
            </icon>
            <div className="text1">
              <h3>Come see us</h3>
              <p>Innovate CoWorking space n°3 2074 Mourouj 1</p>
            </div>
          </div>
        </div>
        <div className="contactform">
          <form>
            <h2>Hello .. write your message</h2>
            <div className="inputbox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputbox">
              <input type="email" name="" required="required" />
              <span>E-mail address</span>
            </div>
            <div className="inputbox">
              <textarea required="required" />
              <span>Your message...</span>
            </div>
            <div className="inputbox">
              <input type="submit" value="Send" required="required" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default finalcontact;
