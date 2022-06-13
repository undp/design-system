import React from 'react';
import './radio.scss';
import '../../../assets/scss/_typography.scss';

export function Radio({
  label, id, name, label_pos,
}) {
  return (
    <div className="form-check">
      {label && label_pos == 'before' && (<label htmlFor={id}>{label}</label>)}
      <input type="radio" id={id} value="" name={name} />
      {label && label_pos == 'after' && (<label htmlFor={id}>{label}</label>)}
    </div>
  );
}

Radio.defaultProps = {
  label_pos: 'after',
};
