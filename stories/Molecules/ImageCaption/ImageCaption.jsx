import React from 'react';
import './image-caption.scss';
import { Imagecredit } from '../../Atom/Images/ImageCredit/ImageCredit';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';

export const caption_options = {
  true: '',
  false: '',
};

export const credit_options = {
  true: '',
  false: '',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Imagecaption = ({
  label, paragraph, opacityOnly, ...args
}) => {
  let opacityonly = '';
  if (opacityOnly === 'yes') {
    opacityonly = 'opacity-only';
  }

  let caption_variant = caption_options[`${args.caption}`];
  let credit_variant = credit_options[`${args.credit}`];

  return (
    <>
      {args.caption === 'false' && args.credit === 'false' ? (
        <></>
      ) : (
        <figcaption className={cls('image__caption', `${opacityonly}`, `${caption_variant}`, `${credit_variant}`)} data-viewport='true'>
          {args.caption === 'true' && (
          <P label={paragraph} />

          )}
          {args.credit === 'true' && <Imagecredit label={label} name={name} />}
        </figcaption>
      )}
    </>
  );
};

Imagecaption.defaultProps = {
  caption: 'true',
  credit: 'true',
};

