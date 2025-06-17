import Link from "next/link";
import styles from "./Navbar.module.css";
import classNames from "classnames";

const NavItem = ({ title, link, isActive }) => {
  return (
    <Link
      href={link}
      className={classNames({
        [styles.isLinkActive]: isActive,
      })}
    >
      <b>{title}</b>
    </Link>
  );
};

export default NavItem;
