import { Meta, Story, Canvas } from "@storybook/addon-docs";


export const getNavLinks = (locale) => {
  switch (locale) {
    case "english":
      return [
        { label: "Who we are", id: "headerlink1", position: "left" },
        { label: "What we do", id: "headerlink2", position: "left" },
        { label: "Our Impact", id: "headerlink3", position: "right" },
        { label: "Get Involved", id: "headerlink4", position: "right" },
      ];
    case "ukrainian":
      return [
        { title: "ПРООН в Україні", id: "headerlink1", position: "left"  },
        { title: "Чим ми займаємося", id: "headerlink2", position: "left"  },
        { title: "Наші результати", id: "headerlink3", position: "right" },
        { title: "Долучайтеся", id: "headerlink4", position: "right" },
      ];
    case "arabic":
      return [
        { label: "من نحن", id: "headerlink1", position: "left" },
        { label: "الذي نفعله", id: "headerlink2", position: "left" },
        { label: "تأثيرنا", id: "headerlink3", position: "right" },
        { label: "شارك", id: "headerlink4", position: "right" },
      ];
    case "burmese":
      return [
        { label: "ငါတို့ဘယ်သူလဲ။", id: "headerlink1", position: "left" },
        { label: "ငါတို့ဘာလုပ်မလဲ။", id: "headerlink2", position: "left" },
        {
          label: "ကျွန်ုပ်တို့၏သက်ရောက်မှု",
          id: "headerlink3",
          position: "right",
        },
        { label: "ပါဝင်လိုက်ပါ။", id: "headerlink4", position: "right" },
      ];
    case "japanese":
      return [
        { label: "私たちは誰ですか", id: "headerlink1", position: "left" },
        { label: "私達がすること", id: "headerlink2", position: "left" },
        { label: "私たちの影響", id: "headerlink3", position: "right" },
        { label: "参加する", id: "headerlink4", position: "right" },
      ];
    default:
      return [
        { label: "Who we are", id: "headerlink1", position: "left" },
        { label: "What we do", id: "headerlink2", position: "left" },
        { label: "Our Impact", id: "headerlink3", position: "right" },
        { label: "Get Involved", id: "headerlink4", position: "right" },
      ];
  }
};

export const getSiteTitle = (locale) => {
  switch (locale) {
    case "english":
      return { label: "GLOBAL", span: "Site Title" };
    case "ukrainian":
      return { label: "ГЛОБАЛЬНИЙ", span: "Заголовок сайту" };
    case "arabic":
      return { label: "عالمي", span: "عنوان الموقع" };
    case "burmese":
      return { label: "ကမ္ဘာလုံးဆိုင်ရာ", span: "ငဆိုက်ခေါင်းစဉ်" };
    case "japanese":
      return { label: "グローバル", span: "ウェブサイト名" };
    default:
      return { label: "GLOBAL", span: "Site Title" };
  }
};

export const getLocationDataForLocale = (locale) => {
  switch (locale) {
    case "english":
      return { detail: "Locations" };
    case "ukrainian":
      return { detail: "Розташування" };
    case "arabic":
      return { detail: "المواقع" };
    case "burmese":
      return { detail: "နေရာမျာ" };
    case "japanese":
      return { detail: "場所" };
    default:
      return { detail: "Locations" };
  }
};

export const getBackForLocale = (locale) => {
  switch (locale) {
    case "english":
      return { detail: "Back" };
    case "ukrainian":
      return { detail: "назад" };
    case "arabic":
      return { detail: "الى الخلف" };
    case "burmese":
      return { detail: "ကျော" };
    case "japanese":
      return { detail: "戻る" };
    default:
      return { detail: "Back" };
  }
};

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return "Select Language";
    case "ukrainian":
      return "Оберіть мову";
    case "arabic":
      return "اختار اللغة";
    case "burmese":
      return "ဘာသာစကားကို ရွေးပါ။";
    case "japanese":
      return "言語を選択する";
    default:
      return "Category";
  }
};

