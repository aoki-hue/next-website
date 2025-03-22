import React from "react";

/* components */
import { SecondaryBtn, LinkPageTop } from "@/components/utils/modules";
import Meta from "@/components/Meta";

/* link */
import Link from "next/link";

/* css */
import styles from "@/css/error.module.css";

const Error = () => {
  return (
    <React.Fragment>
      {/* <Meta pageTitle="404" pageDesc="お探しのページが見つかりませんでした" /> */}
      <div className={styles.errorNum}>404</div>
      <p className={styles.errorTextLabel}>お探しのページが見つかりませんでした</p>
      <p className={styles.errorText}>下記ボタンから再度アクセスしてください</p>
      <Link href="/">
        <SecondaryBtn text="Topへ戻る" />
      </Link>
    </React.Fragment>
  );
};

export default Error;
