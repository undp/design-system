import React from 'react';
import './modal.scss';

export const Modal = ({
  image, contentname, descriptionText, descriptionText2, visiblty,
}) => (
  <div className="modal">
    <div className="modal-content">
      <a href="#" className="modal-close-button">close</a>
    </div>
  </div>
);
