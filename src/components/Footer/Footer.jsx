import { Link } from "react-router-dom";
import { Slack } from "lucide-react";
import links from "./links.jsx";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.clockWrapper}>
          <div className={styles.clock}>
            <div className={styles.clockGlow} />
            <div className={styles.clockGlowBlue} />
          </div>
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>Join the Movement</h1>
          <p className={styles.subtitle}>
            Unlock the future of productivity.
            <br />
            Remember, this journey is just getting started.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.startButton}>START NOW</button>
            <button className={styles.slackButton}>
              <Slack />
              <p>JOIN OUR SLACK</p>
            </button>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div>© 2024 Huly Labs. All rights reserved.</div>
        <div className={styles.footerLinks}>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles.footerSocial}>
          {links.map((link) => {
            return (
              <Link
                to={link.link}
                className={styles.socialIcon}
                key={link.id}
                target="_blank"
              >
                {link.icon}
              </Link>
            );
          })}
        </div>
        <div className={styles.footerMadeWith}>
          <div>Made with passion and Huly</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
