import React, { useEffect } from 'react';
import { accordion } from '../../../assets/js/accordion';
import './accordion.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const Accordion = ({ headerText, descriptionText }) => {
  useEffect(() => {
    accordion();
  }, []);

  return (
    <ul className="accordion" aria-label="accordion">
      <li className="accordion__item" tabIndex="0">
        <Heading type="5" label={headerText} className="accordion__heading" aria-label="accordion heading"/>
        <div className="accordion__panel" aria-label="accordion description">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
      <li className="accordion__item" tabIndex="0" >
        <Heading type="5" label={headerText} className="accordion__heading" aria-label="accordion heading"/>
        <div className="accordion__panel" aria-label="accordion description">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
      <li className="accordion__item" tabIndex="0">
        <Heading type="5" label={headerText} className="accordion__heading" aria-label="accordion heading"/>
        <div className="accordion__panel" aria-label="accordion description">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
    </ul>
  );
};
