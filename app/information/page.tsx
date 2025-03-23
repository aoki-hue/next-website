"use client";

import React, { useState } from "react";

/* components */
import { SectionArea, HeadLabel } from "@/components/utils/modules";
import Information from "@/components/Information";

/* css */
import styles from "@/css/information.module.css";

const InformationPage = () => {
  const [checked, setChecked] = useState(["お知らせ", "ブログ"]);

  // チェックボックスのチェックが変更された際にStateを更新
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 操作したチェックボックスの値
    const choice = e.target.value;

    if (e.target.checked) {
      // チェックされた場合、値を追加する
      setChecked([...checked, choice]);
    } else {
      // チェックが外された場合、値を削除する
      setChecked(checked.filter((item) => item !== choice));
    }
  };
  return (
    <React.Fragment>
      <SectionArea isBackground={false}>
        <HeadLabel title="information" />
        <ul className={styles.checkListWrap}>
          <li className={styles.checkList}>
            <input id="information" type="checkbox" name="category" value="お知らせ" checked={checked.includes("お知らせ")} onChange={handleCheck}></input>
            <label htmlFor="information" className={styles.checkLabel}>
              お知らせ
            </label>
          </li>
          <li className={styles.checkList}>
            <input id="blog" type="checkbox" name="category" value="ブログ" checked={checked.includes("ブログ")} onChange={handleCheck}></input>
            <label htmlFor="blog" className={styles.checkLabel}>
              ブログ
            </label>
          </li>
        </ul>
        <Information isInformationPage checkedValue={checked} />
      </SectionArea>
    </React.Fragment>
  );
};

export default InformationPage;
