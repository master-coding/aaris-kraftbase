import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./landingPage.module.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>KraftBase</div>

          <div className={styles.desktopMenu}>
            <p>Pricing</p>
            <div className={styles.dropdown}>
              <button className={styles.dropdownBtn}>Resources</button>
              <div className={styles.dropdownContent}>
                <p>Documentation</p>
                <p>Guides</p>
                <p>API</p>
              </div>
            </div>
            <div className={styles.dropdown}>
              <button className={styles.dropdownBtn}>Community</button>
              <div className={styles.dropdownContent}>
                <p>Forum</p>
                <p>Discord</p>
                <p>Github</p>
              </div>
            </div>
            <p>Download</p>
          </div>

          <div className={styles.authButtons}>
            <button className={styles.starUs}>⭐ Star Us</button>
            <button className={styles.signIn}>Sign In</button>
            <button className={styles.getStarted}>Get Started</button>
          </div>

          <button className={styles.menuButton} onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <p>Pricing</p>
            <p>Resources</p>
            <p>Community</p>
          </div>
        )}
      </nav>

      <main className={styles.mainContent}>
        <h1 className={styles.title}>
          Everything App
          <br />
          for your teams
        </h1>
        <p className={styles.subtitle}>
          Huly, an open-source platform, serves as an all-in-one replacement of
          Linear, Jira, Slack, and Notion.
        </p>
        <button className={styles.tryFreeButton}>TRY IT FREE →</button>

        <div className={styles.imageContainer}>
          <img src="/landingPage.png" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
