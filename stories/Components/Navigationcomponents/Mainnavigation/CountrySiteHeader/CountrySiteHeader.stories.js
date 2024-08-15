import React from "react";
import { Meta, Story, Canvas } from "@storybook/addon-docs";
import  CountrySiteHeader  from "./CountrySiteHeader";
import { getCaptionForLocale as Languageswitcher } from "../../../UIcomponents/LanguageSwitcher/LanguageSwitcher.stories.js";

const getNavLinks = (locale) => {
  switch (locale) {
    case "english":
      return [
        { title: "Who we are", id: "headerlink1" },
        { title: "What we do", id: "headerlink2" },
        { title: "Our Impact", id: "headerlink3" },
        { title: "Get Involved", id: "headerlink4" },
      ];
    case "ukrainian":
      return [
        { title: "ПРООН в Україні", id: "headerlink1" },
        { title: "Чим ми займаємося", id: "headerlink2" },
        { title: "Наші результати", id: "headerlink3" },
        { title: "Долучайтеся", id: "headerlink4" },
      ];
    case "arabic":
      return [
        { title: "من نحن", id: "headerlink1" },
        { title: "الذي نفعله", id: "headerlink2" },
        { title: "تأثيرنا", id: "headerlink3" },
        { title: "شارك", id: "headerlink4" },
      ];
    case "burmese":
      return [
        { title: "ငါတို့ဘယ်သူလဲ။", id: "headerlink1" },
        { title: "ငါတို့ဘာလုပ်မလဲ။", id: "headerlink2" },
        { title: "ကျွန်ုပ်တို့၏သက်ရောက်မှု", id: "headerlink3" },
        { title: "ပါဝင်လိုက်ပါ။", id: "headerlink4" },
      ];
    case "japanese":
      return [
        { title: "私たちは誰ですか", id: "headerlink1" },
        { title: "私達がすること", id: "headerlink2" },
        { title: "私たちの影響", id: "headerlink3" },
        { title: "参加する", id: "headerlink4" },
      ];
    default:
      return [
        { title: "Who we are", id: "headerlink1" },
        { title: "What we do", id: "headerlink2" },
        { title: "Our Impact", id: "headerlink3" },
        { title: "Get Involved", id: "headerlink4" },
      ];
  }
};

const getSiteTitle = (locale) => {
  switch (locale) {
    case "english":
      return { label: "REGION", span: "Site Title" };
    case "ukrainian":
      return { label: "РЕГІОН", span: "Заголовок сайту" };
    case "arabic":
      return { label: "عالمي", span: "عنوان الموقع" };
    case "burmese":
      return { label: "ကမ္ဘာလုံးဆိုင်ရာ", span: "ငဆိုက်ခေါင်းစဉ်" };
    case "japanese":
      return { label: "グローバル", span: "ウェブサイト名" };
    default:
      return { label: "REGION", span: "Site Title" };
  }
};

