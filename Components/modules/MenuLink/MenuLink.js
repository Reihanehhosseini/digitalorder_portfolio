import React from "react";
import styles from "./MenuLink.module.css"
import Link from "next/link";
import Icon from "../Icon/Icon";
export default function  MenuLink({title , icon , href }) {
  return (
    <Link href={`/home/menu/${href}`} className={styles.link_component}>
      <div className={styles.menulist_list_left}>
        <Icon icon={icon}/>
        <span>{title}</span>
      </div>
      <div>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L5 5L1 1"
            stroke="#747783"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
