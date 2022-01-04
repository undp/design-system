import React from 'react';
import './input_group.scss';

const cls = (...classes) => classes.filter(Boolean).join(' ');
export const Inputcomponent = ({
  id, type, element, rows, cols, placeholder, name, required, labelText, errorText, minlength, helpText, State,
}) => {
  const InputTag = `${element}`;

  let state;
  const states = ['Focus', 'Error', 'Disabled'];
  state = states.includes(State) ? State.toLowerCase() : '';

  return (
    <>
      <div className={cls('input-group', `${state}`)}>
        {labelText && <label htmlFor={[`${type}`]}>{ labelText }</label>}
        <InputTag
          type={type}
          disabled={State == 'Disabled'}
          placeholder={placeholder}
          minLength={minlength}
          cols={cols}
          rows={rows}
          name={type}
          className={cls(`${type}`, `${state}`)}
        />
        {helpText && <p className="help">{ helpText }</p>}
        {(State == 'Error') && <p className="error">{ errorText }</p>}
      </div>
    </>
  );
};
