import React, { useEffect } from 'react';
import './pagehero.scss';
import viewport from '../../../../assets/js/viewport';
import expandtosize from '../../../../assets/js/animation';
import BackgroundImg from '../../../../assets/images/garden.jpg';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../../Navigationcomponents/Breadcrumbs/Breadcrumbs';

export const PageHero = ({
  data, title, content, variant, imgsrc, imgalt
}) => {
  useEffect(() => {
    viewport('.pagehero-wrapper__subtitle');
    viewport('.pagehero-wrapper__title');
    expandtosize('#pagehero');
  }, []);
  return (
    <div className="pagehero-wrapper" id="pagehero">
      {variant === 'video'
        ? (
          <div className="pagehero-wrapper__background">
            <Video src={BackgroundVideo} width="100%" height="100%" />
          </div>
        )
        : (
          <div className="pagehero-wrapper__background overlay-grey">
            <img src={imgsrc} alt={imgalt} />
          </div>
        )}
      <div className="grid-x">
        <div className="cell large-6 medium-9 pagehero__content">
          <Breadcrumbcomponent data={data} Color='White' />
          <Heading type="4" className="pagehero-wrapper__subtitle color-white left-right" label={content} />
          <Heading type="2" className="pagehero-wrapper__title color-white left-right" label={title} />
        </div>
      </div>
    </div>
  );
};

PageHero.defaultProps = {
  variant: 'image',
};
