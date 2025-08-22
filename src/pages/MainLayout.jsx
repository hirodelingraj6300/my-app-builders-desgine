import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import TestimonialSection from "../components/TestimonialSection";
import ProjectShowcase from "../components/ProjectShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustTimeline from "../components/TrustTimeline";
import ContactFooter from "../components/ContactFooter";


const MainLayout = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurServices />
      <WhyChooseUs /> 
      <ProjectShowcase />      
      <TrustTimeline />
      <TestimonialSection />
      <ContactFooter />
    </div>
  );
};

export default MainLayout;
