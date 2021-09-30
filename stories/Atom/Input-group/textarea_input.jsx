import React from 'react';
import './input_group.scss';
import { Error_caption } from './error';
import { Label_caption } from './label';

export const Textareacomponent = ({ id, inputfor, cols, rows, placeholder, required, mode, labelText, errorText, disabled }) => {
  return (
    <form className= 'input-group'>
      <div className={[`label__message ${mode}`]}>
        <Label_caption label= { labelText } />
      </div>
      <textarea
        id={id}
        inputfor="textarea"
        name="first-name"
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        wrap="soft"
        labelText={labelText}
        disabled={disabled}
        required={required}
        className={[`input-type ${inputfor}-field ${mode}`].join(' ')}
      />
      <div className={[`${mode}`]}>
        <Error_caption label={ errorText}/>
      </div>
    </form>
  );
};
