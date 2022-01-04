import React from 'react';
import './signup.scss';
import { Inputcomponent } from '../Inputfields/Input_group';

const cls = (...classes) => classes.filter(Boolean).join(' ');
export const SignUp = ({
  element, type, required, mode, label, button, btnType, btnID, errorText, placeholder, ...args
}) => {
  const InputTag = `${element}`;
  return (
    <form action="/">
      <div className={cls('sign-up', `${args.variant === 'inverted' ? args.variant : ''}`)}>
        <label>{label}</label>
        <div className="sign-up--field">
          <Inputcomponent element={element} type={type} placeholder={placeholder} required={required} mode={mode} errorText={errorText} />
          <InputTag
            type="submit"
            id="submit"
            Value={button}
            className="form-submit button button--primary"
          />
        </div>
      </div>
    </form>
  );
};
SignUp.defaultProps = {
  variant: 'default',
};
