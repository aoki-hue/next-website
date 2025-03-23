import React from "react";

/* components */
import { SectionArea, HeadLabel } from "@/components/utils/modules";
import Menu from "@/components/Menu";

/* metaデータ */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
};

const MenuPage = () => {
  return (
    <React.Fragment>
      {/* <Meta pageTitle="メニュー" pageDesc="本店のメニュー一覧と金額です" /> */}
      <SectionArea isBackground>
        <HeadLabel title="menu" />
        <Menu isMenuPage />
      </SectionArea>
    </React.Fragment>
  );
};

export default MenuPage;
