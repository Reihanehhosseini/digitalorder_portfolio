import React, { useState } from "react";
import styles from "./Ordertop.module.css";
import { useTranslation } from "next-i18next";


export default function Ordertop() {
  const {t} = useTranslation()
  const [active, setActive] = useState("history");

  const onGoingOrder = [
    {
      id: 1,
      category: t("Food"),
      title: "Pizza Hut",
      price: 32.5,
      count: 3,
      code: 162432,
      img: "/images/food/pizza.jpg",
    },
  ];
  const historyOrder = [
    {
      id: 1,
      category: t("Food"),
      title: "mcDonald",
      price: 40.15,
      count: 2,
      code: 242432,
      img: "/images/food/mcDonald.jpg",
    },
    {
      id: 2,
      category: t("Drink"),
      title: "starbucks",
      price: 10.2,
      count: 1,
      code: 240112,
      img: "/images/food/starbucks.jpg",
    },
    {
      id: 3,
      category: t("Food"),
      title: "Pizza Hut",
      price: 32.5,
      count: 3,
      code: 162432,
      img: "/images/food/pizza.jpg",
    },
  ];
  return (
    <div className={styles.ordertop}>
      <div className={styles.ordertop_btn}>
        <button
          style={{
            color: active === "ongoing" ? "#ff7622" : "inherit",
            borderBottom: active === "ongoing" ? "2px solid #ff7622" : "",
          }}
          onClick={() => setActive("ongoing")}
        >
          {t("ongoing")}
        </button>
        <button
          style={{
            color: active === "history" ? "#ff7622" : "inherit",
            borderBottom: active === "history" ? "2px solid #ff7622" : "",
          }}
          onClick={() => setActive("history")}
        >
          {t("history")}
        </button>
      </div>
      {(active === "ongoing" ? onGoingOrder : historyOrder).map((order) => (
        <div className={styles.ordertop_section}>
          <div className={styles.order_title}>{order.category}</div>
          <div className={styles.order_food}>
            <div className={styles.order_food_left}>
              <div className={styles.order_food_img}>
                <img src={order.img} alt="" />
              </div>
              <div className={styles.order_food_desc}>
                <h4>{order.title}</h4>
                <div>
                  <span>${order.price}</span>
                  <span>|</span>
                  <span>
                    {order.count} {t("Items")}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.order_food_code}>#{order.code}</div>
          </div>
          <div className={styles.order_track}>
            <button
              className={styles.track}
              style={{ backgroundColor: "#ff7622", color: "#fff" }}
            >
              {t("Track Order")}
            </button>
            <button
              className={styles.cancel}
              style={{
                backgroundColor: "inherit",
                color: "#ff7622",
                border: "1px solid #ff7622",
              }}
            >
              {t("Cancel")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
