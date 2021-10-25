import React, { useEffect } from "react";
import "./pagehero.scss";
import viewport from '../../../../assets/js/viewport';
import BackgroundImg from "../../../../assets/images/garden.jpg";
import BackgroundVideo from "../../../../assets/video/video_sample.mp4";
import { Video } from "../../../../Atom/Video/Video";
import { Heading } from '.././../../../Atom/Base-typography/Heading/Heading';
import { Breadcrumbcomponent } from "../../../../Molecules/Navbar/Breadcrumb/Breadcrumb-link";

export const PageHero = ({ data, title, content, active, variant }) => {
  useEffect(() => {
    viewport('.page__hero_subtitle');
    viewport('.page__hero_title');
  }, [])
  return (
    <div className="page__hero_wrapper">
        {variant === 'video' ?
            <div className='page__hero_background'>
              <Video src={BackgroundVideo} width='100%' height='100%'/>
            </div>
            : 
            <div className="page__hero_background overlay-grey">
                <img src={BackgroundImg} alt={BackgroundImg}/>
            </div>}
        <div className="grid-x">
          <div className="cell large-6 medium-9 page__hero_content">
            <Breadcrumbcomponent data={data} active={active}/>
            <Heading type='4' className='page__hero_subtitle color-white left-right' label={content} />
            <Heading type='2' className='page__hero_title color-white left-right' label={title} />
          </div>
        </div>
    </div>
  );
};

PageHero.defaultProps = {
  variant: "image",
};
