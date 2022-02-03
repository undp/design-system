import React from 'react';
import './page-wide-card.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import BackgroundImg from '../../../../assets/images/Pagewide.jpg';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const hovercolors_options = {
  yellow: '',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

export const PageWideCard = ({
  label, title, paragraph, button, Hovercolors,
}) => {
  let hovercolors_variant = hovercolors_options[`${Hovercolors}`];
  return (
    <div className="wide-card">
      <Heading type="6" label={label} dataViewport="true"/>
      <div className="grid-x wide-card__wrapper">
        <div className="cell medium-6 wide-card__description" data-viewport="true">
          <div className="card-summary">
            <Heading type="4" label={title} />
            <P label={paragraph} />
          </div>
          <CtaButton label={button} for_primary="arrow" />
        </div>
        <div className={cls('cell medium-6 wide-card__image', `${hovercolors_variant}`)}>
          <a href="#">
            <img src={BackgroundImg} alt={BackgroundImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

PageWideCard.defaultProps = {
  Hovercolors: 'yellow',
};
