import React, { useEffect } from 'react';
import '../../../assets/scss/_grid.scss';
import './our-expertise.scss';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/CtaLink/CtaLink';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/BaseTypography/Paragraph/Paragraph';
import { ourExpertise } from '../../../assets/js/our-expertise';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}

export function OurExpertise({ content }) {
  useEffect(() => {
    ourExpertise();
  }, []);
  return (
    <div className="grid-x our-expertise no-gap">
      <div className="cell large-4 medium-10 medium-offset-1 small-10 intro">
        <div>
          <Heading type="2" label="What we do" />
          <P label="UNDP is the United Nations’ lead agency on international development. We support countries and communities as they work to eradicate poverty, implement the Paris Agreement on climate change and achieve the Sustainable Development Goals. We advocate for transformative change, and we connect countries to the resources they need to help people build a better life." />
          <Ctalink label="Learn more" Type="Space" />
        </div>
      </div>
      <div className="cell large-offset-1 large-6 small-12">
        <div className="swiper" dir={rtl}>
          <div className="swiper-wrapper">
            {content.map((category, c) => (
              category.slides.map((slide, s) => (
                <div className="swiper-slide" data-category={c} data-panel={s} data-cat-length={category.slides.length} key={`key-${c}-${s}`}>
                  <div className="image">
                    {slide.image && <img src={`/images/${slide.image}`} alt="" />}
                  </div>
                  <div className="content">
                    <Heading type="3" label={slide.title} />
                    <P label={slide.text} />
                  </div>
                  <div className="stripe" style={{ backgroundColor: slide.color }} />
                </div>
              ))
            ))}
          </div>
          <div className="navigation">
            <div className="slider-arrows">
              <button className="prev">
                <img src="/icons/chevron-left-circle.svg" alt="Previous" />
              </button>
              <button className="next">
                <img src="/icons/chevron-right-circle.svg" alt="Next" />
              </button>
            </div>
          </div>
          <div className="swiper-tabs">
            {content.map((category, c) => (
              <div className={c == 0 ? 'is-active' : ''} data-category={c} key={c}>{category.title}</div>
            ))}
          </div>
          <div className="swiper-counter">{`1 / ${content[0].slides.length}`}</div>
        </div>
      </div>
    </div>
  );
}
