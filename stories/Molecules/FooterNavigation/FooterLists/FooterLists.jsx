import React from 'react';
import { Link } from '../../../Atom/Typography/Links/Links';

export const variant_options = {
  default: '',
  inverted: 'inverted',
};

const cls = (...classes) => (classes.filter(Boolean).length > 0 ? classes.filter(Boolean).join(' ') : null);

export function FooterLists({
  type, headerText, text, style, ariacontrol, arialabel, data, ...args
}) {
  let screen_variant = variant_options[`${args.variant}`];
  return (
    <div className={cls('cell', 'footer-item', `${screen_variant}`)}>
      <div className="footer-heading"><Link label={headerText} /></div>
      {data.map((item, index) => (
        <Link key={index} label={item.text} />
      ))}
    </div>
  );
}

FooterLists.defaultProps = {
  variant: 'default',
};
