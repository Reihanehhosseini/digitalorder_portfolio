import React from "react";
import styles from "./AddressPanel.module.css";
import BlueBox from "@/Components/modules/BlueBox/BlueBox";
import Icon from "@/Components/modules/Icon/Icon";
import { useTranslation } from "next-i18next";

export default function AddressPanel() {
  const {t} = useTranslation()
  const address = [
    { id: 1, title: t("Home"), address: "2464 Royal Ln. Mesa, New Jersey 45463" },
    {
      id: 2,
      title: t("Work"),
      address: "3891 Ranchview Dr. Richardson, California 62639",
    },
  ];
  return (
    <div className={styles.address_section}>
      {address.map((item) => (
        <BlueBox key={item.id}>
          <div className={styles.adreess_section_item}>
            <Icon icon="/images/homes.png" />
            <div className={styles.address_section_location}>
              <div className={styles.address_section_location_header}>
                <span>{item.title}</span>
                <div className={styles.location_icons}>
                  <img src="/images/edit.png" alt="" />
                  <img src="/images/Delete.png" alt="" />
                </div>
              </div>
              <div className={styles.address_section_location_footer}>
                <p>{item.address}</p>
              </div>
            </div>
          </div>
        </BlueBox>
      ))}
    </div>
  );
}
