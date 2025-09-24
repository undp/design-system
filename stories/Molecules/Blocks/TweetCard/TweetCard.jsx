import React from 'react';
import './tweet-card.scss';
import '../../../assets/scss/_grid.scss';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/CtaLink/CtaLink';
import { P } from '../../../Atom/BaseTypography/Paragraph/Paragraph';
import isChromatic from "chromatic/isChromatic";

const tabsCls = isChromatic() ? 'tabs inviewport' : 'tabs';

export const TweetCard = ({
  delaytime,
  link,
  imgback,
  contenttile,
  contentsubtitle,
  descriptiontext,
  contentdate,
  button,
}) => (
  <div data-viewport={isChromatic() ? '' : 'true'} className={['cell', 'medium-3', 'tweet-card', `delay-${delaytime}`, isChromatic() ? 'inviewport' : ''].join(' ')}>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={imgback} alt={imgback} />
      <div className="tweet-card__header">
        <P label={contenttile} />
        <P className="tweet-card__header--subtitle" label={contentsubtitle} />
      </div>
    </a>
    <div className="tweet-card__body">
      <P label={descriptiontext} />
      <time>{contentdate}</time>
    </div>
    <Ctalink label={button} Type="Space" />
  </div>
);
