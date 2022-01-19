import React from 'react';
import './contentcard.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const ContentCardImage = ({
  data, Hovercolors,
}) => (
  <div className="grid-x grid-margin-x">
    {data.map((item, index) => (
      <div key={index} className="cell medium-4">
        <div className={cls('content-card', `${Hovercolors}`)}>
          <a href={item.link}>
            <Heading type="6" label={item.contenttile} />
            <div className="image">
              <img src={item.imgback} alt={item.imgback} />
            </div>
            <div className="content-caption">
              <Heading type="5" label={item.contentname} />
              <Ctalink label={item.button} Type="Space" button_option="span"/>
            </div>
          </a>
        </div>
      </div>
    ))}
  </div>
);
