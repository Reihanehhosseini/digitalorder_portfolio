import React from "react";
import styles from "./SelectProduct.module.css";
import Minus from "@/Components/modules/Minus/Minus";
import Plus from "@/Components/modules/Plus/Plus";
import Image from "next/image";

export default function SelectProduct() {
  const selectProduct = [
    {
      id: 1,
      title: "Pizza Calzone European",
      price: 64,
      img: "/images/food/Rectangle 1436.png",
    },
    {
      id: 2,
      title: "pepproni",
      price: 32,
      img: "/images/food/Rectangle 1436(1).png",
    },
  ];

  return (
    <div className={styles.select_product}>
      {selectProduct.map((item) => (
        <div className={styles.product}>
          <div className={styles.product_left}>
            <div className={styles.product_img}>
              <Image src={item.img} alt={item.title} width={112} height={112} />
            </div>
            <div className={styles.product_title}>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          </div>
          <div className={styles.product_right}>
            <div className={styles.product_right_icon}>
              <Minus bgcolor="#32343E" />
              <span>2</span>
              <Plus bgcolor="#32343E" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
