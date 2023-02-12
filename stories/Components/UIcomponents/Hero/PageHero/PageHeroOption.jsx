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
  const heroImageClasses = variant === 'no_background' ? 'hero-placeholder' : 'homepage-hero-image';
  const noImageWrapperClasses = variant === 'no_background' ? 'no-background' : '';
  const CtaEnabledClass = args.cta_enabled ? 'has-cta' : '';
  return (
    <div className={['pagehero-tall', CtaEnabledClass, noImageWrapperClasses].join(' ')}>
      <div className="grid-x">
        <div className="cell medium-4 medium-offset-1">
          <div className="pagehero-content">
            <Breadcrumbcomponent data={data} />
            {args.outline_enabled && content && <Heading type="4" label={content} className="color-black" dataViewport="true" />}
            <Heading type="2" label={title} className="color-black" dataViewport="true" />
            {args.subtitle_enabled && subtitle && <p className={['subtitle', 'color-black'].join(' ')}>{subtitle}</p>}
            {args.cta_enabled && cta.label && <CtaButton label={cta.label} For_Primary={cta.for_primary} />}
          </div>
        </div>
        <div className="cell medium-7">
          <div className={heroImageClasses}>
            {variant === 'video' ? (
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

