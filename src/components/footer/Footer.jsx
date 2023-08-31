import Style from "./footer.module.scss";
import footerImg from "../../assets/images/logo.svg";
export const Footer = () => {
  return (
    <footer id={Style.Footer}>
      <div className={`container ${Style.footerContainer}`}>
        <img src={footerImg} alt="" />
        <p>
          Copyright © Cleaning X | Designed by BRIX Templates - Powered by
          Webflow - Licenses BRIX Templates - Powered by Webflow -- Licenses
        </p>
      </div>
    </footer>
  );
};

export default Footer;
