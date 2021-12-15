import React from 'react';
import './authorcard.scss';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Author } from '../Authorcolumn/Authors';

export const Authorcard = ({
  data, para, button, link, image, alt,
}) => (
  <div className="grid-x grid-margin-x">
    <div className="cell medium-4">
      <a href={link} className="author-card">
        <Author data={data} Number="One" image={image} variant="small" alt={alt} title={alt} />
        <P label={para} />
        <span className="cta__link cta--space">{button}</span>
      </a>
    </div>
  </div>
);
