import Style from "./covid.module.scss";
import covidImg from "../../assets/images/covidLeft.png";
import Button from "../primaryBtn/Button";
import cvBotImg from "../../assets/images/cvBot.svg";

export const Covid = () => {
  return (
    <section id={Style.Covid}>
      <div className={`container ${Style.covidContainer}`}>
        <div className={Style.covidLeft}>
          <img src={covidImg} alt="" />
        </div>
        <div className={Style.covidRight}>
          <span>Covid-19 sanitization</span>
          <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
          <p>
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
          <div className={Style.cvRightBottom}>
            <Button textBtn={"Get a free quote"} />
            <img src={cvBotImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Covid;
