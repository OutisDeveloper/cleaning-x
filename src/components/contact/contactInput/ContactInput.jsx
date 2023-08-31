import Style from "./contactInput.modules.scss";

export const ContactInput = () => {
  return (
    <div className={Style.contactInput}>
      <input type="text" id="input" />
      <label id="label" htmlFor="ipnut">
        text
      </label>
    </div>
  );
};

export default ContactInput;
