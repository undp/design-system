import React, { useEffect } from 'react';
import { FaqFun } from '../../../assets/js/Faq_custom';
import './Faq.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const Faq = ({headerText, descriptionText}) => {
  useEffect(() => {
    FaqFun();
  })

  return (
   <div className="accordion" id="accordion">
      <div className="accordion-head">
         <Heading type='5' label={headerText} />
      </div>
      <div className="accordion-body">
         <P label={descriptionText} />
         <P label={descriptionText} />
         <P label={descriptionText} />
      </div>
      <div className="accordion-head">
         <Heading type='5' label={headerText} />
      </div>
      <div className="accordion-body">
         <P label={descriptionText} />
         <P label={descriptionText} />
         <P label={descriptionText} />
      </div>
   </div>
  );
};
