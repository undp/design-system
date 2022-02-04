import React, { useEffect } from 'react';
import { accordion } from '../../../assets/js/accordion';
import './accordion.scss';
import { P } from '../../../Atom/Base-Typography/Paragraph/Paragraph';

export const Accordion = ({
  headerText, descriptionText
}) => {
  useEffect(() => {
    accordion();
  }, []);

  return (
    <ul className="accordion" aria-label="accordion">
      <li>
        <button tabIndex="0" aria-expanded="false">{headerText}</button>
        <div className="accordion__panel" aria-hidden="true" role="region">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
      <li>
        <button tabIndex="0" aria-expanded="false">{headerText}</button>
        <div className="accordion__panel" aria-hidden="true" role="region">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
      <li>
        <button tabIndex="0" aria-expanded="false">{headerText}</button>
        <div className="accordion__panel" aria-hidden="true" role="region">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
    </ul>
  );
};
