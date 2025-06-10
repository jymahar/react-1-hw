"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavItem from "./NavItem";

import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "01 ABOUT US",
    link: "/about_us",
  },
  {
    title: "02 DESTINATION",
    link: "/destination",
  },
  {
    title: "03 NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {/* TASK - React 1 week 2 */}
          {/* Create a <NavItem> component, which accepts the following:  */}
          {/* title, link, isActive  */}
          {navbarItems.map((item, index) => (
            <li key={index} className={styles.navbarLinks}>
              <NavItem
                title={item.title}
                link={item.link}
                isActive={item.link === currentPath}
              />
            </li>
          ))}
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
};
