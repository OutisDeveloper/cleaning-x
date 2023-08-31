import Style from "./article.module.scss";
import ArticleCard from "./articleCard/ArticleCard";
import ar1 from "../../assets/images/ar1.png";
import ar2 from "../../assets/images/ar2.png";
import Button from "../primaryBtn/Button";

export const Article = ({ arImg, arTitle, arText, arDate, arDiv }) => {
  return (
    <section id={Style.Article}>
      <div className={`container ${Style.articleContainer}`}>
        <div className={Style.articleTop}>
          <h1>Articles & resources</h1>
          <div className={Style.arTopRight}>
            <Button textBtn={"Get a free quote"} />
            <Button textBtn={"Browse articles"} />
          </div>
        </div>
        <div className={Style.articleCardBox}>
          <ArticleCard
            arImg={ar1}
            arTitle={
              "8 best vacuum cleaners to clean any mess for your home in 2022"
            }
            arText={
              "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."
            }
            arDate={"Jan 28, 2022"}
          />
          <ArticleCard
            arImg={ar2}
            arTitle={
              "How to properly disinfect your phone and other electronics"
            }
            arText={
              "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."
            }
            arDate={"Feb 1, 2022"}
          />
        </div>
      </div>
    </section>
  );
};

export default Article;
