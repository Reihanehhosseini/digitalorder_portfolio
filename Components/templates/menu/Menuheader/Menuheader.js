import React from "react";
import styles from "./Menuheader.module.css";
import { useRouter } from "next/router";

export default function Menuheader({
  title,
  colorfont = "#181c2e",
  bgcolor = "#ecf0f4",
  svgcolor = "#181C2E",
  children,
  back=true
}) {
  const route = useRouter();

  const backHandler = () => {
    if (back) {
      route.back();
    }
    else{
      route.replace("/home")
    }
  };

  return (
    <div className={styles.menuheader}>
      <div className={styles.menuheader_left} onClick={backHandler}>
        <div
          className={`${styles.menuheader_icon} flex_center`}
          style={{ backgroundColor: bgcolor }}
        >
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 11L1 6L6 1"
              stroke={svgcolor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className={styles.menuheader_icon_title}
          style={{ color: colorfont }}
        >
          {title}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
