import React from 'react';
import './image-caption.scss';
import { Imagecaption } from '../../../Molecules/Imagecaption/Imagecaption';

export const Images = ({
  imagelg, imagemd, imagesm, alt, label, paragraph, ...args
}) => {

  let size;
  const sizes = ['medium', 'portrait'];
  size = sizes.includes(args.size) ? args.size : '';

  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

  return (
    <figure data-viewport="true" className={cls('image-figcaption', `${size}`)}>
      <div data-viewport="true" className='image-figcaption__cart scale-up'>
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
