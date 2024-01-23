import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Contact = () => {
  return (
    <div className="">
      <div className="container contacts">
        <div className="row" id="row-footer">
          <div className="col-lg-1"></div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-link">
              <h3 className="footer-title h2">Contact Us</h3>
              <ul className="contact-details">
                <li>
                  <a href="mailto:ieeecsiem@iem.edu.in" className="text-center email-here">Email Here</a>
                </li>
                <li>
                  Whatsapp:
                  <ul className="whatsapp">
                    <li><a href="https://wa.me/9073092005">Tiyash Mukherjee</a></li>
                    <li><a href="https://wa.me/9748122500">Ananya Banerjee</a></li>
                  </ul>
                </li>
                </ul>
                <ul>
                <li>
                  <p>Social Media</p>
                </li>
                <li>
                <div className="social-icon flex gap-10" >
                    <a href="https://www.linkedin.com/company/ieee-computer-society-iem/">
                      <img src={navIcon1} alt="Icon" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61553446581446">
                      <img src={navIcon2} alt="Icon" />
                    </a>
                    <a href="https://www.instagram.com/ieeecsiem_official/">
                      <img src={navIcon3} alt="Icon" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <iframe
              id="gmap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13129.138825675716!2d88.42915905440138!3d22.57012860047784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a90e2f3b89%3A0xd13b26d16803ab9b!2sIEM%2C%20Management%20House!5e0!3m2!1sen!2sin!4v1635278961661!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
