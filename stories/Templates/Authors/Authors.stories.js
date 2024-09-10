import { Meta, Story, Canvas } from "@storybook/addon-docs";
import Authors from "./Authors";
import { getCaptionForLocale as breadcrumbData } from "../../Components/Navigationcomponents/Breadcrumbs/BreadcrumbsUtils.js";
import { getCaptionForLocale as contentCardData } from "../../Organism/Blocks/ContentCard/ContentCardUtils.js";
import { getCaptionForLocale as footerData } from "../../Organism/Footer//Footer.stories.js";
import { getCaptionForLocale as authorData } from "../../Components/UIcomponents/Author/AuthorCard/AuthorCard.stories.js";

import { getCaptionForLocale as Languageswitcher } from "../../Components/UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import {
  getNavLinks,
  menuData,
  getSiteTitle,
  getLocationDataForLocale,
  getBackForLocale,
  getSelectlanguage,
} from "../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeaderUtils.js";

const getheadingForLocale = (locale) => {
  switch (locale) {
    case "english":
      return "UNDP Authors";
    case "ukrainian":
      return "Автори ПРООН";
    case "arabic":
      const arabicText = "UNDP المؤلفون";
      return arabicText;
    case "burmese":
      const burmeseText = "UNDP စာရေးသူမျာ";
      return burmeseText;
    case "japanese":
      const japaneseText = "UNDP 著者";
      return japaneseText;
    default:
      return "UNDP Authors";
  }
};

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        authordata: [
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
        ],
        paragraph:
          "Inventore magni accusantium labore qui. Dolorum numquam nihil labore quis harum dolorum. Sed eligendi ex quis delectus et tempore et eos. Molestias enim necessitatibus incidunt sit ab officiis aut. Qui aspernatur impedit nesciunt inventore quo. Reprehenderit voluptatum nihil voluptates et.",
        button: "VIEW 234 POSTS",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        authordata: [
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
        ],
        paragraph:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
        button: "ЧИТАЙТЕ ДАЛІ",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        authordata: [
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "مدير",
          },
        ],
        paragraph:
          "مخترع يتهمه بعمل شاق كبير. لم أشعر أبدًا بأي ألم أو تعب أو أي من هذه الآلام. ولكن أن تختار من المختار والوقت وهم. تحدث المشاكل من الاحتياجات أو من الخدمات. أولئك الذين يرفضون الباحث لا يعرفون كيف يمنعونه. لا يلوم الملذات ولا الملذات.",
        button: "عرض 234 وظيفة",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        authordata: [
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
          {
            Authorlabel: "အောင်မြင်သည် စတီရီယို",
            Authortext: "အုပ်ချုပ်သူ",
          },
        ],
        paragraph:
          "ကြီးကျယ်သောကြိုးစားအားထုတ်မှုကိုစွပ်စွဲသူတီထွင်သူတစ် ဦး ငါနာကျင်တာ၊ ပင်ပန်းတာမရှိဘူး၊ ဒီနာကျင်မှုတစ်ခုမှမရှိခဲ့ဘူး။ ဒါပေမယ့်ရွေးချယ်တဲ့သူတစ်ယောက်ကနေရွေးချယ်ဖို့နဲ့အချိန်နဲ့သူတို့အတွက်ပဲ။ ဒုက္ခများသည်လိုအပ်ချက်များသို့မဟုတ် ၀ န်ဆောင်မှုများမှဖြစ်သည်။ ရှာဖွေသူကိုငြင်းပယ်သူများသည်၎င်းကိုမည်သို့ကာကွယ်ရမည်ကိုမသိပါ။ သူသည်အပျော်အပါးနှင့်အပျော်အပါးကိုအပြစ်မတင်။",
        button: "ပိုစ် ၂၃၄ ကိုကြည့်ပါ",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        authordata: [
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
          {
            Authorlabel: "أكيم شتاينر",
            Authortext: "管理者",
          },
        ],
        paragraph:
          "大変な努力を非難している発明家。 痛みも、倦怠感も、これらの痛みもありませんでした。 しかし、選択されたものと時間とそれらから選択すること。 トラブルはニーズやサービスから発生します。 ファインダーを拒否する人はそれを防ぐ方法を知りません。 彼は喜びも喜びも非難しません。",
        button: "234件の投稿を表示",
      };
      return japaneseText;
    default:
      const dummy = {
        authordata: [
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
          {
            Authorlabel: "Achim Steiner",
            Authortext: "Administrator",
          },
        ],
        paragraph:
          "Inventore magni accusantium labore qui. Dolorum numquam nihil labore quis harum dolorum. Sed eligendi ex quis delectus et tempore et eos. Molestias enim necessitatibus incidunt sit ab officiis aut. Qui aspernatur impedit nesciunt inventore quo. Reprehenderit voluptatum nihil voluptates et.",
        button: "VIEW 234 POSTS",
      };
      return dummy;
  }
};
const getButtonForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        view: "View more",
        close: "Close",
        sort: "Sort & FILTER",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        view: "ЧИТАТИ ДАЛІ",
        close: "Закрити",
        sort: "Пошук і фільтр",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        view: "عرض المزيد",
        close: "قريب",
        sort: "فرز وتصفية",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        view: "ပိုမိုကြည့်ရှုပါ။",
        close: "ပိတ်လိုက်",
        sort: "စီရန် & စစ်ထုတ်ပါ။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        view: "もっと見る",
        close: "選ぶ",
        sort: "ソート＆フィルター",
      };
      return japaneseText;
    default:
      return { view: "View more", close: "Close", sort: "Sort & FILTER" };
  }
};
const getfiltertextForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        sort: "SORT BY",
        options: ["Most posts", "Alphabetical"],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        sort: "СОРТУВАТИ ЗА",
        options: ["найбільшою кількістю дописів", "алфавітом"],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        sort: "اختار اللغة",
        options: ["معظم المشاركات", "مرتب حسب الحروف الأبجدية"],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        sort: "အလိုက်စဥ်သည်",
        options: ["ပို့စ်အများစု", "အက္ခရာစဉ်"],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        sort: "言語を選択する",
        options: ["ほとんどの投稿", "アルファベット順"],
      };
      return japaneseText;
    default:
      return { sort: "SORT BY", options: ["Most posts", "Alphabetical"] };
  }
};

