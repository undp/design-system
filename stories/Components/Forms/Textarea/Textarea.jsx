import React, { useEffect, useRef } from 'react';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Textarea = ({
  type, rows, cols, placeholder, labelText, errorText, minlength, helpText, State,
}) => {
  let state;
  const states = ['Focus', 'Error', 'Disabled'];
  state = states.includes(State) ? State.toLowerCase() : ' ';
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
      <textarea className={cls((`${state}` !== 'focus') ? `${state}` : '')} ref={inputElement} type={type} placeholder={placeholder} minLength={minlength} cols={cols} rows={rows} id={type} />
      {helpText && <p className="help">{ helpText }</p>}
      {(State == 'Error') && <p className="error">{ errorText }</p>}
    </>
  );
};
