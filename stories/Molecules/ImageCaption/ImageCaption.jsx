import React from 'react';
import './image-caption.scss';
import { Imagecredit } from '../../Atom/Images/ImageCredit/ImageCredit';
import { P } from '../../Atom/BaseTypography/Paragraph/Paragraph';

export const caption_options = {
  true: '',
  false: '',
};

export const credit_options = {
  true: '',
  false: '',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function Imagecaption({
  label,
  paragraph,
  opacityOnly,
  ...args
}) {
  let opacityonly = '';
  if (opacityOnly === 'yes') {
    opacityonly = 'opacity-only';
  }

  let caption_variant = caption_options[`${args.caption}`];
  let credit_variant = credit_options[`${args.credit}`];

  if (args.caption === 'true' || args.credit === 'true') {
    return (
      <figcaption className={cls('image__caption', `${opacityonly}`, `${caption_variant}`, `${credit_variant}`)} data-viewport="true">
        {args.caption === 'true' && (<P label={paragraph} />)}
        {args.credit === 'true' && <Imagecredit label={label} name={name} />}
      </figcaption>
    );
  }

  return (
    false
  );
}

Imagecaption.args = {
  caption: 'true',
  credit: 'true',
};
