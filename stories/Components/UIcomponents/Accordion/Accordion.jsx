import React, { useEffect } from 'react';
import './accordion.scss';
import { P } from '../../../Atom/BaseTypography/Paragraph/Paragraph';
import loader from '../../../assets/js/loader';

export const Accordion = ({
  headerText, descriptionText
}) => {
  useEffect(() => {
    if (loader) {
      loader();
    } 
  }, []);

  return (
    <ul className="accordion" aria-label="accordion" data-undpds="data-undpds-accordion">
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
