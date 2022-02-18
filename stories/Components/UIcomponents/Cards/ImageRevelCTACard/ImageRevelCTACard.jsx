import React from 'react';
import './image-revel-cta-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';


const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);
export const hovercolors_options = {
  yellow: '',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

export const ImageRevelCard = ({
  contentname, image, Size, data, delaytime, Hovercolors
}) => {
  let size = 'medium-4';
  if (Size == 'Small') {
    size = 'small';
  }

  let hovercolors_variant = hovercolors_options[`${Hovercolors}`];

  return (
    <div className="grid-x grid-margin-x">
      {data.map((item, index) => (
        <div key={index} data-viewport="true" className={['cell', `${size}`, 'image-reveal-card', `delay-${2 + index++}`].join(' ')}>
          <a href={item.link}>
            <div className={cls('image-reveal-card__content', `${hovercolors_variant}`)}>
              <div className="image">
                {item.imageback && (<img src={item.imageback} alt={item.imageback} />)}
              </div>
              {item.contentname && <Heading type="5" label={item.contentname} />}
            </div>
            <Ctalink label={item.btnlabel} button_option="span" />
          </a>
        </div>
      ))}
    </div>
  );
};
