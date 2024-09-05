import { Meta, Story, Canvas } from "@storybook/addon-docs";
import ArticlePage from "./ArticlePage";
import { getCaptionForLocale as imageCaptionData } from "../../Atom/Images/ImageCaptionCredit/ImageCaptionCreditUtils.js";
import { getCaptionForLocale as PostHeadData } from "../../Organism/Text/PostHeader/PostHeader.stories.js";
import { getCaptionForLocale as AuthorCardData } from "../../Components/UIcomponents/Author/AuthorColumn/AuthorUtils.js";
import { getCaptionForLocale as blockquoteData } from "../../Molecules/Text/BlockquoteComponent/BlockquoteComponentUtils.js";
import { getCaptionForLocale as paraLabel } from "../../Atom/BaseTypography/Paragraph/ParagraphUtils.js";
import { getCaptionForLocale as headingData } from "../../Atom/Typography/Heading/Heading.stories.js";
import { getCaptionForLocale as listData } from "../../Atom/Typography/Lists/ListsUtils.js";
import { getCaptionForLocale as footerData } from "../../Organism/Footer/Footer.stories.js";
import { getCaptionForLocale as featuredCardContent } from "../../Organism/Blocks/FeaturedContentCard/FeaturedCard/FeaturedContentCardUtils.js";

import { getCaptionForLocale as Languageswitcher } from "../../Components/UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import {
  getNavLinks,
  menuData,
  getSiteTitle,
  getLocationDataForLocale,
  getBackForLocale,
  getSelectlanguage,
} from "../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader.stories.js";
import mongoliaGoat from "../../assets/images/Mongolia-cashmere-goats.jpg";
import farmlandlg from "../../assets/images/farmland-lg.jpg";
import farmlandmd from "../../assets/images/farmland-md.jpg";
import farmlandsm from "../../assets/images/farmland-sm.jpg";
import logo from "../../assets/images/undp-logo-blue.svg";
import logowhite from "../../assets/images/undp-logo-white.svg";


const getParaForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        para1:
          "For fostering Peace and Social Cohesion in Pujehun and Moyamba districts, communities score the Government of Sierra Leone, the United Nations Development Programme (UNDP) and the World Food Programme (WFP) over 80% in the Multi-Stakeholder Project supported by the Peacebuilding Fund (PBF).",
        para2:
          "Residents (youth, women, chiefs and other district and chiefdom authorities) of Malen and Makpele chiefdoms of Pujehun District and of Lower Banta and Upper Banta Chiefdoms in Moyamba district recently rated the Government of Sierra Leone (GoSL), UNDP and WFP Multi Stakeholder Platform (MSP) Project “over 80% successful” as a resource based and local conflict resolution mechanism that promotes peace and social cohesion. This finding was revealed by district stakeholders during a two-day spot-check visit to the project chiefdoms led by UNDP’s Resident Representative-Dr. Samuel Doe, where his team engaged with community members, local and traditional leaders of the areas to learn about the outcomes of the project.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        para1:
          "Згідно з останніми оцінками середньостатистичному домогосподарству в Україні довелося провести в цілому п'ять тижнів без електроенергії протягом зими 2022 року. Це дорівнює 35 дням у темряві, інколи за мінусової температури. На початку 2023 року полегшення майже не відчувалося – температура продовжувала падати у довгі зимові місяці.",
        para2:
          "Найжахливішим у цій ситуації, в кризі, яка розгорнулася на тлі іншої кризи, було те, що відключення світла означало більше, аніж просто неможливість ввімкнути світло. Електроенергія впливає на всі аспекти повсякденного життя, а її відсутність має дуже негативні наслідки для громад. Відсутність електрики ускладнює процеси надання медичної допомоги, виконання робіт і навчання дітей. Але, напевно, найбільш руйнівні наслідки відсутності електропостачання під часі війни – це порушення комунікацій.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        para1:
          "ن أجل تعزيز السلام والتماسك الاجتماعي في مقاطعتي بوجيهون ومويامبا ، حصلت المجتمعات على تصنيف حكومة سيراليون وبرنامج الأمم المتحدة الإنمائي وبرنامج الغذاء العالمي بنسبة تزيد عن 80٪ في مشروع أصحاب المصلحة المتعددين الذي يدعمه صندوق بناء",
        para2:
          "في بانتا السفلى ومشيخات بانتا العليا في مقاطعة مويامبا مؤخرًا حكومة سيراليون (GoSL) وبرنامج الأمم المتحدة الإنمائي وبرنامج الأغذية العالمي. (MSP) مشرونجح أ٪ية لحل النزاعات المحلية والقائمة على الموارد التي تعزز السلام والتماسك الاجتماعي. تم الكشف عن هذه النتيجة من قبل أصحاب المصلحة في المنطقة خلال زيارة فحص مفاجئ استغرقت يومين إلى مشيخات المشروع بقيادة الممثل المقيم لبرنامج الأمم المتحدة الإنمائي - د. Samuel Doe ، حيث انخرط فريقه مع أعضاء المجتمع والقادة المحليين والتقليديين في المناطق للتعرف على نتائج المشروع",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        para1:
          "Pujehun နှင့် Moyamba ခရိုင်များရှိ ငြိမ်းချမ်းရေးနှင့် လူမှုစည်းလုံးညီညွတ်မှုကို ဖော်ဆောင်ရန်အတွက် လူမှုအသိုင်းအဝိုင်းများက Sierra Leone အစိုးရ၊ ကုလသမဂ္ဂ ဖွံ့ဖြိုးတိုးတက်ရေး အစီအစဉ် (UNDP) နှင့် World Food Program (WFP) တို့ 80% ကျော်ကို Peacebuilding Fund မှ ပံ့ပိုးပေးထားသော Multi-Stakeholder Project တွင် အမှတ်ပေးကြသည်။ (PBF)။",
        para2:
          "Pujehun ခရိုင်၏ Malen နှင့် Makpele အကြီးအကဲများနှင့် Moyamba ခရိုင်ရှိ Lower Banta နှင့် Upper Banta Chiefdoms များမှ Sierra Leone အစိုးရ (GoSL)၊ UNDP နှင့် WFP Multi Stakeholder Platform တို့မှ နေထိုင်သူများ (လူငယ်၊ အမျိုးသမီးများ၊ အကြီးအကဲများနှင့် အခြားခရိုင်နှင့် အကြီးအကဲများ)၊ (MSP) ငြိမ်းချမ်းရေးနှင့် လူမှုရေးစည်းလုံးညီညွတ်မှုကို မြှင့်တင်ပေးသည့် အရင်းအမြစ်အခြေခံနှင့် ဒေသန္တရပဋိပက္ခဖြေရှင်းရေးယန္တရားအဖြစ် “80% အောင်မြင်သည်” စီမံကိန်း။ UNDP ၏ ဌာနေကိုယ်စားလှယ်-ဒေါက်တာ ဦးဆောင်သော ပရောဂျက်အကြီးအကဲများထံ နှစ်ရက်ကြာ အကဲဖြတ်စစ်ဆေးသည့် ခရိုင်အတွင်း သက်ဆိုင်သူများမှ ဤတွေ့ရှိချက်ကို ဖော်ထုတ်ခဲ့ပါသည်။ Samuel Doe သည် ပရောဂျက်၏ရလဒ်များအကြောင်းကို လေ့လာရန် ၎င်း၏အဖွဲ့သည် ရပ်ရွာအဖွဲ့ဝင်များ၊ ဒေသဆိုင်ရာနှင့် ရိုးရာခေါင်းဆောင်များနှင့် ထိတွေ့ဆက်ဆံခဲ့သည်။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        para1:
          "プジェフン地区とモヤンバ地区の平和と社会の結束を促進するために、コミュニティは、平和構築基金が支援するマルチステークホルダープロジェクトで、シエラレオネ政府、国連開発計画（UNDP）、世界食糧計画（WFP）を80％以上獲得しています。",
        para2:
          "最近、プジェフン地区のマレン首長とマクペレ首長、モヤンバ地区のロワーバンタとアッパーバンタの首長の居住者（若者、女性、首長、その他の地区および首長当局）が、シエラレオネ政府（GoSL）、UNDP、WFPマルチステークホルダープラットフォームを評価しました。 （MSP）平和と社会的結束を促進する資源ベースの地域紛争解決メカニズムとしてのプロジェクト「80％以上成功」。この発見は、UNDPの常駐代表であるDr.が率いるプロジェクトの首長への2日間のスポットチェック訪問中に、地区の利害関係者によって明らかにされました。サミュエル・ドウは、彼のチームが地域のメンバー、地域の地元および伝統的な指導者と協力して、プロジェクトの成果について学びました。",
      };
      return japaneseText;
    default:
      return {
        para1:
          "For fostering Peace and Social Cohesion in Pujehun and Moyamba districts, communities score the Government of Sierra Leone, the United Nations Development Programme (UNDP) and the World Food Programme (WFP) over 80% in the Multi-Stakeholder Project supported by the Peacebuilding Fund (PBF).",
        para2:
          "Residents (youth, women, chiefs and other district and chiefdom authorities) of Malen and Makpele chiefdoms of Pujehun District and of Lower Banta and Upper Banta Chiefdoms in Moyamba district recently rated the Government of Sierra Leone (GoSL), UNDP and WFP Multi Stakeholder Platform (MSP) Project “over 80% successful” as a resource based and local conflict resolution mechanism that promotes peace and social cohesion. This finding was revealed by district stakeholders during a two-day spot-check visit to the project chiefdoms led by UNDP’s Resident Representative-Dr. Samuel Doe, where his team engaged with community members, local and traditional leaders of the areas to learn about the outcomes of the project.",
      };
  }
};

const getAuthorCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        detail1: "HEADLINE 1",
        detail2: "Headline 2",
        detail3: "Headline 3",
        detail4: "Headline 4",
        detail5: "Authors",
        detail6: "HEADLINE 6",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        detail1: "Заголовок 1",
        detail2: "Заголовок 2",
        detail3: "Заголовок 3",
        detail4: "Заголовок 4",
        detail5: "Автори",
        detail6: "Заголовок 6",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        detail1: "العنوان 1.",
        detail2: "العنوان 2",
        detail3: "العنوان 3",
        detail4: "العنوان 4",
        detail5: "العنوان 5",
        detail6: "العنوان 6",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail1: "ခခေါင်းစီး ၁",
        detail2: "ခေါင်းစဉ် ၂",
        detail3: "ခေါင်းစဉ် ၃",
        detail4: "ခေါင်းစဉ် ၄",
        detail5: "ခေါင်းစဉ် ၅",
        detail6: "ခေါင်းစီး ၆",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail1: "見出し1",
        detail2: "見出し2",
        detail3: "見出し3",
        detail4: "見出し4",
        detail5: "見出し5",
        detail6: "見出し6",
      };
      return japaneseText;
    default:
      return {
        detail1: "HEADLINE 1",
        detail2: "Headline 2",
        detail3: "Headline 3",
        detail4: "Headline 4",
        detail5: "Authors",
        detail6: "HEADLINE 6",
      };
  }
};

const getHeadingCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return "Some achievements of the project include the following:";
    case "ukrainian":
      return "Розвиток ніколи не спиняється. Не спиняємось і ми.";
    case "arabic":
      const arabicText = "تشمل بعض إنجازات المشروع ما يلي:";
      return arabicText;
    case "burmese":
      const burmeseText =
        "ပရောဂျက်၏ အောင်မြင်မှုအချို့မှာ အောက်ပါတို့ ပါဝင်သည်-";
      return burmeseText;
    case "japanese":
      const japaneseText = "プロジェクトのいくつかの成果は次のとおりです。";
      return japaneseText;
    default:
      return "Some achievements of the project include the following:";
  }
};

