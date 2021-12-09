import React, { useEffect } from 'react';
import './featuredContentCard.scss';
import '../../../../assets/scss/_grid.scss';
import viewport from '../../../../assets/js/viewport';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';

export const size_options = {
  large: 'large-8 large',
  medium: 'medium-6 large-4 medium',
  small: 'medium-5 large-3 small',
};

export const image_options = {
  image: 'image',
  color: 'without-image',
};

export const FeaturedContentCard = ({
  type, cell, data, image, headertext, ...args
}) => {
  useEffect(() => {
    viewport('.feature__card-title');
  }, []);
  return (
    <div className="grid-x grid-margin-x">
      {headertext && <div className="cell large-3 small-6 feature__card-title  large-offset-1 small-offset-1 left-right inviewport"><Heading type="2" label={headertext} /></div>}
      {data.map((item, index) => (
        <div key={index} className={['cell', `${item.scale ? size_options[`${item.scale}`] : size_options[`${args.size}`]}`].join(' ')}>
          <a href="#" className={['feature__card', `${item.type ? `${image_options[`${item.type}`]}` : `${image_options[`${image}`]}`}`].join(' ')}>
            <div className="feature__card-slide">
              {image === 'image' || (item.type === 'image' && image === 'image')
                ? (
                  <div className="feature__card-image">
                    <img src={item.imgback} alt={item.imgback} />
                  </div>
                )
                : (
                  <>
                  </>
                )}
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
              <div className="feature__cta">
                <span className="cta__link cta--arrow" >{item.button}</span>
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
};
