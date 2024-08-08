export const getNavLinks = (locale) => {
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

export const getSiteTitle = (locale) => {
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
      return "Select Language";
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
  }
}

const Template = (args, { globals: { locale } }) => {

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
      menuData={menuData(locale)}
      languageswitcherData={Languageswitcher(locale)}
      text={caption}
      locationData={getLocationDataForLocale(locale)}
      langSelect={getSelectlanguage(locale)}
      {...args}
    ></CountrySiteHeaderDropdown>
  );
};

export const CountryHeaderDropdownStory = Template.bind({});

CountryHeaderDropdownStory.args = {
  cta_enabled: "Off",
  menu_extended: "Off",
};

CountryHeaderDropdownStory.parameters = {
  docs: {
    description: {
      component: `


    <style>"iframe { min-height: 400px; }"</style>
    <h1>Country Header</h1>
    <h2>With dropdown menu and menu overflow</h2>
    <p>
      The Country Site Header is a header that contains the site name.
    </p>
    <h3>Overview</h3>
    <p>
      The Country Site Header component is a navigation bar that allows access to important functions across the website.
      It is present at the top of the page.
      This version of the header uses the dropdown/multilevel version of the menu.
    </p>
    <h3>When to use:</h3>
    <ul>
      <li>To indicate the location of the current page and to navigate back to each of the previously visited pages.</li>
      <li>When a dropdown listing of child menu items is desired for further menu navigation.</li>
    </ul>
    <Canvas>
      <Story
        name="Country header - Dropdown menu"
        parameters={{
          layout: "fullscreen",
          docs: {
            story: {
              inline: false,
              iframeHeight: "100%",
            },
          },
          chromatic: { viewports: process.env.CHROMATIC_VIEWPORTS },
        }}
      >
        {(args, { globals: { locale, accent } }) => {
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
              menuData={menuData(locale)}
              languageswitcherData={Languageswitcher(locale)}
              text={caption}
              locationData={getLocationDataForLocale(locale)}
              langSelect={getSelectlanguage(locale)}
              {...args}
            />
          );
        }}
      </Story>
    </Canvas>
    <h2>Formatting</h2>
    <h3>Default</h3>
    <p>
      Default country header consists of a navigation bar with dropdown menus (optional), a Call to action link (optional),
      a search bar, logo, and the site name. The Logo is situated at the left-hand corner of the bar followed by the site title.
    </p>
    <h3>Overflow</h3>
    <p>
      In addition to the items above, The header can be set up to allow for more parent menu items.
      Currently the max is 4 items, but with "Overflow" an unlimited amount of top level parent menu items can be added.
      The menu items that overflow the header container are moved into an "overflow section" and can be observed by clicking a 3 dot (...) button that appears at the end of the header menu.
    </p>
    <h2>Setting up your HTML</h2>
    <h3>New Header Structure (Recommended)</h3>
    <p>
      The new pattern for the html structure has three main divs (.top-left, .top-center, and .top-right),
      an optional .menu__overflow__container div for overflow menu items, addition and a .mobile-nav div to contain all the mobile elements.
      This setup is recommended for a more flexible structure and it can implement the overflow functionality if desired.
    </p>
    <pre>
      <code>
        &lt;header class="country-header"&gt;
          &lt;section class="header"&gt;
            &lt;div class="grid-container fluid"&gt;
              &lt;div class="grid-x grid-margin-x align-content-middle"&gt;
                &lt;div class="cell small-8 large-2 shrink align-self-middle top-left"&gt;
                  Logo and sitename ...
                &lt;/div&gt;
                &lt;div class="cell small-1 large-auto align-content-middle top-center"&gt;
                  Main menu ...
                &lt;/div&gt;
                &lt;div class="cell small-3 large-auto top-right"&gt;
                  Language selector, globe link, and search link icon and
                  call to action link ...
                &lt;/div&gt;
                &lt;div class="grid-container full menu__overflow__container"&gt;
                  &lt;ul class="overflow"&gt;
                    Add this menu__overflow__container section and
                    empty ul.overflow div if you want the menu
                    overflow functionality.
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
    <p>
      <strong>Note:</strong> When updating to the new recommended structure, make sure to adjust the foundation classes in the main divs.
      Example: old top-left had "cell large-9 small-8 align-self-middle top-left" classes and new top-left has "cell small-8 large-2 shrink align-self-middle top-left"
    </p>
    <h3>Old Header Structure (Deprecated)</h3>
    <p>
      The old, existing pattern for the html structure had two main divs (.top-left and .top-right) and a .mobile-nav div to contain all the mobile elements.
      This setup is deprecated for the more flexible structure above and can't implement the overflow functionality.
    </p>
    <pre>
      <code>
        &lt;header class="country-header"&gt;
          &lt;section class="header"&gt;
            &lt;div class="grid-container fluid"&gt;
              &lt;div class="grid-x grid-margin-x align-content-middle"&gt;
                &lt;div class="cell large-9 small-8 align-self-middle top-left"&gt;
                  Logo and sitename...
                  Main menu
                &lt;/div&gt;
                &lt;div class="cell large-3 small-3 top-right"&gt;
                  Language selector, globe link, and search link icon and
                  call to action link...
                &lt;/div&gt;
                &lt;div class="mobile-nav"&gt;
                  Mobile navigation, menu, and links go in here...
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/section&gt;
        &lt;/header&gt;
      </code>
    </pre>
    <h3>Dropdown menu structure</h3>
    <p>
      To build a dropdown style of menus, apply a class of .has-submenu to the parent li item.
      Then add a class of .submenu to the ul list of children links.
      Make sure to add the .overflow class to the top level parent ul tag if the overflow functionality is desired.
      It is not recommended beyond 3-4 levels of menus, including the main parent layer visible in the header.
    </p>
    <pre>
      <code>
        &lt;div class="... top-center"&gt; // Main parent div in header to set the menu
          &lt;nav class="menu"&gt; // Important to have the .menu class
            &lt;ul&gt; // add class="overflow"
              &lt;li&gt;
                // Links without children links need no special classes or settings.
                &lt;a href=""&gt;Link title here&lt;/a&gt;
              &lt;/li&gt;
              &lt;li class="has-submenu"&gt;
                &lt;a href=""&gt;Link with children&lt;/a&gt;
                &lt;ul class="submenu"&gt;
                  &lt;li class="has-submenu"&gt;
                    &lt;a href=""&gt;Child link with children&lt;/a&gt;
                    &lt;ul class="submenu"&gt;
                      &lt;li&gt;
                        &lt;a&gt;Deep child link&lt;/a&gt;
                      &lt;/li&gt;
                    &lt;/ul&gt;
                  &lt;/li&gt;
                &lt;/ul&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/nav&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <h2>Content</h2>
    <p>
      There are several types of Country Header:
    </p>
    <ul>
      <li>Without Progress Bar and With Progress Bar</li>
      <li>Without overflow menu functionality and with overflow menu functionality</li>
    </ul>
    <h2>Behaviors</h2>
    <h3>Setting up overflow</h3>
    <p>
      The overflow functionality works by calculating the space available for the main menu, adding up the width of all the menu items,
      and if that width is greater than available space, it moves its into the menu__overflow__container until everything fits.
      The most important parts are making sure the main menu ul has an overflow class applied, and that the menu__overflow__container
      div exists in the right place. Then just make sure the right css files and the navigation.min.js file is loaded.
    </p>
    <pre>
      <code>
        &lt;div class="cell small-1 large-auto align-content-middle top-center"&gt;
          &lt;ul class="overflow"&gt;
            Menu items go here. It is important to add the overflow class to the parent ul,
            otherwise overflow wont trigger.
          &lt;/ul&gt;
        &lt;/div&gt;

        top-right container here...

        &lt;div class="grid-container full menu__overflow__container"&gt;
          &lt;ul class="overflow"&gt;
            Add this menu__overflow__container section after the top-right div and before
            the mobile-nav div.
          &lt;/ul&gt;
        &lt;/div&gt;

        mobile nav container here ...
      </code>
    </pre>
    <h2>States</h2>
    <p>
      There are three states: Default, Tablet, and Mobile.
    </p>
    <ol>
      <li>
        <strong>Default</strong>
        <ul>
          <li>Without Progress Bar</li>
          <li>With Progress Bar</li>
          <li>Without overflow menu functionality</li>
          <li>With overflow menu functionality</li>
        </ul>
      </li>
      <li>
        <strong>Tablet</strong>
        <ul>
          <li>Without Progress Bar</li>
          <li>With Progress Bar</li>
          <li>Without overflow menu functionality</li>
          <li>With overflow menu functionality</li>
        </ul>
      </li>
      <li>
        <strong>Mobile</strong>
        <ul>
          <li>Without Progress Bar</li>
          <li>With Progress Bar</li>
        </ul>
      </li>
    </ol>
    <h2>Usage</h2>
    <h3>Default Dropdown Usage</h3>
    <ol>
      <li>Copy HTML from the HTML tab of canvas and also include the css and Js files listed below.</li>
      <li>Initialize the navigationInitialize(), langSwitch() function in your js file’s document ready</li>
    </ol>
    <h3>Dropdown menu Usage</h3>
    <ol>
      <li>Copy HTML from the HTML tab of canvas and also include the css and Js files listed below.</li>
      <li>Initialize the navigationInitialize(), navigationMultiLevelEdgeDetection(), and langSwitch() function in your js file’s document ready. For example:</li>
    </ol>
    <pre>
      <code>
        $(document).ready(function(){
          navigationInitialize();
          navigationMultiLevelEdgeDetection();
        });
      </code>
    </pre>
    <h3>Overflow Usage:</h3>
    <ol>
      <li>In addition to the steps above, Initialize the navigationOverFlow() function in your js file’s document ready.</li>
    </ol>
    <h2>CSS and JS References</h2>
    <h4>CSS:</h4>
    <ul>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-site-header.min.css</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu-multi-level.min.css</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css</li>
      <li>If adding the menu overflow functionality, add the style from:</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu-overflow.min.css</li>
    </ul>
    <h4>JS:</h4>
    <ul>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</li>
    </ul>
    <h2>Interactions</h2>
    <ul>
      <li>By clicking on the CTA Link, the page is directed to the subsequent link page.</li>
      <li>By clicking on the search icon, the search tab opens.</li>
      <li>Hovering over the main menu items will display dropdown items, if they exist.</li>
      <li>If overflow is enabled, clicking on the 3 dot button will open overflow container.</li>
    </ul>
    <h2>Changelog</h2>
    <p>1.3 — Released component</p>
  `,
    },
  },
};