import React from 'react';
import './buttons.scss';

export const CtaButton = ({
  label, Type, State, For_Primary, id,
}) => {
  let type = 'primary';
  if (Type == 'Secondary') {
    type = 'secondary';
  }
  let state = '';
  if (State == 'Disabled') {
    state = 'disabled';
  }
  let for_primary = 'arrow';
  if (For_Primary == 'No Arrow') {
    for_primary = 'without-arrow';
  }

  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

  return (
    <>
      {Type === 'Secondary'
        ? (
          <a className={cls('button', `button-${type}`, `${state}`)} role="button" href="#" id={id}>
            {label}
          </a>
        )
        : (
          <a className={cls('button', `button-${type}`, `button-${for_primary}`, `${state}`)} role="button" href="#" id={id}>
            {label}
          </a>
        )}
    </>
  );
};
