import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";

export default function Modal({ cancelModal , logoutmodal }) {
  const router = useRouter()
  return createPortal(
    <div className={styles.modal}>
      <div className={`${styles.modal_box} flex_center`}>
        <h1>Are You Sure You Want To Log Out?</h1>
        <p>If you log out, your information will not be saved.</p>
        <div className={styles.modal_btn}>
          <button
            style={{
              backgroundColor: "#ff7622",
              border: "none",
              color: "#fff",
            }}
            onClick={()=>{router.replace("/home")}}
          >
            Log Out
          </button>
          <button
            style={{ backgroundColor: "#fff", border: "2px solid #000" }}
            onClick={cancelModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
