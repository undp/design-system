import React from 'react';
import './content-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const color_options = {
  yellow: 'yellow',
  red: 'red',
  blue: 'blue',
  green: 'green',
  accent: '',
};

export function ContentCardImage({
  data,
  Hovercolors,
  ...args
}) {
  let { accent } = args;
  let hovercolor = color_options[`${Hovercolors}`];
  let Color = (Boolean(accent)) && (!hovercolor) ? accent : hovercolor;

  return (
    <div className="grid-x grid-margin-x content-card-wrapper">
      {data.map((item, index) => (
        <div key={index} className="cell medium-4">
          <div className={cls('content-card', `${Color}`)}>
            <a href={item.link}>
              <Heading type="6" label={item.contenttile} />
              <div className="image">
                <img src={item.imgback} alt={item.imgback} />
              </div>
              <div className="content-caption">
                <Heading type="5" label={item.contentname} />
                <Ctalink label={item.button} Type="Space" button_option="span" />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
