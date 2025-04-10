import { Meta, Story, Canvas, Anchor } from "@storybook/addon-docs";
import { Homepagehero } from "./HomePageHero";
import { Homepageherosplit } from "./HomePageHeroSplit";
import { Homepageherooption } from "./HomePageHeroOption";
import { getCaptionForLocale } from "./HomePageHeroUtils";

export default {
  title: "Components/UI components/Hero/Homepage",
  argTypes: {
    variant: {
      options: ["video", "image"],
      control: { type: "radio" },
    },
  },
  args: {
    variant: "image",
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Homepage Hero - Full-width</h1>

              <p>The Homepage Hero images are large sized images with text in front of the image and present at the top of the homepage.</p>

              <h3>Overview</h3>

              <p>The homepage Hero component is a multi-usage component which creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle and Breadcrumb. Animation and atom tags are used for creating this card.</p>

              <h4>When to use:</h4>

              <p>When the website needs to grab the user's attention to a particular page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title, subtitle, image and chip.</p>

              <h3>Content</h3>

              <p>The Full-width homepage consists of an Image and title, subtitle, breadcrumbs and chip is in front of the image. The entire grid is covered with the image.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states in the Full-width homepage- Default and Mobile.</p>

              <ol>
                  <li>Default: It consists of a horizontal image</li>
                  <li>Mobile: It consists of a vertical image.</li>
              </ol>

              <Canvas of={HomePageHeroStory} />

              <h3>Usage:</h3>

              <ul>
                  <li>Choose the variant either video or Image from the control tab on canvas.</li>
                  <li>Grab the HTML from the HTML tab and also include css and js files listed below.</li>
                  <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code> file.</li>
                  {/* <li>If you want the image to expand size on scroll then include <code>animation.min.js</code> and initialize <code>expandToSize('.homepage-hero-full')</code>.</li> */}
              </ul>
              <h4>Method 1: Automatic Initialization (Recommended)</h4>
              <ul>
                <li>Include <code>animation.min.js</code> in your HTML.</li>
                <li>Include the component initializer script:
                  <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js"&gt;&lt;/script&gt;</code>
                </li>
                <li>Add the required data attributes to your hero element:
                  <code>data-undpds-component="expandToSize" data-selector=".homepage-hero-full"</code>
                </li>
                <li>The expand effect will initialize automatically when the page loads - no JavaScript calls required!</li>
              </ul>
              <h4>Method 2: Manual Initialization (Traditional)</h4>
              <ul>
                <li>Include <code>animation.min.js</code> in your HTML.</li>
                <li>Call the initialization function directly in your JavaScript:
                  <code>expandToSize('.homepage-hero-full');</code>
                </li>
              </ul>

              
              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from:</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepagehero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepagehero.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <p>When the page is opened, the contents on the card appear over the image.</p>

              <Anchor storyId="components-ui-components-hero--homepage-hero-tall-image"></Anchor>

              <h1>Homepage Hero - Tall Image</h1>

              <p>The tall homepage Hero component is a multi-usage component which creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle and Breadcrumb. Animation and atom tags are used for creating this card.</p>

              <h3>When to use:</h3>

              <p>When the website needs to grab the user's attention to a particular page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title, subtitle, image and chip.</p>

              <h3>Content</h3>

              <p>The Tall homepage image consists of an Image on one side of the grid and title, subtitle, breadcrumbs and chip on the other side of the grid. Half of the grid is covered with an image and the other half with content.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states in the Tall Image homepage- Default and Mobile.</p>

              <ol>
                  <li>Default: It consists of an image on either side of the page and content on the other side of the page.</li>
                  <li>Mobile: It consists of title and subtitle in the top, image below it and the chip in the bottom in vertical position.</li>
              </ol>

              <Canvas of={HomePageHeroSplitStory} />

              <h3>Usage:</h3>

              <ul>
                  <li>Choose the variant either video or Image from the control tab on canvas.</li>
                  <li>Grab the HTML from the HTML tab and also include css and js files listed below.</li>
                  <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code> file.</li>
              </ul>
              <h4>Method 1: Automatic Initialization (Recommended)</h4>
              <ul>
                <li>Include <code>animation.min.js</code> in your HTML.</li>
                <li>Include the component initializer script:
                  <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js"&gt;&lt;/script&gt;</code>
                </li>
                <li>Add the required data attributes to your hero element:
                  <code>data-undpds-component="expandToSize" data-selector=".homepage-hero-full"</code>
                </li>
                <li>The expand effect will initialize automatically when the page loads - no JavaScript calls required!</li>
              </ul>
              <h4>Method 2: Manual Initialization (Traditional)</h4>
              <ul>
                <li>Include <code>animation.min.js</code> in your HTML.</li>
                <li>Call the initialization function directly in your JavaScript:
                  <code>expandToSize('.homepage-hero-full');</code>
                </li>
              </ul>
              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from <code>dist/css/base-minimal.min.css</code>:</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js</a> (for automatic initialization)</li>
              </ul>

              <h3>Interactions</h3>

              <p>When the page is opened, the contents on the card appear beside the image.</p>

              <Anchor storyId="components-ui-components-hero--homepage-hero-wide-image"></Anchor>

              <h1>Homepage hero - Wide image</h1>

              <p>The Homepage Hero wide images are large sized at the bottom right of the grid which is present at the top of the homepage.</p>

              <h3>Overview</h3>

              <p>The wide homepage Hero component is a multi-usage component which creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle and Breadcrumb. Animation and atom tags are used for creating this card.</p>

              <h4>When to use:</h4>

              <p>When the website needs to grab the user's attention to a particular page.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of a grid with title, subtitle, image and chip.</p>

              <h3>Content</h3>

              <p>The Wide homepage image consists of an image situated at the bottom right or middle of the grid. The title is at the top of the grid and subtitles with a chip beside the image.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are two states in the wide Image homepage- Default and Mobile.</p>

              <ol>
                  <li>Default: It consists of an image situated at the bottom right of the grid. The title is at the top and subtitle with chip beside the image.</li>
                  <li>Mobile: It consists of title and subtitle in the top, image below it and the chip in the bottom of the grid.</li>
              </ol>

              <Canvas of={HomePageHeroOptionStory} />


              <h3>Usage:</h3>

              <ul>
                  <li>Choose the variant either video or Image from the control tab on canvas.</li>
                  <li>Grab the HTML from the HTML tab and also include css and js files listed below.</li>
                  <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code> file.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>

              <p>Add the base layout style from <code>dist/css/base-minimal.min.css</code>:</p>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepagehero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepagehero.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
              </ul>

              <h4>JS:</h4>

              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <p>When the page is opened, the contents of the card appears beside the image.</p>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
}
}

const HomePageHeroTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Homepagehero
      title={caption.titlename}
      content={caption.text}
      button={caption.btnlabel}
      {...args}
    ></Homepagehero>
  );
}

const HomePageHeroSplitTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Homepageherosplit
      title={caption.titlename}
      content={caption.text}
      button={caption.btnlabel}
      {...args}
    ></Homepageherosplit>
  );
}

const HomePageHeroOptionTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Homepageherooption
      title={caption.titlename}
      content={caption.text}
      button={caption.btnlabel}
      subtitle={caption.subtitle}
      imgsrc={caption.imgsrc}
      imgsrc2={caption.imgsrc2}
      imgalt={caption.imgalt}
      headingTop={caption.headingTop}
      {...args}
    ></Homepageherooption>
  );
}

export const HomePageHeroStory = HomePageHeroTemplate.bind({});
HomePageHeroStory.storyName = "Homepage Hero";

export const HomePageHeroSplitStory = HomePageHeroSplitTemplate.bind({});
HomePageHeroSplitStory.storyName = "Homepage Hero Split";

export const HomePageHeroOptionStory = HomePageHeroOptionTemplate.bind({});
HomePageHeroOptionStory.storyName = "Homepage Hero Option";
