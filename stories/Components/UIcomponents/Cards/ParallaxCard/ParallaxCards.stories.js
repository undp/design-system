import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import ParallaxCards from './ParallaxCards';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
        ],
        title: ["Our", <br />, "Expertise"],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        data: [
          {
            name: "Заголовок",
            descriptionText:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
            btnlabel: "ЧИТАТИ ДАЛІ",
          },
          {
            name: "Заголовок",
            descriptionText:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
            btnlabel: "ЧИТАТИ ДАЛІ",
          },
          {
            name: "Заголовок",
            descriptionText:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
            btnlabel: "ЧИТАТИ ДАЛІ",
          },
          {
            name: "Заголовок",
            descriptionText:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
            btnlabel: "ЧИТАТИ ДАЛІ",
          },
          {
            name: "Заголовок",
            descriptionText:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
            btnlabel: "ЧИТАТИ ДАЛІ",
          },
        ],
        title: ["Наші", <br />, "теми"],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        data: [
          {
            name: "عنوان",
            descriptionText:
              "قد يكون الألم بحد ذاته شديدًا ، لكن السبب الرئيسي هو الألم ، لكنني أعطي الوقت للوقوع فيه مثل بعض الألم والألم الشديد. ولكي يأتي الأقل ، فماذا لنا أن نمارس أي مدرسة عمل إلا للاستفادة من أهدافها لتحقيقها.",
            btnlabel: "اقرأ أكثر",
          },
          {
            name: "عنوان",
            descriptionText:
              "قد يكون الألم بحد ذاته شديدًا ، لكن السبب الرئيسي هو الألم ، لكنني أعطي الوقت للوقوع فيه مثل بعض الألم والألم الشديد. ولكي يأتي الأقل ، فماذا لنا أن نمارس أي مدرسة عمل إلا للاستفادة من أهدافها لتحقيقها.",
            btnlabel: "اقرأ أكثر",
          },
          {
            name: "عنوان",
            descriptionText:
              "قد يكون الألم بحد ذاته شديدًا ، لكن السبب الرئيسي هو الألم ، لكنني أعطي الوقت للوقوع فيه مثل بعض الألم والألم الشديد. ولكي يأتي الأقل ، فماذا لنا أن نمارس أي مدرسة عمل إلا للاستفادة من أهدافها لتحقيقها.",
            btnlabel: "اقرأ أكثر",
          },
          {
            name: "عنوان",
            descriptionText:
              "قد يكون الألم بحد ذاته شديدًا ، لكن السبب الرئيسي هو الألم ، لكنني أعطي الوقت للوقوع فيه مثل بعض الألم والألم الشديد. ولكي يأتي الأقل ، فماذا لنا أن نمارس أي مدرسة عمل إلا للاستفادة من أهدافها لتحقيقها.",
            btnlabel: "اقرأ أكثر",
          },
          {
            name: "عنوان",
            descriptionText:
              "قد يكون الألم بحد ذاته شديدًا ، لكن السبب الرئيسي هو الألم ، لكنني أعطي الوقت للوقوع فيه مثل بعض الألم والألم الشديد. ولكي يأتي الأقل ، فماذا لنا أن نمارس أي مدرسة عمل إلا للاستفادة من أهدافها لتحقيقها.",
            btnlabel: "اقرأ أكثر",
          },
        ],
        title: ["لنا", <br />, "خبرة"],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        data: [
          {
            name: "ခေါင်းစီး",
            descriptionText:
              "နာကျင်မှုကိုယ်တိုင်က ဝေဒနာအများကြီးဖြစ်နိုင်ပေမယ့် အဓိကအကြောင်းအရင်းကတော့ နာကျင်မှုပဲ၊ ဒါပေမယ့် ကြီးကြီးမားမား နာကျင်ကိုက်ခဲမှုလိုမျိုး ဝေဒနာတစ်ခုလို ကျရောက်ဖို့ အချိန်ပေးပါ။ ယုတ်စွအဆုံး ",
            btnlabel: "ပိုပြီးဖတ်ပါ",
          },
          {
            name: "ခေါင်းစီး",
            descriptionText:
              "နာကျင်မှုကိုယ်တိုင်က ဝေဒနာအများကြီးဖြစ်နိုင်ပေမယ့် အဓိကအကြောင်းအရင်းကတော့ နာကျင်မှုပဲ၊ ဒါပေမယ့် ကြီးကြီးမားမား နာကျင်ကိုက်ခဲမှုလိုမျိုး ဝေဒနာတစ်ခုလို ကျရောက်ဖို့ အချိန်ပေးပါ။ ယုတ်စွအဆုံး ",
            btnlabel: "ပိုပြီးဖတ်ပါ",
          },
          {
            name: "ခေါင်းစီး",
            descriptionText:
              "နာကျင်မှုကိုယ်တိုင်က ဝေဒနာအများကြီးဖြစ်နိုင်ပေမယ့် အဓိကအကြောင်းအရင်းကတော့ နာကျင်မှုပဲ၊ ဒါပေမယ့် ကြီးကြီးမားမား နာကျင်ကိုက်ခဲမှုလိုမျိုး ဝေဒနာတစ်ခုလို ကျရောက်ဖို့ အချိန်ပေးပါ။ ယုတ်စွအဆုံး ",
            btnlabel: "ပိုပြီးဖတ်ပါ",
          },
          {
            name: "ခေါင်းစီး",
            descriptionText:
              "နာကျင်မှုကိုယ်တိုင်က ဝေဒနာအများကြီးဖြစ်နိုင်ပေမယ့် အဓိကအကြောင်းအရင်းကတော့ နာကျင်မှုပဲ၊ ဒါပေမယ့် ကြီးကြီးမားမား နာကျင်ကိုက်ခဲမှုလိုမျိုး ဝေဒနာတစ်ခုလို ကျရောက်ဖို့ အချိန်ပေးပါ။ ယုတ်စွအဆုံး ",
            btnlabel: "ပိုပြီးဖတ်ပါ",
          },
          {
            name: "ခေါင်းစီး",
            descriptionText:
              "နာကျင်မှုကိုယ်တိုင်က ဝေဒနာအများကြီးဖြစ်နိုင်ပေမယ့် အဓိကအကြောင်းအရင်းကတော့ နာကျင်မှုပဲ၊ ဒါပေမယ့် ကြီးကြီးမားမား နာကျင်ကိုက်ခဲမှုလိုမျိုး ဝေဒနာတစ်ခုလို ကျရောက်ဖို့ အချိန်ပေးပါ။ ယုတ်စွအဆုံး ",
            btnlabel: "ပိုပြီးဖတ်ပါ",
          },
        ],
        title: ["ကျွန်တော်တို့ရဲ့", <br />, "ကျွမ်းကျင်မှု"],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        data: [
          {
            name: "見出し",
            descriptionText:
              "痛み自体はたくさんの痛みかもしれませんが、主な理由は痛みですが、私はいくつかの大きな痛みや痛みのようにそれに陥る時間を与えます。 最小限のことをするために、達成するためにそれからの目的を利用することを除いて、私たちの何が労働の学校を行使するか。",
            btnlabel: "続きを読む",
          },
          {
            name: "見出し",
            descriptionText:
              "痛み自体はたくさんの痛みかもしれませんが、主な理由は痛みですが、私はいくつかの大きな痛みや痛みのようにそれに陥る時間を与えます。 最小限のことをするために、達成するためにそれからの目的を利用することを除いて、私たちの何が労働の学校を行使するか。",
            btnlabel: "続きを読む",
          },
          {
            name: "見出し",
            descriptionText:
              "痛み自体はたくさんの痛みかもしれませんが、主な理由は痛みですが、私はいくつかの大きな痛みや痛みのようにそれに陥る時間を与えます。 最小限のことをするために、達成するためにそれからの目的を利用することを除いて、私たちの何が労働の学校を行使するか。",
            btnlabel: "続きを読む",
          },
          {
            name: "見出し",
            descriptionText:
              "痛み自体はたくさんの痛みかもしれませんが、主な理由は痛みですが、私はいくつかの大きな痛みや痛みのようにそれに陥る時間を与えます。 最小限のことをするために、達成するためにそれからの目的を利用することを除いて、私たちの何が労働の学校を行使するか。",
            btnlabel: "続きを読む",
          },
          {
            name: "見出し",
            descriptionText:
              "痛み自体はたくさんの痛みかもしれませんが、主な理由は痛みですが、私はいくつかの大きな痛みや痛みのようにそれに陥る時間を与えます。 最小限のことをするために、達成するためにそれからの目的を利用することを除いて、私たちの何が労働の学校を行使するか。",
            btnlabel: "続きを読む",
          },
        ],
        title: ["私たちの", <br />, "専門知識"],
      };
      return japaneseText;
    default:
      const dummy = {
        data: [
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
          {
            name: "Heading",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            btnlabel: "READ MORE",
          },
        ],
        title: ["Our", <br />, "Expertise"],
      };
      return dummy;
  }
};

