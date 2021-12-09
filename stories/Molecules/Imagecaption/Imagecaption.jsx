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

export const Imagecaption = ({ label, paragraph, ...args }) => (
  <>
    {args.caption === 'false' && args.credit === 'false' ? (
      <></>
    ) : (
      <figcaption className={['image__caption', `${caption_options[`${args.caption}`]}`, `${credit_options[`${args.credit}`]}`].join(' ')}>
        {args.caption === 'true' && (
          <div className="image__caption_para">{paragraph}</div>
        )}
        {args.credit === 'true' && <Imagecredit label={label} name={name} />}
      </figcaption>
    )}
  </>
);

Imagecaption.defaultProps = {
  caption: 'true',
  credit: 'true',
};
