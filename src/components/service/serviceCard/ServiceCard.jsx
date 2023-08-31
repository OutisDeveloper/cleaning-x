import Style from "./serviceCard.module.scss";

export const ServiceCard = ({ servImg, servTitle, servText }) => {
  return (
    <div className={Style.ServiceCard}>
      <img src={servImg} alt="" />
      <h3>{servTitle}</h3>
      <p>{servText}</p>
    </div>
  );
};

export default ServiceCard;
