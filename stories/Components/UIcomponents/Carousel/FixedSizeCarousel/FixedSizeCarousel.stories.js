import { Meta, Story, Canvas, Anchor } from "@storybook/addon-docs";
import { FixedSizeCarousel } from "./FixedSizeCarousel";
import { ImageOnlyCarousel } from "../ImageOnlyCarousel/ImageOnlyCarousel";
import slImage from "../../../../assets/images/carousel1-img.jpg";

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            slideImage: slImage,
            tagtext: "Publication",
            titleText: "UNDP Gender Equality Strategy: 2020 Annual Report",
            descText:
              "This annual report highlights UNDP's progress on its Gender Equality Strategy 2018-2021 and key achievements made in closing gender gaps in 2020. The report explores emerging trends and challenges that lie ahead for gender equality, including in the COVID-19 response and recovery. Learning from these lessons will be vital to accelerate progress towards gender equality and to achieve the 2030 Agenda.",
            buttonText: "Read More",
          },
          {
            slideImage: slImage,
            tagtext: "Publication",
            titleText: "UNDP Gender Equality Strategy: 2020 Annual Report",
            descText:
              "This annual report highlights UNDP's progress on its Gender Equality Strategy 2018-2021 and key achievements made in closing gender gaps in 2020. The report explores emerging trends and challenges that lie ahead for gender equality, including in the COVID-19 response and recovery. Learning from these lessons will be vital to accelerate progress towards gender equality and to achieve the 2030 Agenda.",
            buttonText: "Read More",
          },
          {
            slideImage: slImage,
            tagtext: "Publication",
            titleText: "UNDP Gender Equality Strategy: 2020 Annual Report",
            descText:
              "This annual report highlights UNDP's progress on its Gender Equality Strategy 2018-2021 and key achievements made in closing gender gaps in 2020. The report explores emerging trends and challenges that lie ahead for gender equality, including in the COVID-19 response and recovery. Learning from these lessons will be vital to accelerate progress towards gender equality and to achieve the 2030 Agenda.",
            buttonText: "Read More",
          },
        ],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        data: [
          {
            slideImage: slImage,
            tagtext: "Публікація",
            titleText: "Огляд міжнародного та національного законодавства у сфері гендерної рівності",
            descText:
              "Метою цієї публікації є підвищення спроможності персоналу та адвокатів місцевих центрів безоплатної правової допомоги у Донецькій та Луганській областях надавати гендерно орієнтовані послуги.",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
          {
            slideImage: slImage,
            tagtext: "Публікація",
            titleText: "Огляд міжнародного та національного законодавства у сфері гендерної рівності",
            descText:
              "Метою цієї публікації є підвищення спроможності персоналу та адвокатів місцевих центрів безоплатної правової допомоги у Донецькій та Луганській областях надавати гендерно орієнтовані послуги.",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
          {
            slideImage: slImage,
            tagtext: "Публікація",
            titleText: "Огляд міжнародного та національного законодавства у сфері гендерної рівності",
            descText:
              "Метою цієї публікації є підвищення спроможності персоналу та адвокатів місцевих центрів безоплатної правової допомоги у Донецькій та Луганській областях надавати гендерно орієнтовані послуги.",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
        ],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        data: [
          {
            slideImage: slImage,
            tagtext: "النشر",
            titleText:
              "برنامج الأمم المتحدة الإنمائي يصدر موجزًا ​​عن الحلول المناخية القائمة على الطبيعة",
            descText:
              "يزيد حفظ التنوع البيولوجي والنظم البيئية وإعادة تأهيله وإدارته المستنيرة من المرونة في مواجهة تغير المناخ ويوفر حلولًا منخفضة التكلفة وطويلة الأجل لحماية الأرواح وسبل العيش والبنية التحتية ، ودفع التقدم نحو أهداف التنمية المستدامة.",
            buttonText: "اقرأ أكثر",
          },
          {
            slideImage: slImage,
            tagtext: "النشر",
            titleText:
              "برنامج الأمم المتحدة الإنمائي يصدر موجزًا ​​عن الحلول المناخية القائمة على الطبيعة",
            descText:
              "يزيد حفظ التنوع البيولوجي والنظم البيئية وإعادة تأهيله وإدارته المستنيرة من المرونة في مواجهة تغير المناخ ويوفر حلولًا منخفضة التكلفة وطويلة الأجل لحماية الأرواح وسبل العيش والبنية التحتية ، ودفع التقدم نحو أهداف التنمية المستدامة.",
            buttonText: "اقرأ أكثر",
          },
          {
            slideImage: slImage,
            tagtext: "النشر",
            titleText:
              "برنامج الأمم المتحدة الإنمائي يصدر موجزًا ​​عن الحلول المناخية القائمة على الطبيعة",
            descText:
              "يزيد حفظ التنوع البيولوجي والنظم البيئية وإعادة تأهيله وإدارته المستنيرة من المرونة في مواجهة تغير المناخ ويوفر حلولًا منخفضة التكلفة وطويلة الأجل لحماية الأرواح وسبل العيش والبنية التحتية ، ودفع التقدم نحو أهداف التنمية المستدامة.",
            buttonText: "اقرأ أكثر",
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        data: [
          {
            slideImage: slImage,
            tagtext: "ထုတ်ဝေခြင်း။",
            titleText: "UNDP သည် သဘာဝအခြေခံ ရာသီဥတုဆိုင်ရာ။",
            descText:
              "ဇီဝမျိုးစုံမျိုးကွဲများနှင့် ဂေဟစနစ်များ၏ ရာသီဥတုဆိုင်ရာ စီမံခန့်ခွဲမှု၊ ပြန်လည်ထူထောင်ရေးနှင့် ရာသီဥတုဆိုင်ရာ စီမံခန့်ခွဲမှုသည် ရာသီဥတုပြောင်းလဲမှုဒဏ်ကို ခံနိုင်ရည်အား တိုးမြင့်စေပြီး လူနေမှုဘဝ၊ အသက်မွေးဝမ်းကျောင်းမှုနှင့်",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
          {
            slideImage: slImage,
            tagtext: "ထုတ်ဝေခြင်း။",
            titleText: "UNDP သည် သဘာဝအခြေခံ ရာသီဥတုဆိုင်ရာ။",
            descText:
              "ဇီဝမျိုးစုံမျိုးကွဲများနှင့် ဂေဟစနစ်များ၏ ရာသီဥတုဆိုင်ရာ စီမံခန့်ခွဲမှု၊ ပြန်လည်ထူထောင်ရေးနှင့် ရာသီဥတုဆိုင်ရာ စီမံခန့်ခွဲမှုသည် ရာသီဥတုပြောင်းလဲမှုဒဏ်ကို ခံနိုင်ရည်အား တိုးမြင့်စေပြီး လူနေမှုဘဝ၊ အသက်မွေးဝမ်းကျောင်းမှုနှင့် ",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
          {
            slideImage: slImage,
            tagtext: "ထုတ်ဝေခြင်း။",
            titleText: "UNDP သည် သဘာဝအခြေခံ ရာသီဥတုဆိုင်ရာ။",
            descText:
              "ဇီဝမျိုးစုံမျိုးကွဲများနှင့် ဂေဟစနစ်များ၏ ရာသီဥတုဆိုင်ရာ စီမံခန့်ခွဲမှု၊ ပြန်လည်ထူထောင်ရေးနှင့် ရာသီဥတုဆိုင်ရာ စီမံခန့်ခွဲမှုသည် ရာသီဥတုပြောင်းလဲမှုဒဏ်ကို ခံနိုင်ရည်အား တိုးမြင့်စေပြီး လူနေမှုဘဝ၊ အသက်မွေးဝမ်းကျောင်းမှုနှင့် ",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        data: [
          {
            slideImage: slImage,
            tagtext: "出版物",
            titleText: "UNDPが自然に基づく気候ソリューションに関する概要を発表",
            descText:
              "生物多様性と生態系の保全、リハビリテーション、気候に基づいた管理は、気候変動に対する回復力を高め、生命、生計、インフラを保護し、持続可能な開発目標に向けて前進するための低コストで長期的なソリューションを提供します。",
            buttonText: "続きを読む",
          },
          {
            slideImage: slImage,
            tagtext: "出版物",
            titleText: "UNDPが自然に基づく気候ソリューションに関する概要を発表",
            descText:
              "生物多様性と生態系の保全、リハビリテーション、気候に基づいた管理は、気候変動に対する回復力を高め、生命、生計、インフラを保護し、持続可能な開発目標に向けて前進するための低コストで長期的なソリューションを提供します。",
            buttonText: "続きを読む",
          },
          {
            slideImage: slImage,
            tagtext: "出版物",
            titleText: "UNDPが自然に基づく気候ソリューションに関する概要を発表",
            descText:
              "生物多様性と生態系の保全、リハビリテーション、気候に基づいた管理は、気候変動に対する回復力を高め、生命、生計、インフラを保護し、持続可能な開発目標に向けて前進するための低コストで長期的なソリューションを提供します。",
            buttonText: "続きを読む",
          },
        ],
      };
      return japaneseText;
    default:
      const dummy = {
        data: [
          {
            slideImage: slImage,
            tagtext: "Publication",
            titleText: "UNDP Issues Brief on Nature-Based Climate Solutions",
            descText:
              "The conservation, rehabilitation and climate-informed management of biodiversity and ecosystems increases resilience to climate change and provides low-cost and long-term solutions to protect lives, livelihoods and infrastructure, and advance progress toward the Sustainable Development Goals.",
            buttonText: "Read More",
          },
          {
            slideImage: slImage,
            tagtext: "Publication",
            titleText: "UNDP Issues Brief on Nature-Based Climate Solutions",
            descText:
              "The conservation, rehabilitation and climate-informed management of biodiversity and ecosystems increases resilience to climate change and provides low-cost and long-term solutions to protect lives, livelihoods and infrastructure, and advance progress toward the Sustainable Development Goals.",
            buttonText: "Read More",
          },
          {
            slideImage: slImage,
            tagtext: "Publication",
            titleText: "UNDP Issues Brief on Nature-Based Climate Solutions",
            descText:
              "The conservation, rehabilitation and climate-informed management of biodiversity and ecosystems increases resilience to climate change and provides low-cost and long-term solutions to protect lives, livelihoods and infrastructure, and advance progress toward the Sustainable Development Goals.",
            buttonText: "Read More",
          },
        ],
      };
      return dummy;
  }
};

export default {
  title: 'Components/UI components/Carousel/Fixed carousel',
  component: FixedSizeCarousel,
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Carousel - Fixed Image Size Carousel</h1>

              <p>The Carousel is a slideshow of multiple images or content.</p>

              <h3>Overview</h3>

              <p>The Carousel component is created for showing sliders, designations, and images in a particular section. It is a multi-usage component that creates teasing kinds of content.</p>

              <h3>When to use:</h3>

              <p>When multiple images or content is to be displayed in a single slide.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of multiple grids with an image, description, and CTA link.</p>

              <h3>Content</h3>

              <p>There are 3 types of Carousel: Fluid, Image, and Fixed.</p>

              <ul>
                <li><strong>Fluid Image Size Carousel Component:</strong> In Fluid Image Size Carousel Component, the page layout of the content is adjusted as per the user’s device screen. It consists of a horizontal scroll bar, Image, Text area, CTA Link, and Right cursor arrow (left in case of RTL).</li>
                <li><strong>Image Only Carousel Component:</strong> In Image Only Carousel Component, only images are available in the slideshow while content and CTA links are not included.</li>
                <li><strong>Fixed Image Size Carousel Component:</strong> In Fixed Image Size Carousel Component, the size of the image does not change as per the user’s device screen. It consists of a horizontal scroll bar, Image, Text area, Primary button with arrow, Pagination (tablet only), and Cursor arrow right (left in case of RTL). The horizontal scroll bar indicates the current position.</li>
              </ul>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>Fixed Image Size Carousel Component:</p>

              <ul>
                <li><strong>Default:</strong> The Description and Chip are located beside the Image with enough space between them. When the user is at the first item, the cursor arrow right is displayed. Clicking the arrow will take the user to the next item in the carousel. When the user is on the last item, the left cursor arrow is displayed. Clicking on it will take the user to the previous item in the carousel.</li>
                <li><strong>Mobile:</strong> The Description and Chip are located below the Image with no space between them. Swiping will move the user to the next or previous item.</li>
                <li><strong>Tablet:</strong> The Description and Chip are located beside the Image with minimal space between them. There are arrow buttons beside the Chip to slide back or to the next slide. Clicking pagination will take the user to the next/previous item.</li>
              </ul>

              <Canvas>
                <Story name="Fixed carousel">
                  {(args, { globals: { locale } }) => {
                    const caption = statsArray(locale);
                    return (
                      <FixedSizeCarousel
                        data={caption.data}
                        label={caption.label}
                      ></FixedSizeCarousel>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                <li>Copy HTML from the HTML tab of the canvas.</li>
                <li>Include Swiper library from <a href="https://swiperjs.com/get-started">here</a> in your HTML page.</li>
                <li>If you use fixed image size carousel, include <code>fluid-image-size-carousel.min.css</code> and initialize carousel by calling <code>swiper('.fixed-carousel', '.fixed-carousel__button-wrap');</code> functions.</li>
                <li>If you use Fluid image size carousel, include <code>fixed-size-carousel.min.css</code> and initialize carousel by calling <code>swiper('.fluid-carousel', '.slide-content');</code> functions.</li>
                <li>If you use Image only carousel, include <code>image-only-carousel.min.css</code> and initialize the carousel by calling <code>swiper('.image-carousel', '.slider-slide');</code> functions.</li>
                <li>If you want to add left-right animation, add <code>data-viewport="true"</code> attribute to the HTML element you want to animate and include <code>viewport.min.js</code> file.</li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/fixed-size-carousel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/fixed-size-carousel.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <p>3rd party libraries:</p>
              <ul>
                <li>Swiper: <a href="https://swiperjs.com/get-started">Swiper</a></li>
              </ul>

              <h3>Interactions</h3>

              <ul>
                <li>By clicking on the Chips and CTA Links, the user is directed to the detailed information page.</li>
                <li>By clicking on the Arrow Buttons, the slides can be swiped forward or backward.</li>
              </ul>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
}
};

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return (
    <FixedSizeCarousel
      data={caption.data}
      label={caption.label}
    ></FixedSizeCarousel>
  );
}

export const FixedSizeCarouselStory = Template.bind({});
FixedSizeCarouselStory.storyName = "Fixed carousel";