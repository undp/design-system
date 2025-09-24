import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { ParallaxGallery } from "./ParallaxGallery";
import galleryImg1 from "../../../../assets/images/parallax-gallery-img1.jpg";
import galleryImg2 from "../../../../assets/images/parallax-gallery-img2.jpg";
import galleryImg3 from "../../../../assets/images/parallax-gallery-img3.jpg";
import galleryImg4 from "../../../../assets/images/parallax-gallery-img4.jpg";

const getCaptionForLocale = (locale) => {
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
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Parallax Gallery</h1>

              <p>The Parallax Gallery is a trend where the images move at a different speed than the content.</p>

              <h3>Overview</h3>

              <p>The Parallax Gallery component is created for showing gallery, designation, and images in a particular section. It is a multi-usage component that creates teasing kinds of content.</p>

              <h3>When to use:</h3>

              <p>To create engaging and interactive content.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a gallery of images, descriptions, and CTA links.</p>

              <h3>Content</h3>

              <p>Parallax Gallery has Default or Gray backgrounds.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states: Default and Mobile.</p>

              <ul>
                <li><strong>Default</strong>
                  <ul>
                    <li>Default background:</li>
                    <li>Gray background:</li>
                  </ul>
                </li>
                <li><strong>Mobile</strong>
                  <ul>
                    <li>Default background:</li>
                    <li>Gray background:</li>
                  </ul>
                </li>
              </ul>

              <Canvas>
                <Story
                  name="Parallax gallery"
                >
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <ParallaxGallery
                        titleText={caption.titleText}
                        descText={caption.descText}
                        buttonText={caption.buttonText}
                        galleryimg1={caption.galleryimg1}
                        galleryimg2={caption.galleryimg2}
                        galleryimg3={caption.galleryimg3}
                        galleryimg4={caption.galleryimg4}
                        {...args}
                      ></ParallaxGallery>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                <li>Copy the HTML from the HTML Tab of canvas and include CSS and JS in the ‘CSS and JS References’ section.</li>
                {/* <li>Initialize the parallaxEffect by calling <code>parallaxEffect('.parallax-gallery-images', '.column', 'top center', 'bottom+=15% center', 'vertical', 'all');</code> function in your JS file.</li> */}
                <li>Refer to <a href="https://github.com/undp/design-system/wiki/Parallax-documentation">this document</a> for Parallax integration & options.</li>
              </ul>
              <h4>Method 1: Automatic Initialization (Recommended)</h4>
              <ul>
                <li>Include the component initializer script:
                  <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.min.js"&gt;&lt;/script&gt;</code>
                </li>
                <li>Add the required data attributes to your parallax gallery element:
                  <code>data-undpds-component="parallax"</code> and <code>data-options</code> with a JSON configuration.
                </li>
                <li>The data-options should contain values for: triggerElement, targetSelector, triggerHook, endTriggerHook, direction, and breakpoints.</li>
                <li>The parallax effect will initialize automatically when the page loads - no JavaScript calls required!</li>
                
              </ul>
              <p>See the component code for an example of the data-options format.</p>
              <h4>Method 2: Manual Initialization (Traditional)</h4>
              <ul>
                <li>Include <code>parallax.min.js</code> in your HTML.</li>
                <li>Call the initialization function directly in your JavaScript:
                  <code>parallaxEffect('.parallax-gallery-images', '.column', 'top center', 'bottom+=15% center', 'vertical', 'all');</code>
                </li>
              </ul>


              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
                  
              <p>Add the base layout style from</p>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">Base Layout Style</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/parallax-gallery.min.css">Parallax Gallery CSS</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css">CTA Link CSS</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/parallax.min.js">Parallax JS</a></li>
              </ul>

              <p>Following external libraries need to be included first:</p>
              <ul>
                <li>GSAP core library</li>
                <li>GSAP ScrollTrigger plugin</li>
                <li>GSAP EasePack plugin</li>
              </ul>

              <h3>Interactions</h3>

              <p>On the opening of the page and scrolling, images move.</p>

              

              

            </>
        )
    }
}
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <ParallaxGallery
      titleText={caption.titleText}
      descText={caption.descText}
      buttonText={caption.buttonText}
      galleryimg1={caption.galleryimg1}
      galleryimg2={caption.galleryimg2}
      galleryimg3={caption.galleryimg3}
      galleryimg4={caption.galleryimg4}
      {...args}
    ></ParallaxGallery>
  );
}

export const ParallaxGalleryStory = Template.bind({});
ParallaxGalleryStory.storyName = "Parallax Gallery";