import React from 'react';
import './singlecontent.scss';
import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const SingleContent = ({
  contenttile, contentname, contentnametwo, image, type, paragraph, link, button,
}) => (
  <div className="grid-x grid-margin-x">
    <div className="cell medium-4">
      <a href={link} className={['singlecard', `singlecard--${type}`].join(' ')}>
        <div className="singlecard__head">{contenttile}</div>
        {image && (
          <div className="card_thumbnail__image">
            <img src={image} alt={image} />
          </div>
        )}
        <div className="singlecard__caption">
          {contentname && <Heading type="5" label={contentname} />}
          {contentnametwo && <Heading type="4" label={contentnametwo} />}
          {paragraph && <P label={paragraph} />}
          <Ctalink label={button} variant="Space" />
        </div>
      </a>
    </div>
  </div>
);
