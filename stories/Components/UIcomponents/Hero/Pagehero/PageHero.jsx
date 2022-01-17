import React, { useEffect } from 'react';
import './pagehero.scss';
import viewport from '../../../../assets/js/viewport';
import expandToSize from '../../../../assets/js/animation';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../../Navigationcomponents/Breadcrumbs/Breadcrumbs';

export const PageHero = ({
  data, title, content, variant, imgsrc, imgalt,
}) => {
  useEffect(() => {
    viewport('.left-right');
    expandToSize('.pagehero-full');
  }, []);
  return (
    <div className="pagehero-full">
      {variant === 'video'
        ? (
          <Video src={BackgroundVideo} width="100%" height="100%" />
        )
        : (
          <div className="overlay-grey">
            <img src={imgsrc} alt={imgalt} />
          </div>
        )}
      <div className="grid-x pagehero-content">
        <div className="cell medium-6 medium-offset-1">
          <Breadcrumbcomponent data={data} Color="White" />
          {content && <Heading type="4" className="color-white left-right" label={content} />}
          {title && <Heading type="2" className="color-white left-right" label={title} />}
        </div>
      </div>
    </div>
  );
};

PageHero.defaultProps = {
  variant: 'image',
};
