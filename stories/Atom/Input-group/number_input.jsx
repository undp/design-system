import React from 'react';
import './input_group.scss';
import { Error_caption } from './error';
import { Label_caption } from './label';

export const Numbercomponent = ({ id, type, placeholder, required, mode, labelText, errorText, disabled, pattern}) => {
  return (
    <form className= 'input-group'>
      <div className={[`label__message ${mode}`]}>
        <Label_caption label= { labelText } />
      </div>
      <input 
        type={type}
        id= {id}
        disabled= {disabled}
        required={required}
        pattern ={pattern}
        placeholder= {placeholder}
        className={[`input-type ${type}-field ${mode}`].join(' ')}
      />
      <div className={[`${mode}`]}>
        <Error_caption label={ errorText}/>
      </div>
    </form>
  );
};
