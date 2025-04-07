import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { LightboxGallery } from "./LightboxGallery";
import galleryThum1 from "../../../../assets/images/parallax-gallery-thumb1.jpg";
import galleryImg1 from "../../../../assets/images/parallax-gallery-img1.jpg";
import galleryThum2 from "../../../../assets/images/parallax-gallery-thumb2.jpg";
import galleryImg2 from "../../../../assets/images/parallax-gallery-img2.jpg";
import galleryThum3 from "../../../../assets/images/parallax-gallery-thumb3.jpg";
import galleryImg3 from "../../../../assets/images/parallax-gallery-img3.jpg";
import galleryThum4 from "../../../../assets/images/parallax-gallery-thumb4.jpg";
import galleryImg4 from "../../../../assets/images/parallax-gallery-img4.jpg";
import galleryThum8 from "../../../../assets/images/parallax-gallery-thumb8.jpg";
import galleryImg8 from "../../../../assets/images/parallax-gallery-img8.jpg";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        titleText: "UNDP Hope",
        descText:
          "UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities and build resilience in order to sustain development results.",
        buttonText: "Read More",
        featureddata: [
          {
            gallerythum: galleryThum1,
            galleryimg: galleryImg1,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, . Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum3,
            galleryimg: galleryImg3,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum4,
            galleryimg: galleryImg4,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum8,
            galleryimg: galleryImg8,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus. Lorem ipsum",
          },
        ],
        headertext: ["Related", <br />, "Posts"],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        titleText: "ПРООН",
        descText:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
        buttonText: "ЧИТАТИ ДАЛІ",
        featureddata: [
          {
            gallerythum: galleryThum1,
            galleryimg: galleryImg1,
            label: ["ПРООН в Україні", <br />, <strong>ім'я прізвище</strong>],
            paragraph:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["ПРООН в Україні", <br />, <strong>ім'я прізвище</strong>],
            paragraph:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
          },
          {
            gallerythum: galleryThum3,
            galleryimg: galleryImg3,
            label: ["ПРООН в Україні", <br />, <strong>ім'я прізвище</strong>],
            paragraph:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
          },
          {
            gallerythum: galleryThum4,
            galleryimg: galleryImg4,
            label: ["ПРООН в Україні", <br />, <strong>ім'я прізвище</strong>],
            paragraph:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["ПРООН в Україні", <br />, <strong>ім'я прізвище</strong>],
            paragraph:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
          },
          {
            gallerythum: galleryThum8,
            galleryimg: galleryImg8,
            label: ["ПРООН в Україні", <br />, <strong>ім'я прізвище</strong>],
            paragraph:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
          },
        ],
        headertext: ["Схожі ", <br />, "публікації"],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        titleText: "برنامج الأمم المتحدة الإنمائي الأمل",
        descText:
          "يعمل برنامج الأمم المتحدة الإنمائي في حوالي 170 دولة وإقليم ، للمساعدة في تحقيق القضاء على الفقر ، والحد من عدم المساواة والإقصاء. نحن نساعد البلدان على تطوير السياسات ومهارات القيادة وقدرات الشراكة والقدرات المؤسسية وبناء المرونة من أجل الحفاظ على نتائج التنمية.",
        buttonText: "اقرأ أكثر",
        featureddata: [
          {
            gallerythum: galleryThum1,
            galleryimg: galleryImg1,
            label: [
              "برنامج الأمم المتحدة الإنمائي / أنغولا",
              <br />,
              <strong>جيروم بيل</strong>,
            ],
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Morbi lorem tortor، fermentum eu lorem at، venenatis malesuada laughter.",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: [
              "برنامج الأمم المتحدة الإنمائي / أنغولا",
              <br />,
              <strong>جيروم بيل</strong>,
            ],
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Morbi lorem tortor، fermentum eu  lorem at، venenatis malesuada laughter.",
          },
          {
            gallerythum: galleryThum3,
            galleryimg: galleryImg3,
            label: [
              "برنامج الأمم المتحدة الإنمائي / أنغولا",
              <br />,
              <strong>جيروم بيل</strong>,
            ],
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Morbi lorem tortor، fermentum eu lorem at، venenatis malesuada laughter.",
          },
          {
            gallerythum: galleryThum4,
            galleryimg: galleryImg4,
            label: [
              "برنامج الأمم المتحدة الإنمائي / أنغولا",
              <br />,
              <strong>جيروم بيل</strong>,
            ],
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Morbi lorem tortor، fermentum eu lorem at، venenatis malesuada laughter.",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: [
              "برنامج الأمم المتحدة الإنمائي / أنغولا",
              <br />,
              <strong>جيروم بيل</strong>,
            ],
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Morbi lorem tortor، fermentum eu lorem at، venenatis malesuada laughter.",
          },
          {
            gallerythum: galleryThum8,
            galleryimg: galleryImg8,
            label: [
              "برنامج الأمم المتحدة الإنمائي / أنغولا",
              <br />,
              <strong>جيروم بيل</strong>,
            ],
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Morbi lorem tortor، fermentum eu lorem at، venenatis malesuada laughter.",
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        titleText: "UNDP မျှော်လင့်ချက်",
        descText:
          "UNDP သည် နိုင်ငံနှင့် နယ်မြေပေါင်း ၁၇၀ ခန့်တွင် လုပ်ဆောင်နေပြီး ဆင်းရဲမွဲတေမှု ပပျောက်ရေးနှင့် မညီမျှမှုများ လျှော့ချရေးနှင့် ချန်လှပ်ထားမှုတို့ကို လျှော့ချရန် ကူညီပေးသည်။ မူဝါဒများ၊ ခေါင်းဆောင်မှုစွမ်းရည်၊ မိတ်ဖက်စွမ်းရည်များ၊ အဖွဲ့အစည်းဆိုင်ရာ စွမ်းဆောင်ရည်များနှင့် ဖွံ့ဖြိုးတိုးတက်မှုရလဒ်များကို ရေရှည်တည်တံ့စေရန်အတွက် နိုင်ငံများကို ဖွံ့ဖြိုးတိုးတက်စေရန် ကျွန်ုပ်တို့မှ ကူညီပါသည်။",
        buttonText: "ပိုပြီးဖတ်ပါ",
        featureddata: [
          {
            gallerythum: galleryThum1,
            galleryimg: galleryImg1,
            label: ["UNDP/အန်ဂိုလာ", <br />, <strong>ဂျရုမ်း ဘဲလ်</strong>],
            paragraph:
              "နာကျင်မှုကိုယ်တိုင်က နာကျင်ပေမယ့် အဓိက အာရုံစိုက်တာက ဖောက်သည်အပေါ်ပါ။ Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada ရယ်မောခြင်း။",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["UNDP/အန်ဂိုလာ", <br />, <strong>ဂျရုမ်း ဘဲလ်</strong>],
            paragraph:
              "နာကျင်မှုကိုယ်တိုင်က နာကျင်ပေမယ့် အဓိက အာရုံစိုက်တာက ဖောက်သည်အပေါ်ပါ။ Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada ရယ်မောခြင်း။",
          },
          {
            gallerythum: galleryThum3,
            galleryimg: galleryImg3,
            llabel: ["UNDP/အန်ဂိုလာ", <br />, <strong>ဂျရုမ်း ဘဲလ်</strong>],
            paragraph:
              "နာကျင်မှုကိုယ်တိုင်က နာကျင်ပေမယ့် အဓိက အာရုံစိုက်တာက ဖောက်သည်အပေါ်ပါ။ Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada ရယ်မောခြင်း။",
          },
          {
            gallerythum: galleryThum4,
            galleryimg: galleryImg4,
            label: ["UNDP/အန်ဂိုလာ", <br />, <strong>ဂျရုမ်း ဘဲလ်</strong>],
            paragraph:
              "နာကျင်မှုကိုယ်တိုင်က နာကျင်ပေမယ့် အဓိက အာရုံစိုက်တာက ဖောက်သည်အပေါ်ပါ။ Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada ရယ်မောခြင်း။",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["UNDP/အန်ဂိုလာ", <br />, <strong>ဂျရုမ်း ဘဲလ်</strong>],
            paragraph:
              "နာကျင်မှုကိုယ်တိုင်က နာကျင်ပေမယ့် အဓိက အာရုံစိုက်တာက ဖောက်သည်အပေါ်ပါ။ Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada ရယ်မောခြင်း။",
          },
          {
            gallerythum: galleryThum8,
            galleryimg: galleryImg8,
            label: ["UNDP/အန်ဂိုလာ", <br />, <strong>ဂျရုမ်း ဘဲလ်</strong>],
            paragraph:
              "နာကျင်မှုကိုယ်တိုင်က နာကျင်ပေမယ့် အဓိက အာရုံစိုက်တာက ဖောက်သည်အပေါ်ပါ။ Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada ရယ်မောခြင်း။",
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        titleText: "UNDPの希望",
        descText:
          "UNDPは約170の国と地域で活動しており、貧困の撲滅と不平等と排除の削減を支援しています。私たちは、開発成果を維持するために、各国が政策、リーダーシップスキル、パートナー能力、制度的能力を開発し、レジリエンスを構築するのを支援します。",
        buttonText: "続きを読む",
        featureddata: [
          {
            gallerythum: galleryThum1,
            galleryimg: galleryImg1,
            label: ["UNDP /アンゴラ", <br />, <strong>ジェロームベル</strong>],
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Morbi lorem tortor、fermentum eu lorem at、venenatismalesuadaの笑い声。",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["UNDP /アンゴラ", <br />, <strong>ジェロームベル</strong>],
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Morbi lorem tortor、fermentum eu lorem at、venenatismalesuadaの笑い声。",
          },
          {
            gallerythum: galleryThum3,
            galleryimg: galleryImg3,
            label: ["UNDP /アンゴラ", <br />, <strong>ジェロームベル</strong>],
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Morbi lorem tortor、fermentum eu lorem at、venenatismalesuadaの笑い声。",
          },
          {
            gallerythum: galleryThum4,
            galleryimg: galleryImg4,
            label: ["UNDP /アンゴラ", <br />, <strong>ジェロームベル</strong>],
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Morbi lorem tortor、fermentum eu lorem at、venenatismalesuadaの笑い声。",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["UNDP /アンゴラ", <br />, <strong>ジェロームベル</strong>],
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Morbi lorem tortor、fermentum eu lorem at、venenatismalesuadaの笑い声。",
          },
          {
            gallerythum: galleryThum8,
            galleryimg: galleryImg8,
            label: ["UNDP /アンゴラ", <br />, <strong>ジェロームベル</strong>],
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Morbi lorem tortor、fermentum eu lorem at、venenatismalesuadaの笑い声。",
          },
        ],
      };
      return japaneseText;
    default:
      return {
        titleText: "UNDP Hope",
        descText:
          "UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities and build resilience in order to sustain development results.",
        buttonText: "Read More",
        featureddata: [
          {
            gallerythum: galleryThum1,
            galleryimg: galleryImg1,
            label: ["UNDP/Angola", <br />, <strong>Jerome show</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum3,
            galleryimg: galleryImg3,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum4,
            galleryimg: galleryImg4,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum2,
            galleryimg: galleryImg2,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.",
          },
          {
            gallerythum: galleryThum8,
            galleryimg: galleryImg8,
            label: ["UNDP/Angola", <br />, <strong>Jerome Bell</strong>],
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus.fermentum eu lorem at, venenatis malesuada risus.",
          },
        ],
      };
  }
};

export default {
 title: "Components/UI components/Gallery/Lightbox gallery",
  component: LightboxGallery,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Lightbox Gallery</h1>
  
          <h3>Overview</h3>
  
          <p>
            The Lightbox Gallery displays images in the front darkening the rest
            of the webpage.
          </p>
  
          <h4>When to use:</h4>
  
          <p>To gain the attention of the user.</p>
  
          <h3>Formatting</h3>
  
          <h4>Default</h4>
  
          <p>
            It consists of two sections: text with CTA link section and Image
            section.
          </p>
  
          <h3>Content</h3>
  
          <h3>Behaviors</h3>
  
          <h4>States</h4>
  
          <p>
            There will be a set of 2-row images when clicked on a specific image
            then that image will be displayed in a popup view. The component is
            compatible with both mobile and tablet.
          </p>
  
          <p>View of a set of images in a row:</p>
  
          <p>When selected a specific image:</p>
  
          <Canvas>
            <Story name="Lightbox Gallery">
            {(args, { globals: { locale } }) => {
              const caption = getCaptionForLocale(locale);
              return (
                <LightboxGallery
                  titleText={caption.titleText}
                  descText={caption.descText}
                  buttonText={caption.buttonText}
                  data={caption.featureddata}
                  {...args}
                ></LightboxGallery>
              );
            }}
            </Story>
          </Canvas>

          <div>
            <h3>Usage:</h3>
  
            
          <ul>
            <li>Copy HTML from the HTML tab of the canvas.</li>
            <li>Include the CSS and JS files listed below.</li>
            <li>
                Refer{" "}
                <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">
                  this document
                </a>{" "}
                for Swiper integration & options
              </li>
            <li>Choose one of the following initialization methods:</li>
          </ul>

          

          <h4>Method 1: Automatic Initialization (Recommended)</h4>
          <ul>
            <li>Include the component initializer script:
              <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js"&gt;&lt;/script&gt;</code>
            </li>
            <li>Add the required data attribute to your lightbox gallery element:
              <code>data-undpds-component="lightbox-gallery"</code>
            </li>
            <li>The lightbox gallery will initialize automatically when the page loads - no JavaScript calls required!</li>
          </ul>
          <h4>Method 2: Manual Initialization (Traditional)</h4>
          <ul>
            <li>Include <code>lightbox-gallery.min.js</code> in your HTML.</li>
            <li>Call the initialization function directly in your JavaScript:
              <code>lightboxGallery();</code>
            </li>
          </ul>

            <h3>CSS and JS References</h3>
  
            <h4>CSS:</h4>
  
            <p>
              Add the base layout style from
              <ul>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">
                    base-minimal.min.css
                  </a>
                </li>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">
                    cta-link.min.css
                  </a>
                </li>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/frosted-background.min.css">
                    frosted-background.min.css
                  </a>
                </li>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-caption.min.css">
                    image-caption.min.css
                  </a>
                </li>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/lightbox.min.css">
                    lightbox.min.css
                  </a>
                </li>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/lightbox-gallery.min.css">
                    lightbox-gallery.min.css
                  </a>
                </li>
                <li>
                  <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">
                    swiper.min.css
                  </a>
                </li>
              </ul>
            </p>
  
            <h4>JS:</h4>
  
            <ul>
              <li>
                <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lightbox-gallery.min.js">
                  lightbox-gallery.min.js
                </a>
              </li>
              <li>
                <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js">
                  init.min.js
                </a> (for automatic initialization)
              </li>
            </ul>
  
            <h3>Interactions</h3>
  
            <ul>
              <li>By clicking on the image, it opens in the lightbox.</li>
              <li>By clicking on the close option, it can be closed.</li>
              <li>
                By swiping left/right or by using keyboard arrows, the images can
                be navigated.
              </li>
            </ul>
  
            <h3>Changelog</h3>
  
            <p>1.0 — Released component</p>
          </div>
        </>
      ),
    },
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
 return (
  <LightboxGallery
  titleText={caption.titleText}
  descText={caption.descText}
  buttonText={caption.buttonText}
  data={caption.featureddata}
  {...args}
></LightboxGallery>
 )
};

export const LightGallery = Template.bind({});