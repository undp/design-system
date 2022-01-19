import React, { useEffect } from 'react';
import './homepagehero.scss';
import viewport from '../../../../assets/js/viewport';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CtaButton } from '../../Buttons/Cta_button/CtaButton';

export const Homepageherooption = ({
  title, subtitle, button, variant, imgalt, imgsrc, content, headingTop,
}) => {
  useEffect(() => {
    viewport('.left-right');
  }, []);
  return (
    <div className="homepage-hero-wide">
      {headingTop && <Heading type="3" className="left-right medium-offset-1" label={headingTop} />}
      <Heading type="1" className="left-right medium-offset-1" label={title} />
      <div className="grid-x">
        <div className="cell large-4 medium-4 medium-offset-1">
          <div className="homepage-hero-wide-content">
            <Heading type="5" className="left-right" label={subtitle} />
            <div className="show-large">
              <CtaButton label={button} />
            </div>
          </div>
        </div>
        <div className="cell large-7 medium-7">
          <div className="homepage-hero-image">
            {variant === 'video'
              ? (
                <Video src={BackgroundVideo} width="100%" height="100%" />
              )
              : (
                <img src={imgsrc} alt={imgalt} />
              )}
          </div>
          <div className="show-small">
            <CtaButton label={button} />
          </div>
        </div>
      </div>
    </div>
  );
};

Homepageherooption.defaultProps = {
  variant: 'image',
};
