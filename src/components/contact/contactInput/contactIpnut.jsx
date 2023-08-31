import Style from "./contactInput.module.scss";

export const ContactInput = ({ input }) => {
  return (
    <div className={Style.contactInput}>
      <label id="label" htmlFor="ipnut">
        {input}
      </label>
      <input type="text" id="input" />
    </div>
  );
};

export default ContactInput;
