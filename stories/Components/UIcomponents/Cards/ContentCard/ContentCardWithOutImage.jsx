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
  data
}) => (
  <div className="grid-x grid-margin-x">
    {data.map((item, index) => (
      <div key={index} className={['cell', `${item.size}`].join(' ')}> 
        <a href={item.link} className={['content-card', `${emphasize_options[`${item.Emphasize}`]}`, `${[`${item.Hovercolors}`]}`].join(' ')}>
          <Heading type="6" label={item.contenttile} />
          <div className="content-card__caption">
            {item.Emphasize === 'true'
              ? (
                <Heading type="4" label={item.contentnametwo} />
              )
              : (
                <></>
              )}
            {item.Emphasize === 'false'
              ? (
                <div className="content-card__caption_cart">
                  <Heading type="5" label={item.contentname} />
                  <P label={item.paragraph} />
                </div>
              )
              : (
                <></>
              )}
            <Ctalink label={item.button} variant={item.variant} />
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
