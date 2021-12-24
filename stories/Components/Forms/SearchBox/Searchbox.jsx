import React from 'react';

export const Searchbox = ({
  id, type, rows, cols, placeholder, required, mode, labelText, errorText, disabled, minlength, helpText,
}) => (
  <>
    <div className={['input-group', `${mode}`].join(' ')}>
      {labelText && <label htmlFor={[`${type}`]}>{ labelText }</label>}
      <div className={[`${type}-field ${mode}`].join(' ')}>
        <input type={type} disabled={disabled} placeholder={placeholder} minLength={minlength} cols={cols} rows={rows} className={['input__controls', `${type} ${mode}`].join(' ')} />
      </div>
      {helpText && <div htmlFor={[`${type}`]} className={[`${mode}`].join(' ')}>{ helpText }</div>}
      {errorText && <p className={[`${mode}`].join(' ')}>{ errorText }</p>}
    </div>
  </>
);
