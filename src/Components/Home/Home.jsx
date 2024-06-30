import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <section className="hero">
          <h1>Name Of The Hospital</h1>
          <div className="box"></div>
          <button>Book your visit</button>
          <p>
            Lorem ipsum dolor sit amet consectetur. Massa gravida eu viverra
            euismod nullam morbi nec facilisi mi. Lectus convallis magnis mollis
            justo quis. Varius platea eu sed pellentesque. Dolor arcu feugiat
            faucibus tortor ut consectetur massa tempor. Commodo et quisque
            imperdiet ultrices proin vel. Tellus praesent rhoncus nibh pretium
            amet ac nam. Ut parturient faucibus neque lorem.
          </p>
        </section>
        <section className="numbers">
          <h2>Hospital in Numbers</h2>
          <div className="numbers-grid">
            <div className="number-item fw-bold">
              <div className="icon">
                <i class="fa-solid fa-truck-medical"></i>
              </div>
              <p>10 Ambulances</p>
            </div>
            <div className="number-item fw-bold">
              <div className="icon">
                <i class="fa-solid fa-user-doctor"></i>
              </div>
              <p>80 Doctors</p>
            </div>
            <div className="number-item fw-bold">
              <div className="icon">
                <i class="fa-solid fa-capsules"></i>
              </div>
              <p>600 Medical Staff</p>
            </div>
            <div className="number-item fw-bold">
              <div className="icon">
                <i class="fa-solid fa-bed"></i>
              </div>
              <p>250 Beds</p>
            </div>
          </div>
        </section>
        <section className="contact container">
          <div className="row">
            <div className="col-md-6">
              {/* <div className="contact-form">
                <h2>Send A Message</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Type your Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Enter your message"
                      rows="3"
                    />
                  </div>
                  <button className="btn btn-dark" type="submit">
                    Send Your Message
                  </button>
                </form>
              </div> */}
              <div className="contacts-sec">
                <h2>Send A Message</h2>
                <div className="input-sec d-flex flex-column">
                  <input
                    className="form-control border-0 border-bottom py-3 position-relative"
                    placeholder="Your Name"
                    type="text"
                  />
                  <input
                    className="form-control border-0 border-bottom py-3 position-relative"
                    placeholder="Your Email"
                    type="email"
                  />
                  <input
                    className="form-control border-0 border-bottom py-3 position-relative"
                    placeholder="Type your Message"
                    type="text"
                  />
                </div>
                <button className="btn btn-dark mt-4" type="submit">
                  Send Your Message
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location-box">
                <div className="text-center">
                  <div className="location-icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <h3>Location</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
