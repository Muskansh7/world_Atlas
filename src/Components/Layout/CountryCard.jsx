// src/Components/Layout/CountryCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  if (!country) return null;

  const name = country.name?.common || "Unknown";
  const population = country.population ?? 0;
  const region = country.region || "N/A";
  const capital = Array.isArray(country.capital) ? country.capital[0] : "N/A";

  const flagSrc =
    country.flags?.png ||
    country.flags?.svg ||
    "";

  const safeURL = encodeURIComponent(name);

  return (
    <li className="country-card">
      <div className="card-inner">

        {/* FLAG */}
        <img
          src={flagSrc}
          alt={`${name} flag`}
          className="flag"
          loading="lazy"
        />

        {/* NAME */}
        <p className="name">
          {name.length > 14 ? name.slice(0, 14) + "..." : name}
        </p>

        {/* POPULATION */}
        <p className="meta-row">
          <strong>Population:</strong>{" "}
          {population.toLocaleString()}
        </p>

        {/* REGION */}
        <p className="meta-row">
          <strong>Region:</strong> {region}
        </p>

        {/* CAPITAL */}
        <p className="meta-row">
          <strong>Capital:</strong> {capital}
        </p>

        {/* READ MORE */}
        <Link className="read-more" to={`/country/${safeURL}`}>
          Read More
        </Link>
      </div>
    </li>
  );
};

export default CountryCard;
