import React from 'react';

export const state_options = {
  Default: 'default',
  Focus: 'focus',
  Error: 'error',
  Disabled: 'disabled',
};

export const Textarea = ({
  id, type, rows, cols, placeholder, required, labelText, errorText, minlength, helpText, State,
}) => {
  return (
    <>
      <div className="input-group">
        {labelText && <label htmlFor={[`${type}`]} className={[`input-group__label--${state_options[`${State}`]}`].join(' ')}>{ labelText }</label>}
        <div className={[`input-group__icon ${type}-field ${state_options[`${State}`]}`].join(' ')}>
          <textarea type={type} id={id}  disabled={State == 'Disabled'} required={required} placeholder={placeholder} minlength={minlength} cols={cols} rows={rows} className={['input__controls', `input__controls--${type} ${state_options[`${State}`]}-state`].join(' ')}></textarea>
        </div>
        {helpText && <div htmlFor={[`${type}`]} className={[`input-group__label--${state_options[`${State}`]}-help`].join(' ')}>{ helpText }</div>}
        {(State == 'Error') && <div htmlFor={[`${type}`]} className={['input-error', `input-group__label--${state_options[`${State}`]}-error`].join(' ')}>{ errorText }</div>}
      </div>
    </>
)};
