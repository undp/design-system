import React, { useEffect } from 'react';
import './homepage-hero.scss';
import expandToSize from '../../../../assets/js/animation';
import BackgroundImg from '../../../../assets/images/field.jpg';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { CtaButton } from '../../Buttons/CtaButton/CtaButton';

export const Homepagehero = ({
  title, content, button, variant, ...args
}) => {
  useEffect(() => {
    expandToSize('.homepage-hero-full');
  }, []);
  return (
    <div className="homepage-hero-full">
      {variant === 'video'
        ? (
          <Video src={BackgroundVideo} width="100%" height="100%" />
        )
        : (
          <div className="overlay-grey">
            <img src={BackgroundImg} alt={BackgroundImg} />
          </div>
        )}
       <div className="grid-x homepage-hero-content">
        <div className="cell large-7 medium-9 medium-offset-1">
          <Heading type="1" className="color-white" label={title} dataViewport="true"/>
          {content && <Heading type="4" className="color-white" label={content} dataViewport="true"/>}
          <CtaButton label={button} />
        </div>
      </div>
    </div>
  );
};

Homepagehero.defaultProps = {
  variant: 'image',
};

