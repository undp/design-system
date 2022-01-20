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
  image2, contentname, descriptionText, descriptionText2, content, ...props
}) => {
  useEffect(() => {
    modal();
  }, []);

  return (
    <>
      {content === '' && <CtaButton label="Modal" data-toggle="modal" data-target-modal="#exampleModal" />}
      <div className="modal" role="dialog" aria-label="modal" aria-modal="true" {...props}>
        <div className="modal-content" aria-describedby="content">
        <button type="button" class="modal-close-button" data-dismiss="modal" aria-label="Close">Close</button>
          {content === '' ? Modaldata(image2, contentname, descriptionText, descriptionText2) : content}
        </div>
      </div>
    </>
  );
};
