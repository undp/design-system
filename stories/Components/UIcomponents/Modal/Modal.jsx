import React from 'react';
import './modal.scss';

export const Modal = ({
  image, contentname, descriptionText, descriptionText2, visiblty,
}) => (
  <div className="modal" role="dialog" aria-modal="true" aria-label="modal">
    <div className="modal-content">
      <a href="#" className="modal-close-button" aria-label="close">close</a>
    </div>
  </div>
);
