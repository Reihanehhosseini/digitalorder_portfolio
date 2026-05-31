import React from "react";
import styles from "../../styles/Home.module.css";
import Header from "@/Components/templates/indexhome/Header/Header";
import Order from "@/Components/templates/indexhome/Order/Order";
import Search from "@/Components/templates/indexhome/Search/Search";
import Mostpopular from "@/Components/templates/indexhome/Mostpopular/Mostpopular";
import Categories from "@/Components/templates/indexhome/Categories/Categories";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {allFoods} from "@/data/db";


export default function Home({ categoriesfood, allFoods }) {
 
  return (
    <div className={styles.home}>
      <Header />
      <Order />
      <Search />
      <Mostpopular allFoods={allFoods} />
      <Categories
        categorieFood={categoriesfood}
        allFoods={allFoods}
      />
    </div>
  );
}

export async function getStaticProps({locale}) {
  // const resCategories = await fetch(
  //   "https://digital-order.liara.run/v1/food-category?page=1"
  // );
  // const categoriesfood = await resCategories.json();

  // const resAllFoods = await fetch(
  //   "https://digital-order.liara.run/v1/food?page=1",{
  //     method:"GET",
  //     headers:{
  //       "Content-Type" : "application.json",
  //       "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG5Eb2UiLCJpYXQiOjE3NjQ3NDA3ODEsImV4cCI6MTc4NjM0MDc4MX0.DIbbrdVuABc5stQCOJ-KB-8BF1I61BW_gsCZzpmrfQQ"
  //     },
  //   }
  // );
  // const allFoods = await resAllFoods.json()
  return {
    props: {
      ...(await serverSideTranslations(locale , ["common"])),
      categoriesfood: allFoods,
      allFoods: allFoods,
    },
    revalidate: 60 * 60 * 24,
  };
}
