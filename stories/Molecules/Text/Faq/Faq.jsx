import React, { useEffect } from 'react';
import { FaqFun } from '../../../assets/js/Faq_custom';
import './Faq.scss';
import { H5 } from '../../../Atom/Base-typography/Heading/h5';
import { P } from '../../../Atom/Base-typography/Paragraph/p';

export const Faq = ({headerText, descriptionText}) => {
  useEffect(() => {
    FaqFun();
  })

  return (
   <div className="accordion" id="accordion">
      <div className="accordion-head">
         <H5 label={headerText} />
      </div>
      <div className="accordion-body">
         <P label={descriptionText} />
         <P label={descriptionText} />
         <P label={descriptionText} />
      </div>
      <div className="accordion-head">
         <H5 label={headerText} />
      </div>
      <div className="accordion-body">
         <P label={descriptionText} />
         <P label={descriptionText} />
         <P label={descriptionText} />
      </div>
   </div>
  );
};
