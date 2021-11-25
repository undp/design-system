import React from 'react';
import './tweetcard.scss';
import '../../../assets/scss/_grid.scss';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/Cta_link/Cta_link';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const TweetCard = ({ data }) => (
  <div className="grid-x grid-margin-x tweet-card-main">
    {data.map((item, index) => (
      <div key={index} className="cell medium-3 tweet-card">
        <a href={item.link} target="_blank" rel="noreferrer">
          <img src={item.imgback} alt={item.imgback} />
          <div className="tweet-card__header">
            <P className="tweet-card__header--title" label={item.contenttile} />
            <P className="tweet-card__header--subtitle" label={item.contentsubtitle} />
          </div>
        </a>
        <div className="tweet-card__body">
          <P className="tweet-card__body--description" label={item.descriptiontext} />
          <P className="tweet-card__body--date" label={item.contentdate} />
        </div>
        <Ctalink label={item.button} variant="Space" />
      </div>
    ))}
  </div>
);
