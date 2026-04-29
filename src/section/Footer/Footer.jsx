import styles from "./FooterStyles.module.css";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../commom/ThemeContext";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";

const SOCIALS = [
  { href: "https://x.com/Yabase7",                            label: "Twitter" },
  { href: "https://github.com/yabase001",                     label: "GitHub"  },
  { href: "https://www.linkedin.com/in/chelladurai-yabase-a-8a5037257", label: "LinkedIn" },
];

const NAV = ["Home", "About", "Projects", "Skills", "Contact"];

function Footer() {
  const { theme } = useTheme();
  const icons = {
    Twitter:  theme === "light" ? twitterLight  : twitterDark,
    GitHub:   theme === "light" ? githubLight   : githubDark,
    LinkedIn: theme === "light" ? linkedinLight : linkedinDark,
  };

  const handleNav = (e, section) => {
    e.preventDefault();
    document.querySelector(`#${section.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.top}>
        {/* Logo */}
        <span className={styles.logo}>
          <span className={styles.accent}>{"<"}</span>CY<span className={styles.accent}>{"/>"}</span>
        </span>

        {/* Nav links */}
        <nav className={styles.nav}>
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={styles.navLink} onClick={(e) => handleNav(e, n)}>
              {n}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className={styles.socials}>
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label={s.label}>
              <img src={icons[s.label]} alt={s.label} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <p className={styles.copy}>
        © {new Date().getFullYear()} Chelladurai Yabase. Built with React &amp; Vite. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
