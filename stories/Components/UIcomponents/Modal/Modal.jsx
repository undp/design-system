import React, { useEffect } from 'react';
import { modal } from '../../../assets/js/modal';
import './modal.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../Buttons/Cta_button/CtaButton';

export const Modaldata = (image2, contentname, descriptionText, descriptionText2) => (
  <div className="bio-card-wrapper">
    <div className="bio-card-image">
      <img src={image2} alt={image2} />
    </div>
    <article className="bio-card-content">
      <a href="#"><Heading type="5" label={contentname} /></a>
      <a href="#"><P label={descriptionText} /></a>
      <P label={descriptionText2} className="small" />
      <CtaButton label="Read More" />
    </article>
  </div>
);

export const Modal = ({
  image2, contentname, descriptionText, descriptionText2, content,
}) => {
  useEffect(() => {
    modal();
  }, []);

  return (
    <>
      {content === '' && <CtaButton label="Modal" id="modal" /> }
      <div className="modal" role="dialog" aria-labelledby="modal" aria-modal="true">
        <div className="modal-content" aria-describedby="content">
          <a href="#" className="modal-close-button" aria-label="close">close</a>
          {content === '' ? Modaldata(image2, contentname, descriptionText, descriptionText2) : content }
        </div>
      </div>
    </>
  );
};
