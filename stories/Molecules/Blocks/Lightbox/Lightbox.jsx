import React from 'react';
import './lightbox.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const Lightbox = ({
  image, contentname, descriptionText, descriptionText2,
}) => (
  <div id="myModal" className="modal">
    <div className="modal-content">
      <span className="modal-close-button" />

      <div className="bio-card-wrapper">
        <div className="bio-card-image">
          <img src={image} alt={image} />
        </div>
        <article className="bio-card-content">
          <Heading type="5" label={contentname} />
          <P label={descriptionText} />
          <P label={descriptionText2} className="small" />
        </article>
      </div>

    </div>
  </div>
);
