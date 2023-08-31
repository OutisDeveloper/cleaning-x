import Style from "./contact.module.scss";
import contactPhone from "../../assets/images/contactPhone.svg";
import Button from "../primaryBtn/Button";
import ContactInput from "./contactInput/ContactInput";

export const Contact = () => {
  return (
    <section id={Style.Contact}>
      <div className={`container ${Style.contactContainer}`}>
        <div className={Style.contactLeft}>
          <h1>Contact Us</h1>
          <p>
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <img src={contactPhone} alt="" />
          <h3>Not convinced yet?</h3>
          <span>
            Copy Massa bibendum consectetur maurisid gravida purus, dolor dui
            amet morbi non nunc urna purus diam.
          </span>
          <Button textBtn={"Browse our packages"} />
        </div>
        <div className={Style.contactRight}>
          <ContactInput />
        </div>
      </div>
    </section>
  );
};

export default Contact;
