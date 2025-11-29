import React from "react";
import { ArrowRight, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-container animate-hero">

        {/* TOP BADGE */}
        <div className="hero-badge">
          <Globe2 size={18} />
          Explore the Globe
        </div>

        {/* TITLE */}
        <h1 className="hero-heading">
          Discover the World's
          <br />
          <span className="hero-gradient">Fascinating Facts</span>
        </h1>

        {/* SUBTEXT */}
        <p className="hero-subtext">
          Explore comprehensive data, demographics, and unique insights about
          countries across the globe. Begin your journey of learning and discovery
          today.
        </p>

        {/* CTA BUTTON */}
        <button className="hero-cta" onClick={() => navigate("/country")}>
          Start Exploring
          <ArrowRight size={20} />
        </button>

      </div>
    </section>
  );
};

export default HeroSection;
