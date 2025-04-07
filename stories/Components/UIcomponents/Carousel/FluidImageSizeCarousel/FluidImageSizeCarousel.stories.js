import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { FluidImageSizeCarousel } from "./FluidImageSizeCarousel";
import fluidCarouselImg from "../../../../assets/images/fluid-carousel-img.jpg";

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
        ],
      };
      return engText.data;
    case "ukrainian":
      const ukText = {
        data: [
          {
            slideImage: "https://www.undp.org/sites/g/files/zskgke326/files/2022-06/51246484463_e70580c1d1_k%20%281%29.jpg",
            tagtext: "Блог",
            titleText:
              "Війна в Україні та її вплив на місцеву і глобальну продовольчу безпеку",
            descText:
              "Висновки початкового дослідження та картування рішень, підготовлені Лабораторією інноваційного розвитку ПРООН в Україні",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
          {
            slideImage: "https://www.undp.org/sites/g/files/zskgke326/files/2022-06/51246484463_e70580c1d1_k%20%281%29.jpg",
            tagtext: "Блог",
            titleText:
              "Війна в Україні та її вплив на місцеву і глобальну продовольчу безпеку",
            descText:
              "Висновки початкового дослідження та картування рішень, підготовлені Лабораторією інноваційного розвитку ПРООН в Україні",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
          {
            slideImage: "https://www.undp.org/sites/g/files/zskgke326/files/2022-06/51246484463_e70580c1d1_k%20%281%29.jpg",
            tagtext: "Блог",
            titleText:
              "Війна в Україні та її вплив на місцеву і глобальну продовольчу безпеку",
            descText:
              "Висновки початкового дослідження та картування рішень, підготовлені Лабораторією інноваційного розвитку ПРООН в Україні",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
        ],
      };
      return ukText.data;
    case "arabic":
      const arabicText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "مشاركة مدونة",
            titleText: "نقاط الدخول والخروج: التطرف العنيف في جنوب شرق آسيا",
            descText: "تلخص هذه الدراسة أربع أوراق تكميلية متعمقة تستكشف ...",
            buttonText: "اقرأ أكثر",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "مشاركة مدونة",
            titleText: "نقاط الدخول والخروج: التطرف العنيف في جنوب شرق آسيا",
            descText: "تلخص هذه الدراسة أربع أوراق تكميلية متعمقة تستكشف ...",
            buttonText: "اقرأ أكثر",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "مشاركة مدونة",
            titleText: "نقاط الدخول والخروج: التطرف العنيف في جنوب شرق آسيا",
            descText: "تلخص هذه الدراسة أربع أوراق تكميلية متعمقة تستكشف ...",
            buttonText: "اقرأ أكثر",
          },
        ],
      };
      return arabicText.data;
    case "burmese":
      const burmeseText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "ဘလော့ပို့စ်",
            titleText:
              "အဝင်နှင့်အထွက်အချက်များ- အရှေ့တောင် အာရှတွင် ပြင်းထန်သော အစွန်းရောက်ဝါဒ",
            descText:
              "ဤလေ့လာမှုသည် ဒေသန္တရပုံစံကို စူးစမ်းလေ့လာသည့် အသေးစိပ် လေးနက်သော စာတမ်းလေးစောင်ကို အကျဉ်းချုပ်ဖော်ပြထားသည်...",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "ဘလော့ပို့စ်",
            titleText:
              "အဝင်နှင့်အထွက်အချက်များ- အရှေ့တောင် အာရှတွင် ပြင်းထန်သော အစွန်းရောက်ဝါဒ",
            descText:
              "ဤလေ့လာမှုသည် ဒေသန္တရပုံစံကို စူးစမ်းလေ့လာသည့် အသေးစိပ် လေးနက်သော စာတမ်းလေးစောင်ကို အကျဉ်းချုပ်ဖော်ပြထားသည်...",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "ဘလော့ပို့စ်",
            titleText:
              "အဝင်နှင့်အထွက်အချက်များ- အရှေ့တောင် အာရှတွင် ပြင်းထန်သော အစွန်းရောက်ဝါဒ",
            descText:
              "ဤလေ့လာမှုသည် ဒေသန္တရပုံစံကို စူးစမ်းလေ့လာသည့် အသေးစိပ် လေးနက်သော စာတမ်းလေးစောင်ကို အကျဉ်းချုပ်ဖော်ပြထားသည်...",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
        ],
      };
      return burmeseText.data;
    case "japanese":
      const japaneseText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "ブログ投稿",
            titleText: "入口と出口：東南アジアにおける暴力的過激主義",
            descText:
              "この調査では、ローカライズされたものを調査する4つの補足的な詳細な論文を要約しています…",
            buttonText: "続きを読む",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "ブログ投稿",
            titleText: "入口と出口：東南アジアにおける暴力的過激主義",
            descText:
              "この調査では、ローカライズされたものを調査する4つの補足的な詳細な論文を要約しています…",
            buttonText: "続きを読む",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "ブログ投稿",
            titleText: "入口と出口：東南アジアにおける暴力的過激主義",
            descText:
              "この調査では、ローカライズされたものを調査する4つの補足的な詳細な論文を要約しています…",
            buttonText: "続きを読む",
          },
        ],
      };
      return japaneseText.data;
    default:
      const dummy = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
        ],
      };
      return dummy.data;
  }
};

