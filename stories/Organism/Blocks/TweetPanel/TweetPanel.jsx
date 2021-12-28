import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './tweetpanel.scss';
import '../../../assets/scss/_grid.scss';
import { TweetCard } from '../../../Molecules/Blocks/TweetCard/TweetCard';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const TweetPanel = ({ data, headertext }) => {
  useEffect(() => {
    viewport('.twitter-panel .tweet-card');
    viewport('.twitter-header');
  }, []);
  return (
    <div className="grid-x grid-margin-x twitter-panel">
      <div className="cell medium-11 twitter-header left-right medium-offset-1">
        <Heading type="2" label={headertext} />
        <span className="twitter" />
      </div>

      {data.map((item, index) => (
        <TweetCard
          contenttile={item.contenttile}
          contentsubtitle={item.contentsubtitle}
          contentdate={item.contentdate}
          descriptiontext={item.descriptiontext}
          button={item.button}
          link={item.link}
          imgback={item.imgback}
          delaytime={2 + index++}
          key={index}
        />
      ))}
    </div>
  );
};
