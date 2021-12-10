import React, { useEffect } from 'react';
import './pagewidecard.scss';
import viewport from '../../../../assets/js/viewport';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import BackgroundImg from '../../../../assets/images/Pagewide.jpg';

export const PageWideCard = ({
  label, title, paragraph, button,
}) => {
  useEffect(() => {
    viewport('.wide-card__tag');
    viewport('.wide-card__description');
  }, []);
  return (
    <div className="wide-card">
      <div className="wide-card__tag left-right">{label}</div>
      <div className="grid-x wide-card__wrapper">
        <div className="cell medium-6 wide-card__description left-right">
          <div className="wide-card__summary">
            <a href="#">
              <Heading type="4" label={title} />
              <P label={paragraph} />
            </a>
            <CtaButton label={button} />
          </div>
        </div>
        <a className="cell medium-6 wide-card__image" href="#">
          <img src={BackgroundImg} alt={BackgroundImg} />
        </a>
      </div>
    </div>
  );
};
