import React from 'react';
import './imagecaption.scss';
import { Imagecredit } from '../../Atom/Images/Imagecredit/Imagecredit';

export const caption_options = {
  true: '',
  false: '',
};

export const credit_options = {
  true: '',
  false: '',
};

const cls = (...classes) => classes.filter(Boolean).join(' ');

export const Imagecaption = ({ label, paragraph, opacityOnly, ...args }) => {

  let opacityonly = '';
  if(opacityOnly === 'yes'){
    opacityonly = 'opacity-only';
  }

  return(
  <>
    {args.caption === 'false' && args.credit === 'false' ? (
      <></>
    ) : (
      <figcaption className={cls('image__caption', `${opacityonly}`, `${caption_options[`${args.caption}`]}`, `${credit_options[`${args.credit}`]}`)}>
        {args.caption === 'true' && (
          <div className="image__caption_para">{paragraph}</div>
        )}
        {args.credit === 'true' && <Imagecredit label={label} name={name} />}
      </figcaption>
    )}
  </>
)};

Imagecaption.defaultProps = {
  caption: 'true',
  credit: 'true',
};
