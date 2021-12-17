import React, { useEffect } from 'react';
import { ModalFun } from '../../../assets/js/modal_custom';
import './modal.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../UIcomponents/Buttons/Cta_link/Cta_link';

export const Modal = ({ image2, contentname, descriptionText, descriptionText2
}) => {
  useEffect(() => {
    ModalFun();
  }, []);
  return (
    <>
      <div className="modal frosty-image">
        <div className="modal-content">
          <a href="#" className="modal-close-button">close</a>
          <div className="bio-card-wrapper">
            <div className="bio-card-image">
              <img src={image2} alt={image2} />
            </div>
            <article className="bio-card-content">
              <Heading type="5" label={contentname} />
              <P label={descriptionText} />
              <P label={descriptionText2} className="small" />
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
