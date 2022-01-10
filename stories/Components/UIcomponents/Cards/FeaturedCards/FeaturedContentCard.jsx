import React, { useEffect } from 'react';
import './featuredContentCard.scss';
import '../../../../assets/scss/_grid.scss';
import viewport from '../../../../assets/js/viewport';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

export const size_options = {
  large: 'large-8 medium-8',
  medium: 'medium-4',
  small: 'medium-3',
};

export const image_options = {
  image: 'image',
  color: 'without-image',
};

export const FeaturedContentCard = ({
  type, cell, data, image, headertext, hovercolor, ...args
}) => {
  useEffect(() => {
    viewport('.feature__card-title');
  }, []);
  let size_variant = size_options[`${args.size}`];
  let image_variant = image_options[`${image}`];
  return (
    <div className="grid-x grid-margin-x">
      {headertext && <div className="cell medium-3 medium-offset-1 small-offset-1 feature__card-title left-right"><Heading type="2" label={headertext} /></div>}
      {data.map((item, index) => (
        <div key={index} className={['cell', `${item.scale ? size_options[`${item.scale}`] : size_variant}`].join(' ')}>
          <a href="#" className={['feature__card', `${item.type ? `${image_options[`${item.type}`]}` : `${image_variant}`}`].join(' ')}>
            <div className={['feature__card-slide', `${hovercolor}`].join(' ')}>
              {item.imgback && (image === 'image' || (item.type === 'image' && image === 'image')) && <div className="feature__card-image"><img src={item.imgback} alt={item.imgback} /></div>}
            </div>
            <article className="feature__card-content">
              <Heading type="6" label={item.contenttile} />
              <div className="feature__card-description">
                {(item.scale ? item.scale === 'large' : args.size === 'large') && item.contentname && <Heading type="4" label={item.contentname} />}
                {(item.scale ? item.scale === 'medium' : args.size === 'medium') && item.contentname && <Heading type="5" label={item.contentname} />}
                {(item.scale ? item.scale === 'small' : args.size === 'small') && item.contentname && <Heading type="5" label={item.contentname} />}
                {item.size}
                {item.descriptionText && <P label={item.descriptionText} />}
              </div>
              <div className={['feature__cta', `${size_variant}`].join(' ')}>
                <span className="cta__link cta--arrow">{item.button}</span>
              </div>
            </article>
          </a>
        </div>
      ))}
    </div>
  );
};

FeaturedContentCard.defaultProps = {
  image: 'image',
  hovercolor: 'yellow',
};
