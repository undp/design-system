import React, { useEffect } from 'react';
import './pagehero.scss';
import viewport from '../../../../assets/js/viewport';
import BackgroundImg from '../../../../assets/images/garden.jpg';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Base-typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../../../Molecules/Navbar/Breadcrumb/Breadcrumb-link';

export const PageHeroOption = ({
  data, title, content, active, variant,
}) => {
  useEffect(() => {
    viewport('.pagehero-option__title');
    viewport('.pagehero-option__subtitle');
  }, []);
  return (
    <div className="pagehero-option">
      <div className="grid-x">
        <div className="cell large-5 medium-6">
          <div className="pagehero__content">
            <Breadcrumbcomponent data={data} active={active} />
            <Heading type="4" className="pagehero-option__title left-right" label={content} />
            <Heading type="2" className="pagehero-option__subtitle left-right" label={title} />
          </div>
        </div>
        <div className="cell large-7 medium-6 hero_right">
          {variant === 'video' ? (
            <div className="pagehero_right_box">
              <Video src={BackgroundVideo} width="100%" height="100%" />
            </div>
          ) : (
            <div className="pagehero_right_box">
              <img src={BackgroundImg} alt={BackgroundImg} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
