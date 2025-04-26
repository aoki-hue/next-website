/* components */
import { HeadLabel, SectionArea, PrimaryBtn } from "@/components/utils/modules";
import Menu from "@/components/Menu";
import Information from "@/components/Information";
import Access from "@/components/Access";

/* css */
import styles from "@/css/home.module.css";

/* link */
import Link from "next/link";

/* image */
import Image from "next/image";

/* metaデータ */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "美容室チャイム",
};

export default function Home() {
  return (
    <>
      <div className={styles.mainVisual}>
        {/* <p className={styles.mainVisual_text}>魅力引き出すサロン</p> */}
        <Image src="/img/mainVisual.jpg" width={1244} height={670} alt="メインビジュアル" className={styles.mainVisual_image} style={{ objectFit: "contain" }} />
      </div>
      <SectionArea isBackground={false}>
        <HeadLabel title="Concept" />
        <div className={styles.concept}>
          <Image src="/img/conceptImg.jpg" width={705} height={470} alt="concept" className={styles.conceptImg} style={{ objectFit: "contain" }} />
          <div className={styles.conceptTextArea}>
            <p className={styles.conceptText}>
              美容室チャイムは、最新の技術と心温まるサービスであなたの魅力を最大限に引き出します。
              <br />
              リラックスできる空間で、美しい髪と心地よい時間をお約束します。
              <br />
              ご来店を心よりお待ちしております。
            </p>
          </div>
        </div>
      </SectionArea>
      <SectionArea isBackground>
        <HeadLabel title="menu" />
        <Menu isMenuPage={false} />
        <Link href="/menu">
          <PrimaryBtn text="View more" isBg />
        </Link>
      </SectionArea>
      <SectionArea isBackground={false}>
        <HeadLabel title="information" />
        <Information isInformationPage={false} checkedValue={[]} />
        <Link href="/information">
          <PrimaryBtn text="View more" isBg={false} />
        </Link>
      </SectionArea>
      <SectionArea isBackground={false}>
        <Access />
      </SectionArea>
    </>
  );
}
