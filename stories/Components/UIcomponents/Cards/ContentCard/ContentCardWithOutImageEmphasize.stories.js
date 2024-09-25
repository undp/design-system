import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { ContentCardWithOutImageEmphasize } from './ContentCardWithOutImageEmphasize';
import img from '../../../../assets/images/card-thumbnail.jpg';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        contentdata: [
          {
            contenttile: "CONTENT TAG",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
          },
        ],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        contentdata: [
          {
            contenttile: "ТЕГ ВМІСТУ",
            contentname: "Програма ПРООН із підвищення стійкості та відновлення",
            paragraph:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. Завдяки партнерству з національними, обласними та місцевими органами влади, громадянським суспільством і приватним сектором, ПРООН прагне підтримати Україну на шляху до подолання бідності, розвитку людського потенціалу, досягнення справедливих результатів, захисту довкілля і просування демократичного врядування.",
            button: "ЧИТАТИ ДАЛІ",
            link: "#",
            imgback: img,
          },
        ],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        contentdata: [
          {
            contenttile: "علامة المحتوى",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img,
            size: "medium-4",
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        contentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        contentdata: [
          {
            contenttile: "コンテンツタグ",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img,
          },
        ],
      };
      return japaneseText;
    default:
      const dummy = {
        contentdata: [
          {
            contenttile: "CONTENT TAG",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
          },
        ],
      };
      return dummy;
  }
};

export default {
  title: 'Components/UI components/Cards/Content card/Without image/With emphasize',
  argTypes: {
    Hovercolors: {
      name: 'Hover accent color',
      options: ['global', 'yellow', 'red', 'green', 'blue'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Hovercolors: 'global',
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Content Cards</h1>

          <p>The Content Card components are cards with information and/or image.</p>

          <h3>Overview</h3>

          <p>The Content Card component defines a card of information with some items. It is a multi-usage component that creates boxes that are usually teasing some kind of content.</p>

          <h4>When to use:</h4>

          <p>When a card with data, CTA link, and image is to be displayed.</p>

          <h3>Formatting</h3>

          <h4>Default</h4>

          <p>It consists of a title, paragraph, CTA link, and/or image with colors like green, yellow, red, and blue.</p>

          <h3>Content</h3>

          <p>There are two types of Content card components: Content Card with Image and Content Card without Image.</p>

          <h3>Behaviors</h3>

          <h4>States</h4>

          <h5>Content Card without Image:</h5>

          <p>There are two states in Content Cards: Default, Hover.</p>

          <p><strong>Default:</strong> It shows the title, paragraph, CTA link, and content card without Image and title, paragraph, and CTA Link.</p>

          <p><strong>Hover:</strong> In the hover state, when the mouse hovers over the Content Card, it will display the title, content card, and CTA Link. On hover, the background color is changing to the accent color of the page.</p>

          <p>Content Card without Image can be presented with the Emphasized title (without description). In this content, the card will display the title and CTA link. On hover, the background color will be changed to the accent of the page.</p>

          <Canvas>
            <Story name="ContentcardWithoutImageEmphasize">
            {(args, { globals: { locale, accent } }) => {
              const caption = getCaptionForLocale(locale);
              return (
                <ContentCardWithOutImageEmphasize
                  data={caption.contentdata}
                  {...args}
                ></ContentCardWithOutImageEmphasize>
              );
            }}
            </Story>
          </Canvas>

          <h3>Usage</h3>

          <ul>
            <li>Choose the Hover color and emphasize options from the control tab of canvas.</li>
            <li>Grab the HTML from the HTML tab and also include the CSS files listed below.</li>
            <li>Optional for grid layout: Add <code>.content-data</code> CSS class to the <code>.grid-x</code> on which you want inside items, set <code>margin-bottom</code> property CSS, and make sure to add foundation grid (<a href="https://get.foundation/sites/docs/grid.html">https://get.foundation/sites/docs/grid.html</a>) or any other grid system if you are creating a grid for the card.</li>
          </ul>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>

          <p>Add the base layout style from:</p>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a> - if “View more” button is used</li>
          </ul>

          <h4>JS:</h4>

          <p>NA</p>

          <h3>Interactions</h3>

          <ul>
            <li>Hover state applies to the image only.</li>
            <li>By clicking on the CTA Link, the associated page is opened.</li>
          </ul>

          <h3>Changelog</h3>

          <p>1.0 — Released component</p>

        </>
      ),
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
     <ContentCardWithOutImageEmphasize
          data={caption.contentdata}
          {...args}
    ></ContentCardWithOutImageEmphasize>
  );
}

export const ContentCardWithOutImageEmphasizeStory = Template.bind({});
ContentCardWithOutImageEmphasizeStory.storyName = 'With emphasize';