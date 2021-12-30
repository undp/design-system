import React from 'react';

export const Label = ({
  labelText, errorText, helpText,
}) => (
  <>
    <label htmlFor="text" className="input-group__label">{ labelText }</label>
    <p className="input-group__label-help">{ helpText }</p>
    <p className="input-group__label-error">{ errorText }</p>
  </>
);
