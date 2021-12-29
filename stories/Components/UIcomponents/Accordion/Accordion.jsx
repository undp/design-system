import React, { useEffect } from 'react';
import { FaqFun } from '../../../assets/js/Faq_custom';
import './accordion.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const Accordion = ({ headerText, descriptionText }) => {
  useEffect(() => {
    FaqFun();
  }, []);

  return (
    <ul className="accordion">
      <li className="accordion__item">
        <Heading type="5" label={headerText} className="accordion__heading" />
        <div className="accordion__panel">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
      <li className="accordion__item">
        <Heading type="5" label={headerText} className="accordion__heading" />
        <div className="accordion__panel">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
      <li className="accordion__item">
        <Heading type="5" label={headerText} className="accordion__heading" />
        <div className="accordion__panel">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
    </ul>
  );
};
