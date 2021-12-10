import React from 'react';
import './contentcard.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';

export const ContentCardImage = ({
  data, Image, Hovercolors,
}) => (
  <div className="grid-x grid-margin-x">
    {data.map((item, index) => (
      <div key={index} className="cell medium-4">
        <a href={item.link} className={['content-card', `${Image}`, `${[`${Hovercolors}`]}`].join(' ')}>
          <Heading type="6" label={item.contenttile} />
          <div className="card-thumbnail__image">
            <img src={item.imgback} alt={item.imgback} />
          </div>
          <div className="content-card__caption">
            <Heading type="5" label={item.contentname} />
            <Ctalink label={item.button} Type="Space" />
          </div>
        </a>
      </div>
    ))}
  </div>
);
