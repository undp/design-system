import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Author } from "./AuthorColumn";
import authorImage from "../../../../assets/images/author.png";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
        ],
      };
      return engText.data;
    case "ukrainian":
      const ukText = {
        data: [
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
          {
            Authorlabel: "Наталiя Бойко",
            Authortext: "Керівник проекту",
          },
        ],
      };
      return ukText.data;
    case "arabic":
      const arabicText = {
        data: [
          {
            Authorlabel: "تيريزا ويب",
            Authortext: "مدير مشروع المرونة",
          },
          {
            Authorlabel: "تيريزا ويب",
            Authortext: "مدير مشروع المرونة",
          },
          {
            Authorlabel: "تيريزا ويب",
            Authortext: "مدير مشروع المرونة",
          },
          {
            Authorlabel: "تيريزا ويب",
            Authortext: "مدير مشروع المرونة",
          },
          {
            Authorlabel: "تيريزا ويب",
            Authortext: "مدير مشروع المرونة",
          },
        ],
      };
      return arabicText.data;
    case "burmese":
      const burmeseText = {
        data: [
          {
            Authorlabel: "ထရီဇာဝက်ဘ်",
            Authortext: "ကြံ့ခိုင်မှုစီမံကိန်းမန်နေဂျာ",
          },
          {
            Authorlabel: "ထရီဇာဝက်ဘ်",
            Authortext: "ကြံ့ခိုင်မှုစီမံကိန်းမန်နေဂျာ",
          },
          {
            Authorlabel: "ထရီဇာဝက်ဘ်",
            Authortext: "ကြံ့ခိုင်မှုစီမံကိန်းမန်နေဂျာ",
          },
          {
            Authorlabel: "ထရီဇာဝက်ဘ်",
            Authortext: "ကြံ့ခိုင်မှုစီမံကိန်းမန်နေဂျာ",
          },
          {
            Authorlabel: "ထရီဇာဝက်ဘ်",
            Authortext: "ကြံ့ခိုင်မှုစီမံကိန်းမန်နေဂျာ",
          },
        ],
      };
      return burmeseText.data;
    case "japanese":
      const japaneseText = {
        data: [
          {
            Authorlabel: "テレサウェッブ",
            Authortext: "レジリエンスプロジェクトマネージャー",
          },
          {
            Authorlabel: "テレサウェッブ",
            Authortext: "レジリエンスプロジェクトマネージャー",
          },
          {
            Authorlabel: "テレサウェッブ",
            Authortext: "レジリエンスプロジェクトマネージャー",
          },
          {
            Authorlabel: "テレサウェッブ",
            Authortext: "レジリエンスプロジェクトマネージャー",
          },
          {
            Authorlabel: "テレサウェッブ",
            Authortext: "レジリエンスプロジェクトマネージャー",
          },
        ],
      };
      return japaneseText.data;
    default:
      const dummy = {
        data: [
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
          {
            Authorlabel: "Theresa Webb",
            Authortext: "Resilience Project Manager",
          },
        ],
      };
      return dummy.data;
  }
};


export default {
  title: "Components/UI components/Authors/Author",
  argTypes: {
    Image: {
      name: "Display image",
      options: ["True", "False"],
      control: { type: "inline-radio" },
    },
    Number: {
      name: "Number of Items",
      options: ["One", "Two", "Three", "Four", "Five"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Image: "True",
    Number: "One",
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Authors</h1>

            <p>The author component gives an overview of the authors of an article/photo.</p>

            <h3>Overview</h3>

            <p>The Author component highlights the author(s)’s name, designation, and photo for an article or story they have contributed to on the site.</p>

            <h4>When to use:</h4>

            <p>The author component is primarily used to give credit to any article or story they have published on the site.</p>

            <h3>Formatting</h3>

            <h4>Default</h4>

            <p>The author component consists of a single author or multiple authors. If the author has a profile picture, it is displayed as follows:</p>

            <p>If the author does not have a profile photo or more authors are contributing to a single article/photo, then their information is displayed as follows:</p>

            <h4>Multiple authors</h4>

            <p>If there are up to 3 authors, they are displayed horizontally.</p>

            <p>If there are 4 or more authors, their profile pictures are not displayed.</p>

            <p>On smaller devices, the authors are stacked vertically if there are less than 4.</p>

            <p>If there are more than 4 authors, on smaller screens, they are displayed as follows:</p>

            <h3>Content</h3>

            <p>The author component contains the first and last name, profile picture (optional), and designation of the author(s).</p>

            <h3>Behaviors</h3>

            <h4>States</h4>

            <p>The author component will have a minimum of 1 author and can expand to as many authors as needed. There can be combinations of authors with or without profile photos.</p>

            <p>The following behavior modifiers are available:</p>

            <Canvas>
              <Story name="Author">
                {(args, { globals: { locale } }) => {
                  const caption = getCaptionForLocale(locale);
                  return (
                    <Author
                      authorImage={authorImage}
                      alt="Headshot of XYZ"
                      data={caption}
                      {...args}
                  ></Author>
                  );
                }}
              </Story>
            </Canvas>

            <h3>Usage:</h3>

            <ul>
              <li>Choose the author with or without an image from image control and several authors to display from number control from the canvas control tab.</li>
              <li>Copy the HTML from the HTML tab and also include the below-listed CSS file.</li>
            </ul>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>

            <p>Add the base layout style from:</p>

            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-column.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-column.min.css</a></li>
            </ul>

            <h4>JS:</h4>

            <p>NA</p>

            <h3>Interactions</h3>

            <ul>
              <li>The author component can be used with or without a link. When linking, the entire block—image, name, designation—should be clickable.</li>
            </ul>

            <h3>Changelog</h3>

            <p>1.0 — Released component</p>

        </>
      ),
    },
  },
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Author
      authorImage={authorImage}
      alt="Headshot of XYZ"
      data={caption}
      {...args}
    ></Author>
  );
}

export const AuthorStory = Template.bind({});
AuthorStory.storyName = "Author";
