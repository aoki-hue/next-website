import React from "react";

/* css */
import styles from "@/css/menu.module.css";

/* json */
import MenuData from "@/json/menu.json";

type MenuPageProps = {
  isMenuPage: boolean;
};

const Menu = ({ isMenuPage = false }: MenuPageProps) => {
  let filteredMenu = [];

  if (isMenuPage === false) {
    for (let i = 0; i < 3; i++) {
      filteredMenu.push(MenuData[i]);
    }
  } else {
    filteredMenu = MenuData;
  }

  return (
    <React.Fragment>
      <div className={styles.menu}>
        {filteredMenu.map((menu) => (
          <div className={styles.menuCategory} key={menu.id}>
            <p className={styles.menuCategoryTitle}>{menu.menuCategory}</p>
            <ul className={styles.menuList}>
              {menu.menuList.map((menu) => (
                <li className={styles.menuListWrap} key={menu.id}>
                  <span className={styles.menuListText}>{menu.menu}</span>
                  <span className={styles.menuListPrice}>{menu.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Menu;
