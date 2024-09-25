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
    // State initialization when the page is loaded
    updateInputState();

    // Update state when the value changes
    inputElement.current.addEventListener('input', updateInputState);

    return () => {
      inputElement.current?.removeEventListener('input', updateInputState);
    };
  }, [state]);

  const updateInputState = () => {
    if (inputElement.current.value) {
      inputElement.current.classList.remove('empty');
      inputElement.current.classList.add('filled');
    } else {
      inputElement.current.classList.remove('filled');
      inputElement.current.classList.add('empty');
    }
  };

  return (
    <>
      {labelText && <label className={cls((`${state}` == 'disabled') ? `${state}` : '')} htmlFor={[`${type}`]}>{labelText}</label>}
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
      {helpText && <p className="help">{helpText}</p>}
      {(State == 'Error') && <p className="error">{errorText}</p>}
    </>
  );
}
