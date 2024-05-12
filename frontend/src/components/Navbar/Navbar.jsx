import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logoforlight from "../../assets/logoforlight.svg";
import logofordark from "../../assets/logofordark.svg";
import logodarkpng from "../../assets/logodarkpng.png"
import { useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


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
          <img src={theme === "dark" ? logodarkpng : logoforlight} alt="" />
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
      <div className="navbar-buttons flex items-center justify-center">

        {/* FOR DARK MODE */}
            {/* <label class="switch" onChange={handleThemeSwitch}>
              <input type="checkbox"/>
              <span class="slider"></span>
            </label> */}
        {/* FOR DARK MODE */}

        <button>Host</button>
        <button
          onClick={() => {
            navigate("/login");
          }}>
          Log In
        </button>
        <div  onClick={handleThemeSwitch} className="text-3xl border rounded-full border-lg border-black dark:border dark:border-lg dark:rounded-full dark:border-blue-500 p-1 cursor-pointer hover:scale-110 transition-all dark:text-yellow-400 text-center m-4">{theme === "dark" ? <MdLightMode /> : <MdDarkMode />}</div>
      </div>
    </div>
  );
}
