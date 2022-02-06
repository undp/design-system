import React from 'react';
import './featured-content-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';

export const size_options = {
  large: 'large-8 medium-8',
  medium: 'medium-4',
  small: 'medium-3',
};

export const image_options = {
  image: 'image',
  color: 'without-image',
};

export const hovercolor_options = {
  yellow : '',
  red : 'red',
  green: 'green',
  blue : 'blue',
};

const cls = (...classes) => (classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null;

export const FeaturedContentCard = ({
  type, cell, data, image, headertext, hovercolor, ...args
}) => {
  let size_variant = size_options[`${args.size}`];
  let image_variant = image_options[`${image}`];
  let hovercolor_variant = hovercolor_options[`${hovercolor}`];
  return (
    <>
    <div className='grid-x grid-margin-x'>
      {headertext && <div data-viewport="true" className="cell medium-3 medium-offset-1 small-offset-1 feature__card-title "><Heading type="2" label={headertext} /></div>}
         {data.map((item, index) => (
        <div key={index}  className={cls('cell', `${item.scale ? size_options[`${item.scale}`] : size_variant}`, 'feature__card', `${item.type ? `${image_options[`${item.type}`]}` : `${image_variant}`}`, `${hovercolor_variant}`)}>
          <a href="#">
            <div className="feature__card-slide">
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
                <Ctalink label={item.button} button_option="span"/>
            </article>
          </a>
        </div>
        ))}
     </div>
  </>
  );
};

FeaturedContentCard.defaultProps = {
  image: 'image',
};
