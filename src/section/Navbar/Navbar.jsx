import React, { useState, useEffect } from "react";
import styles from "./NavbarStyles.module.css";
import { useTheme } from "../../commom/ThemeContext";

const NAV_LINKS = [
  { label: "Home",     href: "#hero" },
  { label: "About",   href: "#about" },
  { label: "Projects",href: "#projects" },
  { label: "Skills",  href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["hero", "about", "projects", "skills", "contact"];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState("hero");

  /* Shrink navbar + track active section on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      /* Highlight the section currently in view */
      const OFFSET = 100; // px below navbar
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.getBoundingClientRect().top <= OFFSET) {
          setActive(SECTION_IDS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Smooth scroll with navbar offset */
  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    const navbarHeight = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={(e) => handleNav(e, "#hero")}>
          <span className={styles.logoAccent}>{"<"}</span>
          CY
          <span className={styles.logoAccent}>{"/>"}</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${styles.link} ${activeSection === id ? styles.activeLink : ""}`}
                  onClick={(e) => handleNav(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className={styles.controls}>
          {/* Theme button */}
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        {NAV_LINKS.map((link) => {
          const id = link.href.replace("#", "");
          return (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.drawerLink} ${activeSection === id ? styles.drawerActive : ""}`}
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default Navbar;
