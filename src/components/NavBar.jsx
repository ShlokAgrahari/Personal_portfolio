import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* Logo */}
        <a href="#hero" className="logo">
          Shlok Agrahari
        </a>

        {/* Navigation Links */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons Row */}
        <div className="flex items-center gap-4">
         <a
  href="/resume.pdf" // Change to your actual file path
  download
  className="contact-btn group"
>
  <div className="inner flex items-center gap-2">
    <FontAwesomeIcon icon={faArrowDown} className="icon-bounce transition-colors duration-300 group-hover:text-[#ffff]" />
    <span>Resume</span>
  </div>
</a>




          
        </div>
      </div>
    </header>
  );
};

export default NavBar;
