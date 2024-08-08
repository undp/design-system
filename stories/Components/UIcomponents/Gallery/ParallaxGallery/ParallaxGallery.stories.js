import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { ParallaxGallery } from "./ParallaxGallery";
import galleryImg1 from "../../../../assets/images/parallax-gallery-img1.jpg";
import galleryImg2 from "../../../../assets/images/parallax-gallery-img2.jpg";
import galleryImg3 from "../../../../assets/images/parallax-gallery-img3.jpg";
import galleryImg4 from "../../../../assets/images/parallax-gallery-img4.jpg";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        titleText: "UNDP Hope",
        descText:
          "UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities and build resilience in order to sustain development results.",
        buttonText: "Read More",
        galleryimg1: galleryImg1,
        galleryimg2: galleryImg2,
        galleryimg3: galleryImg3,
        galleryimg4: galleryImg4,
      };
      return engText;
    case "ukrainian":
      const ukText = {
        titleText: "ПРООН",
        descText:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
        buttonText: "ЧИТАТИ ДАЛІ",
        galleryimg1: galleryImg1,
        galleryimg2: galleryImg2,
        galleryimg3: galleryImg3,
        galleryimg4: galleryImg4,
      };
      return ukText;
    case "arabic":
      const arabicText = {
        titleText: "برنامج الأمم المتحدة الإنمائي الأمل",
        descText:
          "يعمل برنامج الأمم المتحدة الإنمائي في حوالي 170 دولة وإقليم ، للمساعدة في تحقيق القضاء على الفقر ، والحد من عدم المساواة والإقصاء. نحن نساعد البلدان على تطوير السياسات ومهارات القيادة وقدرات الشراكة والقدرات المؤسسية وبناء المرونة من أجل الحفاظ على نتائج التنمية.",
        buttonText: "اقرأ أكثر",
        galleryimg1: galleryImg1,
        galleryimg2: galleryImg2,
        galleryimg3: galleryImg3,
        galleryimg4: galleryImg4,
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        titleText: "UNDP မျှော်လင့်ချက်",
        descText:
          "UNDP သည် နိုင်ငံနှင့် နယ်မြေပေါင်း ၁၇၀ ခန့်တွင် လုပ်ဆောင်နေပြီး ဆင်းရဲမွဲတေမှု ပပျောက်ရေးနှင့် မညီမျှမှုများ လျှော့ချရေးနှင့် ချန်လှပ်ထားမှုတို့ကို လျှော့ချရန် ကူညီပေးသည်။ မူဝါဒများ၊ ခေါင်းဆောင်မှုစွမ်းရည်၊ မိတ်ဖက်စွမ်းရည်များ၊ အဖွဲ့အစည်းဆိုင်ရာ စွမ်းဆောင်ရည်များနှင့် ဖွံ့ဖြိုးတိုးတက်မှုရလဒ်များကို ရေရှည်တည်တံ့စေရန်အတွက် နိုင်ငံများကို ဖွံ့ဖြိုးတိုးတက်စေရန် ကျွန်ုပ်တို့မှ ကူညီပါသည်။",
        buttonText: "ပိုပြီးဖတ်ပါ",
        galleryimg1: galleryImg1,
        galleryimg2: galleryImg2,
        galleryimg3: galleryImg3,
        galleryimg4: galleryImg4,
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        titleText: "UNDPの希望",
        descText:
          "UNDPは約170の国と地域で活動しており、貧困の撲滅と不平等と排除の削減を支援しています。私たちは、開発成果を維持するために、各国が政策、リーダーシップスキル、パートナー能力、制度的能力を開発し、レジリエンスを構築するのを支援します。",
        buttonText: "続きを読む",
        galleryimg1: galleryImg1,
        galleryimg2: galleryImg2,
        galleryimg3: galleryImg3,
        galleryimg4: galleryImg4,
      };
      return japaneseText;
    default:
      return {
        titleText: "UNDP Hope",
        descText:
          "UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities and build resilience in order to sustain development results.",
        buttonText: "Read More",
        galleryimg1: galleryImg1,
        galleryimg2: galleryImg2,
        galleryimg3: galleryImg3,
        galleryimg4: galleryImg4,
      };
  }
};

export default {
  title: "Components/UI components/Gallery/Parallax gallery",
  argTypes: {
    Background: {
      options: ["Default", "Gray"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Background: "Default",
  },
}

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return <ParallaxGallery data={caption} />;
};

export const ParallaxGalleryBind = Template.bind({});
ImageCarousel.args = {};
ImageCarousel.parameters = {
  docs: {
    page: () => (
      <>
        <h1>Parallax Gallery</h1>

        <h3>Overview</h3>

        <p>
          The Parallax Gallery is a trend where the images move at a different speed than the content.
        </p>

        <h4>When to use:</h4>

        <p>To create engaging and interactive content.</p>

        <h4>Formatting</h4>

        <h5>Default</h5>

        <p>It consists of a gallery of images, descriptions, and CTA links.</p>

        <h5>Content</h5>

        <p>Parallax Gallery has Default or Gray backgrounds.</p>

        <h4>Behaviors</h4>

        <h5>States</h5>

        <p>
          There are two states: Default and Mobile.
        </p>

        <ol>
          <li>
            <strong>Default</strong>
            <ul>
              <li>Default background:</li>
              <li>Gray background:</li>
            </ul>
          </li>
          <li>
            <strong>Mobile</strong>
            <ul>
              <li>Default background:</li>
              <li>Gray background:</li>
            </ul>
          </li>
        </ol>

        <h3>Usage:</h3>

        <ul>
          <li>Copy the HTML from the HTML Tab of canvas and include CSS and JS in ‘CSS and JS References’ section.</li>
          <li>Initialize the parallaxEffect by calling parallaxEffect('.parallax-gallery-images', '.column', 'top center', 'bottom+=15% center', 'vertical', 'all'); function in your JS file.</li>
          <li>Refer <a href="https://github.com/undp/design-system/wiki/Parallax-documentation">this document</a> for Parallax integration & options</li>
        </ul>

        <h4>CSS and JS References</h4>

        <h5>CSS:</h5>

        <p>Add the base layout style from</p>

        <ul>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/parallax-gallery.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/parallax-gallery.min.css</a></li>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
        </ul>

        <p>Following external libraries need to be included first:</p>

        <ul>
          <li>GSAP core library</li>
          <li>GSAP ScrollTrigger plugin</li>
          <li>GSAP EasePack plugin</li>
        </ul>

        <h5>JS:</h5>

        <ul>
          <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/parallax.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/parallax.min.js</a></li>
        </ul>

        <h4>Interactions</h4>

        <p>On the opening of the page and scrolling, images move.</p>

        <h4>Changelog</h4>

        <p>1.0 — Released component</p>
      </>
    ),
  },
};