export default {
  title: 'Components/UI components/Cards/Parallax cards',
  argTypes: {
    locale: {
      name: 'Locale',
      control: { type: 'select', options: ['english', 'ukrainian', 'arabic', 'burmese', 'japanese'] },
    },
  },
  args: {
    locale: 'english',
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Parallax Cards</h1>

              <p>The Parallax Cards component defines a card of information data with some items- Title, Paragraph, and CTA Link.</p>

              <h3>Overview</h3>

              <p>Parallax cards consist of textual and imagery sections. While scrolling through the page on desktops, the text part scrolls at a normal speed and the image moves at a greater velocity, creating a parallax effect. The image can have a hover effect, sliding out the foreground picture and revealing the background image or video.</p>

              <h4>When to use:</h4>

              <p>Can be used for a set of short bullet points accompanied with some imagery to provide an immersive reading experience for users.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>The Parallax cards are usually used inside the grid to manage the different sizes and card orientations. They can also be accompanied by additional simple text elements (title, description) and provide visual guide rails for individual cards.</p>

              <p>On small screens, the widget collapses to the Carousel.</p>

              <h3>Content</h3>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p><strong>Default:</strong> The Image is placed in either part of the grid and the Title, Paragraph, and CTA Link in the other part. As we scroll the page, the image remains constant, while the contents move slightly up or down depending on the direction of the scrolling. The CTA link is expandable.</p>

              <h4>Parallax cards</h4>

              <Canvas>
              <Story name="Parallax cards">
                {(args, { globals: { locale } }) => {
                  const caption = getCaptionForLocale(locale);
                  return (
                    <ParallaxCards
                      alt={"feature card"}
                      data={caption.data}
                      title={caption.title}
                    ></ParallaxCards>
                  );
                }}
              </Story>
            </Canvas>

              <h3>Usage</h3>

              <ul>
                <li>Copy the HTML from the HTML Tab and also include the CSS and JS files.</li>
                <li>Make sure to remove swiper-slider-0 swiper-initialized swiper-horizontal swiper-pointer-events classes, remove ID and aria-label attributes as these are generated by the Swiper library.</li>
                <li>Initialize the parallaxEffect by calling <code>parallaxEffect('.parallax-card', ['.parallax-card__image', '.parallax-card__content'], 'top center', 'bottom+=85 center', 'vertical', 'desktop', 'percent')</code> and swiper by calling <code>swiper('.parallax__content')</code> function on load.</li>
                <li>Include Swiper (<a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a>) and GSAP (<a href="https://greensock.com/docs/v3/Installation">https://greensock.com/docs/v3/Installation</a>) libraries for parallax (include gsap, ScrollTrigger, and EasePack) and slider in your HTML file.</li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Parallax-documentation">this document</a> for Parallax integration & options.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from:</p>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/parallax-cards.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/parallax-cards.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/parallax-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/parallax-card.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/swiper.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/swiper.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/parallax.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/parallax.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/smartresize.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/smartresize.min.js</a></li>
              </ul>

              <h4>3rd Party library dependencies:</h4>

              <ul>
                <li><a href="https://swiperjs.com/get-started">Swiper</a></li>
                <li><a href="https://greensock.com/docs/v3/Installation">GSAP</a></li>
              </ul>

              <h3>Interactions</h3>

              <ul>
                <li>While scrolling the page, the contents of the card move to give a 3D effect.</li>
                <li>By clicking on the CTA link, the page is redirected to the detailed page.</li>
              </ul>

              

              

            </>
        )
    }
}
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <ParallaxCards
    alt={"feature card"}
    data={caption.data}
    title={caption.title}
  ></ParallaxCards>
  );
}

export const ParallaxCardsStory = Template.bind({});
ParallaxCardsStory.storyName = "Parallax cards";
ParallaxCardsStory.argTypes = {
  locale: {table: {disable: true}}
}