import React from "react";


const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Home Owner",
      feedback:
        "Working with this team was seamless. They turned my dream house into reality with top-notch quality.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Apartment Owner",
      feedback:
        "Professional, transparent, and timely delivery. I highly recommend them for construction projects.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Verma",
      role: "Business Owner",
      feedback:
        "Our office renovation was handled perfectly. Excellent attention to detail and on-time handover.",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.img} alt={t.name} />
            <p className="feedback">“{t.feedback}”</p>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