export const getSelectlanguage = (locale) => {
  switch (locale) {
    case "english":
      return "Select Language";
    case "ukrainian":
      return "Оберіть мову";
    case "arabic":
      return "اختار اللغة";
    case "burmese":
      return "ဘာသာစကားကို ရွေးပါ။";
    case "japanese":
      return "言語を選択する";
    default:
      return "Select Language";
  }
};

export const menuData = (locale) => {
  switch (locale) {
    case "english":
      return [
        {
          text: "menu item",
        },
        {
          text: "menu item",
        },
      ];
    case "ukrainian":
      return [
        { text: "пункт меню" },
        { text: "пункт меню" },
      ];
    case "arabic":
      return [
        {
          text: "عنصر القائمة",
        },
        {
          text: "عنصر القائمة",
        },
      ];
    case "burmese":
      return [
        {
          text: "မီနူးပစ္စည်းများ",
        },
        {
          text: "မီနူးပစ္စည်းများ",
        },
      ];
    case "japanese":
      return [
        {
          text: "メニュー項目",
        },
        {
          text: "メニュー項目",
        },
      ];
    default:
      return [
        {
          text: "menu item",
        },
        {
          text: "menu item",
        },
      ];
  }
};

export const GlobalHeaderStories = () => {
  return (
    <>
      <Meta title="Components/Navigation components/Main navigation/Global header" />

      <style>
        {`
        iframe {
          min-height: 400px;
        }
        `}
      </style>

      <h1>Global Header</h1>

      <p>
        The Global Header contains elements that provide context and easy access to key functions throughout the website.
      </p>

      <h3>Overview</h3>

      <p>
        The Global Header component is a navigation bar that allows access to important functions across the website. It is present at the top of each page.
      </p>

      <h4>When to use:</h4>

      <ul>
        <li>When the website needs a header to navigate through the pages.</li>
      </ul>

      <h4>Formatting</h4>

      <p>The Global header is a fixed horizontal panel on the top of the page, with a shaded bottom border, optionally accompanied by the Reading progress meter widget.</p>

      <h3>Content</h3>

      <p>
        Global Header consists of a navigation bar with drop-down menus, CTA links, Logo, language switcher, Globe icon (invoking Locations flyout), and Search icon (providing access to the Search overlay. The Logo is centered, menu items are aligned to the center as well on both sides of the Logo.
      </p>

      <p>
        On small screens, the mega menu is transitioning into an off-screen menu accessible through the Hamburger icon. Language switcher and Locations flyout are accessible through the first level menu panel.
      </p>

      <h3>Behaviors</h3>

      <h4>States</h4>

      <ol>
        <li>
          <strong>Default:</strong> The Logo overflows the header section when there is no progress bar or the progress bar is at the starting point. When the page scrolls for the first time logo contracts to match the Header’s height and the entire header’s panel remains fixed on the top of the page regardless of the depth of scrolling.
        </li>
      </ol>

      <h3>Usage:</h3>

      <ol>
        <li>Copy HTML from the HTML tab of canvas and also include the css and Js files listed below.</li>
        <li>Initialize the navigationInitialize(), langSwitch().</li>
      </ol>

      <h3>CSS and JS References</h3>

      <h4>CSS:</h4>

      <ul>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/global-header.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/global-header.min.css</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css</a></li>
      </ul>

      <h4>JS:</h4>

      <ul>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
      </ul>

      <h3>Interactions</h3>

      <ul>
        <li>By clicking on the CTA Link, the page is directed to the subsequent link page.</li>
        <li>By clicking on the Drop-down menu, it expands, and clicking on the x icon closes it.</li>
        <li>By clicking on the search icon, the search tab opens.</li>
        <li>By clicking on the language switcher, it expands, and clicking on the x icon closes it.</li>
        <li>Logo expands/contracts based on the scrolling depth.</li>
        <li>Reading meter (if used) updated based on the scrolling depth into content.</li>
      </ul>

      <h3>Changelog</h3>

      <p>1.0 — Released component</p>
    </>
  );
};

export default {
  title: "Components/Navigation components/Main navigation/Global header",
  component: GlobalHeaderStories,
  parameters: {
    actions: {
      handles: ["click .menu-item"],
    },
  },
};

