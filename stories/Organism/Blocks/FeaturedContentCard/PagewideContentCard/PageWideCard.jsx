import React, { useEffect } from 'react';
import './pagewidecard.scss';
import viewport from '../../../../assets/js/viewport';
import { Heading } from '../../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../../../Atom/Buttons-and-labels/Cta_button/CtaButton';
import BackgroundImg from '../../../../assets/images/Pagewide.jpg';

export const PageWideCard = ({
  label, title, paragraph, button,
}) => {
  useEffect(() => {
    viewport('.wide-card-container__tag');
    viewport('.wide-card__wrapper');
  }, []);
  return (
    <div className="wide-card-container">
      <div className="wide-card-container__tag left-right">{label}</div>
      <div className="grid-x wide-card-container__small-size">
        <div className="cell medium-6 wide-card__wrapper left-right">
          <div className="wide-card__wrapper--summary">
            <a href="#">
              <Heading type="4" label={title} />
              <P label={paragraph} />
            </a>
            <CtaButton label1={button} />
          </div>
        </div>
        <a className="cell medium-6 wide-card__imgwrapper" href="#">
          <img src={BackgroundImg} alt={BackgroundImg} />
        </a>
      </div>
    </div>
  );
};
