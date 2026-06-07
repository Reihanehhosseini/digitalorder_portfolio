import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

config.autoAddCss = false;

// export default function App({ Component, pageProps }) {
//   return (

//       <Component {...pageProps} />

//   );
// }
const MyApp = ({ Component, pageProps })=>{
const router = useRouter();
console.log("locale",router.locale);
console.log("asPath",router.asPath);

return <Component {...pageProps} />
} ;

export default appWithTranslation(MyApp);
