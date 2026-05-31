import React, { useState } from "react";
import styles from "./Ordertop.module.css";

export default function Ordertop() {
  const [active, setActive] = useState("ongoing");

  const onGoingOrder = [
    {
      id: 1,
      category: "Food",
      title: "Pizza Hut",
      price: 32.5,
      count: 3,
      code: 162432,
      img: "/images/food/pizza.jpg",
    },
    {
      id: 2,
      category: "Drink",
      title: "mcDonald",
      price: 40.15,
      count: 2,
      code: 242432,
      img: "/images/food/mcDonald.jpg",
    },
    {
      id: 3,
      category: "Drink",
      title: "Pizza Hut",
      price: 10.2,
      count: 1,
      code: 240112,
      img: "/images/food/starbucks.jpg",
    },
  ];
  const historyOrder = [
      {
        id: 1,
        category: "Drink",
        title: "mcDonald",
        price: 40.15,
        count: 2,
        code: 242432,
        img: "/images/food/mcDonald.jpg",
      },
      {
        id: 2,
        category: "Drink",
        title: "Pizza Hut",
        price: 10.2,
        count: 1,
        code: 240112,
        img: "/images/food/starbucks.jpg",
      },
      {
        id: 3,
        category: "Food",
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
          Ongoing
        </button>
        <button
          style={{
            color: active === "history" ? "#ff7622" : "inherit",
            borderBottom: active === "history" ? "2px solid #ff7622" : "",
          }}
          onClick={() => setActive("history")}
        >
          History
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
                  <span>{order.count} Items</span>
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
              Track Order
            </button>
            <button
              className={styles.cancel}
              style={{
                backgroundColor: "inherit",
                color: "#ff7622",
                border: "1px solid #ff7622",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
