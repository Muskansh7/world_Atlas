import React from "react";
import {
  Globe,
  Users,
  TrendingUp,
  Sparkles,
  Zap,
  MapPin
} from "lucide-react";

// --- STATIC DATA ---
const countryData = [
  {
    id: 1,
    countryName: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    interestingFact: "The U.S. has the world's largest economy.",
  },
  {
    id: 2,
    countryName: "Canada",
    capital: "Ottawa",
    population: 37742154,
    interestingFact: "Canada has the longest coastline in the world.",
  },
  {
    id: 3,
    countryName: "Brazil",
    capital: "Brasília",
    population: 212559417,
    interestingFact:
      "It is home to the vast majority of the Amazon rainforest.",
  },
  {
    id: 4,
    countryName: "Australia",
    capital: "Canberra",
    population: 25499884,
    interestingFact:
      "More than 80% of its animals are unique to the continent.",
  },
  {
    id: 5,
    countryName: "China",
    capital: "Beijing",
    population: 1439323776,
    interestingFact:
      "Home to the Great Wall, one of the 'New 7 Wonders of the World'.",
  },
  {
    id: 6,
    countryName: "Germany",
    capital: "Berlin",
    population: 83783942,
    interestingFact: "It has over 1,500 different kinds of beer.",
  },
  {
    id: 7,
    countryName: "Japan",
    capital: "Tokyo",
    population: 126476461,
    interestingFact:
      "The Tokyo metropolitan area is the most populous in the world.",
  },
  {
    id: 8,
    countryName: "South Africa",
    capital: "Pretoria, Cape Town, Bloemfontein",
    population: 59308690,
    interestingFact:
      "It is the only country with three capital cities.",
  },
  {
    id: 9,
    countryName: "France",
    capital: "Paris",
    population: 65273511,
    interestingFact:
      "France is the world's most popular tourist destination.",
  },
];

// Format number: 1234567 → 1,234,567
const formatPopulation = (num) =>
  num.toLocaleString("en-US");

// Icon rotation
const getFactIcon = (id) => {
  const icons = [Globe, Users, TrendingUp, Sparkles, Zap, MapPin];
  return icons[(id - 1) % icons.length];
};

export const About = () => {
  return (
    <section className="about-section">

      {/* Title */}
      <h1 className="about-title">
        Interesting <span>Facts</span>
      </h1>

      {/* 4-column Grid */}
      <div className="facts-grid">
        {countryData.map((country) => {
          const Icon = getFactIcon(country.id);

          return (
            <div key={country.id} className="facts-card">

              {/* Icon + Name */}
              <div className="facts-header">
                <Icon size={28} className="fact-icon" />
                <h3>{country.countryName}</h3>
              </div>

              {/* Info */}
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {formatPopulation(country.population)}
              </p>

              {/* Fact */}
              <p className="fact-text">
                "{country.interestingFact}"
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
