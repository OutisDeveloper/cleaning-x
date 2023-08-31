import Style from "./about.module.scss";
import AboutCard from "./aboutCard/AboutCard";
import abCardImg1 from "../../assets/images/abcard1.png";
import abCardImg2 from "../../assets/images/abcard2.png";
import abCardImg3 from "../../assets/images/abcard3.png";
import Button from "../primaryBtn/Button";
export const About = () => {
  return (
    <div id={Style.About}>
      <div className={`container ${Style.AboutContainer}`}>
        <h1>About Us</h1>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
        <div className={Style.aboutCardBox}>
          <AboutCard
            acImg={abCardImg1}
            acTitle={"1. Schedule online"}
            acText={
              "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
            }
          />
          <AboutCard
            acImg={abCardImg2}
            acTitle={"2. Pay online easily"}
            acText={
              "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."
            }
          />
          <AboutCard
            acImg={abCardImg3}
            acTitle={"3. Get your house cleaned"}
            acText={
              "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."
            }
          />
        </div>
        <div className={Style.aboutBottom}>
          <Button textBtn={"Get a free quote"} />
          <Button textBtn={"Explore services"} />
        </div>
      </div>
    </div>
  );
};

export default About;
