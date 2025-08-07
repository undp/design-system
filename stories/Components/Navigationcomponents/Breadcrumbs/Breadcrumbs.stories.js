import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { Breadcrumbcomponent } from "./Breadcrumbs";
import { getCaptionForLocale } from "./BreadcrumbsUtils";


export default {
  title: 'Components/Navigation components/Breadcrumbs',
  argTypes: {
    Color: {
      options: ["Black", "White"],
      control: { type: "inline-radio" },
    },
  },
  parameters: {
      backgrounds: {
        default: "Light gray",
          values: [
            { name: "Light gray", value: "#D4D6D8" },
            { name: "Dark gray", value: "#232e3d" },
            { name: "White", value: "#FFFFFF" },
          ],
        },
        args: {
          backgrounds: {
            default: "Light gray",
          },
          Color: "Black",
        },
      docs: {
        page: () => (
          <>
            <h1>Breadcrumbs</h1>
              <p>The Breadcrumb provides links to each of the previously visited pages and indicates the location of the current page.</p>

              <h3>Overview</h3>
              <p>The Breadcrumb component creates navigation links for the current pathname based on an opinionated configuration object. The idea behind this component is to drop it anywhere with minimal or no configuration and get breadcrumbs generated automatically.</p>

              <h4>When to use:</h4>
              <ul>
                <li>To indicate the location of the current page and to navigate back to each of the previously visited pages.</li>
              </ul>

              <h3>Formatting</h3>

              <h4>Default</h4>
              <p>It is present under the main navigation bar.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>
              <p>There is only a Default state.</p>

              <Canvas>
                <Story name="Breadcrumbs">
                  {(args) => (
                    <Breadcrumbcomponent
                      data={getCaptionForLocale("english")}
                      {...args}
                    />
                  )}
                </Story>
              </Canvas>

              <h3>Usage</h3>
              <ol>
                <li>Copy the HTML from the HTML tab of canvas and also include the JS and CSS files listed below.</li>
                <li>If you want to add left-right animation, then add <code>data-viewport="true"</code> attribute to your HTML element and include the <code>viewport.min.js</code> file.</li>
              </ol>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base layout style from:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/breadcrumbs.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/breadcrumbs.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>
              <p>By clicking on the breadcrumb, the current page is redirected to the respective previous page.</p>

              
              

          </>
        )
      }
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Breadcrumbcomponent
      data={caption}
      {...args}
    />
  );
}

export const Breadcrumbs = Template.bind({});
Breadcrumbs.parameters = {
  backgrounds: { default: 'Light gray' },
  docs: {
    story: {
      inline: false,
      iframeHeight: '100%',
    },
  },
}
Breadcrumbs.storyName = "Breadcrumbs";


