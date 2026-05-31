import React, { useEffect, useState } from "react";
import styles from "./Mostpopular.module.css";
import BtnSeeAll from "@/Components/modules/Button/BtnSeeAll";
import Cardmost from "@/Components/modules/Cardmost/Cardmost";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { useTranslation } from "next-i18next";

export default function Mostpopular({ allFoods }) {
  const { t } = useTranslation("common");

  const foodPopular = [
    {
      id: 1,
      name: "Pizza",
      rating: "5",
      price: "70",
      images: "/images/food/pepperoni.png",
    },
    {
      id: 2,
      name: "Kebab",
      rating: "5",
      price: "70",
      images: "/images/food/kebab.png",
    },
    {
      id: 3,
      name: "Ghorme Sabzi",
      rating: "5",
      price: "70",
      images: "/images/food/ghorme.png",
    },
    {
      id: 4,
      name: "burger",
      rating: "5",
      price: "70",
      images: "/images/food/burger.png",
    },
    {
      id: 5,
      name: "hotdog",
      rating: "5",
      price: "70",
      images: "/images/food/hotdog.png",
    },
  ];

  //گرفتن اطلاعات از بک اند که به علت زشت بودن تصاویر کامنت شد

  // const [ popularFood , setPopularFood] = useState(null)

  // useEffect(()=>{
  //   const filterItem = allFoods.filter( item => item.rating === 5)
  //   setPopularFood(filterItem)

  // },[])
  return (
    <div className={`${styles.mostpopular} popular`}>
      <div className={styles.header_mostpopular}>
        <div className={styles.most}>{t("Most Popular")}</div>
        <BtnSeeAll />
      </div>
      <div className={styles.bottom_mpstpopular}>
        <Swiper
          slidesPerView={6}
          spaceBetween={16}
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
          {foodPopular?.map((item) => (
            <>
              <SwiperSlide>
                <Cardmost {...item} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
