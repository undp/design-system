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

export function ContentCardWithOutImageEmphasize({
  data,
  Hovercolors,
  ...args
}) {
  let { accent } = args;
  let hovercolor = color_options[`${Hovercolors}`];
  let Color = (Boolean(accent)) && (!hovercolor) ? accent : hovercolor;

  return (
    <div className="grid-x grid-margin-x">
      {data.map((item, index) => (
        <div key={index} className="cell medium-4">
          <div className={cls('content-card', 'card-emphasize', `${Color}`)}>
            <a href={item.link}>
              <Heading type="6" label={item.contenttile} />
              <div className="content-caption">
                <Heading type="4" label={item.contentnametwo} />
                <Ctalink label={item.button} Type="Space" button_option="span" />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
