import React from 'react';
import './signup.scss';
import { Inputcomponent } from '../../Forms/Inputfields/Input_group';

export const SignUp = ({
  element, type, required, mode, label, button, errorText, placeholder, ...args
}) => (
  <form className={['sign-up', `${args.variant}`].join(' ')} action="/" id="undp-signup-subscribe">
    <label className="footer-subtitle">{label}</label>
    <div className="sign-up--field">
      <Inputcomponent element={element} type={type} placeholder={placeholder} required={required} mode={mode} errorText={errorText} />
      <button type="submit" className="form-submit button button--primary">
        {button}
      </button>
    </div>
  </form>
);

SignUp.defaultProps = {
  variant: 'black',
};
