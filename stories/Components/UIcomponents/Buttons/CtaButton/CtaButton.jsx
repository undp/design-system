import React from 'react';
import './buttons.scss';
import '../../../../Atom/Icons/icons.scss';

export const icon_options = {
  'No Arrow': 'without-arrow',
  Arrow: 'arrow',
  Download: 'download',
  'External link': 'external-link',
};

export function CtaButton({
  label,
  Type,
  State,
  Icon,
  ...props
}) {
  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);
  const type = (Type == 'Secondary') ? 'secondary' : 'primary';
  const state = (State == 'Disabled') ? 'disabled' : '';

  let default_icon = (Type == 'Secondary') ? icon_options['No Arrow'] : icon_options.Arrow;
  let icon = Icon ? icon_options[`${Icon}`] : default_icon;

  const classes = cls('button', `button-${type}`, `button-${icon}`, `${state}`);

  return (
    <a
      className={classes}
      role="button"
      href="#"
      {...props}
    >
      {label}
      {Icon == 'External link' && (
        <span className="external-link-animated"><i /></span>
      )}
      {Icon == 'Download' && (
        <span className="download-animated"><i /></span>
      )}
    </a>
  );
}
