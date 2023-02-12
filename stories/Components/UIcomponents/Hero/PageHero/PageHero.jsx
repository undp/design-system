import React, { useEffect } from 'react';
import './page-hero.scss';
import expandToSize from '../../../../assets/js/animation';
import BackgroundVideo from '../../../../assets/video/video_sample.mp4';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../../Navigationcomponents/Breadcrumbs/Breadcrumbs';
import { CtaButton } from '../../Buttons/CtaButton/CtaButton';

export function PageHero({
  data,
  title,
  subtitle,
  content,
  variant,
  imgsrc,
  imgalt,
  cta,
  ...args
}) {
  useEffect(() => {
    expandToSize('.pagehero-full');
  }, []);
  const mainClasses = variant === 'no_background' ? 'pagehero-full no-background-media' : 'pagehero-full';
  const textColor = variant === 'no_background' ? 'Black' : 'White';
  const textColorClass = variant === 'no_background' ? 'color-black' : 'color-white';

  return (
    <div className={mainClasses}>
      {variant === 'video' && (
        <Video src={BackgroundVideo} width="100%" height="100%" />
      )}
      {variant === 'image' && (
        <div className="overlay-grey">
          <img src={imgsrc} alt={imgalt} />
        </div>
      )}
      <Breadcrumbcomponent data={data} Color={textColor} />
      <div className="pagehero-content  medium-offset-1">
        <div className="content-box">
          {args.outline_enabled && content && <Heading type="4" className={textColorClass} label={content} dataViewport="true" />}
          {title && <Heading type="2" className={textColorClass} label={title} dataViewport="true" />}
          {args.subtitle_enabled && subtitle && <p className={['subtitle', textColorClass].join(' ')}>{subtitle}</p>}
          {args.cta_enabled && cta.label && <CtaButton label={cta.label} For_Primary={cta.for_primary} />}
        </div>
      </div>
    </div>
  );
}
