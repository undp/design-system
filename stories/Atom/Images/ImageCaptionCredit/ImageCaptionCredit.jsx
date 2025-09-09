import React from 'react';
import './image-caption-credit.scss';
import { Imagecaption } from '../../../Molecules/ImageCaption/ImageCaption';
import isChromatic from "chromatic/isChromatic";

export function Images({
  imagelg,
  imagemd,
  imagesm,
  alt,
  label,
  paragraph,
  ...args
}) {
  let size;
  const sizes = ['medium', 'portrait'];
  size = sizes.includes(args.size) ? args.size : '';

  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

  if (args.animation === 'true') {
    return (
      <figure data-viewport={isChromatic() ? '' : 'true'} className={cls(`${size}`)}>
        <div data-viewport={isChromatic() ? '' : 'true'} className="scale-up">
          {args.size === 'wide' && <img src={imagelg} alt={alt} />}
          {args.size === 'medium' && <img src={imagemd} alt={alt} />}
          {args.size === 'portrait' && <img src={imagesm} alt={alt} />}
        </div>
        <Imagecaption opacityOnly="yes" label={label} paragraph={paragraph} caption={args.caption} credit={args.credit} {...args} />
      </figure>
    );
  }

  return (
    <figure className={cls(`${size}`)}>
      {args.size === 'wide' && <img src={imagelg} alt={alt} />}
      {args.size === 'medium' && <img src={imagemd} alt={alt} />}
      {args.size === 'portrait' && <img src={imagesm} alt={alt} />}
      <Imagecaption opacityOnly="yes" label={label} paragraph={paragraph} caption={args.caption} credit={args.credit} {...args} />
    </figure>
  );
}
