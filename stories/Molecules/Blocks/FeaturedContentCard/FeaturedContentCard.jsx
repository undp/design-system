import React, { useEffect } from 'react';
import './featuredContentCard.scss';
import '../../../assets/scss/_grid.scss';
import viewport from '../../../assets/js/viewport';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';

export const column_options = {
  large: 'large-8 feature__card--large',
  medium: 'medium-6 large-4 feature__card--medium',
  small: 'medium-5 large-3 feature__card--small',
};
export const image_options = {
  Image: 'with-image',
  Color: 'without-image',
};
export const FeaturedContentCard = ({
  type, cell, data, Image, headertext, ...args
}) => {
  useEffect(() => {
    viewport('.feature__card--headertext');
  }, []);
  return (
    <div className="grid-x grid-margin-x">
      <div className="cell medium-4 feature__card--headertext left-right"><Heading type="2" label={headertext} /></div>
      {data.map((item, index) => (
        <div key={index} className={['cell', `${item.size ? column_options[`${item.size}`] : column_options[`${args.column}`]}`].join(' ')}>
          <a href="#" className={['feature__card', `${item.type ? `feature__card--${image_options[`${item.type}`]}` : `feature__card--${image_options[`${Image}`]}`}`].join(' ')}>
            <div className="feature__card_slide">
              {Image === 'Image' || item.type === 'Image'
                ? (
                  <div className="feature__card_image">
                    <img src={item.imgback} alt={item.imgback} />
                  </div>
                )
                : (
                  <>
                  </>
                )}
            </div>
            <article className="feature__card_content">
              <div className="feature__card_tag">{item.contenttile}</div>
              <div className="feature__card_description">
                {(item.size ? item.size === 'large' : args.column === 'large') && item.contentname && <Heading type="4" label={item.contentname} />}
                {(item.size ? item.size === 'medium' : args.column === 'medium') && item.contentname && <Heading type="5" label={item.contentname} />}
                {(item.size ? item.size === 'small' : args.column === 'small') && item.contentname && <Heading type="5" label={item.contentname} />}
                {item.column}
                {item.descriptionText && <P label={item.descriptionText} />}
              </div>
              <div className="feature__cta">
                <Ctalink label={item.button} variant="Arrow" />
              </div>
            </article>
          </a>
        </div>
      ))}
    </div>
  );
};
FeaturedContentCard.defaultProps = {
  column: 'large',
  Image: 'Image',
};
