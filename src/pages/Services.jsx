export default function Services() {
  return (
    <div className="page">
      {/* Centered hero-style heading */}
      <div className="services-hero-container">
        <h1 className="services-hero">Our Services</h1>
      </div>

      <div className="services-container">
        <div className="card">
          <h3>Web Development</h3>
          <p>Modern, responsive websites with the latest technologies.</p>
        </div>
        <div className="card">
          <h3>Mobile Apps</h3>
          <p>Beautiful and functional apps for iOS and Android devices.</p>
        </div>
        <div className="card">
          <h3>UI/UX Design</h3>
          <p>Intuitive and engaging user experiences that convert.</p>
        </div>
        <div className="card">
          <h3>SEO & Marketing</h3>
          <p>Optimizing your online presence for growth and visibility.</p>
        </div>
        <div className="card">
          <h3>Cloud Solutions</h3>
          <p>Scalable and secure cloud-based infrastructure services.</p>
        </div>
      </div>
    </div>
  );
}
