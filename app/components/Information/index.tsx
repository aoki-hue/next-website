/* eslint @typescript-eslint/no-explicit-any: 0 */
"use client";

import React from "react";

/* link */
import Link from "next/link";

/* css */
import styles from "@/css/information.module.css";

/* json */
import data from "@/json/information.json";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

/* image */
import Image from "next/image";

type InformationProps = {
  isInformationPage: boolean;
  checkedValue: string[];
};

const Information = (props: InformationProps) => {
  const { isInformationPage, checkedValue } = props;
  let { informationData, filteredData }: any = [];
  let checkedValueJoin: string = "";

  if (isInformationPage === false) {
    // トップページの場合
    informationData = data.slice(0, 8);
  } else {
    // インフォ一覧画面の場合
    if (checkedValue.length === 0) {
      // インフォカテゴリのチェック数が0の場合
      informationData = data;
    } else {
      checkedValueJoin = checkedValue.join(",");

      filteredData = data.filter((item) => {
        return checkedValueJoin.includes(item.category.text);
      });
      console.log(filteredData);

      informationData = filteredData;
    }
  }

  // informationDataの順序を降順に
  informationData.sort((a: any, b: any) => {
    return b.id - a.id;
  });

  return (
    <React.Fragment>
      <style jsx global>
        {`
          .informationLabel {
            background-color: #e2c049;
          }

          .blogLabel {
            background-color: #c95e2f;
          }
        `}
      </style>
      <ul className={styles.infoArea}>
        {informationData.map((information: any) => (
          <li className={styles.infoList} key={information.id}>
            <Link href={information.url} className={styles.infoLink}>
              <span className={`${styles.infoCategory} ${information.category.className}`}>{information.category.text}</span>
              <Image src={information.img.src} alt={information.img.alt} width={259} height={154} className={styles.infoThumbnail} />
              <div className={styles.infoWrap}>
                <p className={styles.infoDate}>
                  <FontAwesomeIcon icon={faClock} className={styles.infoDateIcon} />
                  {information.date}
                </p>
                <p className={styles.infoTitle}>{information.title}</p>
                <span className={styles.infoRead}>
                  Read more
                  <FontAwesomeIcon icon={faAngleRight} className={styles.infoReadIcon} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Information;
