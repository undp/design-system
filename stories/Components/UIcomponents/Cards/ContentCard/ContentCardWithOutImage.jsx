import React from 'react';
import './contentcard.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

export const emphasize_options = {
  true: 'card-yellow',
  false: 'card',
};

export const ContentCardWithOutImage = ({
  data, Hovercolors, Emphasize,
}) => (
  <div className="grid-x grid-margin-x">
    {data.map((item, index) => (
      <div key={index} className="cell medium-4">
        <a href={item.link} className={['content-card', `${emphasize_options[`${Emphasize}`]}`, `${[`${Hovercolors}`]}`].join(' ')}>
          <Heading type="6" label={item.contenttile} />
          <div className="content-card__caption">
            {Emphasize === 'true'
              ? (
                <Heading type="4" label={item.contentnametwo} />
              )
              : (
                <></>
              )}
            {Emphasize === 'false'
              ? (
                <div className="content-card__caption_cart">
                  <Heading type="5" label={item.contentname} />
                  <P label={item.paragraph} />
                </div>
              )
              : (
                <></>
              )}
            <Ctalink label={item.button} Type="Space" />
          </div>
        </a>
      </div>
    ))}
  </div>
);

ContentCardWithOutImage.defaultProps = {
  Emphasize: 'true',
  Hovercolors: 'yellow',
};
