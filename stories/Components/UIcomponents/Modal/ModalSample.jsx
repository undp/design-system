import React from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../Buttons/CtaButton/CtaButton';
import { Modal } from './Modal';

// Sample component to showcase the modal popup
// To inherit the Modal, use Modal.jsx
export const ModalSample = ({image2, contentname, descriptionText, descriptionText2, ...props}) => {
  let component = (
    <>
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
    </>
  );
  return (
      <>
        <CtaButton label="Modal" data-toggle="modal" data-target-modal="#exampleModal" />
        <Modal id="exampleModal" content={component} />
      </>
    )
  }
