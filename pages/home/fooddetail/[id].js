import React from "react";
import styles from "../../../styles/fooddetail.module.css";
import Imgdetail from "@/Components/templates/fooddetail/Imgdetail/Imgdetail";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import Descdetail from "@/Components/templates/fooddetail/descdetail/Descdetail";
import Feedback from "@/Components/templates/fooddetail/feedback/Feedback";
import Footercart from "@/Components/modules/footercart/Footercart";
import Minus from "@/Components/modules/Minus/Minus";
import Plus from "@/Components/modules/Plus/Plus";


export default function fooddetail() {
  return (
    <div className={styles.fooddetail}>
      <Menuheader bgcolor="#fff" back={false}>
        <div className={`${styles.menuheader_icon} flex_center`}>
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8434 1.14929C13.4768 0.784935 13.0417 0.495898 12.5627 0.298699C12.0837 0.101499 11.5704 0 11.0519 0C10.5335 0 10.0201 0.101499 9.54111 0.298699C9.06215 0.495898 8.62698 0.784935 8.26046 1.14929L7.49981 1.90512L6.73916 1.14929C5.99882 0.413658 4.9947 0.000381306 3.94771 0.000381314C2.90071 0.000381322 1.89659 0.413658 1.15626 1.14929C0.415918 1.88493 7.80073e-09 2.88267 0 3.92302C-7.80073e-09 4.96336 0.415918 5.9611 1.15626 6.69674L1.91691 7.45256L7.49981 13L13.0827 7.45256L13.8434 6.69674C14.21 6.33255 14.5009 5.90014 14.6994 5.42422C14.8979 4.94829 15 4.43818 15 3.92302C15 3.40785 14.8979 2.89774 14.6994 2.42182C14.5009 1.94589 14.21 1.51348 13.8434 1.14929Z"
              fill="#FF8400"
            />
          </svg>
        </div>
      </Menuheader>
      <div className={styles.fooddetail_section}>
        <Imgdetail />
        <Descdetail />
        <Feedback />
        <Footercart color="#F0F5FA">
          <div className={styles.footer_fooddetail}>
            <div className={styles.footer_top}>
              <span>32$</span>
              <div className={styles.minusplus}>
                <Minus bgcolor="#32343E" />
                <span>2</span>
                <Plus bgcolor="#32343E" />
              </div>
            </div>
            <div className={styles.addtocart}>
              <button>ADD TO CART</button>
            </div>
          </div>
        </Footercart>
      </div>
    </div>
  );
}
