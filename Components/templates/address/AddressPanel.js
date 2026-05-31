import React from "react";
import styles from "./AddressPanel.module.css"
import BlueBox from "@/Components/modules/BlueBox/BlueBox";
import Icon from "@/Components/modules/Icon/Icon";

export default function AddressPanel() {
  return (
    <div className={styles.address_section}>
      <BlueBox>
        <div className={styles.adreess_section_item}>
          <Icon icon="/images/homes.png" />
          <div className={styles.address_section_location}>
            <div className={styles.address_section_location_header}>
              <span>HOME</span>
              <div className={styles.location_icons}>
                <img src="/images/edit.png" alt="" />
                <img src="/images/Delete.png" alt="" />
              </div>
            </div>
            <div className={styles.address_section_location_footer}>
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
          </div>
        </div>
      </BlueBox>
      <BlueBox>
        <div className={styles.adreess_section_item}>
          <Icon icon="/images/baggage.png" />
          <div className={styles.address_section_location}>
            <div className={styles.address_section_location_header}>
              <span>WORK</span>
              <div className={styles.location_icons}>
                <img src="/images/edit.png" alt="" />
                <img src="/images/Delete.png" alt="" />
              </div>
            </div>
            <div className={styles.address_section_location_footer}>
              <p>3891 Ranchview Dr. Richardson, California 62639</p>
            </div>
          </div>
        </div>
      </BlueBox>
    </div>
  );
}
