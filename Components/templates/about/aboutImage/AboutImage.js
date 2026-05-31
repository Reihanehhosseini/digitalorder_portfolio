import React, { useState } from "react";
import styles from "./AboutImage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

export default function AboutImage() {
  const [imageIndex, setImageIndex] = useState(0);
  const resturantImg = [
    "/images/about/1.jpg",
    "/images/about/2.jpg",
    "/images/about/3.jpg",
    "/images/about/4.jpg",
    "/images/about/5.jpg",
    "/images/about/6.jpg",
  ];
  const handleclickImg = (indexImg) => {
    setImageIndex(indexImg);
  };

  return (
    <div className={styles.aboutImage}>
      <div className={styles.aboutImage_big}>
        <Image src={resturantImg[imageIndex]} alt="topImage" height={250} width={700}/>
      </div>
      <div className={`${styles.aboutImage_swiper} aboutImageSwiper`}>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={30}
          freeMode={true}
          // pagination={true}
          mousewheel={true}
          keyboard={true}
          Navigation={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {resturantImg.map((item, index) => (
            <SwiperSlide>
              <div className={styles.aboutImage_swiperslide}>
                <Image
                  width={65}
                  height={67}
                  src={item}
                  alt=""
                  onClick={() => handleclickImg(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
