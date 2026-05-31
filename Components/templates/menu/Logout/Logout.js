import React, { useState } from "react";
import styles from "./Logout.module.css";
import { useRouter } from "next/router";
import Modal from "../../modal/Modal";
import { useTranslation } from "next-i18next";

export default function Logout() {
  const {t} = useTranslation()
  const route = useRouter();

  const [modal, setModal] = useState(false);

  const logoutfunc = () => {
    setModal(true);
  };

  return (
    <>
      <div className={styles.logout}>
        <button onClick={logoutfunc}>
          <div className={styles.logout_list_left}>
            <span className="flex_center">
              <img src="/images/Logout.png" alt="" />
            </span>
            <span>{t("Log out")}</span>
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
        </button>
      </div>
      {modal && <Modal cancelModal={() => setModal(false)} />}
    </>
  );
}
