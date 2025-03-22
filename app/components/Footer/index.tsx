/* css */
import styles from "@/css/footer.module.css";

/* link */
import Link from "next/link";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.snsArea}>
        <Link href="" className={styles.snsLink}>
          <div className={styles.sns}>
            <FontAwesomeIcon icon={faFacebookF} className={styles.snsIcon} />
          </div>
        </Link>
        <Link href="" className={styles.snsLink}>
          <div className={styles.sns}>
            <FontAwesomeIcon icon={faTwitter} className={styles.snsIcon} />
          </div>
        </Link>
        <Link href="" className={styles.snsLink}>
          <div className={styles.sns}>
            <FontAwesomeIcon icon={faInstagram} className={styles.snsIcon} />
          </div>
        </Link>
      </div>
      <p className={styles.copyright}>Copyright © 2025 chime. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
