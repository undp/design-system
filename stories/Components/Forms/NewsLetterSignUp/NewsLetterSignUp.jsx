import React from 'react';
import './newsletter-signup.scss';
import { Inputcomponent } from '../InputFields/InputFields';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const SignUp = ({
  element, type, required, mode, label, button, btnType, btnID, errorText, placeholder, ...args
}) => {
  const InputTag = `${element}`;
  return (
    <div className={cls('sign-up', `${args.variant === 'inverted' ? args.variant : ''}`)}>
      <form action="/">
        <label htmlFor="newsletter">{label}</label>
        <div className="sign-up--field">
          <Inputcomponent element={element} type={type} placeholder={placeholder} required={required} mode={mode} errorText={errorText} />
          <InputTag
            type="submit"
            id="submit"
            value={button}
            className="form-submit button button--primary"
          />
        </div>
      </form>
    </div>
  );
};
SignUp.defaultProps = {
  variant: 'default',
};
