import React from "react";

export default function Portfolio() {
  return (
    <div className="page">
      <section className="hero" style={{ padding: "40px", marginBottom: "40px" }}>
        <h1>Our Portfolio</h1>
        <p>Some of our recent projects demonstrating our skills.</p>
      </section>

      <div className="features-grid">
        <div className="card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Project 1"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
          />
          <h3>Project 1</h3>
          <p>Responsive business website built with React.</p>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Project 2"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
          />
          <h3>Project 2</h3>
          <p>UI/UX design for an e-commerce platform.</p>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Project 3"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
          />
          <h3>Project 3</h3>
          <p>SEO optimized corporate website.</p>
        </div>
      </div>
    </div>
  );
}
