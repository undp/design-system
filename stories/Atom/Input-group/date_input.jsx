import React from 'react';
import './input_group.scss';
import { Error_caption } from './error';
import { Label_caption } from './label';

export const Datecomponent = ({ type, id, disabled, required, mode, placeholder, errorText, labelText}) => {
  return (
    <form className= 'input-group'>
      <div className={[`label__message ${mode}`]}>
        <Label_caption label= { labelText } />
      </div>
      <div className={[`field__setdate ${type} ${mode}`]}>
      <input 
        type={type}
        id= {id}
        disabled= {disabled}
        required={required}
        placeholder= {placeholder}
        className={[`input-type ${type}-field ${mode}`].join(' ')}
      />
      </div>
      <div className={[`${mode}`]}>
        <Error_caption label={ errorText}/>
      </div>
    </form>
  );
};
