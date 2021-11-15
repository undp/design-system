import React from 'react';
import './authorcard.scss';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Author } from '../Authorcolumn/Authors';
import { Ctalink } from '../../../../Atom/Buttons-and-labels/Cta_link/Cta_link';

export const Authorcard = ({
  data, para, button, link, width, image,
}) => (
  <div className="grid-x grid-margin-x">
    <div className="cell medium-4">
      <a href={link} className="authorcard">
        <Author data={data} size={width} image={image} variant="Small" />
        <P label={para} />
        <Ctalink label={button} variant="Space" />
      </a>
    </div>
  </div>
);
