import React from 'react';
import './contentcard.scss';
import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';

export const ContentCardImage = ({
  data, Image, Hovercolors,
}) => (
  <div className="grid-x grid-margin-x">
    {data.map((item, index) => (
      <div key={index} className="cell medium-4">
        <a href={item.link} className={['contentcard', `${Image}`, `${[`${Hovercolors}`]}`].join(' ')}>
          <Heading type="6" label={item.contenttile} />
          <div className="card-thumbnail__image">
            <img src={item.imgback} alt={item.imgback} />
          </div>
          <div className="contentcard__caption">
            <Heading type="5" label={item.contentname} />
            <Ctalink label={item.button} variant="Space" />
          </div>
        </a>
      </div>
    ))}
  </div>
);
