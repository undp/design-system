import React, { useEffect } from 'react';
import { swiper } from '../../../assets/js/swiper';
import '../../../assets/scss/_grid.scss';
import './our-expertise.scss';
import { CtaButton } from '../../../Components/UIcomponents/Buttons/CtaButton/CtaButton';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/BaseTypography/Paragraph/Paragraph';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}

export function OurExpertise() {
  const titles = [
    'Poverty and Inequality',
    'Governance',
    'Resilience',
    'Environment',
    'Energy',
    'Gender equality',
    'Digitalisation',
    'Strategic innovation',
    'Development financing',
  ];
  useEffect(() => {
    swiper('.our-expertise .swiper', '.swiper-navigation', {
      scrollbar: false,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        showOn: 'desktop',
      },
      on: {
        slideChange(swiper) {
          const $divs = $(swiper.el).find('.swiper-tabs div');
          if (swiper.realIndex > 5) {
            $divs.eq(0).removeClass('is-active');
            $divs.eq(1).addClass('is-active');
          } else {
            $divs.eq(1).removeClass('is-active');
            $divs.eq(0).addClass('is-active');
          }
          $(swiper.el).find('.swiper-counter span').text(`${swiper.realIndex + 1} `);
        },
      },
    });
  }, []);
  return (
    <div className="grid-x our-expertise no-gap">
      <div className="cell large-4 medium-10 medium-offset-1 small-10 intro">
        <div>
          <Heading type="2" label="What we do" />
          <P label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sint vero numquam, reprehenderit dolore quaerat corrupti! Suscipit, non commodi ab iusto labore quibusdam illum laboriosam soluta, fugit a cumque asperiores." />
          <CtaButton label="Read more" Type="Expanding Arrow" />
        </div>
      </div>
      <div className="cell large-offset-1 large-6 small-12">
        <div className="swiper" dir={rtl}>
          <div className="swiper-wrapper">

            {titles.map((item, index) => (
              <div className="swiper-slide">
                <div className="image">
                  <img src={`https://picsum.photos/960/640?random=5${index}`} alt="" />
                </div>
                <div className="content">
                  <Heading type="3" label={item} />
                  <P label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sint vero numquam, reprehenderit dolore quaerat corrupti! Suscipit, non commodi ab iusto labore quibusdam illum laboriosam soluta, fugit a cumque asperiores." />
                </div>
                <div className="stripe" />
              </div>
            ))}

          </div>
          <div className="swiper-navigation" />
          <div className="swiper-tabs">
            <div className="is-active">Signature solutions</div>
            <div>Enablers</div>
          </div>
          <div className="swiper-counter">
            <span>1 </span>
            of 9
          </div>
        </div>
      </div>
    </div>
  );
}
