import items from "./items";
import styles from "./features.module.css";
import github from "/github.png";

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          Sync with Github. <br />
          Both ways.
        </div>
        <p style={{ color: "#91949A", marginBottom: "2rem" }}>
          Manage your tasks efficiently with Huly's bidirectional GitHub
          synchronization. <br />
          Use Huly as an advanced front-end for GitHub Issues and GitHub
          Projects.
        </p>
        <div className={styles["image-container"]}>
          <img src={github} />
        </div>
        <div className={styles["functions-container"]}>
          {items.map((item) => {
            return (
              <div key={item.id} className={styles.functions}>
                <img src={item.image} />
                <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
                  {item.title}
                </p>
                <p style={{ color: "#91949A", marginTop: "1rem" }}>
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
