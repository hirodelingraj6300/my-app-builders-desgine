import React from "react";


const WhyChooseUs = () => {
  const reasons = [
    {
      title: "20+ Years Experience",
      desc: "We bring decades of expertise in construction and design.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      title: "On-Time Delivery",
      desc: "We ensure timely completion without compromising quality.",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
    },
    {
      title: "Quality Materials",
      desc: "We use only trusted, high-grade materials for durability.",
      img: "https://cdn-icons-png.flaticon.com/512/679/679720.png"
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden costs. Everything is clear and upfront.",
      img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
    }
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="reasons-grid">
        {reasons.map((item, index) => (
          <div className="reason-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
