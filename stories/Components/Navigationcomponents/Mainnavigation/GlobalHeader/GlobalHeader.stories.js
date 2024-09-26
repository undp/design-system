import { Meta, Story, Canvas } from "@storybook/addon-docs";
import GlobalHeader from "./GlobalHeader";
import { getCaptionForLocale as Languageswitcher } from "../../../UIcomponents/LanguageSwitcher/LanguageSwitcherUtils"
import { 
  getNavLinks,
  menuData,
  getSiteTitle,
  getLocationDataForLocale,
  getBackForLocale,
  getSelectlanguage,
  getCaptionForLocale
} from "./GlobalHeaderUtils";



export default {
  title: "Components/Navigation components/Main navigation/Global header",
  parameters: { 
    docs: {
      page: () => (
    <>
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

      <Canvas>
  <Story
    name="Global header"
  >
    {(args, { globals: { locale } }) => {
      let lang = locale === "en" ? "english" : locale;
      const caption = getCaptionForLocale(locale) || "default caption";
      const navigationData = getNavLinks(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      const backcaption = getBackForLocale(locale);
      const siteTitleData = getSiteTitle(locale);
      return (
        <GlobalHeader
          siteTitleData={siteTitleData}
          backcaption={backcaption}
          locale={locale}
          leftNavigationData={leftNavigationData}
          navigationData={navigationData}
          rightNavigationData={rightNavigationData}
          menuData={menuData(locale)}
          languageswitcherData={Languageswitcher(locale)}
          text={caption}
          locationData={getLocationDataForLocale(locale)}
          langSelect={getSelectlanguage(locale)}
        ></GlobalHeader>
      );
    }}
  </Story>
</Canvas>

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
      )
    }
  },
};  

const Template = (args, {globals: { locale } }) => {
    let lang = locale === "en" ? "english" : locale;
    const caption = getCaptionForLocale(locale);
    const navigationData = getNavLinks(locale);
    const leftNavigationData = navigationData.filter(
      (item) => item.position === "left"
    );
    const rightNavigationData = navigationData.filter(
      (item) => item.position === "right"
    );
    const backcaption = getBackForLocale(locale);
    const siteTitleData = getSiteTitle(locale);
  
    return (
          <GlobalHeader
            siteTitleData={siteTitleData}
            backcaption={backcaption}
            locale={locale}
            leftNavigationData={leftNavigationData}
            navigationData={navigationData}
            rightNavigationData={rightNavigationData}
            menuData={menuData(locale)}
            languageswitcherData={Languageswitcher(locale)}
            text={caption}
            locationData={getLocationDataForLocale(locale)}
            langSelect={getSelectlanguage(locale)}
          ></GlobalHeader>
  );
}

export const GlobalHeaderStory = Template.bind({});


