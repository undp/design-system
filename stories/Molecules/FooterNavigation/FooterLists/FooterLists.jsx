import React from 'react';
import './footer-lists.scss';
import { Link } from '../../../Atom/Typography/Links/Links';

export const variant_options = {
  default: '',
  inverted: 'inverted',
};

const cls = (...classes) => (classes.filter(Boolean).length > 0 ? classes.filter(Boolean).join(' ') : null);

export const FooterLists = ({
  type, headerText, text, style, ariacontrol, arialabel, data, ...args
}) => {
  let screen_variant = variant_options[`${args.variant}`];
  return (
    <div className={cls('cell', 'medium-2', 'footer-item', `${screen_variant}`)}>
      <button type="button" id={arialabel} className="footer-heading" tabIndex="0" aria-controls={ariacontrol} aria-expanded="false">{headerText}</button>
      <div id={ariacontrol} className="footer-panel" aria-label={arialabel} aria-hidden="false" role="region">
        {data.map((item, index) => (
          <Link key={index} label={item.text} />
        ))}
      </div>
    </div>
  );
};

FooterLists.defaultProps = {
  variant: 'default',
};
