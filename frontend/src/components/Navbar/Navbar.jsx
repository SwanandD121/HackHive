import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logoforlight from "../../assets/logo.svg";
import logofordark from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  
  // FOR DARK MODE
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('light'); // Set to 'light' if preferred color scheme is dark
    } else {
      setTheme('dark'); // Set to 'dark' if preferred color scheme is light or not specified
    }

  }, [])

  useEffect(() =>{
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark"? "light" : "dark");
  };
  // FOR DARK MODE

  return (
    <div className="navbar dark:text-white">
      <div className="logo">
        <a href="/">
          <img src={theme === "dark" ? logofordark : logoforlight} alt="" />
        </a>
      </div>
      <div className="navbar-options">
        <li>
          <a href="/hackathons">Hackathon</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </div>
      <div className="navbar-buttons">
        {/* <button onClick={() => toggleDark()}>Dark</button> */}

        {/* FOR DARK MODE */}
            <label class="switch" onChange={handleThemeSwitch}>
              <input type="checkbox"/>
              <span class="slider"></span>
            </label>
        {/* FOR DARK MODE */}

        <button>Host</button>
        <button
          onClick={() => {
            navigate("/login");
          }}>
          Log In
        </button>
      </div>
    </div>
  );
}
