import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { CountryCardHero } from "./PageHeroCards";
import field_2 from "../../../../assets/images/field_2.jpg";
import field from "../../../../assets/images/field.jpg";
import garden from "../../../../assets/images/garden.jpg";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        countrydata: [
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "",
            imageback: field,
          },
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "large",
            imageback: garden,
          },
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "large",
            imageback: garden,
          },
        ],
        title: "Country Level Hero Headline",
        subtitle: "Re-imagining Life in a Post-pandemic World",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        countrydata: [
          {
            name: "Програма ПРООН із підвищення стійкості та відновлення",
            btnlabel: "ЧИТАТИ ДАЛІ",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "Програма ПРООН із підвищення стійкості та відновлення",
            btnlabel: "ЧИТАТИ ДАЛІ",
            link: "#",
            size: "",
            imageback: field,
          },
          {
            name: "Програма ПРООН із підвищення стійкості та відновлення",
            btnlabel: "ЧИТАТИ ДАЛІ",
            link: "#",
            size: "large",
            imageback: garden,
          },
          {
            name: "Програма ПРООН із підвищення стійкості та відновлення",
            btnlabel: "ЧИТАТИ ДАЛІ",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "Програма ПРООН із підвищення стійкості та відновлення",
            btnlabel: "ЧИТАТИ ДАЛІ",
            link: "#",
            size: "large",
            imageback: garden,
          },
        ],
        title: "«НІХТО НЕ ЗЛЯКАВСЯ ВІДПОВІДАЛЬНОСТІ»",
        subtitle: "Незважаючи на небезпеку, українські енергетики продовжують працювати",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        countrydata: [
          {
            name: "تكسب النساء 77 سنتًا فقط مقابل كل دولار يتقاضاه الرجل مقابل نفس العمل",
            btnlabel: "يكتشف",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "تكسب النساء 77 سنتًا فقط مقابل كل دولار يتقاضاه الرجل مقابل نفس العمل",
            btnlabel: "يكتشف",
            link: "#",
            size: "",
            imageback: field,
          },
          {
            name: "تكسب النساء 77 سنتًا فقط مقابل كل دولار يتقاضاه الرجل مقابل نفس العمل",
            btnlabel: "يكتشف",
            link: "#",
            size: "large",
            imageback: garden,
          },
          {
            name: "تكسب النساء 77 سنتًا فقط مقابل كل دولار يتقاضاه الرجل مقابل نفس العمل",
            btnlabel: "يكتشف",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "تكسب النساء 77 سنتًا فقط مقابل كل دولار يتقاضاه الرجل مقابل نفس العمل",
            btnlabel: "يكتشف",
            link: "#",
            size: "large",
            imageback: garden,
          },
        ],
        title: "العنوان الرئيسي للبطل على مستوى الدولة",
        subtitle: "إعادة تخيل الحياة في عالم ما بعد الجائحة",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        countrydata: [
          {
            name: "အမျိုးသမီးများသည်တူညီသောအလုပ်အတွက်အမျိုးသားများရရှိသောတစ်ဒေါ်လာလျှင် ၇၇ ဆင့်သာရရှိသည်",
            btnlabel: "စူးစမ်းသည်",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "အမျိုးသမီးများသည်တူညီသောအလုပ်အတွက်အမျိုးသားများရရှိသောတစ်ဒေါ်လာလျှင် ၇၇ ဆင့်သာရရှိသည်",
            btnlabel: "စူးစမ်းသည်",
            link: "#",
            size: "",
            imageback: field,
          },
          {
            name: "အမျိုးသမီးများသည်တူညီသောအလုပ်အတွက်အမျိုးသားများရရှိသောတစ်ဒေါ်လာလျှင် ၇၇ ဆင့်သာရရှိသည်",
            btnlabel: "စူးစမ်းသည်",
            link: "#",
            size: "large",
            imageback: garden,
          },
          {
            name: "အမျိုးသမီးများသည်တူညီသောအလုပ်အတွက်အမျိုးသားများရရှိသောတစ်ဒေါ်လာလျှင် ၇၇ ဆင့်သာရရှိသည်",
            btnlabel: "စူးစမ်းသည်",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "အမျိုးသမီးများသည်တူညီသောအလုပ်အတွက်အမျိုးသားများရရှိသောတစ်ဒေါ်လာလျှင် ၇၇ ဆင့်သာရရှိသည်",
            btnlabel: "စူးစမ်းသည်",
            link: "#",
            size: "large",
            imageback: garden,
          },
        ],
        title: "နိုင်ငံအဆင့်သူရဲကောင်းခေါင်းစဉ်",
        subtitle: "ကပ်ရောဂါအပြီးတွင်ကမ္ဘာတစ်ခု၏ဘ ၀ ကိုပြန်လည်စိတ်ကူးယဉ်ပါ",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        countrydata: [
          {
            name: "女性は男性が同じ仕事のために得る1ドルにつき77セントしか稼ぎません",
            btnlabel: "見る",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "女性は男性が同じ仕事のために得る1ドルにつき77セントしか稼ぎません",
            btnlabel: "見る",
            link: "#",
            size: "",
            imageback: field,
          },
          {
            name: "女性は男性が同じ仕事のために得る1ドルにつき77セントしか稼ぎません",
            btnlabel: "見る",
            link: "#",
            size: "large",
            imageback: garden,
          },
          {
            name: "女性は男性が同じ仕事のために得る1ドルにつき77セントしか稼ぎません",
            btnlabel: "見る",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "女性は男性が同じ仕事のために得る1ドルにつき77セントしか稼ぎません",
            btnlabel: "見る",
            link: "#",
            size: "large",
            imageback: garden,
          },
        ],
        title: "国レベルのヒーローの見出し",
        subtitle: "パンデミック後の世界での生活を再考する",
      };
      return japaneseText;
    default:
      const dummy = {
        countrydata: [
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "",
            imageback: field,
          },
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "large",
            imageback: garden,
          },
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "",
            imageback: field_2,
          },
          {
            name: "Women earn only 77 cents for every dollar that men get for the same work",
            btnlabel: "EXPLORE",
            link: "#",
            size: "large",
            imageback: garden,
          },
        ],
        title: "Country Level Hero Headline",
        subtitle: "Re-imagining Life in a Post-pandemic World",
      };
      return dummy;
  }
};

