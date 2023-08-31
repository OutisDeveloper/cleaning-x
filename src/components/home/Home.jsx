import Style from "./home.module.scss";
import Button from "../primaryBtn/Button";
import HomeBottomImg from "../../assets/images/homeBottonPhone.svg";
import HomeRightImg from "../../assets/images/HomeRight.png";
export const Home = () => {
  return (
    <section id={Style.Home}>
      <div className={`container ${Style.homeContainer}`}>
        <div className={Style.homeLeft}>
          <h1>Quality cleaning for your home</h1>
          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className={Style.homeLeftBottom}>
            <Button textBtn={"Get a Free Quote"} />
            <img src={HomeBottomImg} alt="" />
          </div>
        </div>
        <div className={Style.homeRight}>
          <img className={Style.HomeRightImg} src={HomeRightImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
