import React, { useEffect, useRef } from 'react';
import './input_group.scss';

export const Inputcomponent = ({
  type, element, placeholder, labelText, errorText, helpText, State,
}) => {
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
      <div className={['input-group', `${state}`].join(' ')}>
        {labelText && <label htmlFor={[`${type}`]}>{ labelText }</label>}
        <InputTag
          ref={inputElement}
          type={type}
          disabled={State == 'Disabled'}
          placeholder={placeholder}
          name={type}
          id={type}
        />
        {helpText && <p className="help">{ helpText }</p>}
        {(State == 'Error') && <p className="error">{ errorText }</p>}
      </div>
    </>
  );
};
