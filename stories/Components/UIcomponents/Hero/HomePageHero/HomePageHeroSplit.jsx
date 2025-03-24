import React from "react";
import "./homepage-hero.scss";
import BackgroundImg from "../../../../assets/images/homepagehero.jpg";
import BackgroundImg2 from "../../../../assets/images/homepagehero.jpg";
import BackgroundVideo from "../../../../assets/video/video_sample.mp4";
import { Video } from "../../../../Atom/Video/Video";
import { Heading } from "../../../../Atom/Typography/Heading/Heading";
import { CtaButton } from "../../Buttons/CtaButton/CtaButton";

export const Homepageherosplit = ({ title, content, button, variant }) => (
  <div className="homepage-hero-tall">
    <div className="grid-x">
      <div className="cell medium-5 medium-offset-1 rtl-offset-medium-1">
        <div className="homepage-hero-tall-content">
          {content && <Heading type="1" label={title} dataViewport="true" />}
          {content && <Heading type="4" label={content} dataViewport="true" />}
          <div className="show-small">
            <div className="show-small-button">
              <CtaButton label={button} />
            </div>
          </div>
          <div className="show-large">
            <CtaButton label={button} />
          </div>
        </div>
      </div>
      <div className="cell medium-6">
        <div className="homepage-hero-image">
          {variant === "video" ? (
            <Video src={BackgroundVideo} width="100%" height="100%" />
          ) : (
            <picture>
              <source media="(min-width:767px )" srcSet={BackgroundImg2} />
              <img src={BackgroundImg2} alt={BackgroundImg} />
            </picture>
          )}
        </div>
      </div>
    </div>
  </div>
);

Homepageherosplit.defaultProps = {
  variant: "image",
};
