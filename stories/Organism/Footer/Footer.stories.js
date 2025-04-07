import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Footer } from "./Footer";
import logo from "../../assets/images/undp-logo-blue.svg";
import logowhite from "../../assets/images/undp-logo-white.svg";
import { getCaptionForLocale } from "./FooterUtils";

export default {
  title: "Components/UI components/Footer",
  argTypes: {
    variant: {
      options: ["default", "simple"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["default", "inverted"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    variant: "default",
    color: "default",
  },
  parameters: {
    docs: {
      page: () => (
        <>
<h1>Footer</h1>

<p>A footer has a list of information about the website at the bottom of the page.</p>

<h3>Overview</h3>

<p>A footer has all the information or other web pages that are there in the website. Footer is treated as its own section of the web page that is separated from the header, content, and sidebars. This includes the copyright information for the website, the name of the website's author, the business name, and address.</p>

<h4>When to use:</h4>

<p>When a standardized footer is required to be placed at the bottom of a webpage.</p>

<h3>Formatting</h3>

<h4>Default</h4>

<p>Footer in default state has a blue color background, which includes a newsletter subscription section, a company name logo in white background, and a list of internal webpages, search, and globe icons. There are also social media icons like LinkedIn, Twitter, Facebook, Instagram, and YouTube. Additionally, there are copyright and terms sections of the company.</p>

<h3>Content</h3>

<p>There are two types of footers: Default and Simple.</p>

<ul>
  <li><strong>Default</strong>: This has a blue background with a newsletter subscription section, company name logo in white background, internal webpage links, search and global icons, along with social media logos.</li>
  <li><strong>Simple</strong>: This has a blue background with the logo in white background with the company name. It will only include social media logos, terms, and copyright sections.</li>
</ul>

<h3>Behaviors</h3>

<h4>States</h4>

<p>Footer has two states: Default and Inverted.</p>

<ul>
  <li><strong>Default</strong>: In the default state, the footer background will be blue, and the text will be white.</li>
  <li><strong>Desktop view</strong>: In this view, the footer appears in a rectangle shape.</li>
  <li><strong>Mobile view</strong>: In this view, the footer will appear in a vertical-shaped box.</li>
  <li><strong>Inverted</strong>: In the inverted state, the footer has a white background, and the text will be blue, while the rest remains the same as the default state.</li>
</ul>

<Canvas>
  <Story
    name="Footer"
  >
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      const menuData =
        args["variant"] === "simple" ? caption.menudata2 : caption.menudata;
      return (
        <Footer
          src={logo}
          srctwo={logowhite}
          logolink="https://www.undp.org"
          headerText={caption.headerText}
          alt={"UNDP Logo"}
          element="input"
          type="email"
          required="required"
          mode="form-email"
          errorText={caption.errorLabel}
          label={caption.labelname}
          button={caption.buttonname}
          placeholder={caption.placeholdername}
          menutitle={caption.pageTitle}
          data={caption.footerdata}
          copyright={caption.copyright}
          menudata={menuData}
          {...args}
        ></Footer>
      );
    }}
  </Story>
</Canvas>

<h3>Usage:</h3>

<ul>
  <li>Choose either Default or Inverted from the control tab of the canvas.</li>
  <li>Copy HTML from the HTML tab and include the below-listed CSS and JS files.</li>
  {/* <li>Initialize the accordion by calling <code>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</code> function to make the links an accordion on mobile screens.</li> */}
</ul>
<h4>Method 1: Automatic Initialization (Recommended)</h4>
<ul>
   <li>Include the required CSS and JS files listed in the CSS and JS References section.</li>
   <li>Include the component initializer script:
      <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js"&gt;&lt;/script&gt;</code>
   </li>
   <li>Add the required data attribute to your footer element:
      <code>data-undpds-component="footer"</code>
   </li>
   <li>The footer will initialize automatically when the page loads - no JavaScript calls required!</li>
</ul>
<h4>Method 2: Manual Initialization (Traditional)</h4>
<ul>
   <li>Include the required CSS and JS files listed in the CSS and JS References section.</li>
   <li>Call the initialization function directly in your JavaScript:
      <code>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</code>
   </li>
</ul>
<h3>CSS and JS References</h3>

<h4>CSS:</h4>

<p>Add the base layout style from:</p>

<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css</a></li>
</ul>

<h4>JS:</h4>

<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js</a></li>
</ul>

<h3>Interactions</h3>

<p>No interactions</p>

<h3>Changelog</h3>

<p>1.0 — Released component</p>

        </>
      )
    },
  },
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  const menuData =
    args["variant"] === "simple" ? caption.menudata2 : caption.menudata;
  return (
    <Footer
      src={logo}
      srctwo={logowhite}
      logolink="https://www.undp.org"
      headerText={caption.headerText}
      alt={"UNDP Logo"}
      element="input"
      type="email"
      required="required"
      mode="form-email"
      errorText={caption.errorLabel}
      label={caption.labelname}
      button={caption.buttonname}
      placeholder={caption.placeholdername}
      menutitle={caption.pageTitle}
      data={caption.footerdata}
      copyright={caption.copyright}
      menudata={menuData}
      {...args}
    ></Footer>
  );
}

export const FooterStory = Template.bind({});
