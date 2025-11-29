// src/App.jsx
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Components/UI/Footer.jsx";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // THEME (light/dark)
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Load country data
  useEffect(() => {
    fetch("/data/countries-light.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      {/* =============================== HEADER =============================== */}
      <header className="main-header">
        <div className="header-inner">
          
          {/* LOGO */}
          <h1 className="logo">WorldAtlas</h1>

          {/* NAVIGATION */}
          <nav className="menu-web">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/country">Country</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          {/* RIGHT SIDE: THEME SWITCH */}
          <div className="header-right">
            <button className="theme-btn" onClick={() => setDark(!dark)}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

        </div>
      </header>
      {/* =========================== END HEADER =============================== */}


      <main className="page-offset">
        <Outlet context={{ countries, loading }} />
      </main>

      <Footer />
    </>
  );
};

export default App;
