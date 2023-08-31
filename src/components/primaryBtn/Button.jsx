import Style from "./button.module.scss";

export const Button = ({ textBtn }) => {
  return <button className={Style.primaryBtn}>{textBtn}</button>;
};

export default Button;
