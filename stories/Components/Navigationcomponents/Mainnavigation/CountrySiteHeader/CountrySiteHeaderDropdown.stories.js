import React from 'react';
import { Story, Meta } from '@storybook/react';
import CountrySiteHeaderDropdown from './CountrySiteHeaderDropdown';
import { Canvas } from '@storybook/blocks';
import { getCaptionForLocale as Languageswitcher } from "../../../UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";


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
      return "Select Language";
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
        { text: "menu item" },
        { text: "menu item" },
      ];
    case "ukrainian":
      return [
        { text: "пункт меню" },
        { text: "пункт меню" },
        { text: "пункт меню" },
        { text: "пункт меню" },
      ];
    default:
      return [
        { text: "menu item" },
        { text: "menu item" },
        { text: "menu item" },
        { text: "menu item" },
      ];
  }
};

export default {
  title: "Components/Navigation components/Main navigation/Country header - Dropdown menu",
  component: CountrySiteHeaderDropdown,
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
      page: () => (
        <>         
<h1>Country Header</h1>

<h2>With dropdown menu and menu overflow</h2>

<p>The Country Site Header is a header that contains the site name.</p>

<h3>Overview</h3>

<p>The Country Site Header component is a navigation bar that allows access to important functions across the website.
It is present at the top of the page.
This version of the header uses the dropdown/multilevel version of the menu.</p>

<h3>When to use:</h3>

<ul>
  <li>To indicate the location of the current page and to navigate back to each of the previously visited pages.</li>
  <li>When a dropdown listing of child menu items is desired for further menu navigation.</li>
</ul>

<Canvas>
  <Story name="CountrySiteHeaderDropdown">
  {(args, { globals: { locale, accent } }) => {
      let lang = locale === "en" ? "english" : locale;
      // const caption = getCaptionForLocale(locale);
      const navigationData = getNavLinks(locale);
      const backcaption = getBackForLocale(locale);
      const siteTitleData = getSiteTitle(locale);
      return (
        <CountrySiteHeaderDropdown
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
        ></CountrySiteHeaderDropdown>
      );
    }}
  </Story>
</Canvas>

<h3>Formatting</h3>

<h4>Default</h4>

<p>Default country header consists of a navigation bar with dropdown menus (optional), a Call to action link (optional), a search bar, logo, and the site name. The Logo is situated at the left-hand corner of the bar followed by the site title.</p>

<h4>Overflow</h4>

<p>In addition to the items above, The header can be set up to allow for more parent menu items. Currently the max is 4 items, but with "Overflow" an unlimited amount of top level parent menu items can be added. The menu items that overflow the header container are moved into an "overflow section" and can be observed by clicking a 3 dot (...) button that appears at the end of the header menu.</p>


<h3>Setting up your HTML:</h3>

<h4>New Header Structure (<strong>Recommended</strong>)</h4>

<p>The new pattern for the html structure has three main divs (<strong>.top-left</strong>, <strong>.top-center</strong> and <strong>.top-right</strong>),
an optional <strong>.menu__overflow__container</strong> div for overflow menu items, addition and a <strong>.mobile-nav</strong> div to contain all the mobile elements.
This setup is recommended for a more flexible structure and it can implement the overflow functionality if desired.</p>

<pre>
<code>
&lt;header class="country-header"&gt; <br />
  &emsp;&emsp;&lt;section class="header"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&lt;div class="grid-container fluid"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="grid-x grid-margin-x align-content-middle"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell small-8 large-2 shrink align-self-middle top-left"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Logo and sitename ... <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell small-1 large-auto align-content-middle top-center"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Main menu ... <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell small-3 large-auto top-right"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Language selector, globe link, and search link icon and <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;call to action link ... <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="grid-container full menu__overflow__container"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;ul class="overflow"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Add this menu__overflow__container section and <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;empty ul.overflow div if you want the menu <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;overflow functionality. <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/ul&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="mobile-nav"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Mobile navigation, menu, and links go in here ... <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&lt;/section&gt; <br />
&lt;/header&gt; <br />
</code>
</pre>

<p><strong>Note:</strong> When updating to the new recommended structure, make sure to adjust the foundation classes in the main divs. Example: old top-left had
<strong>"cell large-9 small-8 align-self-middle top-left"</strong> classes and new top-left has <strong>"cell small-8 large-2 shrink align-self-middle top-left"</strong></p>

<h4>Old Header Structure (Deprecated)</h4>

<p>The old, existing pattern for the html structure had two main divs (<strong>.top-left</strong> and <strong>.top-right</strong>) and a <strong>.mobile-nav</strong> div to contain all the mobile elements. This setup is deprecated for the more flexible structure above and can't implement the overflow functionality</p>

<p><strong>This setup is deprecated and should be updated to the recommended structure as soon as possible.</strong></p>

<pre>
<code>
&lt;header class="country-header"&gt; <br />
  &emsp;&emsp;&lt;section class="header"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&lt;div class="grid-container fluid"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="grid-x grid-margin-x align-content-middle"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell large-9 small-8 align-self-middle top-left"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Logo and sitename... <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Main menu <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="cell large-3 small-3 top-right"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Language selector, globe link, and search link icon and <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;call to action link... <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div class="mobile-nav"&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Mobile navigation, menu, and links go in here... <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&emsp;&emsp;&lt;/div&gt; <br />
  &emsp;&emsp;&lt;/section&gt; <br />
&lt;/header&gt; <br />
</code>
</pre>

<h4>Dropdown menu structure</h4>

<p>To build a dropdown style of menus, apply a class of <strong>.has-submenu</strong> to the parent li item. Then and a class of <strong>.submenu</strong> to the ul list of children links.
Make sure to add the <strong>.overflow</strong> class to the top level parent <strong>ul</strong> tag if the overflow functionality is desired.</p>

<p>It is not recommended beyond 3-4 levels of menus, including the main parent layer visible in the header.</p>

<pre>
<code>
&lt;div class="... top-center"&gt; &lt;!-- Main parent div in header to set the menu --&gt; <br />
&emsp;&emsp;&lt;nav class="menu"&gt; &lt;!-- Important to have the .menu class --&gt; <br />
&emsp;&emsp;&emsp;&emsp;&lt;ul&gt; &lt;!-- add class="overflow" --&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;li&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;a href=""&gt;Link title here&lt;/a&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/li&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;li class="has-submenu"&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;a href=""&gt;Link with children&lt;/a&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &lt;ul class="submenu"&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;li class="has-submenu"&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;a href=""&gt;Child link with children&lt;/a&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;ul class="submenu"&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;li&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;a&gt;Deep child link&lt;/a&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/li&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/ul&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/li&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/ul&gt; <br />
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;/li&gt; <br />
&emsp;&emsp;&emsp;&emsp;&lt;/ul&gt; <br />
&emsp;&emsp;&lt;/nav&gt; <br />
&lt;/div&gt; <br />
</code>
</pre>


<h3>Content</h3>

<p>There are several types of Country Header:</p>

<ul>
  <li>Without Progress Bar and With Progress Bar</li>
  <li>Without overflow menu functionality and with overflow menu functionality</li>
</ul>


<h3>Behaviors</h3>

<h4>Setting up overflow</h4>

<p>The overflow functionality works by calculating the space available for the main menu, adding up the width of all the menu items,
and if that width is greater than available space, it moves its into the <strong>menu__overflow__container</strong> until everything fits.</p>

<p>The most important parts are making sure the main menu ul has an <strong>overflow</strong> class applied, and that the <strong>menu__overflow__container</strong>
div exists in the right place. Then just make sure the right css files and the <strong>navigation.min.js</strong> file is loaded.</p>

<pre>
<code>
&lt;div class="cell small-1 large-auto align-content-middle top-center"&gt; <br />
&emsp;&emsp;&lt;ul class="overflow"&gt; <br />
&emsp;&emsp;&emsp;&emsp;Menu items go here. It is important to add the overflow class to the parent ul, <br />
&emsp;&emsp;&emsp;&emsp;otherwise overflow wont trigger. <br />
&emsp;&emsp;&lt;/ul&gt; <br />
&lt;/div&gt; <br />
 <br />
top-right container here... <br />
 <br />
&lt;div class="grid-container full menu__overflow__container"&gt; <br />
&emsp;&emsp;&lt;ul class="overflow"&gt; <br />
&emsp;&emsp;&emsp;&emsp;Add this menu__overflow__container section after the top-right div and before <br />
&emsp;&emsp;&emsp;&emsp;the mobile-nav div. <br />
&emsp;&emsp;&lt;/ul&gt; <br />
&lt;/div&gt; <br />
 <br />
mobile nav container here ... <br />
</code>
</pre>


<h3>States</h3>

<p>There are three states: Default, Tablet, and Mobile.</p>

<ol>
  <li>Default
    <ul>
      <li>Without Progress Bar</li>
      <li>With Progress Bar</li>
      <li>Without overflow menu functionality</li>
      <li>With overflow menu functionality</li>
    </ul>
  </li>
  <li>Tablet
    <ul>
      <li>Without Progress Bar</li>
      <li>With Progress Bar</li>
      <li>Without overflow menu functionality</li>
      <li>With overflow menu functionality</li>
    </ul>
  </li>
  <li>Mobile
    <ul>
      <li>Without Progress Bar</li>
      <li>With Progress Bar</li>
    </ul>
  </li>
</ol>


<h3>Usage:</h3>

<h4>Default Dropdown Usage:</h4>

<ol>
  <li>Copy HTML from the HTML tab of canvas and also include the css and Js files listed below.</li>
  <li>Initialize the <strong>navigationInitialize()</strong>, <strong>langSwitch()</strong> function in your js file’s document ready</li>
</ol>

<h4>Dropdown menu Usage:</h4>

<ol>
  <li>Copy HTML from the HTML tab of canvas and also include the css and Js files listed below.</li>
  <li>Initialize the <strong>navigationInitialize()</strong>, <strong>navigationMultiLevelEdgeDetection()</strong>, and <strong>langSwitch()</strong> function in your js file’s document ready. For example:</li>
</ol>

<pre>
<code>
$(document).ready(function() &#123; <br />
  &emsp;&emsp;navigationInitialize(); <br />
  &emsp;&emsp;navigationMultiLevelEdgeDetection(); <br />
&#125;);
</code>
</pre>

<h4>Overflow Usage:</h4>

<ol>
  <li>In addition to the steps above, Initialize the <strong>navigationOverFlow()</strong> function in your js file’s document ready.</li>
</ol>


<h3>CSS and JS References</h3>

<h4>CSS:</h4>

<p>Add the base layout style from</p>

<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">base-minimal.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-site-header.min.css">country-site-header.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css">language-switcher.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css">menu.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu-multi-level.min.css">menu-multi-level.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css">mobile-nav.min.css</a></li>
</ul>

<p>If adding the menu overflow functionality, add the style from</p>

<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu-overflow.min.css">menu-overflow.min.css</a></li>
</ul>

<h4>JS:</h4>

<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">navigation.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">undp.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">lang-switcher.min.js</a></li>
</ul>


<h3>Interactions</h3>

<ul>
  <li>By clicking on the CTA Link, the page is directed to the subsequent link page.</li>
  <li>By clicking on the search icon, the search tab opens.</li>
  <li>Hovering over the main menu items will display dropdown items, if they exist.</li>
  <li>If overflow is enabled, clicking on the 3 dot button will open overflow container.</li>
</ul>

<h3>Changelog</h3>

<p>1.3 — Released component</p>

        </>
      )
    }
  }
}

const Template = (args, { globals: { locale, accent } }) => {
  let lang = locale === "en" ? "english" : locale;
  const caption = getCaptionForLocale(locale);
  const navigationData = getNavLinks(locale);
  const backcaption = getBackForLocale(locale);
  const siteTitleData = getSiteTitle(locale);
  return (
    <CountrySiteHeaderDropdown
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
    ></CountrySiteHeaderDropdown>
  );
};

export const CountrySiteHeaderDropdownStory = Template.bind({});
CountrySiteHeaderDropdownStory.storyName = "Country Header - Dropdown Menu";
