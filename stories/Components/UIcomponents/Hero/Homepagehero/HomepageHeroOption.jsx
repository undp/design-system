import React, { useEffect } from 'react';
import './homepagehero.scss';
import viewport from '../../../../assets/js/viewport';
import BackgroundImg from '../../../../assets/images/refugee.jpg';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CtaButton } from '../../Buttons/Cta_button/CtaButton';

export const Homepageherooption = ({
  title, subtitle, button, variant, imgalt, imgsrc
}) => {
  useEffect(() => {
    viewport('.hero-option__title');
    viewport('.hero-option__subtitle');
  }, []);
  return (
    <div className="hero-option hero-border_left">
      <Heading type="1" className="hero-option__title left-right" label={title} />
      <div className="grid-x">
        <div className="cell large-4 medium-4">
          <div className="hero-option__content">
            <Heading type="5" className="hero-option__subtitle left-right" label={subtitle} />
            <div className="show-large">
              <CtaButton label1={button} />
            </div>
          </div>
        </div>
        <div className="cell large-8 medium-8 hero_right">
          {variant === 'video'
            ? (
              <div className="hero_right_box">
                <Video src={BackgroundVideo} width="100%" height="100%" />
              </div>
            )
            : (
              <div className="hero_right_box">
                <img src={imgsrc} alt={imgalt} />
              </div>
            )}
          <div className="show-small">
            <CtaButton label1={button} />
          </div>
        </div>
      </div>
    </div>
  );
};

Homepageherooption.defaultProps = {
  variant: 'image',
};
