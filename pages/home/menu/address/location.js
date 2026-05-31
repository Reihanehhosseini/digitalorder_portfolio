import React from "react";
import styles from "../../../../styles/location.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import LocationForm from "@/Components/templates/location/LocationForm";


export default function location() {
  
  return (
    <div className={styles.location}>
      <Menuheader bgcolor="#32343E" svgcolor="#fff" />
      <div className={styles.location_section}>
        <div className={styles.location_map}>
          <img src="" alt="" />
        </div>
        <LocationForm />
        
      </div>
    </div>
  );
}