export default {
  title: "Components/UI components/Hero/Page/Page hero - cards",
  component: {CountryCardHero},
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Page hero - Cards</h1>

              <p>The Page Hero Cards are cards with text and images.</p>

              <h3>Overview</h3>

              <p>The Page Hero Card component is a multi-usage component that creates boxes that are usually teasing some kind of content like Image, Text, Subtitle, and Breadcrumb. Animation and country card molecules are used for creating this card.</p>

              <h4>When to use:</h4>

              <p>When the website needs to grab the user's attention to a particular page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title, subtitle, and image.</p>

              <h3>Content</h3>

              <p>The Page Hero Card consists of text in the topmost part of the card and images in the bottom part of the card.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There is only one default state for the page hero card.</p>

              <Canvas>
                <Story
                  name="Page hero - cards"
                >
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <CountryCardHero
                        data={caption.countrydata}
                        title={caption.title}
                        subtitle={caption.subtitle}
                      ></CountryCardHero>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                <li>Copy HTML from the HTML tab of canvas.</li>
                <li>Make sure to remove <code>swiper-slider-0 swiper-initialized swiper-horizontal swiper-pointer-events</code> classes, remove ID and <code>aria-label</code> attribute.</li>
                <li>Include CSS and JS files listed below.</li>
                <li>Include Swiper library from here: <a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a> in your HTML page.</li>
                {/* <li>Initialize swiper by calling <code>swiper('.pagehero-cards-items')</code> function.</li> */}
                {/* <li>If you are using left-to-right animation, please add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code>.</li> */}
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
              </ul>
              <h4>Method 1: Automatic Initialization (Recommended)</h4>
              <ul>
                <li>Include Swiper library from <a href="https://swiperjs.com/get-started">here</a> in your HTML page.</li>
                <li>Include the component initializer script:
                  <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/ext-comp-loader.min.js"&gt;&lt;/script&gt;</code>
                </li>
                <li>Add the required data attributes to your hero cards element:
                  <code>data-undpds-component="swiper" data-selector=".pagehero-cards-items" data-arrows-selector="false"</code>
                </li>
                <li>The swiper will initialize automatically when the page loads - no JavaScript calls required!</li>
              </ul>

              <h4>Method 2: Manual Initialization (Traditional)</h4>
              <ul>
                <li>Include Swiper library from <a href="https://swiperjs.com/get-started">here</a> in your HTML page.</li>
                <li>Include <code>swiper.min.js</code> in your HTML.</li>
                <li>Call the initialization function directly in your JavaScript:
                  <code>swiper('.pagehero-cards-items', false);</code>
                </li>
              </ul>
              <p>Additional options:</p>
              <ul>
                <li>If you are using left-to-right animation, please add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code>.</li>
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
              </ul>    
              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from:</p>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/pagehero-cards.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/pagehero-cards.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-card.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smartresize.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smartresize.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/ext-comp-loader.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/ext-comp-loader.min.js</a> (for automatic initialization)</li>
              </ul>

              <h3>Interactions</h3>

              <ul>
                <li>When the page is opened, the text appears over the image.</li>
                <li>When clicked on the image, the image lifts up a bit.</li>
              </ul>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <CountryCardHero
      data={caption.countrydata}
      title={caption.title}
      subtitle={caption.subtitle}
    ></CountryCardHero>
  );
}

export const PageHeroCardsStory = Template.bind({});
PageHeroCardsStory.storyName = "Page Hero - Cards";
