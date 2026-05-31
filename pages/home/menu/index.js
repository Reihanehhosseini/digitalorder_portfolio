import React from "react";
import styles from "../../../styles/Menu.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import Menuprofile from "@/Components/templates/menu/Menuprofile/Menuprofile";
import Menulist from "@/Components/templates/menu/Menulist/Menulist";
import Logout from "@/Components/templates/menu/Logout/Logout";
import Login from "@/Components/templates/menu/Login/Login";
import LanguageList from "@/Components/templates/LanguageList/LanguageList";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Menu() {
  const { t } = useTranslation();
  return (
    <div className={styles.menu}>
      <Menuheader>
        <div className={`${styles.menuheader_icon} flex_center`}>
          <svg
            width="19"
            height="5"
            viewBox="0 0 19 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.40942 3.32568C9.96171 3.32568 10.4094 2.87797 10.4094 2.32568C10.4094 1.7734 9.96171 1.32568 9.40942 1.32568C8.85714 1.32568 8.40942 1.7734 8.40942 2.32568C8.40942 2.87797 8.85714 3.32568 9.40942 3.32568Z"
              stroke="#181C2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4094 3.32568C16.9617 3.32568 17.4094 2.87797 17.4094 2.32568C17.4094 1.7734 16.9617 1.32568 16.4094 1.32568C15.8571 1.32568 15.4094 1.7734 15.4094 2.32568C15.4094 2.87797 15.8571 3.32568 16.4094 3.32568Z"
              stroke="#181C2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.40942 3.32568C2.96171 3.32568 3.40942 2.87797 3.40942 2.32568C3.40942 1.7734 2.96171 1.32568 2.40942 1.32568C1.85714 1.32568 1.40942 1.7734 1.40942 2.32568C1.40942 2.87797 1.85714 3.32568 2.40942 3.32568Z"
              stroke="#181C2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Menuheader>
      <Menuprofile>
        <p className={styles.menuprofile_p_element}>
          {t(
            "If you are in a resturant, you can press the front page in case of a problem"
          )}
          <br />
          <span className={`${styles.bell_menu}`}>
            <span>{t("Hey")}</span>
            <span>
              <img src="/images/bell.gif" alt="" />
            </span>
          </span>
        </p>
      </Menuprofile>
      <Menulist />
      <LanguageList />
      <Logout />
      <Login />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
