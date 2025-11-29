// src/Pages/Country.jsx
import React, { useEffect, useMemo, useState, useTransition } from "react";
import CountryCard from "../Components/Layout/CountryCard.jsx";
import { getCountryData } from "../api/postApi.jsx";

const PER_PAGE = 20;

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [page, setPage] = useState(1);

  const [isPending, startTransition] = useTransition();

  // Load countries
  useEffect(() => {
    startTransition(async () => {
      try {
        const { data } = await getCountryData();

        const normalized = data.map((c) => ({
          ...c,
          population: c.population ?? 0,
          region: c.region ?? "Unknown",
          capital: Array.isArray(c.capital) ? c.capital : ["N/A"],
          name: c.name ?? { common: "Unknown" }
        }));

        setCountries(normalized);
      } catch (err) {
        console.error("Error loading countries:", err);
      }
    });
  }, []);

  // Filter + Search + Sort
  const filtered = useMemo(() => {
    let list = [...countries];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((c) =>
        c.name.common.toLowerCase().includes(q)
      );
    }

    if (region !== "All") {
      list = list.filter((c) => c.region === region);
    }

    switch (sortBy) {
      case "name-asc":
        list.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        break;
      case "name-desc":
        list.sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        );
        break;
      case "pop-asc":
        list.sort((a, b) => a.population - b.population);
        break;
      case "pop-desc":
        list.sort((a, b) => b.population - a.population);
        break;
      default:
        break;
    }

    return list;
  }, [countries, query, region, sortBy]);

  // Pagination
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / PER_PAGE));

  const pageData = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  // Unique region list
  const regions = useMemo(() => {
    const setR = new Set(
      countries.map((c) => c.region).filter(Boolean)
    );
    return ["All", ...Array.from(setR).sort()];
  }, [countries]);

  return (
    <div className="container">

      {/* SEARCH + FILTERS */}
      <div className="section-searchFilter">
        <div className="left">
          <input
            className="input"
            placeholder="Search countries..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />

          <select
            className="select"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              setPage(1);
            }}
          >
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>

          <select
            className="select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name-asc">Name ↑</option>
            <option value="name-desc">Name ↓</option>
            <option value="pop-desc">Population ↓</option>
            <option value="pop-asc">Population ↑</option>
          </select>
        </div>
      </div>

      {/* INFO BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1.4rem",
          color: "var(--muted)"
        }}
      >
        <span>{total.toLocaleString()} countries</span>
        <span>Page {page} / {pages}</span>
      </div>

      {/* GRID */}
      <ul className="country-grid">
        {isPending ? (
          <p className="u-muted">Loading…</p>
        ) : pageData.length ? (
          pageData.map((c) => (
            <CountryCard key={c.name.common} country={c} />
          ))
        ) : (
          <p className="u-muted">No countries found.</p>
        )}
      </ul>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          className="page-btn"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>

        {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            className={`page-btn ${p === page ? "active" : ""}`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}

        <button
          className="page-btn"
          disabled={page === pages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Country;
