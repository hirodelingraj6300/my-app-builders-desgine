import React from "react";


const OurServices = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our Construction Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img
            src="/img/img_villa_88.avif"
            alt=""
          />
          <h3>Luxury Villa</h3>
          <p className="para">Modern and cozy luxury villa interiors tailored for you.</p>
        </div>

        <div className="service-card">
          <img
            src="/img/img_villa.webp"
            alt=""
          />
          <h3>Commercial Construction</h3>
          <p className="para">Relaxing and stylish commercial spaces designed for productivity.</p>
        </div>

       
      </div>
    </section>
  );
};

export default OurServices;
