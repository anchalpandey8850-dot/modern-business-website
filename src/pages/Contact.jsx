import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, your message has been sent!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">
      <section className="hero" style={{ padding: "40px", marginBottom: "40px" }}>
        <h1>Contact Us</h1>
        <p>Send us a message and we will get back to you promptly.</p>
      </section>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "auto", display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
