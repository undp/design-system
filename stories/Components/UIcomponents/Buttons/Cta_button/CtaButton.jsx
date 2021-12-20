import React from 'react';
import './buttons.scss';

export const CtaButton = ({
  label, Type, State, For_Primary,
}) => {
  
  let type = 'primary';
  if(Type == 'Secondary'){
    type = 'secondary'
  }
  let state = 'active';
  if(State == 'Disabled'){
    state = 'disabled'
  }
  let for_primary = 'arrow';
  if(For_Primary == 'No Arrow'){
    for_primary = 'without-arrow'
  }

  return(
  <>
    {Type === 'Secondary'
      ? (
        <a className={['button', `button-${type}`, `${state}`].join(' ')}>
          {label}
        </a>
      )
      : (
        <a className={['button', `button-${type}`, ` button-${for_primary}`, `${state}`].join(' ')}>
          {label}
        </a>
      )}
  </>
)};
