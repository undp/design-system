import React, { useEffect } from 'react';
import './pagehero.scss';
import viewport from '../../../../assets/js/viewport';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../../Navigationcomponents/Breadcrumbs/Breadcrumbs';

export const PageHeroOption = ({
  data, title, content, active, variant, imgsrc, imgalt, videosrc,
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
              <Video src={videosrc} width="100%" height="100%" />
            </div>
          ) : (
            <div className="pagehero_right_box">
              <img src={imgsrc} alt={imgalt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
