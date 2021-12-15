import React from 'react';
import './input_group.scss';

export const Inputcomponent = ({
  id, type, element, rows, cols, placeholder, required, labelText, errorText, minlength, helpText, State,
}) => {
  const InputTag = `${element}`;
  
  let state;
  const states = ["Focus", "Error", "Disabled"];
  state = states.includes(State) ? State.toLowerCase() : 'default';
  
  return (
    <>
      <div className="input-group">
        {labelText && <label htmlFor={[`${type}`]} className={[`input-group__label--${state}`].join(' ')}>{ labelText }</label>}
        <div className={[`input-group__icon ${type}-field ${state}`].join(' ')}>
          <InputTag
            type={type}
            id={id}
            disabled={State == 'Disabled'}
            required={required}
            placeholder={placeholder}
            minlength={minlength}
            cols={cols}
            rows={rows}
            className={['input__controls', `input__controls--${type} ${state}`].join(' ')}
          />
        </div>
        {helpText && <div htmlFor={[`${type}`]} className={[`input-group__label--${state}-help`].join(' ')}>{ helpText }</div>}
        {(State == 'Error') && <div htmlFor={[`${type}`]} className={['input-error', `input-group__label--${state}-error`].join(' ')}>{ errorText }</div>}
      </div>
    </>
  );
};