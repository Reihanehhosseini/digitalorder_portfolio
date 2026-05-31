import React from "react";
import styles from "./InfoBox.module.css";
import BlueBox from "@/Components/modules/BlueBox/BlueBox";
import Icon from "@/Components/modules/Icon/Icon";

export default function InfoBox() {
  return (
    <div className={styles.infobox}>
      <BlueBox>
        <ul>
          <li>
            <Icon icon="/images/person.png" />
            <div className={styles.infobox_fullname}>
              <span>FULL NAME</span>
              <span>Reihaneh Hosseini</span>
            </div>
          </li>
          <li>
            <Icon icon="/images/Mail.png" />
            <div className={styles.infobox_fullname}>
              <span>Email</span>
              <span>reihaneh_h1368@yahoo.com</span>
            </div>
          </li>
          <li>
            <Icon icon="/images/Call.png" />
            <div className={styles.infobox_fullname}>
              <span>PHONE NUMBER</span>
              <span>+98-913-959-3707</span>
            </div>
          </li>
        </ul>
      </BlueBox>
    </div>
  );
}
