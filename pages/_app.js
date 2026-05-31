import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { appWithTranslation } from "next-i18next";

config.autoAddCss = false;

// export default function App({ Component, pageProps }) {
//   return (

//       <Component {...pageProps} />

//   );
// }
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
