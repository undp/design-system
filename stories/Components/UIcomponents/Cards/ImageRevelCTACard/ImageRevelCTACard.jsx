import React from 'react';
import './image-revel-cta-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const hovercolor_options = {
  yellow: 'yellow',
  red: 'red',
  blue: 'blue',
  green: 'green',
  accent: '',
};

export function ImageRevelCard({
  contentname,
  image,
  Size,
  data,
  delaytime,
  ...args
}) {
  let size = 'medium-4';
  if (Size == 'Small') {
    size = 'small';
  }

  let { accent } = args;
  let hovercolor_variant = hovercolor_options[`${args.Hovercolors}`];
  let Hovercolor = (Boolean(accent)) && (!hovercolor_variant) ? accent : hovercolor_variant;

  return (
    <div className="grid-x grid-margin-x">
      {data.map((item, index) => (
        <div key={index} data-viewport="true" className={['cell', `${size}`, 'image-reveal-card', `delay-${2 + index++}`].join(' ')}>
          <a href={item.link}>
            <div className={`image-reveal-card__content ${Hovercolor}`}>
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
}
