import Style from "./header.module.scss";
import logo from "../../assets/images/logo.svg";
import Button from "../primaryBtn/Button";
export const Header = () => {
  return (
    <nav id={Style.Header}>
      <div className={`container ${Style.HeaderContainer}`}>
        <div className={Style.HeaderLeft}>
          <a href={Style.Header}>
            <img src={logo} alt={logo} />
          </a>
        </div>
        <div className={Style.HeaderMiddle}>
          <ul className={Style.navUl}>
            <li className={Style.navItem}>
              <a className={Style.navLink} href="#home">
                Home
              </a>
            </li>
            <li className={Style.navItem}>
              <a className={Style.navLink} href=" #about">
                Aboout
              </a>
            </li>
            <li className={Style.navItem}>
              <a className={Style.navLink} href="#service">
                Services
              </a>
            </li>
            <li className={Style.navItem}>
              <a className={Style.navLink} href="#artcile">
                Artciles
              </a>
            </li>
            <li className={Style.navItem}>
              <a className={Style.navLink} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={Style.HeaderRight}>
          <span className={Style.navRightSpan}>Cart (0)</span>
          <Button textBtn={"Get a Free Quote"} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
