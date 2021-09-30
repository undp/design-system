import React, { useEffect } from 'react';
import { FaqFun } from '../../../assets/js/Faq_custom';
import './Faq.scss';
import { H5 } from '../../../Atom/Base-typography/Heading/h5';
import { P } from '../../../Atom/Base-typography/Paragraph/p';

export const Faq = ({headerText, descriptionText}) => {
  useEffect(() => {
    FaqFun();
  },[])

  return (
   <ul class="accordion" id="accordion">
      <li className="accordion__item">
         <H5 label={headerText} className="accordion__heading"  />
         <div class="accordion__panel">
            <P label={descriptionText} />
            <P label={descriptionText}  />
         </div>
      </li>
      <li className="accordion__item">
         <H5 label={headerText} className="accordion__heading" />
         <div class="accordion__panel">
            <P label={descriptionText} />
            <P label={descriptionText} />
         </div>
      </li>
      <li className="accordion__item">
         <H5 label={headerText} className="accordion__heading" />
         <div class="accordion__panel">
            <P label={descriptionText} />
            <P label={descriptionText} />
         </div>
      </li>
   </ul>
  );
};
