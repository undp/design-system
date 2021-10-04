import React from 'react';
import './input_group.scss';

export const Inputcomponent = ({ id, type, element,rows, cols, placeholder, required, mode, labelText, errorText, disabled, minlength, helpText }) => {
  const InputTag = `${element}`;
  return (
    <>
      <div className="input-group">
        <label for= {[`${type}`]} className= {[`input-group__label--${mode}`].join(' ')}>{ labelText }</label>
        <div className={[`input-group__icon ${type}-field ${mode}`].join(' ')}>
          <InputTag
            type={ type }
            id= { id }
            disabled= { disabled }
            required= { required }
            placeholder= { placeholder }
            minlength= { minlength }
            cols={ cols }
            rows={ rows }
            className= {['input__controls', `input__controls--${type} ${mode}`].join(' ')}
          />
        </div>
        <label for= {[`${type}`]} className= {[`input-group__label--${mode}-help`].join(' ')}>{ helpText }</label>
        <label for= {[`${type}`]} className= {[`input-group__label--${mode}-error`].join(' ')}>{ errorText }</label>
      </div>
    </>
  );
};
