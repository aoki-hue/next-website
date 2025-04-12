"use client";

import React, { useRef, useState } from "react";

/* components */
import { HeadLabel } from "@/components/utils/modules";

/* swiper */

/* css */
import styles from "@/css/access.module.css";

/* img */
import Image from "next/image";
const images = ["/img/storeImage1.jpg", "/img/storeImage2.jpg", "/img/storeImage3.jpg"];

let currentIndex: number = 0;

const Access = () => {
  const slidesRef = useRef<HTMLDListElement>(null!);
  const [ulStyle, setUlStyle] = useState({ left: 0 });

  const buttonPrevClick = (): void => {
    currentIndex--;
    currentIndex = currentIndex % images.length;
    moveSlide();
  };

  const buttonNextClick = (): void => {
    currentIndex++;
    currentIndex = currentIndex % images.length;
    moveSlide();
  };

  const moveSlide = (): void => {
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    const slideWidth = slidesRef.current.clientWidth;
    setUlStyle({ left: -1 * slideWidth * currentIndex });
  };

  return (
    <React.Fragment>
      <HeadLabel title="Access" />
      <div className={styles.accessArea}>
        <table className={styles.storeInfo}>
          <tbody>
            <tr className={styles.storeRow}>
              <th className={styles.storeItemLabel}>住所</th>
              <td className={styles.storeItem}>青森県上北郡七戸町堰根555-17</td>
            </tr>
            <tr className={styles.storeRow}>
              <th className={styles.storeItemLabel}>TEL</th>
              <td className={styles.storeItem}>0000-00-0000</td>
            </tr>
            <tr className={styles.storeRow}>
              <th className={styles.storeItemLabel}>営業時間</th>
              <td className={styles.storeItem}>
                9:00～18:00<br></br>※カット最終受付17時 / カラー最終受付16:30
              </td>
            </tr>
            <tr className={styles.storeRow}>
              <th className={styles.storeItemLabel}>定休日</th>
              <td className={styles.storeItem}>毎週火曜日</td>
            </tr>
            <tr className={styles.storeRow}>
              <th className={styles.storeItemLabel}>駐車場</th>
              <td className={styles.storeItem}>無し</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.carousel}>
          <div className={styles.container}>
            <ul className={styles.sliderUl} style={ulStyle}>
              {images.map((src: string, index: number) => {
                return (
                  <li key={index} ref={slidesRef} className={styles.sliderList}>
                    <Image src={src} width={545} height={439} alt="店舗イメージ" className={styles.sliderImage} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.buttonBox}>
            <button id="prev" className={styles.buttonPrev} onClick={buttonPrevClick}>
              &lt;
            </button>
            <button id="next" className={styles.buttonNext} onClick={buttonNextClick}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Access;
