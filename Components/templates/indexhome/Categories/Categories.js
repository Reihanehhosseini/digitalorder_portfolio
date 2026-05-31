import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import BtnSeeAll from "@/Components/modules/Button/BtnSeeAll";
import Cardcategorie from "@/Components/modules/Cardcategorie/Cardcategorie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Cardfood from "@/Components/modules/Cardfood/Cardfood";
import { useTranslation } from "next-i18next";
import { foodsMenu } from "@/data/db";

export default function Categories({ categorieFood }) {
  const {t} = useTranslation()

  const categorie = [
    { _id: "1", name: "All", images: "/images/food/all.jpg" },
    ...categorieFood,
  ];
  const [activeIndex, setActiveIndex] = useState("1");
  const [clickIndex, setClickIndex] = useState(foodsMenu);

  // const selectCategorie = async (id) => {
  //   setActiveIndex(id);
  //   if (id === "1") {
  //     setClickIndex(foodsMenu);
  //   } else {
  //     // const res = await fetch(
  //     //   `https://digital-order.liara.run/v1/food-category/${id}/foods?page=1`
  //     // );
  //     // const food = await res.json();
  //     // setClickIndex(food.data.data);
  //     setClickIndex(foodsMenu);
  //   }
  // };

  return (
    <div className={`${styles.allcategories} categorie`}>
      <div className={styles.header_categories}>
        <div className={styles.categories}>{t("All Categories")}</div>
        <BtnSeeAll />
      </div>
      <div className={styles.bottom_categories}>
        <Swiper
   
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            750: {
              slidesPerView: 4,
            },
            950: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {categorie.map((item) => (
            <SwiperSlide>
              <Cardcategorie
                isActive={activeIndex === item._id}
                {...item}
                onclick={() => selectCategorie(item._id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.foods_categories}>
        {clickIndex?.slice(0, 4).map((item) => (
          <Cardfood key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}
