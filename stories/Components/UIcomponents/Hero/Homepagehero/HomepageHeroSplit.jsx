import React, { useEffect } from 'react';
import './homepagehero.scss';
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
    viewport('.hero-split__title');
    viewport('.hero-split__subtitle');
  }, []);
  return (
    <div className="hero-split">
      <div className="grid-x">
        <div className="cell medium-5 medium-offset-1">
          <div className="hero-split__content ">
            <Heading type="1" className="hero-split__title left-right" label={title} />
            <Heading type="4" className="hero-split__subtitle left-right" label={content} />
            <div className="show-large">
              <CtaButton label={button} />
            </div>
          </div>
        </div>
        <div className="cell medium-6 hero_right">
          {variant === 'video'
            ? (
              <div className="hero_right_box">
                <Video src={BackgroundVideo} width="100%" height="100%" />
              </div>
            )
            : (
              <div className="hero_right_box">
                <img src={BackgroundImg} alt={BackgroundImg} />
              </div>
            )}
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
