import React from 'react';
import './input_group.scss';
import { Error_caption } from './error';
import { Label_caption } from './label';
import { Help_caption } from './help';

export const Passwordcomponent = ({ id, type, placeholder, required, mode, labelText, errorText, disabled, minlength, helpText }) => {
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
        placeholder= {placeholder}
        minlength= {minlength}
        className={[`input-type ${type}-field ${mode}`].join(' ')}
      />
      <div className= {[`help__message ${mode}`].join(' ')}>
        <Help_caption label= { helpText } />
      </div>
      <div className={[`${mode}`]}>
        <Error_caption label={ errorText}/>
      </div>
    </form>
  );
};
