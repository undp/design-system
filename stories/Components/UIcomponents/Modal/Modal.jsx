import React from 'react';
import './modal.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const Modal = ({
  image, contentname, descriptionText, descriptionText2, visiblty,
}) => (
  <div id="myModal" className="modal">
    <div className="modal-content">
      <div className="modal-close-button" />
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
