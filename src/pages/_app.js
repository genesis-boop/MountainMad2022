import "../public/style/global.css";
import Navbar from "../components/Navbar"
const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="">
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
};
export default MyApp;
