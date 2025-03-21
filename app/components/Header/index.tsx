"use client";

/* useState */
import { useState } from "react";

/* link */
import Link from "next/link";

/* css */
import styles from "@/css/header.module.css";

/* image */
import Image from "next/image";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <div className={styles.header}>
        <Image src="/img/logo.svg" alt="chime" width={101} height={35} className={styles.logo} />
        <div className={`${isNavOpen ? styles.open : styles.close} ${styles.accordionButton}`} onClick={toggleNav}>
          <span className={styles.accordionBar}></span>
          <span className="sr-only">メニュー</span>
        </div>
        <nav className={`${isNavOpen ? styles.open : styles.close} ${styles.nav}`}>
          {isNavOpen && (
            <style jsx global>
              {`
                @media (max-width: 767px) {
                  body {
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                  }
                }
              `}
            </style>
          )}
          <ul>
            <li>
              <Link href="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" onClick={closeNav}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/information" onClick={closeNav}>
                Information
              </Link>
            </li>
          </ul>
          <div className={styles.tel}>
            <FontAwesomeIcon icon={faPhoneFlip} className={styles.telIcon} />
            <p className={styles.telText}>お気軽にお電話ください</p>
            <p className={styles.telNumber}>
              <a href="tel:0000-00-0000">0000-00-0000</a>
            </p>
          </div>
        </nav>

        <div className={`${isNavOpen ? styles.open : styles.close} ${styles.navBg}`}></div>
      </div>
    </>
  );
};

// const Header = () => {
//   const [navIsOpen, setNavIsOpen] = useState(false);

//     const toggleNav = () => {
//       setNavIsOpen((prev) => !prev);
//     };

//     const closeNav = () => {
//       setNavIsOpen(false);
//     };

//   return (
//     <>
//       <div className={styles.header}>
//         <img src={logo} alt="chime" className={styles.logo}></img>
//         <div className={`${navIsOpen ? styles.open : styles.close} ${styles.accordionButton}`} onClick={toggleNav}>
//           <span className={styles.accordionBar}></span>
//           <span className="sr-only">メニュー</span>
//         </div>
//         <nav className={`${navIsOpen ? styles.open : styles.close} ${styles.nav}`}>
//           {navIsOpen && (
//             <style jsx="true" global="true">
//               {`
//                 @media (max-width: 767px) {
//                   body {
//                     overflow: hidden;
//                     position: fixed;
//                     width: 100%;
//                   }
//                 }
//               `}
//             </style>
//           )}
//           <ul>
//             <li>
//               <Link to="/" onClick={closeNav}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/menu" onClick={closeNav}>
//                 Menu
//               </Link>
//             </li>
//             <li>
//               <Link to="/information" onClick={closeNav}>
//                 Information
//               </Link>
//             </li>
//           </ul>
//           <div className={styles.tel}>
//             <FontAwesomeIcon icon={faPhoneFlip} className={styles.telIcon} />
//             <p className={styles.telText}>お気軽にお電話ください</p>
//             <p className={styles.telNumber}>
//               <a href="tel:0000-00-0000">0000-00-0000</a>
//             </p>
//           </div>
//         </nav>

//         <div className={`${navIsOpen ? styles.open : styles.close} ${styles.navBg}`}></div>
//       </div>
//     </>
//   );
// };

export default Header;
