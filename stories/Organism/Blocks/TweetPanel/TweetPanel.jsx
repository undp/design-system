import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './tweetpanel.scss';
import '../../../assets/scss/_grid.scss';
import { TweetCard } from '../../../Molecules/Blocks/TweetCard/TweetCard';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const TweetPanel = ({ data, headertext }) => {
  useEffect(() => {
    viewport('.twitter-panel');
  }, []);
  return (
    <div className="twitter-panel left-right">
      <div className="twitter-header medium-offset-1">
        <Heading type="2" label={headertext} />
        <span className="twitter" />
      </div>
      <TweetCard data={data} />
    </div>
  );
};
