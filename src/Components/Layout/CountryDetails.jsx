// src/Components/Layout/CountryDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryData } from "../../api/postApi";

const CountryDetails = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await getCountryData();

      const found = data.find(
        (c) => c.name.common.toLowerCase() === decodedName.toLowerCase()
      );

      setCountry(found || null);
      setLoading(false);
    }

    load();
  }, [decodedName]);

  if (loading) return <p style={{ padding: "2rem" }}>Loading...</p>;

  if (!country) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Country not found</h2>
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
    );
  }

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const capital = country.capital?.[0] || "N/A";

  return (
    <div className="details-wrapper">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* FLEX LAYOUT */}
      <div className="details-row">

        {/* LEFT: FLAG */}
        <div className="flag-box">
          <img
            src={country.flags?.png || country.flags?.svg}
            alt={country.name.common}
            className="flag-img"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="info-box">
          <h1 className="country-title">{country.name.common}</h1>

          <ul className="info-list">
            <li><strong>Region:</strong> {country.region}</li>
            <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
            <li><strong>Capital:</strong> {capital}</li>
            <li><strong>Languages:</strong> {languages}</li>
          </ul>
        </div>
      </div>

      {/* GOOGLE MAPS */}
      <div className="map-box">
        <iframe
          title="map"
          className="map-frame"
          loading="lazy"
          src={`https://www.google.com/maps?q=${country.name.common}&output=embed`}
          allowFullScreen
          
        ></iframe>
      </div>
    </div>
  );
};

export default CountryDetails;
