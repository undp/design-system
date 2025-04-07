import React from "react";
import { Meta, Story, Canvas } from "@storybook/addon-docs";
import  CountrySiteHeader  from "./CountrySiteHeader";
import { getCaptionForLocale as Languageswitcher } from "../../../UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import { getNavLinks, getSiteTitle, getLocationDataForLocale, getBackForLocale, getCaptionForLocale, getSelectlanguage, menuData } from "./CountrySiteHeaderUtils"




export default {
  title: "Components/Navigation components/Main navigation/Country Site Header",
  component: CountrySiteHeader,
  argTypes: {
    cta_enabled: {
      name: "Enable CTA",
      control: "inline-radio",
      options: ["On", "Off"],
    },
    menu_extended: {
      name: "Extended menu",
      control: "inline-radio",
      options: ["On", "Off"],
    },
  },
  args: {
    cta_enabled: "Off",
    menu_extended: "Off",
  },
  parameters: {
    docs: {
      page: () => 
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
            <code>
              &lt;header class="country-header"&gt; <br />
              &emsp;&emsp;&lt;section class="header"&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&lt;div class="grid-container fluid"&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="grid-x grid-margin-x align-content-middle"&gt; <br />

              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell small-8 large-2 shrink align-self-middle top-left"&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Logo and sitename ... <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell small-1 large-auto align-content-middle top-center"&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;.. Main menu ... <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell small-3 large-auto top-right"&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Language selector, globe link, and search link icon and call to action link ... <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="grid-container full menu__overflow__container"&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;ul class="overflow"&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Add this menu__overflow__container section and empty ul.overflow div <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if you want the menu overflow functionality. <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/ul&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="mobile-nav"&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Mobile navigation, menu, and links go in here ... <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &lt;/div&gt; <br />

              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
              &emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

              &emsp;&emsp;&lt;/section&gt; <br />
              &lt;/header&gt; <br />
          </code>
        </pre>

          <p><strong>Note:</strong> When updating to the new recommended structure, make sure to adjust the foundation classes in the main divs. Example: old top-left had <code>"cell large-9 small-8 align-self-middle top-left"</code> classes and new top-left has <code>"cell small-8 large-2 shrink align-self-middle top-left"</code></p>

          <h4>Old Header Structure (<strong>Deprecated</strong>)</h4>
          <p>The old, existing pattern for the HTML structure had two main divs (<code>.top-left</code> and <code>.top-right</code>) and a <code>.mobile-nav</code> div to contain all the mobile elements. This setup is deprecated for the more flexible structure above and can't implement the overflow functionality. This setup is deprecated and should be updated to the recommended structure as soon as possible.</p>

          <pre><code>
            &lt;header class="country-header"&gt; <br />
            &emsp;&emsp;&lt;section class="header"&gt; <br />
            &emsp;&emsp;&emsp;&emsp;&lt;div class="grid-container fluid"&gt; <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="grid-x grid-margin-x align-content-middle"&gt; <br />

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell large-9 small-8 align-self-middle top-left"&gt; <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Logo and sitename... <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Main menu <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell large-3 small-3 top-right"&gt; <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Language selector, globe link, and search link icon and call to action link... <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="mobile-nav"&gt; <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Mobile navigation, menu, and links go in here... <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
            &emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />

            &emsp;&emsp;&lt;/section&gt; <br />
            &lt;/header&gt; <br />
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

          <pre><code>
            &lt;div class="cell small-1 large-auto align-content-middle top-center"&gt; <br />
            &emsp;&emsp;&lt;ul class="overflow"&gt; <br />
            &emsp;&emsp;&emsp;&emsp;Menu items go here. It is important to add the overflow class to the parent ul, otherwise overflow won't trigger. <br />
            &emsp;&emsp;&lt;/ul&gt; <br />
            &lt;/div&gt; <br />
            <br />
          ...top-right container here... <br />
            <br />
            &lt;div class="grid-container full menu__overflow__container"&gt; <br />
            &emsp;&emsp;&lt;ul class="overflow"&gt; <br />
            &emsp;&emsp;&emsp;&emsp;Add this menu__overflow__container section after the top-right div and before the mobile-nav div. <br />
            &emsp;&emsp;&lt;/ul&gt; <br />
            &lt;/div&gt; <br />
            <br />
          ... mobile nav container here ... <br />
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
            <li>Add the <code>data-undpds-component="country-site-header"</code> attribute to the header element.</li>
            {/* <li>Initialize the <code>navigationInitialize()</code>, <code>langSwitch()</code> functions in your JS file’s document ready, For example:</li> */}
          </ol>

          <pre><code>
            $(document).ready(function() &#123; <br />
              &emsp;&emsp;navigationInitialize(); <br />
            &#125;);
          </code></pre>

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
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.js</a></li>
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
