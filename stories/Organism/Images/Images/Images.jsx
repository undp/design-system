import React, { useEffect } from 'react';
import './images.scss';
import viewport from '../../../assets/js/viewport';
import { Imagecaption } from '../../../Molecules/Imagecaption/Imagecaption';

export const size_options = {
  wide: 'medium-12',
  medium: 'medium-7',
  portrait: 'medium-4',
};

export const size_options2 = {
  wide: 'medium-7',
  medium: 'medium-7',
  portrait: 'medium-3',
};

export const size_options3 = {
  wide: "",
  medium: "",
  portrait: "portrait",
};

export const Images = ({
  imagelg, imagemd, imagesm, alt, label, paragraph, ...args
}) => {
  useEffect(() => {
    viewport('.image-section__cart');
    viewport('.image-section__description');
  }, []);
  return (
    <div className={['grid-x', 'image-section', `${size_options3[`${args.size}`]}`].join(' ')}>
      <div className={['cell', 'image-section__cart', 'scale-up', `${size_options[`${args.size}`]}`].join(' ')}>
        {args.size === 'wide' && <img src={imagelg} alt={alt} />}
        {args.size === 'medium' && <img src={imagemd} alt={alt} />}
        {args.size === 'portrait' && <img src={imagesm} alt={alt} />}
      </div>

      {args.caption === 'false' && args.credit === 'false' ? (
        <></>
      ) : (
        <div className={['cell', 'image-section__description', 'opacity-only', `${size_options2[`${args.size}`]}`].join(' ')}>
          <Imagecaption label={label} paragraph={paragraph} caption={args.caption} credit={args.credit} />
        </div>
      )}

    </div>
  );
};

Images.defaultProps = {
  size: 'wide',
  caption: 'true',
  credit: 'true',
};
