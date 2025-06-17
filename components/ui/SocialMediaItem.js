import styles from "./SocialMedia.module.css";

const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <img className={styles.icon} src={icon} />
      <a href={url} target="_blank">
        {title}
      </a>
    </li>
  );
};
export default SocialMediaItem;
