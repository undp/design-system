import React, { useEffect } from 'react';
import "./homepagehero.scss";
import viewport from '../../../../assets/js/viewport';
import BackgroundImg from "../../../../assets/images/refugee.jpg";
import BackgroundVideo from "../../../../assets/video/video_sample.mp4";
import { Video } from "../../../../Atom/Video/Video";
import { Heading } from '.././../../../Atom/Base-typography/Heading/Heading';
import { CtaButton } from '../../../../Atom/Buttons-and-labels/Cta_button/CtaButton';

export const Homepageherooption = ({ title, subtitle, button, variant }) => {
  useEffect(() => {
    viewport('.hero__option_title');
    viewport('.hero__option_subtitle');
  }, [])
  return (
    <div className="hero__option">
      <Heading type='1' className='hero__option_title left-right' label={title}/>
      <div className="grid-x">
        <div className="cell large-4 medium-4">
          <div className="hero__option_content">
            <Heading type='5' className='hero__option_subtitle left-right' label={subtitle} />
            <div className="show-for-large">
            <CtaButton label1={button}/>
            </div>
          </div>
        </div>
        <div className="cell large-8 medium-8 hero_right">
          {variant === 'video' ? 
            <div className='hero_right_box'> 
              <Video src={BackgroundVideo} width='100%' height='100%'/>
            </div>
            : 
            <div className="hero_right_box">
                <img src={BackgroundImg} alt={BackgroundImg}/>
            </div>}
          <div className="show-for-small">
            <CtaButton label1={button}/>
          </div>
        </div>
      </div>
    </div>
  );
};

Homepageherooption.defaultProps = {
  variant: "image",
};
