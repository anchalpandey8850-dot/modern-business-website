import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Grow Your Business With Us</h1>
        <p>
          We provide high-quality solutions to help your business thrive in the digital world. Explore our services and start your journey today.
        </p>
        <Link to="/services">
          <button>Get Started</button>
        </Link>
      </section>
    </div>
  );
}





     