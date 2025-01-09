import styles from "./workTogether.module.css";

const WorkTogether = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        <span className={styles.highlight}>Work together</span>
        <br /> Like in the office
      </h1>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default WorkTogether;
