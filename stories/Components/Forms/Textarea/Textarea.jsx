import React, { useEffect, useRef } from 'react';

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
      <div className={['input-group', `${state}`].join(' ')}>
        {labelText && <label htmlFor={[`${type}`]}>{ labelText }</label>}
        <textarea ref={inputElement} type={type} disabled={State == 'Disabled'} placeholder={placeholder} minLength={minlength} cols={cols} rows={rows} />
        {helpText && <p className="help">{ helpText }</p>}
        {(State == 'Error') && <p className="error">{ errorText }</p>}
      </div>
    </>
  );
};
