import Style from "./service.module.scss";
import Button from "../primaryBtn/Button";
import ServiceCard from "./serviceCard/ServiceCard";
import servImg1 from "../../assets/images/serv1.png";
import servImg2 from "../../assets/images/serv2.png";
import servImg3 from "../../assets/images/serv3.png";
export const Service = () => {
  return (
    <section id={Style.Service}>
      <div className={`container ${Style.serviceContainer}`}>
        <div className={Style.ServiceTop}>
          <h1>Our Services</h1>
          <Button textBtn={"Explore services"} />
        </div>
        <div className={Style.serviceCardBox}>
          <ServiceCard
            servImg={servImg1}
            servTitle={"House cleaning"}
            servText={
              "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."
            }
          />

          <ServiceCard
            servImg={servImg2}
            servTitle={"Office cleaning"}
            servText={
              "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."
            }
          />
          <ServiceCard
            servImg={servImg3}
            servTitle={"Industrial cleaning"}
            servText={
              "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
