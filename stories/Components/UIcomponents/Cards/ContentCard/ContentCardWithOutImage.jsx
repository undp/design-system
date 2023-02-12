import React from 'react';
import './content-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';
import { P } from '../../../../Atom/BaseTypography/Paragraph/Paragraph';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const color_options = {
  default: 'default',
  yellow: 'yellow',
  red: 'red',
  blue: 'blue',
  green: 'green',
  accent: '',
};

export function ContentCardWithOutImage({
  data,
  Hovercolors,
  ...args
}) {
  let { accent } = args;
  let hovercolor = color_options[`${Hovercolors}`];
  let Color = (Boolean(accent)) && (!hovercolor) ? accent : hovercolor;
  Color = (Color == 'default') ? '' : Color;

  return (
    <div className="grid-x grid-margin-x">
      {data.map((item, index) => (
        <div key={index} className="cell medium-4">
          <div className={cls('content-card', 'card', `${Color}`)}>
            <a href={item.link}>
              <Heading type="6" label={item.contenttile} />
              <div className="content-caption">
                <Heading type="5" label={item.contentname} />
                <P label={item.paragraph} />
                <Ctalink label={item.button} Type="Space" button_option="span" />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
