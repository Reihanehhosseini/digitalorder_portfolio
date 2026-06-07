import React from "react";
import styles from "./InfoBox.module.css";
import BlueBox from "@/Components/modules/BlueBox/BlueBox";
import Icon from "@/Components/modules/Icon/Icon";
import { useTranslation } from "next-i18next";

export default function InfoBox() {
  const { t } = useTranslation();


  return (
    <div className={styles.infobox}>
      <BlueBox>
        <ul>
          <li>
            <Icon icon="/images/person.png" />
            <div className={styles.infobox_fullname}>
              <span>{t("Full Name")}</span>
              <span>Reihaneh Hosseini</span>
            </div>
          </li>
          <li>
            <Icon icon="/images/Mail.png" />
            <div className={styles.infobox_fullname}>
              <span>{t("Email")}</span>
              <span>reihaneh_h1368@yahoo.com</span>
            </div>
          </li>
          <li>
            <Icon icon="/images/Call.png" />
            <div className={styles.infobox_fullname}>
              <span>{t("Phone Numbers")}</span>
              <span>+98-913-959-3707</span>
            </div>
          </li>
        </ul>
      </BlueBox>
    </div>
  );
}
