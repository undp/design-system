import React from 'react';
import './authorcard.scss';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Author } from '../Authorcolumn/Authors';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';

export const Authorcard = ({
  data, para, button, link, image,
}) => (
  <div className="grid-x grid-margin-x">
    <div className="cell medium-4">
      <a href={link} className="authorcard">
        <Author data={data} Number="one" image={image} variant="small" />
        <P label={para} />
        <span className='cta__link cta--space'>{button}</span>
      </a>
    </div>
  </div>
);
