import React from "react";


const ProjectShowcase = () => {
  const projects = [
    {
      title: "Elegant Outside. Warm Inside",
      img: "/img/home_1.jpg",
    },
    {
      title: "Comfort Meet Classic",
      img: "/img/home_2.jpg",
    },
    {
      title: "Modern Design. Homely Feel",
      img: "/img/home_3.jpg",
    },
    // {
    //   title: "Commercial Complex",
    //   img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
    // },
  ];

  return (
    <section className="project-showcase">
      <h2>Our Recent Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
