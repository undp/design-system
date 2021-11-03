import React from 'react';
import './singlecontent.scss';
import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const image_options = {
  true: ' ',
  false: 'card',
};

export const emphasize_options = {
  true: 'card-yellow',
  false: '',
};

export const SingleContent = ({
  contenttile, contentname, contentnametwo, img, Image, paragraph, link, Emphasize, button, colors, ...args
}) => (
  <div className="grid-x grid-margin-x">
    <div className="cell medium-4">
      <a href={link} className={['singlecard', `${image_options[`${Image}`]}`, `${emphasize_options[`${Emphasize}`]}`,  `${[`${colors}`]}`,].join(' ')}>
        <div className="singlecard__head">{contenttile}</div>
        {Image === 'true'
          ? (
              <div className="card_thumbnail__image">
                <img src={img} alt={img} />
              </div>
          )
          : (
            <></>
          )}
        <div className="singlecard__caption">
          {Emphasize === 'true'
            ? (
              <Heading type="4" label={contentnametwo} />
            )
            : (
              <></>
            )}
       
          
          { Emphasize === 'false'
            ? (
              <>
                <Heading type="5" label={contentname} />
                <P label={paragraph} />
              </>
            )
            : (
              <></>
            )}
          <Ctalink label={button} variant="Space" />
        </div>
      </a>
    </div>
  </div>
);

SingleContent.defaultProps = {
  Image: 'true',
  Emphasize : 'false',
  colors: 'yellow'
};
