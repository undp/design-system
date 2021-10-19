import React from "react";
import "./signup.scss";
import { Inputcomponent } from "../../Atom/Input-group/Input_group";

export const variant_options = {
  Black: "black",
  White: "white",
};

export const SignUp = ({ element, type, required, mode, label, button, errorText, placeholder, ...args }) => {
  return (
    <form className={["sign-up",`sign-up--${variant_options[`${args.variant}`]}`].join(" ")} action="/" id="undp-signup-subscribe">
      <label className="footer-subtitle">{label}</label>
      <div className="sign-up--field">
      <Inputcomponent element={element} type={type} placeholder={placeholder} required={required} mode={mode} errorText={errorText}/>
        <button type="submit" className="form-submit button button--primary">
          {button}
        </button>
      </div>
    </form>
  );
};

SignUp.defaultProps = {
  variant: "Black",
};