export default {
  title: "Templates/Author listing page",
  parameters: {
    docs: {
        page: () => (
            <>
<style>
  {`
  .sbdocs-preview {display: none}
  `}
</style>

<h1>Authors Listing</h1>
<p>An Authors page has all information about every author who is registered on the website.</p>

<h3>Overview</h3>
<p>Authors page has all the information about every author who is registered on the website. The user will get every information about the authors at one place.</p>

<h3>Template Structure</h3>
<p>The following components are used to create the “Authors Listing” template in the design system:</p>
<ul>
    <li>Global header</li>
    <li>Breadcrumbs - Creates navigation links for the current pathname based on an opinionated configuration object.</li>
    <li>Title has author name</li>
    <li>Expanding search bar - Used to search for any specific author</li>
    <li>Select menu with options (Most posts and Alphabetical)</li>
    <li>Author Card grid - Has image of the author</li>
    <li>View more button in case of more content available</li>
    <li>Standard footer</li>
</ul>

<h3>Performance</h3>
<p>The page performance will be optimized by considering the following:</p>
<ul>
    <li>Lazy load</li>
    <li>Use appropriate media renditions based on the client’s viewpoint.</li>
    <li>Load common/static elements asynchronously (static navigation, menus, countries list, etc)</li>
    <li>Optimize assets loading - inline important CSS, defer bulky assets calls, preconnect to required origins, etc)</li>
    <li>Optimize transitions and animations so above-the-fold elements are always loaded first and available for viewers before the rest of the page is processed</li>
</ul>

<h3>Usage</h3>
<ul>
    <li>Copy HTML from the HTML tab of Canvas and include CSS and JS file in ‘CSS and JS References’ section</li>
    <li>Initialize navigation, language switcher, accordion, select and filter by calling below mentioned functions.</li>
    <ul>
        <li><code>navigationInitialize();</code></li>
        <li><code>langSwitch();</code></li>
        <li><code>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</code></li>
        <li><code>expandSearch();</code></li>
        <li><code>select();</code></li>
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
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-card.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/custom-select.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/custom-select.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/search-expand.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/search-expand.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/authors.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/authors.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/expand-search.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/expand-search.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/select.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/select.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/author-filter.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/author-filter.min.js</a></li>
</ul>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

<Canvas>
  <Story
    name="Author listing page"
  >
    {(args, { globals: { locale, accent } }) => {
      const filtertext = getfiltertextForLocale(locale);
      const buttonData = getButtonForLocale(locale);
      const headingData = getheadingForLocale(locale);
      const navigationData = getNavLinks(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      return (
        <Authors
          text={filtertext}
          buttonData={buttonData}
          footerData={footerData(locale)}
          authorData={getCaptionForLocale(locale)}
          breadcrumbData={breadcrumbData(locale)}
          headingData={headingData}
          contentCardData={contentCardData(locale)}
          locale={locale}
          leftNavigationData={leftNavigationData}
          navigationData={navigationData}
          rightNavigationData={rightNavigationData}
          menuData={menuData(locale)}
          languageswitcherData={Languageswitcher(locale)}
          locationData={getLocationDataForLocale(locale)}
          langSelect={getSelectlanguage(locale)}
          backcaption={getBackForLocale(locale)}
          {...args}
        ></Authors>
      );
    }}
  </Story>
</Canvas>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const filtertext = getfiltertextForLocale(locale);
  const buttonData = getButtonForLocale(locale);
  const headingData = getheadingForLocale(locale);
  const navigationData = getNavLinks(locale);
  const leftNavigationData = navigationData.filter(
    (item) => item.position === "left"
  );
  const rightNavigationData = navigationData.filter(
    (item) => item.position === "right"
  );
  return (
    <Authors
      text={filtertext}
      buttonData={buttonData}
      footerData={footerData(locale)}
      authorData={getCaptionForLocale(locale)}
      breadcrumbData={breadcrumbData(locale)}
      headingData={headingData}
      contentCardData={contentCardData(locale)}
      locale={locale}
      leftNavigationData={leftNavigationData}
      navigationData={navigationData}
      rightNavigationData={rightNavigationData}
      menuData={menuData(locale)}
      languageswitcherData={Languageswitcher(locale)}
      locationData={getLocationDataForLocale(locale)}
      langSelect={getSelectlanguage(locale)}
      backcaption={getBackForLocale(locale)}
      {...args}
    ></Authors>
  );
}

export const AuthorsStory = Template.bind({});
AuthorsStory.storyName = "Authors";

