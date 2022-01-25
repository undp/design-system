import React from 'react';
import './content-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const hovercolors_options = {
  yellow: '',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

export const ContentCardWithOutImageEmphasize = ({
  data, Hovercolors,
}) => {
  let hovercolors_variant = hovercolors_options[`${Hovercolors}`];
  return (
    <div className="grid-x grid-margin-x">
      {data.map((item, index) => (
        <div key={index} className="cell medium-4">
          <div className={cls('content-card', 'card-emphasize', `${hovercolors_variant}`)}>
            <a href={item.link}>
              <Heading type="6" label={item.contenttile} />
              <div className="content-caption">
                <Heading type="4" label={item.contentnametwo} />
                <Ctalink label={item.button} Type="Space" button_option="span"/>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

ContentCardWithOutImageEmphasize.defaultProps = {
  Hovercolors: 'default',
};
