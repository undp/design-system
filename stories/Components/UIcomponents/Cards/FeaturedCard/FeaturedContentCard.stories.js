import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { FeaturedContentCard } from './FeaturedContentCard';
import img from '../../../../assets/images/card2.jpg';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        featuredcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
          },
        ],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        featuredcontentdata: [
          {
            contenttile: "ТЕГ ВМІСТУ",
            contentname: "Програма ПРООН із підвищення стійкості та відновлення",
            descriptionText:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
            button: "ЧИТАТИ ДАЛІ",
            imgback: img,
          },
        ],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        featuredcontentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            imgback: img,
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        featuredcontentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            imgback: img,
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        featuredcontentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            imgback: img,
          },
        ],
      };
      return japaneseText;
    default:
      const dummy = {
        featuredcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
          },
        ],
      };
      return dummy;
  }
};

export default {
  title: 'Components/UI components/Cards/Featured card',
  argTypes: {
    image: {
      name: 'Image',
      options: ['image', 'color'],
      control: { type: 'inline-radio' },
    },
    size: {
      name: 'Size variant',
      options: ['large', 'medium', 'small'],
      control: { type: 'inline-radio' },
    },
    hovercolor: {
      name: 'Hover accent color',
      options: ['global', 'yellow', 'red', 'green', 'blue'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    image: 'image',
    size: 'medium',
    hovercolor: 'global',
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Featured Content Card</h1>

          <p>The Featured Content Card components are cards with information and/or image.</p>

          <h3>Overview</h3>

          <p>The Featured Content Card component defines a card of information with some items - Tag, Title, Image, Paragraph, and CTA Link. It uses a grid system to manage the different sizes. It is a multi-usage component that creates boxes that are usually teasing some kind of content.</p>

          <h4>When to use:</h4>

          <p>When a card with data, CTA link, and image is to be displayed.</p>

          <h3>Formatting</h3>

          <h4>Default</h4>

          <p>It consists of a grid with title, paragraph, CTA link, and/or image.</p>

          <h3>Content</h3>

          <p>There are two types of featured card components: Featured Card with Image and Featured Card without Image. It consists of three sizes: Small, Default, and Large.</p>

          <ul>
            <li>Small</li>
            <li>Default</li>
            <li>Large</li>
          </ul>

          <h3>Behaviors</h3>

          <h4>States</h4>

          <p>There are two states in Featured Cards: Default, Hover.</p>

          <ul>
            <li><strong>Default:</strong> It shows the title, paragraph, CTA link, and image for Featured Card with Image and title, paragraph, and CTA Link for Featured Card without Image.</li>
            <li><strong>Hover:</strong> In hover state, when the mouse hovers over the Featured Card with Image, the image is displayed. While for Featured Cards without Image, when the mouse hovers over it, yellow color is displayed without image.</li>
          </ul>

          <h4>Featured card</h4>

          <Canvas>
            <Story name="Featured card">
              {(args, { globals: { locale, accent } }) => {
                const caption = getCaptionForLocale(locale);
                return (
                  <FeaturedContentCard
                    data={caption.featuredcontentdata}
                    headertext={caption.headertext}
                    {...args}
                  ></FeaturedContentCard>
                );
              }}
            </Story>
          </Canvas>

          <h3>Usage</h3>

          <ul>
            <li>From the control tab of canvas, choose Image control either Image or Color, Size control either Large, Medium or Small, and Hover color from Yellow, Red, Green or Blue.</li>
            <li>Copy the HTML from the HTML tab and include the CSS and JS files listed below.</li>
            <li>If you want to add left-right animation then add data-viewport=”true” attribute to your HTML element and include viewport.min.js.</li>
          </ul>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>

          <p>Add the base layout style from:</p>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css</a></li>
          </ul>

          <h4>JS:</h4>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
          </ul>

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
    <FeaturedContentCard
      data={caption.featuredcontentdata}
      headertext={caption.headertext}
      {...args}
    ></FeaturedContentCard>
  );
}

export const FeaturedContentCardStory = Template.bind({});
FeaturedContentCardStory.storyName = 'Featured Card';
