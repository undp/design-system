import React from 'react';
import './buttons.scss';
import '../../../../Atom/Icons/icons.scss';

export const for_primary_options = {
  'No Arrow': 'without-arrow',
  Arrow: 'arrow',
  Download: 'download',
  'External link': 'external-link',
};

export function CtaButton({
  label,
  Type,
  State,
  For_Primary,
  ...props
}) {
  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);
  const type = (Type == 'Secondary') ? 'secondary' : 'primary';
  const state = (State == 'Disabled') ? 'disabled' : '';
  const for_primary = for_primary_options[`${For_Primary}`];
  const classes = cls('button', `button-${type}`, `button-${for_primary}`, `${state}`);

  return (
    <a
      className={classes}
      role="button"
      href="#"
      {...props}
    >
      {label}
      {For_Primary == 'External link' && (
        <span className="external-link-animated"><i /></span>
      )}
      {For_Primary == 'Download' && (
        <span className="download-animated"><i /></span>
      )}
    </a>
  );
}
