import React, { useEffect } from "react";
import "./pagehero.scss";
import viewport from "../../../../assets/js/viewport";
import BackgroundImg from "../../../../assets/images/garden.jpg";
import BackgroundVideo from "../../../../assets/video/video_sample.mp4";
import { Video } from "../../../../Atom/Video/Video";
import { Heading } from ".././../../../Atom/Base-typography/Heading/Heading";
import { Breadcrumbcomponent } from "../../../../Molecules/Navbar/Breadcrumb/Breadcrumb-link";

export const PageHeroOption = ({ data, title, content, active, variant }) => {
  useEffect(() => {
    viewport(".pagehero__option_title");
    viewport(".pagehero__option_subtitle");
  }, []);
  return (
    <div className="pagehero__option">
      <div className="grid-x">
        <div className="cell large-5 medium-6">
          <div className="page__hero_content">
            <Breadcrumbcomponent data={data} active={active} />
            <Heading type="4" className="pagehero__option_title left-right" label={content}/>
            <Heading type="2" className="pagehero__option_subtitle left-right" label={title}/>
          </div>
        </div>
        <div className="cell large-7 medium-6 hero_right">
          {variant === "video" ? (
            <div className="hero_right_box">
              <Video src={BackgroundVideo} width='100%' height='100%'/>
            </div>
          ) : (
            <div className="hero_right_box">
              <img src={BackgroundImg} alt={BackgroundImg} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
