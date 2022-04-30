import "../public/style/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="">
      
      <Component {...pageProps} />
    </div>
  );
};
export default MyApp;
