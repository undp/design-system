import React from 'react';
import './singlecontent.scss';
import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const SingleContent = ({
  contenttile, contentname, contentnametwo, image, type, paragraph, link, button, colors, ...args
}) => (
  <div className="grid-x grid-margin-x">
    <div className="cell medium-4">
      <a href={link} className={['singlecard', `singlecard--${type}`, `singlecard--${colors}`].join(' ')}>
        <div className="singlecard__head">{contenttile}</div>
        {type === 'Image'
          ? (
            <>
              <div className="card_thumbnail__image">
                <img src={image} alt={image} />
              </div>
            </>
          )
          : (
            <>
            </>
          )}
        <div className="singlecard__caption">
          {type === 'Card-yellow'
            ? (
              <>
                <Heading type="4" label={contentnametwo} />
              </>
            )
            : (
              <>
              </>
            )}
          {type === 'Image' || type === 'Card'
            ? (
              <>
                <Heading type="5" label={contentname} />
              </>
            )
            : (
              <>
              </>
            )}
          {type === 'Card'
            ? (
              <>
                <P label={paragraph} />
              </>
            )
            : (
              <>
              </>
            )}
          <Ctalink label={button} variant="Space" />
        </div>
      </a>
    </div>
  </div>
);

SingleContent.defaultProps = {
  type: 'Image',
  colors: 'Yellow'
};
