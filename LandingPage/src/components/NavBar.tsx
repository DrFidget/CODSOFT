import styles from "./NavBar.module.css";
import atech from "../assets/atech.png";
import { HashLink as Link } from "react-router-hash-link";
// import { Link, NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
  const [menuopen, setopen] = useState(false);
  return (
    <BrowserRouter>
      <div
        className={styles.menu}
        onClick={() => {
          setopen(!menuopen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={styles.navbar}>
        <Link className={styles.title} to="/#HOME">
          <img className={styles.iii} src={`${atech}`} alt="" />
        </Link>
        <ul className={`${styles.subbar} ${menuopen ? styles.open : ""}`}>
          <div className={styles.li}>
            <Link to="/#H1" className={styles.innertitle}>
              About
            </Link>
          </div>
          <div className={styles.li}>
            <Link to="/#H2" className={styles.innertitle}>
              Services
            </Link>
          </div>

          <div className={styles.li}>
            <Link to="/#H3" className={styles.innertitle}>
              Contact
            </Link>
          </div>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
