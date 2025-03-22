"use client";

import { useCallback } from "react";

/* css */
import styles from "@/css/pageTop.module.css";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const PageTop = () => {
  const returnTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={styles.pageTop} onClick={returnTop}>
      <FontAwesomeIcon icon={faAngleUp} className={styles.pageTopIcon}></FontAwesomeIcon>
    </div>
  );
};

export default PageTop;
