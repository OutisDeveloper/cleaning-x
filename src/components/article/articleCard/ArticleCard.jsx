import Style from "./articleCard.module.scss";

export const ArticleCard = ({ arTitle, arText, arDate, arImg }) => {
  return (
    <div className={Style.articleCard}>
      <img src={arImg} alt="" />
      <div className={Style.arContent}>
        <h2>{arTitle}</h2>
        <p>{arText}</p>
        <div className={Style.arContentBottom}>
          <span>{arDate}</span>
          <div className={Style.arDiv}></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
