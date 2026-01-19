import React from "react";

export default function About() {
  return (
    <div className="page">
      <section className="hero" style={{ padding: "40px", marginBottom: "40px" }}>
        <h1>About Us</h1>
        <p>
          We are a team of developers and designers creating modern digital solutions
          for businesses worldwide.
        </p>
      </section>

      <div className="features-grid">
        <div className="card" style={{ textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/150"
            alt="John Doe"
            style={{ borderRadius: "50%", marginBottom: "10px" }}
          />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="card" style={{ textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Jane Smith"
            style={{ borderRadius: "50%", marginBottom: "10px" }}
          />
          <h3>Jane Smith</h3>
          <p>Lead Designer</p>
        </div>
        <div className="card" style={{ textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Mike Johnson"
            style={{ borderRadius: "50%", marginBottom: "10px" }}
          />
          <h3>Mike Johnson</h3>
          <p>Senior Developer</p>
        </div>
      </div>
    </div>
  );
}
