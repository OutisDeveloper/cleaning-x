import Style from "./aboutCard.module.scss";

export const AboutCard = ({ acImg, acTitle, acText }) => {
  return (
    <div className={Style.AboutCard}>
      <img className={Style.acImg} src={acImg} alt="" />
      <h3 className={Style.acTitle}>{acTitle}</h3>
      <p className={Style.acText}>{acText}</p>
    </div>
  );
};

export default AboutCard;
