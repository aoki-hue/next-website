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
// import thumbnail01 from "img/thumbnailInfo1.jpg";
// import thumbnail02 from "img/thumbnailInfo2.jpg";

type InformationProps = {
  isInformationPage: boolean;
  checkedValue: string[];
};

const Information = ({ isInformationPage = false, checkedValue }: InformationProps) => {
  let informationData = [];
  let filteredData = [];

  let addArray: string[] = [];

  if (isInformationPage === false) {
    // dataの順序を降順に
    data.sort((a, b) => {
      return b.id - a.id;
    });

    filteredData = data.slice(0, 8);
    informationData = filteredData;
  } else {
    if (checkedValue.length === 0) {
      data.sort((a, b) => {
        return b.id - a.id;
      });

      informationData = data;
    } else {
      checkedValue.forEach((value) => {
        filteredData = data.filter((data) => {
          return data.category.text === value;
        });
        filteredData.forEach((val) => {
          addArray.push(val);
        });
      });

      // addArrayの順序を降順に
      informationData = addArray.sort((a, b) => {
        return b.id - a.id;
      });

      informationData = addArray;
    }
  }

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
        {informationData.map((information) => (
          <li className={styles.infoList} key={information.id}>
            <Link href={information.url} className={styles.infoLink}>
              <span className={`${styles.infoCategory} ${information.category.className}`}>{information.category.text}</span>
              <img src={thumbnail01} alt={information.img.alt} className={styles.infoThumbnail}></img>
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
