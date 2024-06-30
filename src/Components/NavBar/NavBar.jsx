import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="logo">Logo</div>
          <nav className="top-nav">
            <Link href="#">Create Account</Link>
            <Link href="#" className="sign-out">
              Sign in
            </Link>
          </nav>
        </div>
        <nav className="main-nav">
          <Link href="#">Home</Link>
          <Link href="#">About us</Link>
          <Link href="#">Facilities</Link>
          <Link href="#">Center of Excellence</Link>
          <Link href="#">Patient Area</Link>
          <Link href="#">Medical Value Tourism</Link>
          <Link href="#">Medical Technologies</Link>
        </nav>
        <Link className="book-v text-decoration-none" href="#">
          <i className="fa-solid fa-bookmark"></i> Book Your Visit
        </Link>
      </div>
    </>
  );
}
