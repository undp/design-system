import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './tweet-panel.scss';
import '../../../assets/scss/_grid.scss';
import { TweetCard } from '../../../Molecules/Blocks/TweetCard/TweetCard';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const TweetPanel = ({ data, headertext }) => {
  useEffect(() => {
    viewport('.twitter-panel h2');
  }, []);
  return (
    <div className="grid-x grid-margin-x twitter-panel">
      <Heading className="cell medium-11 left-right medium-offset-1" type="2" label={headertext} />
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
