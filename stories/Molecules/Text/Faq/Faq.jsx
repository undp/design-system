import React, { useEffect } from 'react';
import { FaqFun } from '../../../assets/js/Faq_custom';
import './Faq.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const Faq = ({ headerText, descriptionText }) => {
  useEffect(() => {
    FaqFun();
  }, []);

  return (
    <ul className="accordion" id="accordion">
      <li className="accordion__item">
         <Heading type='5' label={headerText} className="accordion__heading"  />
         <span className='icon-chevron-down'></span>
         <div class="accordion__panel">
            <P label={descriptionText} />
            <P label={descriptionText}  />
         </div>
      </li>
      <li className="accordion__item">
         <Heading type='5' label={headerText} className="accordion__heading" />
         <span className='icon-chevron-down'></span>
         <div class="accordion__panel">
            <P label={descriptionText} />
            <P label={descriptionText} />
         </div>
      </li>
      <li className="accordion__item">
         <Heading type='5' label={headerText} className="accordion__heading" />
         <span className='icon-chevron-down'></span>
         <div class="accordion__panel">
            <P label={descriptionText} />
            <P label={descriptionText} />
         </div>
      </li>
    </ul>
  );
};
