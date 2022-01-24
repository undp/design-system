import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './tweet-card.scss';
import '../../../assets/scss/_grid.scss';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/Cta_link/Cta_link';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const TweetCard = ({
  delaytime,
  link,
  imgback,
  contenttile,
  contentsubtitle,
  descriptiontext,
  contentdate,
  button,
}) => {
  useEffect(() => {
    viewport('.tweet-card');
  }, []);
  return (
    <div className={`cell medium-3 tweet-card left-right delay-${delaytime}`}>
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
};
