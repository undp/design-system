import React, { useEffect } from 'react';
import './image-caption.scss';
import viewport from '../../../assets/js/viewport';
import { Imagecaption } from '../../../Molecules/Imagecaption/Imagecaption';

export const Images = ({
  imagelg, imagemd, imagesm, alt, label, paragraph, ...args
}) => {
  useEffect(() => {
    viewport('.image-figcaption__cart');
    viewport('.image-figcaption .image__caption');
  }, []);

  let size;
  const sizes = ['medium', 'portrait'];
  size = sizes.includes(args.size) ? args.size : '';

  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

  return (
    <figure className={cls('image-figcaption', `${size}`)}>
      <div className='image-figcaption__cart scale-up'>
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
