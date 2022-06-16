import React, { useEffect, useRef } from 'react';
import './input-fields.scss';
import '../../../assets/scss/_typography.scss';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function Inputcomponent({
  type, element, placeholder, labelText, errorText, helpText, State, id,
}) {
  const InputTag = `${element}`;
  let state;
  const states = ['Focus', 'Error', 'Disabled'];
  state = states.includes(State) ? State.toLowerCase() : '';
  const inputElement = useRef(null);
  useEffect(() => {
    if (state == 'focus') {
      inputElement.current.focus();
    } else {
      inputElement.current.blur();
    }
  }, [state]);
  return (
    <>
      {labelText && <label className={cls((`${state}` == 'disabled') ? `${state}` : '')} htmlFor={[`${type}`]}>{ labelText }</label>}
      <InputTag
        className={cls((`${state}` !== 'focus') ? `${state}` : '')}
        ref={inputElement}
        type={type}
        disabled={State == 'Disabled'}
        placeholder={placeholder}
        name={type}
        id={id}
        {...(labelText ? '' : { 'aria-label': placeholder })}
      />
      {helpText && <p className="help">{ helpText }</p>}
      {(State == 'Error') && <p className="error">{ errorText }</p>}
    </>
  );
}