export default {
  title: "Templates/Article page",
  parameters: {
    docs: {
        page: () => (
            <>

<style>
  {`
  .sbdocs-preview {display: none}
  `}
</style>
<h1>Article Page</h1>
<p>On an Article page, it shows all the blogs and articles that are written by authors.</p>

<h3>Overview</h3>
<p>Article Page is the template for all the articles and blogs that are written by authors. The user can also see the related and featured articles or blogs in this. This helps the users to get related and featured articles or blogs directly on the article page.</p>
<p><a href="https://undp-design-system.azurewebsites.net/article-deepdive">Mockup</a></p>

<h3>Template Structure</h3>
<p>The following components are used to create the “Article Page” template in the design system:</p>
<ul>
    <li>Global header</li>
    <li>Progress bar - reading meter, updated on scroll based on the amount of text remaining in the article. The related content part is not counted, only the actual Article’s content.</li>
    <li>Breadcrumbs</li>
    <li>Post Title along with date and subtitle</li>
    <li>Image with caption (Wide) will expand the size animation when the user refreshes/page loads.</li>
    <li>Author information</li>
    <li>Text with variations - simple paragraph, a grid showing two columns, etc.</li>
    <li>Blockquote</li>
    <li>Image with caption(Medium) will expand the size animation on page load/refresh</li>
    <li>Section header which will be pulled out. This will be the LTR transition.</li>
    <li>Gallery example with 3 photos</li>
    <li>Featured card groups which will have CTA links (this can be just #).</li>
    <li>Standard footer</li>
</ul>

<h3>Performance</h3>
<ul>
    <li>The page performance will be optimized by considering the following:</li>
    <ul>
        <li>Lazy load</li>
        <li>Use appropriate media renditions based on the client’s viewpoint.</li>
        <li>Load common/static elements asynchronously (static navigation, menus, countries list, etc)</li>
        <li>Optimize assets loading - inline important CSS, defer bulky assets calls, preconnect to required origins, etc)</li>
        <li>Optimize transitions and animations so above-the-fold elements are always loaded first and available for viewers before the rest of the page is processed</li>
    </ul>
</ul>

<h3>Usage</h3>
<ul>
    <li>Copy the HTML from the HTML tab of canvas and include CSS and JS file in ‘CSS and JS References’ section</li>
    <li>Initialize the navigation, accordion, language switcher by calling below function.</li>
    <ul>
        <li><code>navigationInitialize();</code></li>
        <li><code>langSwitch();</code></li>
        <li><code>accordion(‘[data-accordion="mobile"]', '.footer-panel', 'active');</code></li>
    </ul>
    <li>If you want to add left-right animation then add <code>data-viewport=”true”</code> attribute to your HTML element.</li>
</ul>

<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base layout style from</p>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/global-header.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/global-header.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/post-header.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/post-header.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-caption.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-caption.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/blockquotecomp.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/blockquotecomp.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/authors.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/authors.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
</ul>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

<Canvas>
  <Story
    name="Article page"
    
  >
    {(args, { globals: { locale, accent } }) => {
      const caption = PostHeadData(locale);
      const headingLabel = getHeadingCaptionForLocale(locale);
      const navigationData = getNavLinks(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      args.accent = accent;
      return (
        <ArticlePage
          featuredCardContent={featuredCardContent(locale)}
          headingLabel={headingLabel}
          para={getParaForLocale(locale)}
          footerData={footerData(locale)}
          listData={listData(locale)}
          headingData={getAuthorCaptionForLocale(locale)}
          paraLabel={paraLabel(locale)}
          blockquoteData={blockquoteData(locale)}
          authorCardData={AuthorCardData(locale)}
          imageCaptionData={imageCaptionData(locale)}
          data={caption.postheaderdata}
          header={caption.header}
          country={caption.country}
          description={caption.description}
          active={"default"}
          locale={locale}
          leftNavigationData={leftNavigationData}
          navigationData={navigationData}
          rightNavigationData={rightNavigationData}
          menuData={menuData(locale)}
          languageswitcherData={Languageswitcher(locale)}
          locationData={getLocationDataForLocale(locale)}
          langSelect={getSelectlanguage(locale)}
          backcaption={getBackForLocale(locale)}
          mongoliaGoat={mongoliaGoat}
          farmlandlg={farmlandlg}
          farmlandmd={farmlandmd}
          farmlandsm={farmlandsm}
          logo={logo}
          logowhite={logowhite}
          {...args}
        ></ArticlePage>
      );
    }}
  </Story>
</Canvas>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale, accent } }) => {

  const caption = PostHeadData(locale);
  const headingLabel = getHeadingCaptionForLocale(locale);
  const navigationData = getNavLinks(locale);
  const leftNavigationData = navigationData.filter(
    (item) => item.position === "left"
  );
  const rightNavigationData = navigationData.filter(
    (item) => item.position === "right"
  );
  args.accent = accent;
  return (
    <ArticlePage
    featuredCardContent={featuredCardContent(locale)}
    headingLabel={headingLabel}
    para={getParaForLocale(locale)}
    footerData={footerData(locale)}
    listData={listData(locale)}
    headingData={getAuthorCaptionForLocale(locale)}
    paraLabel={paraLabel(locale)}
    blockquoteData={blockquoteData(locale)}
    authorCardData={AuthorCardData(locale)}
    imageCaptionData={imageCaptionData(locale)}
    data={caption.postheaderdata}
    header={caption.header}
    country={caption.country}
    description={caption.description}
    active={"default"}
    locale={locale}
    leftNavigationData={leftNavigationData}
    navigationData={navigationData}
    rightNavigationData={rightNavigationData}
    menuData={menuData(locale)}
    languageswitcherData={Languageswitcher(locale)}
    locationData={getLocationDataForLocale(locale)}
    langSelect={getSelectlanguage(locale)}
    backcaption={getBackForLocale(locale)}
    mongoliaGoat={mongoliaGoat}
    farmlandlg={farmlandlg}
    farmlandmd={farmlandmd}
    farmlandsm={farmlandsm}
    logo={logo}
    logowhite={logowhite}
    {...args}
  ></ArticlePage>
  );

}

export const ArticlePageStory = Template.bind({});
ArticlePageStory.storyName = "Article page";