export default {
  title: 'Components/UI components/Carousel/Fluid carousel',
  component: FluidImageSizeCarousel,
  parameters: {
    docs: {
        page: () => (
            <>  
              <h1>Carousel - Fluid Image Size Carousel</h1>

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

              <p>Fluid Image Size Carousel Component:</p>

              <ul>
                <li>Default state</li>
                <li>Tablet</li>
              </ul>

              <Canvas>
                <Story name="Fluid carousel">
                  {(args, { globals: { locale } }) => {
                    const caption = statsArray(locale);
                    return <FluidImageSizeCarousel data={caption}></FluidImageSizeCarousel>;
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                <li>Copy HTML from the HTML tab of canvas.</li>
                <li>Include Swiper library from <a href="https://swiperjs.com/get-started">here</a> in your HTML page.</li>
                <li>Include the CSS files listed below.</li>
                <li>Choose one of the following initialization methods:</li>
                {/* <li>If you use fixed image size carousel, include <code>fluid-image-size-carousel.min.css</code> and initialize carousel by calling <code>swiper('.fixed-carousel', '.fixed-carousel__button-wrap');</code> functions.</li>
                <li>If you use Fluid image size carousel, include <code>fixed-size-carousel.min.css</code> and initialize carousel by calling <code>swiper('.fluid-carousel', '.slide-content');</code> functions.</li>
                <li>If you use Image only carousel, include <code>image-only-carousel.min.css</code> and initialize the carousel by calling <code>swiper('.image-carousel', '.slider-slide');</code> functions.</li>
                <li>If you want to add left-right animation, add <code>data-viewport="true"</code> attribute to the HTML element you want to animate and include <code>viewport.min.js</code> file.</li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li> */}
              </ul>
              
              <h4>Method 1: Automatic Initialization (Recommended)</h4>
              <ul>
                <li>Include the component initializer script:
                  <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js"&gt;&lt;/script&gt;</code>
                </li>
                <li>Add the required data attributes to your carousel element:
                  <code>data-undpds-component="swiper" data-selector=".fluid-carousel" data-arrows-selector=".slide-content"</code>
                </li>
                <li>The carousel will initialize automatically when the page loads - no JavaScript calls required!</li>
              </ul>


              <h4>Method 2: Manual Initialization (Traditional)</h4>
              <ul>
                <li>Include <code>swiper.min.js</code> in your HTML.</li>
                <li>Call the initialization function directly in your JavaScript:
                  <code>swiper('.fluid-carousel', '.slide-content');</code>
                </li>
              </ul>
              <p>Additional options:</p>
              <ul>
                <li>If you want to add left-right animation, add <code>data-viewport="true"</code> attribute to the HTML element you want to animate and include <code>viewport.min.js</code> file.</li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
              </ul>
              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/fluid-image-size-carousel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/fluid-image-size-carousel.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <p>3rd party libraries:</p>
              <ul>
                <li><a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a></li>
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
  return <FluidImageSizeCarousel data={caption}></FluidImageSizeCarousel>;
}

export const FluidCarouselStory = Template.bind({});
FluidCarouselStory.storyName = 'Fluid carousel';