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
    viewport('.left-right');
  }, []);
  return (
    <div className="pagehero-tall">
      <div className="grid-x">
        <div className="cell medium-4 medium-offset-1">
          <div className="pagehero-content">
            <Breadcrumbcomponent data={data} />
            {content && <Heading type="4" className="left-right" label={content} />}
            <Heading type="2" className="left-right" label={title} />
          </div>
        </div>
        <div className="cell medium-7">
          <div className="pagehero-image">
            {variant === 'video' ? (
              <Video src={videosrc} width="100%" height="100%" />
            ) : (
              <img src={imgsrc} alt={imgalt} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeroOption.defaultProps = {
  variant: 'image',
};
