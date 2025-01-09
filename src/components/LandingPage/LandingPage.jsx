import React, { useState, useRef, Suspense } from "react";
import { Menu, X } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import styles from "./landingPage.module.css";

const ShootingStar = ({ speed = 0.05 }) => {
  const mesh = useRef();
  const [position, setPosition] = useState([
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
  ]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.x += speed;
      mesh.current.position.y -= speed * 0.5;
      if (mesh.current.position.x > 10) {
        setPosition([
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
        ]);
      }
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.05, 16]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const starsRef = useRef();

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

        <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
          <Suspense fallback={null}>
            <Stars
              radius={100}
              depth={50}
              count={3000}
              factor={4}
              ref={starsRef}
            />
            <ambientLight intensity={0.5} />
            {[...Array(20)].map((_, index) => (
              <ShootingStar key={index} speed={0.05 + index * 0.01} />
            ))}
          </Suspense>
        </Canvas>
      </main>
    </div>
  );
};

export default LandingPage;
