"use client";
import styles from "../page.module.css";

const RoverPhoto = ({ url, date, title }) => {
  return (
    <div>
      <p>Date {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={url} alt={title} />
    </div>
  );
};
export default RoverPhoto;
