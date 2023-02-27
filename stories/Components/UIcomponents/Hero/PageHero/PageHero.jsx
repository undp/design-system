import React, { useEffect } from 'react';
import './page-hero.scss';
// eslint-disable-next-line import/no-named-as-default
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

  const textColor = variant === 'No background' ? 'Black' : 'White';
  const textColorClass = variant === 'No background' ? 'color-black' : 'color-white';

  return (
    <div className="pagehero-full">
      {variant === 'Video' && (
        <Video src={BackgroundVideo} width="100%" height="100%" />
      )}
      {variant === 'Image' && (
        <div className="overlay-grey">
          <img src={imgsrc} alt={imgalt} />
        </div>
      )}
      <Breadcrumbcomponent data={data} Color={textColor} />
      <div className="pagehero-content medium-offset-1">
        <div className={['content-box', textColorClass].join(' ')}>
          {args.Overline == 'On' && content && <Heading type="4" label={content} dataViewport="true" />}
          {title && <Heading type="2" label={title} dataViewport="true" />}
          {args.Subtitle == 'On' && subtitle && <p className="subtitle">{subtitle}</p>}
          {args.CTA == 'On' && cta.label && <CtaButton label={cta.label} For_Primary={cta.for_primary} />}
        </div>
      </div>
    </div>
  );
}
