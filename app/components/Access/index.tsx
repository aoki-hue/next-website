"use client";

import React from "react";

/* components */
import { HeadLabel } from "@/components/utils/modules";

/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

/* css */
import styles from "@/css/access.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* img */
import Image from "next/image";

const images = ["/img/storeImage1.jpg", "/img/storeImage2.jpg", "/img/storeImage3.jpg"];

const Access = () => {
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
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1} //一度に表示するスライドの数
          pagination={{
            clickable: true,
          }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
          navigation //スライドを前後させるためのボタン、スライドの左右にある
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className={styles.swiperWrap}
        >
          {images.map((src: string, index: number) => {
            return (
              <SwiperSlide key={`${index}`}>
                <Image src={src} layout="responsive" width={545} height={439} alt="店舗イメージ" style={{ objectFit: "contain" }} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Access;
