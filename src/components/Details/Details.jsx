import Billboard from "/billboard.jpg";
import User from "/user.svg";
import styles from "./details.module.css";

export default function Details() {
  return (
    <div>
      <div className={styles.title}>Knowledge at your Fingertips</div>
      <div className={styles["content-container"]}>
        <div className={styles["details"]}>
          <div>
            Huly offers a wide range of features to create and manage your
            project documentation. Huly's suite of collaborative editing tools
            boosts team efficiency.
          </div>
          <div className={styles.highlight}>
            Documents in Huly can be used for sharing reference materials among
            team members, collaborating on plans and roadmaps, storing meeting
            notes and assigning action items.
          </div>
        </div>

        <div className={styles["img-container"]}>
          <img src={Billboard} className={styles["animated-img"]} />
        </div>

        <div className={styles["img-container"]}>
          <img src={User} className={styles["animated-img"]} />
        </div>

        <div className={styles.details}>
          <div>
            With <span className={styles.old}>live</span> real-time
            collaboration, remote teams are able to work together to bring a
            unified vision to life on the page. Tagging users, linking to
            issues, and assigning action items are just a few of the{" "}
            <span className={styles.old}>advanced solutions </span>
            <span className={styles.highlightText}>powerful features</span>{" "}
            available within the Huly document editor
          </div>
          <div>
            Documents can be enhanced with rich text formatting, images,
            attachments and code blocks. Use documents to organize team plans,
            create technical documentation and support your team's progress
            towards shared goals.
          </div>
        </div>
      </div>
    </div>
  );
}
