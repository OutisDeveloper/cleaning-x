import Style from "./info.module.scss";
import Button from "../primaryBtn/Button";

export const Info = () => {
  return (
    <section id={Style.Info}>
      <div className={`container ${Style.infoContainer}`}>
        <div className={Style.quality}>
          <h1>Quality cleaning for your home</h1>
          <p>
            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
          </p>
          <div className={Style.quad}>
            <div className={Style.one}></div>
            <div className={Style.one}></div>
            <div className={Style.one}></div>
            <div className={Style.one}></div>
            <div className={Style.one}></div>
          </div>
        </div>
        <div className={Style.contact}>
          <h3>Contact us</h3>
          <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          <p>(414) 567 - 2109</p>
          <p>contact@cleaning.com</p>
        </div>
        <div className={Style.hours}>
          <h2>Hours</h2>
          <h3>Monday to Friday</h3>
          <p>6:00 AM - 9:00 PM</p>
          <h3>Saturday & Sunday</h3>
          <p>8:00 AM - 8:00 PM</p>
        </div>
        <div className={Style.free}>
          <h2>Get a free estimate</h2>
          <span>(414) 567 - 2109</span>
          <p>
            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
          </p>
          <Button textBtn={"Request a free quote"} />
        </div>
      </div>
    </section>
  );
};

export default Info;