const getLocationDataForLocale = (locale) => {
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

const getBackForLocale = (locale) => {
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

const getCaptionForLocale = (locale) => {
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

const getSelectlanguage = (locale) => {
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

const menuData = (locale) => {
  switch (locale) {
    case "english":
      return [
        { text: "menu item" },
        { text: "menu item" },
      ];
    case "ukrainian":
      return [
        { text: "пункт меню" },
        { text: "пункт меню" },
      ];
    case "arabic":
      return [
        { text: "عنصر القائمة" },
        { text: "عنصر القائمة" },
      ];
    case "burmese":
      return [
        { text: "မီနူးပစ္စည်းများ" },
        { text: "မီနူးပစ္စည်းများ" },
      ];
    case "japanese":
      return [
        { text: "メニュー項目" },
        { text: "メニュー項目" },
      ];
    default:
      return [
        { text: "menu item" },
        { text: "menu item" },
      ];
  }
};

export default {
  title: "Components/Navigation components/Main navigation/Country Site Header",
  component: CountrySiteHeader,
  parameters: {
    docs: {
      page: () => (
        <>
         
         <style>
            {` 
              pre code {
                white-space: pre-wrap;  
                word-wrap: break-word;  
                overflow-x: auto;      
                max-width: 100%;       
                box-sizing: border-box; 
}
            `}
          </style>

          <h1>Country Header</h1>
          <h2>With mega menu and menu overflow</h2>

          <p>The Country Site Header is a header that contains the site name.</p>

          <h3>Overview</h3>
          <p>The Country Site Header component is a navigation bar that allows access to important functions across the website. It is present at the top of the page. This version of the header uses the mega menu version of the menu.</p>

          <h4>When to use:</h4>
          <ul>
            <li>To indicate the location of the current page and to navigate back to each of the previously visited pages.</li>
            <li>When a large descriptive mega menu is desired for further menu navigation.</li>
          </ul>

         <Canvas>
            <Story name="Country Header">
            {(args, { globals: { locale, accent } }) => {
                let lang = locale === "en" ? "english" : locale;
                const caption = getCaptionForLocale(locale);
                const navigationData = getNavLinks(locale);
                const backcaption = getBackForLocale(locale);
                const siteTitleData = getSiteTitle(locale);
                return (
                  <CountrySiteHeader
                    siteTitleData={siteTitleData}
                    backcaption={backcaption}
                    locale={locale}
                    navigationData={navigationData}
                    menuData={navigationData}
                    languageswitcherData={Languageswitcher(locale)}
                    text={caption}
                    locationData={getLocationDataForLocale(locale)}
                    langSelect={getSelectlanguage(locale)}
                    {...args}
                  ></CountrySiteHeader>
                );
              }}
            </Story>
         </Canvas>


          <h3>Formatting:</h3>

          <h4>Default</h4>
          <p>Default country header consists of a navigation bar with mega menus (optional), a Call to action link (optional), a search bar, logo, and the site name. The Logo is situated at the left-hand corner of the bar followed by the site title.</p>

          <h4>Overflow</h4>
          <p>In addition to the items above, the header can be set up to allow for more parent menu items. Currently, the maximum is 4 items, but with "Overflow" an unlimited amount of top-level parent menu items can be added. The menu items that overflow the header container are moved into an "overflow section" and can be observed by clicking a 3-dot (...) button that appears at the end of the header menu.</p>


          <h3>Setting up your HTML:</h3>

          <h4>New Header Structure (<strong>Recommended</strong>)</h4>
          <p>The new pattern for the HTML structure has three main divs (<code>.top-left</code>, <code>.top-center</code>, and <code>.top-right</code>), an optional <code>.menu__overflow__container</code> div for overflow menu items, and a <code>.mobile-nav</code> div to contain all the mobile elements. This setup is recommended for a more flexible structure and can implement the overflow functionality if desired.</p>

          <pre>
            <code>&lt;header class="country-header"&gt;
            &lt;section class="header"&gt;
              &lt;div class="grid-container fluid"&gt;
                &lt;div class="grid-x grid-margin-x align-content-middle"&gt;

                  &lt;div class="cell small-8 large-2 shrink align-self-middle top-left"&gt;
                    Logo and sitename ...
                  &lt;/div&gt;

                  &lt;div class="cell small-1 large-auto align-content-middle top-center"&gt;
                    .. Main menu ...
                  &lt;/div&gt;

                  &lt;div class="cell small-3 large-auto top-right"&gt;
                    Language selector, globe link, and search link icon and call to action link ...
                  &lt;/div&gt;

                  &lt;div class="grid-container full menu__overflow__container"&gt;
                    &lt;ul class="overflow"&gt;
                      Add this menu__overflow__container section and empty ul.overflow div
                      if you want the menu overflow functionality.
                    &lt;/ul&gt;
                  &lt;/div&gt;

                  &lt;div class="mobile-nav"&gt;
                    Mobile navigation, menu, and links go in here ...
                  &lt;/div&gt;

                &lt;/div&gt;
              &lt;/div&gt;

            &lt;/section&gt;
          &lt;/header&gt;
          </code>
        </pre>

          <p><strong>Note:</strong> When updating to the new recommended structure, make sure to adjust the foundation classes in the main divs. Example: old top-left had <code>"cell large-9 small-8 align-self-middle top-left"</code> classes and new top-left has <code>"cell small-8 large-2 shrink align-self-middle top-left"</code></p>

          <h4>Old Header Structure (<strong>Deprecated</strong>)</h4>
          <p>The old, existing pattern for the HTML structure had two main divs (<code>.top-left</code> and <code>.top-right</code>) and a <code>.mobile-nav</code> div to contain all the mobile elements. This setup is deprecated for the more flexible structure above and can't implement the overflow functionality. This setup is deprecated and should be updated to the recommended structure as soon as possible.</p>

          <pre><code>&lt;header class="country-header"&gt;
            &lt;section class="header"&gt;
              &lt;div class="grid-container fluid"&gt;
                &lt;div class="grid-x grid-margin-x align-content-middle"&gt;

                  &lt;div class="cell large-9 small-8 align-self-middle top-left"&gt;
                    Logo and sitename...
                    Main menu
                  &lt;/div&gt;

                  &lt;div class="cell large-3 small-3 top-right"&gt;
                    Language selector, globe link, and search link icon and call to action link...
                  &lt;/div&gt;

                  &lt;div class="mobile-nav"&gt;
                    Mobile navigation, menu, and links go in here...
                  &lt;/div&gt;

                &lt;/div&gt;
              &lt;/div&gt;

            &lt;/section&gt;
          &lt;/header&gt;
          </code></pre>


          <h3>Content</h3>
          <p>There are several types of Country Header:</p>
          <ul>
            <li>Without Progress Bar and With Progress Bar</li>
            <li>Without overflow menu functionality and with overflow menu functionality</li>
          </ul>


          <h3>Behaviors</h3>

          <h4>Setting up overflow</h4>
          <p>The overflow functionality works by calculating the space available for the main menu, adding up the width of all the menu items, and if that width is greater than available space, it moves them into the <code>menu__overflow__container</code> until everything fits.</p>
          <p>The most important parts are making sure the main menu <code>ul</code> has an <code>overflow</code> class applied, and that the <code>menu__overflow__container</code> div exists in the right place. Then just make sure the right CSS files and the <code>navigation.min.js</code> file is loaded.</p>

          <pre><code>&lt;div class="cell small-1 large-auto align-content-middle top-center"&gt;
            &lt;ul class="overflow"&gt;
              Menu items go here. It is important to add the overflow class to the parent ul, otherwise overflow won't trigger.
            &lt;/ul&gt;
          &lt;/div&gt;

          ...top-right container here...

          &lt;div class="grid-container full menu__overflow__container"&gt;
            &lt;ul class="overflow"&gt;
              Add this menu__overflow__container section after the top-right div and before the mobile-nav div.
            &lt;/ul&gt;
          &lt;/div&gt;

          ... mobile nav container here ...
          </code></pre>


          <h3>States</h3>

          <h4>Default</h4>
          <ul>
            <li>Without Progress Bar</li>
            <li>With Progress Bar</li>
            <li>Without overflow menu functionality</li>
            <li>With overflow menu functionality</li>
          </ul>

          <h4>Tablet</h4>
          <ul>
            <li>Without Progress Bar</li>
            <li>With Progress Bar</li>
            <li>Without overflow menu functionality</li>
            <li>With overflow menu functionality</li>
          </ul>

          <h4>Mobile</h4>
          <ul>
            <li>Without Progress Bar</li>
            <li>With Progress Bar</li>
          </ul>


          <h3>Usage:</h3>

          <h4>Default mega menu Usage:</h4>
          <ol>
            <li>Copy HTML from the HTML tab of canvas and also include the CSS and JS files listed below.</li>
            <li>Initialize the <code>navigationInitialize()</code>, <code>langSwitch()</code> functions in your JS file’s document ready, For example:</li>
          </ol>

          {/* <pre><code>
            $(document).ready(function() {
              navigationInitialize();
            });
          </code></pre> */}

          <h4>Overflow Usage:</h4>
          <ol>
            <li>In addition to the steps above, initialize the <code>navigationOverFlow()</code> function in your JS file’s document ready.</li>
          </ol>


          <h3>CSS and JS References:</h3>

          <h4>CSS:</h4>
          <p>Add the base layout style from:</p>
          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-site-header.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-site-header.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css</a></li>
            <li>If adding the menu overflow functionality, add the style from <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu-overflow.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu-overflow.min.css</a></li>
          </ul>

          <h4>JS:</h4>
          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
          </ul>

          <p>Menu overflow functionality is included in the navigation.min.js file. It only triggers if the overflow classes are in place. Please see "Implementing menu overflow" for instructions on setting up overflow menu functionality for the main header menu.</p>

          <h3>Interactions</h3>
          <ul>
            <li>By clicking on the CTA Link, the page is directed to the subsequent link page.</li>
            <li>By clicking on the search icon, the search tab opens.</li>
            <li>If overflow is enabled, clicking on the 3-dot button will open the overflow container.</li>
          </ul>

          <h3>Changelog</h3>
          <p>1.3 — Released component</p>

        </>
      )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  let lang = locale === "en" ? "english" : locale;
  const caption = getCaptionForLocale(locale);
  const navigationData = getNavLinks(locale);
  const backcaption = getBackForLocale(locale);
  const siteTitleData = getSiteTitle(locale);
  return (
    <CountrySiteHeader
      siteTitleData={siteTitleData}
      backcaption={backcaption}
      locale={locale}
      navigationData={navigationData}
      menuData={navigationData}
      languageswitcherData={Languageswitcher(locale)}
      text={caption}
      locationData={getLocationDataForLocale(locale)}
      langSelect={getSelectlanguage(locale)}
      {...args}
    />
  );
}

export const CountrySiteHeaderStory = Template.bind({});
CountrySiteHeaderStory.storyName = 'Country Header';
