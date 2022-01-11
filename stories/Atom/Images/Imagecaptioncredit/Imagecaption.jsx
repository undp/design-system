import React, { useEffect } from 'react';
import './imagecaption.scss';
import viewport from '../../../assets/js/viewport';
import { Imagecaption } from '../../../Molecules/Imagecaption/Imagecaption';

export const size_options = {
  wide: 'medium-12',
  medium: 'medium-7',
  portrait: 'medium-4',
};

export const size_options3 = {
  wide: '',
  medium: '',
  portrait: 'portrait',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Images = ({
  imagelg, imagemd, imagesm, alt, label, paragraph, ...args
}) => {
  useEffect(() => {
    viewport('.image-section__cart');
    viewport('.image-section .image__caption');
  }, []);

  let portrait_variant = size_options3[`${args.size}`];
  let size_variant = size_options[`${args.size}`];

  return (
    <figure className={cls('grid-x', 'image-section', `${portrait_variant}`)}>
      <div className={cls('cell', 'image-section__cart', 'scale-up', `${size_variant}`)}>
        {args.size === 'wide' && <img src={imagelg} alt={alt} />}
        {args.size === 'medium' && <img src={imagemd} alt={alt} />}
        {args.size === 'portrait' && <img src={imagesm} alt={alt} />}
      </div>

      {args.caption === 'false' && args.credit === 'false' ? (
        <></>
      ) : (
        <Imagecaption opacityOnly="yes" label={label} paragraph={paragraph} caption={args.caption} credit={args.credit} />
      )}
    </figure>
  );
};

Images.defaultProps = {
  size: 'wide',
  caption: 'true',
  credit: 'true',
};
