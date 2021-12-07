import React, { useEffect } from 'react';
import './homepagehero.scss';
import viewport from '../../../../assets/js/viewport';
import BackgroundImg from '../../../../assets/images/refugee.jpg';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CtaButton } from '../../Buttons/Cta_button/CtaButton';

export const Homepageherooption = ({
  title, subtitle, button, variant, imgalt, imgsrc, content
}) => {
  useEffect(() => {
    viewport('.hero-option__title');
    viewport('.hero-option__subtitle');
    viewport('.hero-option__title__small');
  }, []);
  return (
    <div className="hero-option hero-border_left">
      <div className="grid-x">
        <div className="cell large-8">
          <Heading type="4" className="hero-option__title__small left-right" label={content} />  
          <Heading type="2" className="hero-option__title left-right" label={title} />
        </div>
      </div>  
      
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
