import React from 'react';
import './page-hero.scss';
import { Video } from '../../../../Atom/Video/Video';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../../Navigationcomponents/Breadcrumbs/Breadcrumbs';
import { CtaButton } from '../../Buttons/CtaButton/CtaButton';

export function PageHeroOption({
  data,
  title,
  subtitle,
  content,
  active,
  variant,
  imgsrc,
  imgsrc2,
  imgalt,
  videosrc,
  cta,
  ...args
}) {
  const CtaEnabledClass = args.CTA == 'On' ? 'has-cta' : '';
  return (
    <div className={['pagehero-tall', CtaEnabledClass].join(' ')}>
      <div className="grid-x">
        <div className="cell medium-4 medium-offset-1">
          <div className="pagehero-content color-black">
            <Breadcrumbcomponent data={data} />
            {args.Overline == 'On' && content && <Heading type="4" label={content} dataViewport="true" />}
            <Heading type="2" label={title} dataViewport="true" />
            {args.Subtitle == 'On' && subtitle && <p className="subtitle">{subtitle}</p>}
            {args.CTA == 'On' && cta.label && <CtaButton label={cta.label} For_Primary={cta.for_primary} />}
          </div>
        </div>
        <div className="cell medium-7">
          <div className="homepage-hero-image">
            {variant === 'Video' ? (
              <Video src={videosrc} width="100%" height="100%" />
            ) : (
              <picture>
                <source media="(min-width: 767px)" srcSet={imgsrc} />
                <img src={imgsrc2} alt={imgalt} />
              </picture>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
