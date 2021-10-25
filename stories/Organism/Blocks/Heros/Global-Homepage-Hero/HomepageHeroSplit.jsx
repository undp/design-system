import React, { useEffect } from 'react';
import "./homepagehero.scss";
import viewport from '../../../../assets/js/viewport';
import BackgroundImg from "../../../../assets/images/scuba.jpg";
import BackgroundVideo from "../../../../assets/video/video_sample.mp4";
import { Video } from "../../../../Atom/Video/Video";
import { Heading } from '.././../../../Atom/Base-typography/Heading/Heading';
import { CtaButton } from '../../../../Atom/Buttons-and-labels/Cta_button/CtaButton';

export const Homepageherosplit = ({ title, content, button, variant }) => {
  useEffect(() => {
    viewport('.hero__split_title');
    viewport('.hero__split_subtitle');
  }, [])
  return (
    <div className="hero__split">
      <div className="grid-x">
        <div className="cell medium-6">
          <div className='hero__split_content'>
            <Heading type='1' className='hero__split_title left-right' label={title} />
            <Heading type='4' className='hero__split_subtitle left-right' label={content} />
            <div className='show-for-large'>
              <CtaButton label1={button}/>
            </div>
          </div>
        </div>
        <div className="cell medium-6 hero_right">
          {variant === 'video' ?
            <div className='hero_right_box'>
              <Video src={BackgroundVideo} width='100%' height='100%'/>
            </div>
            :
            <div className="hero_right_box">
              <img src={BackgroundImg} alt={BackgroundImg} />
            </div>}
          <div className='show-for-small'>
            <CtaButton label1={button}/>
          </div>
        </div>
      </div>
    </div>
  );
};

Homepageherosplit.defaultProps = {
  variant: "image",
};
