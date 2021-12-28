import React from 'react';
import './input_group.scss';

export const Inputcomponent = ({
  id, type, element, rows, cols, placeholder, required, labelText, errorText, minlength, helpText, State,
}) => {
  const InputTag = `${element}`;

  let state;
  const states = ['Focus', 'Error', 'Disabled'];
  state = states.includes(State) ? State.toLowerCase() : '';

  return (
    <>
      <div className={['input-group', `${state}`].join(' ')}>
        {labelText && <label htmlFor={[`${type}`]}>{ labelText }</label>}
          <InputTag
            type={type}
            disabled={State == 'Disabled'}
            placeholder={placeholder}
            minlength={minlength}
            cols={cols}
            rows={rows}
            className={[`${type} ${state}`].join(' ')}
          />
        {helpText && <p className="help">{ helpText }</p>}
        {(State == 'Error') && <p className="error">{ errorText }</p>}
      </div>
    </>
  );
};
