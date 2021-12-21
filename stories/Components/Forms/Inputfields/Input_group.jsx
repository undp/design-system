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
      <div className={['input-group', `${state}`].join(' ')}>
        {labelText && <label htmlFor={[`${type}`]} className='input-group__label'>{ labelText }</label>}
        <div className={[`input-group__icon ${type}-field`]}>
          <InputTag
            type={type}
            id={id}
            disabled={State == 'Disabled'}
            required={required}
            placeholder={placeholder}
            minlength={minlength}
            cols={cols}
            rows={rows}
            className={['input__controls', `input__controls--${type} ${state}-state`].join(' ')}
          />
        </div>
        {helpText && <p className='input-group__label-help'>{ helpText }</p>}
        {(State == 'Error') && <p className='input-error'>{ errorText }</p>}
      </div>
    </>
  );
};