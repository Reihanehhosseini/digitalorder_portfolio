import React from "react";
import styles from "./Form.module.css";
import ButtonOrange from "@/Components/modules/ButtonOrange/ButtonOrange";

export default function Form() {
  return (
    <div className={styles.form}>
      <form action="">
        <div className={`${styles.form_image} flex_center`}>
          <label htmlFor="profileImage" className={styles.profileimage}>
            <img src="/images/profile.jpeg" alt="" className={styles.profileimg_img}/>
            <span className={`${styles.penicon} flex_center`}>
              <img src="/images/pen.png" alt="" />
            </span>
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/png , image/jpeg"
          />
        </div>
        <div className={styles.input_section}>
          <span>FULL NAME</span>
          <input type="text" placeholder="FullName" />
        </div>
        <div className={styles.input_section}>
          <span>EMAIL</span>
          <input type="text" placeholder="Email" />
        </div>
        <div className={styles.input_section}>
          <span>DATE OF BIRTH</span>
          <input type="text"  />
        </div>
        <div className={styles.input_section}>
          <span>PHONE NUMBER</span>
          <input type="text"  />
        </div>
        <div className={styles.input_section}>
          <span>GENDER</span>
          <input type="text"  />
        </div>
        <div className={styles.input_section}>
          <span>PASSWORD</span>
          <input type="password" name="" id="" />
        </div>
        <ButtonOrange title="SAVE" />
      </form>
    </div>
  );
}
