import React from 'react';

export const Textarea = ({
  id, type, rows, cols, placeholder, required, labelText, name, errorText, minlength, helpText, State,
}) => {
  let state;
  const states = ['Focus', 'Error', 'Disabled'];
  state = states.includes(State) ? State.toLowerCase() : ' ';

  return (
    <>
      <div className={['input-group', `${state}`].join(' ')}>
        {labelText && <label htmlFor={[`${type}`]}>{ labelText }</label>}
          <textarea type={type} disabled={State == 'Disabled'} placeholder={placeholder} minLength={minlength} cols={cols} rows={rows} name={type} className={[`${type} ${state}`].join(' ')} />
        {helpText && <p className="help">{ helpText }</p>}
        {(State == 'Error') && <p className="error">{ errorText }</p>}
      </div>
    </>
  );
};
