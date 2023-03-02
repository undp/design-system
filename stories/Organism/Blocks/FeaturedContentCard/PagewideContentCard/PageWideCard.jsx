import React from 'react';
import './page-wide-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/BaseTypography/Paragraph/Paragraph';
import { CtaButton } from '../../../../Components/UIcomponents/Buttons/CtaButton/CtaButton';
import BackgroundImg from '../../../../assets/images/Pagewide.jpg';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const accent_color_options = {
  yellow: 'yellow',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

export function PageWideCard({
  label,
  title,
  paragraph,
  button,
  Hovercolors,
  ...args
}) {
  let color = (Hovercolors) ? accent_color_options[`${Hovercolors}`] : accent_color_options[`${args.accent}`];
  let accent_color = color ? `accent-${color}` : '';

  return (
    <div className="wide-card">
      <Heading type="6" label={label} dataViewport="true" />
      <div className="grid-x wide-card__wrapper">
        <div className="cell medium-6 wide-card__description" data-viewport="true">
          <div className="card-summary">
            <Heading type="4" label={title} />
            <P label={paragraph} />
          </div>
          <CtaButton label={button} Icon="Arrow" />
        </div>
        <div className={cls('cell medium-6 wide-card__image', `${accent_color}`)}>
          <a href="#">
            <img src={BackgroundImg} alt={BackgroundImg} />
          </a>
        </div>
      </div>
    </div>
  );
}
