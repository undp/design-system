import React, { useEffect } from 'react';
import { accordion } from '../../../assets/js/accordion';
import './accordion.scss';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const Accordion = ({ headerText, descriptionText, accordionpanelId, accordionpanelId1, accordionpanelId2, accordionButtonID, accordionButtonID1, accordionButtonID2 }) => {
  useEffect(() => {
    accordion();
  }, []);

  return (
    <ul className="accordion" aria-label="accordion">
      <li>
        <button id={accordionButtonID} tabIndex="0" aria-controls={accordionpanelId} aria-expanded="false">{headerText}</button>
        <div id={accordionpanelId} className="accordion__panel" aria-labelledby={accordionButtonID} aria-hidden="true" role="region">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
      <li>
        <button id={accordionButtonID1} tabIndex="0" aria-controls={accordionpanelId1} aria-expanded="false">{headerText}</button>
        <div id={accordionpanelId1} className="accordion__panel" aria-labelledby={accordionButtonID1} aria-hidden="true" role="region">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
      <li>
        <button id={accordionButtonID2} tabIndex="0" aria-controls={accordionpanelId2} aria-expanded="false">{headerText}</button>
        <div id={accordionpanelId2} className="accordion__panel" aria-labelledby={accordionButtonID2} aria-hidden="true" role="region">
          <P label={descriptionText} />
          <P label={descriptionText} />
        </div>
      </li>
    </ul>
  );
};
