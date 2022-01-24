import React from 'react';
import './content-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const hovercolors_options = {
  default: '',
  yellow: 'yellow',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

export const ContentCardWithOutImage = ({
  data, Hovercolors,
}) => {
  let hovercolors_variant = hovercolors_options[`${Hovercolors}`];
  return (
    <div className="grid-x grid-margin-x">
      {data.map((item, index) => (
        <div key={index} className="cell medium-4">
          <div className={cls('content-card', 'card', `${hovercolors_variant}`)}>
            <a href={item.link}>
              <Heading type="6" label={item.contenttile} />
              <div className="content-caption">
                <Heading type="5" label={item.contentname} />
                <P label={item.paragraph} />
                <Ctalink label={item.button} Type="Space" button_option="span"/>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

ContentCardWithOutImage.defaultProps = {
  Hovercolors: 'default',
};
