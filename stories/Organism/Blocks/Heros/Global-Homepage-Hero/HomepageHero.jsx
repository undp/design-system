import React, { useEffect } from 'react';
import './homepagehero.scss';
import viewport from '../../../../assets/js/viewport';
import expandtosize from '../../../../assets/js/animation';
import BackgroundImg from '../../../../assets/images/field.jpg';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Base-typography/Heading/Heading';
import { CtaButton } from '../../../../Atom/Buttons-and-labels/Cta_button/CtaButton';

export const Homepagehero = ({
  title, content, button, variant, ...args
}) => {
  useEffect(() => {
    viewport('.hero-wrapper__title');
    viewport('.hero-wrapper__subtitle');
    expandtosize('#hero');
  }, []);
  return (
    <div className="hero-wrapper" id="hero">
      {variant === 'video'
        ? (
          <div className="hero-wrapper__background">
            <Video src={BackgroundVideo} width="100%" height="100%" />
          </div>
        )
        : (
          <div className="hero-wrapper__background overlay-grey">
            <img src={BackgroundImg} alt={BackgroundImg} />
          </div>
        )}
      <div className="hero-wrapper__container">
        <div className="grid-x">
          <div className="cell large-7 medium-9 hero-wrapper__content" id="header">
            <Heading type="1" className="hero-wrapper__title color-white left-right" label={title} />
            <Heading type="4" className="hero-wrapper__subtitle color-white left-right" label={content} />
            <CtaButton label1={button} />
          </div>
        </div>
      </div>
    </div>
  );
};

Homepagehero.defaultProps = {
  variant: 'image',
};
