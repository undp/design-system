import React, { useEffect } from 'react';
import './homepage-hero.scss';
import viewport from '../../../../assets/js/viewport';
import BackgroundImg from '../../../../assets/images/scuba.jpg';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CtaButton } from '../../Buttons/Cta_button/CtaButton';

export const Homepageherosplit = ({
  title, content, button, variant,
}) => {
  useEffect(() => {
    viewport('.left-right');
  }, []);
  return (
    <div className="homepage-hero-tall">
      <div className="grid-x">
        <div className="cell medium-5 medium-offset-1">
        <div className="homepage-hero-tall-content">
            {content && <Heading type="1" className="left-right" label={title} />}
            {content && <Heading type="4" className="left-right" label={content} />}
            <div className="show-large">
              <CtaButton label={button} />
            </div>
          </div>
        </div>
        <div className="cell medium-6">
          <div className="homepage-hero-image">
            {variant === 'video'
              ? (
                <Video src={BackgroundVideo} width="100%" height="100%" />
            )
            : (
                <img src={BackgroundImg} alt={BackgroundImg} />
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

Homepageherosplit.defaultProps = {
  variant: 'image',
};
