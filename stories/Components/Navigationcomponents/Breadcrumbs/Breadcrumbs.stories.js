import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Breadcrumbcomponent } from "./Breadcrumbs";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return [
        { text: "Home" },
        { text: "Second-level" },
        { text: "Third-level" },
        { text: "Page title" },
      ];
    case "ukrainian":
      return [
        { text: "Home" },
        { text: "Другий рівень" },
        { text: "Третій рівень" },
        { text: "Назва сторінки" },
      ];
    case "arabic":
      return [
        { text: "الصفحة الرئيسية" },
        { text: "المستوى الثاني" },
        { text: "المستوى الثالث" },
        { text: "عنوان الصفحة" },
      ];
    case "burmese":
      return [
        { text: "အိမ်" },
        { text: "ဒုတိယအဆင့်" },
        { text: "တတိယအဆင့်" },
        { text: "စာမျက်နှာခေါင်းစဉ်" },
      ];
    case "japanese":
      return [
        { text: "家" },
        { text: "セカンドレベル" },
        { text: "第3レベル" },
        { text: "ページタイトル" },
      ];
    default:
      return [
        { text: "Home" },
        { text: "Second-level" },
        { text: "Third-level" },
        { text: "Page title" },
      ];
  }
};

export const parameters = {
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
  },
  args: {
    Color: "Black",
  },
};

export const BreadcrumbsComponent = () => (
  <>
    <Meta
      title="Components/Navigation components/Breadcrumbs"
      argTypes={{
        Color: {
          options: ["Black", "White"],
          control: { type: "inline-radio" },
        },
      }}
      parameters={{
        backgrounds: {
          default: "Light gray",
          values: [
            { name: "Light gray", value: "#D4D6D8" },
            { name: "Dark gray", value: "#232e3d" },
            { name: "White", value: "#FFFFFF" },
          ],
        },
      }}
      args={{
        Color: "Black",
      }}
    />

    <h1>Breadcrumbs</h1>

    <p>The Breadcrumb provides links to each of the previously visited pages and indicates the location of the current page.</p>

    <h2>Overview</h2>

    <p>The Breadcrumb component creates navigation links for the current pathname based on an opinionated configuration object. The idea behind this component is to drop it anywhere with minimal or no configuration and get breadcrumbs generated automatically.</p>

    <h3>When to use:</h3>

    <ul>
      <li>To indicate the location of the current page and to navigate back to each of the previously visited pages.</li>
    </ul>

    <h2>Formatting</h2>

    <p>Default</p>

    <p>It is present under the main navigation bar.</p>

    <h2>Behaviors</h2>

    <h3>States</h3>

    <p>There is only a Default state.</p>

    <Canvas>
      <Story
        name="Breadcrumbs"
        parameters={{ backgrounds: { default: "Light gray" } }}
      >
        {(args, { globals: { locale } }) => {
          const caption = getCaptionForLocale(locale);
          return (
            <Breadcrumbcomponent data={caption} {...args}></Breadcrumbcomponent>
          );
        }}
      </Story>
    </Canvas>

    <h2>Usage</h2>

    <ol>
      <li>Copy the HTML from the HTML tab of canvas and also include the js and css files listed below.</li>
      <li>If you want to add left-right animation then add data-viewport=”true” attribute to your HTML element and include viewport.min.js file.</li>
    </ol>

    <h3>CSS and JS References</h3>

    <h4>CSS:</h4>

    <ul>
      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css</a></li>
    </ul>

    <h4>JS:</h4>

    <ul>
      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
    </ul>

    <h2>Interactions</h2>

    <ul>
      <li>By clicking on the breadcrumb, the current page is redirected to the respective previous page.</li>
    </ul>

    <h2>Changelog</h2>

    <p>1.0 — Released component</p>
  </>
);

export default {
  title: 'Components/Navigation components/Breadcrumbs',
  parameters,
};
