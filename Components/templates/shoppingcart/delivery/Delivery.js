import React, { useState } from "react";
import styles from "./Delivery.module.css";
import { useTranslation } from "next-i18next";

export default function Delivery() {
  const {t} = useTranslation()
  const [delivery, setDelivery] = useState(false);

  const changeDelivery = () => {
    setDelivery((prev) => !prev);
  };

  return (
    <div className={styles.delivery}>
      <div className={styles.delivery_or_not}>
        <div className={styles.delivery_left}>
          <span className={styles.input_title}>{t("Delivery")}</span>
          <label htmlFor="checkboxlabel" className={styles.switch}>
            <input
              type="checkbox"
              name=""
              id="checkboxlabel"
              onChange={changeDelivery}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.delivery_right}>
          <select
            className={delivery ? "active_table" : "deactive_table"}
            disabled={delivery}
            defaultValue={"1"}
          >
            <option>{t("Table")} 1</option>
            <option>{t("Table")} 2</option>
            <option>{t("Table")} 3</option>
            <option>{t("Table")} 4</option>
            <option>{t("Table")} 5</option>
          </select>
        </div>
      </div>
      {delivery && (
        <div className={styles.delivery_is_on}>
          <div className={styles.delivery_address}>
            <span className={styles.input_title}>{t("Delivery Address")}</span>
            <input type="text" value="2118 Thornridge Cir. Syracuse" />
          </div>
          <div className={styles.delivery_map}>
            <img src="/images/map.jpg" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
