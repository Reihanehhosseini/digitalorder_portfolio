import React from "react";
import styles from "./Menulist.module.css";
import MenuLink from "@/Components/modules/MenuLink/MenuLink";
import BlueBox from "@/Components/modules/BlueBox/BlueBox";
import { useTranslation } from "next-i18next";

export default function Menulist() {
  const { t } = useTranslation();
  return (
    <div className={styles.menulist}>
      <BlueBox>
        <ul>
          <li>
            <MenuLink
              title={t("Personal Info")}
              href="info"
              icon="/images/person.png"
            />
          </li>
          <li>
            <MenuLink
              title={t("My Orders")}
              href="order"
              icon="/images/order.png"
            />
          </li>
          <li>
            <MenuLink
              title={t("My Addresses")}
              href="address"
              icon="/images/map.png"
            />
          </li>
          <li>
            <MenuLink
              title={t("About the Resturant")}
              href="about"
              icon="/images/about.png"
            />
          </li>
        </ul>
      </BlueBox>
    </div>
  );
}
