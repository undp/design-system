import React, { useEffect } from 'react';
import './page-wide-card.scss';
import viewport from '../../../../assets/js/viewport';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import BackgroundImg from '../../../../assets/images/Pagewide.jpg';

export const PageWideCard = ({
  label, title, paragraph, button, hovercolor,
}) => {
  useEffect(() => {
    viewport('.wide-card h6');
    viewport('.wide-card__description');
  }, []);
  return (
    <div className="wide-card">
      <Heading className="left-right" type="6" label={label} />
      <div className="grid-x wide-card__wrapper">
        <div className="cell medium-6 wide-card__description left-right">
          <div className="card-summary">
            <Heading type="4" label={title} />
            <P label={paragraph} />
          </div>
          <CtaButton label={button} for_primary="arrow" />
        </div>
        <div className={['cell medium-6 wide-card__image', `${hovercolor}`].join(' ')}>
          <a href="#">
            <img src={BackgroundImg} alt={BackgroundImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

PageWideCard.defaultProps = {
  hovercolor: 'yellow',
};
