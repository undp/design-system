import React from 'react';
import './page-wide-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/BaseTypography/Paragraph/Paragraph';
import { CtaButton } from '../../../../Components/UIcomponents/Buttons/CtaButton/CtaButton';
import BackgroundImg from '../../../../assets/images/Pagewide.jpg';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const hovercolors_options = {
  yellow: 'yellow',
  red: 'red',
  blue: 'blue',
  green: 'green',
  accent: '',
};

export function PageWideCard({
  label,
  title,
  paragraph,
  button,
  Hovercolors,
  ...args
}) {
  let { accent } = args;
  let hovercolor = hovercolors_options[`${Hovercolors}`];
  let Color = (Boolean(accent)) && (!hovercolor) ? accent : hovercolor;

  return (
    <div className="wide-card">
      <Heading type="6" label={label} dataViewport="true" />
      <div className="grid-x wide-card__wrapper">
        <div className="cell medium-6 wide-card__description" data-viewport="true">
          <div className="card-summary">
            <Heading type="4" label={title} />
            <P label={paragraph} />
          </div>
          <CtaButton label={button} for_primary="arrow" />
        </div>
        <div className={cls('cell medium-6 wide-card__image', `${Color}`)}>
          <a href="#">
            <img src={BackgroundImg} alt={BackgroundImg} />
          </a>
        </div>
      </div>
    </div>
  );
}
