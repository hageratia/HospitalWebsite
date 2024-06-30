import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-logo text-center text-md-left mb-3 mb-md-0">
              <h2 className="bg-white">Logo</h2>
            </div>
            <div className="col-md-4 footer-links text-center text-md-left mb-3 mb-md-0">
              <span>Careers |</span>

              <span> About us</span>

              <div className="social-icons">
                <Link href="#">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="#">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="#">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>

            <div className="col-md-4 footer-contact text-center text-md-left">
              <ul>
                <li>Location</li>
                <li>Address</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-left">
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Policy & Privacy</Link>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <p>Designed by MG Designs</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
