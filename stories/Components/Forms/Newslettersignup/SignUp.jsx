import React from 'react';
import './signup.scss';
import { Inputcomponent } from '../Inputfields/Input_group';

export const SignUp = ({
  element, type, required, mode, label, button, errorText, placeholder, ...args
}) => {
  const InputTag = `${element}`;
  return(
  <form action="/">
    <div className={['sign-up', `${args.variant}`].join(' ')}>
      <label className="footer-subtitle">{label}</label>
      <div className="sign-up--field">
        <Inputcomponent element={element} type={type} placeholder={placeholder} required={required} mode={mode} errorText={errorText} />
        <InputTag
          type='submit'
          id='submit'
          className="form-submit button button--primary"
          />
      </div>
    </div>
  </form>
);
}
SignUp.defaultProps = {
  variant: 'black',
};
