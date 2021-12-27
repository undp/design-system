import React from 'react';

export const Textarea = ({
  id, type, rows, cols, placeholder, required, labelText, errorText, minlength, helpText, State,
}) => {
  let state;
  const states = ['Focus', 'Error', 'Disabled'];
  state = states.includes(State) ? State.toLowerCase() : ' ';

  return (
    <>
      <div className={['input-group', `${state}`].join(' ')}>
        {labelText && <label htmlFor={[`${type}`]}>{ labelText }</label>}
        <div className={[`${type}-field`]}>
          <textarea type={type} disabled={State == 'Disabled'} placeholder={placeholder} minLength={minlength} cols={cols} rows={rows} className={['input__controls ', `${type} ${state}`].join(' ')} />
        </div>
        {helpText && <p className="help">{ helpText }</p>}
        {(State == 'Error') && <p className="error">{ errorText }</p>}
      </div>
    </>
  );
};
