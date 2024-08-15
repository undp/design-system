import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { P } from './Paragraph';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return {
        detail:
          'Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio, vel viverra ipsum. Sed pharetra varius dignissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu turpis quam. Nulla facilisi.',
      };
    case 'arabic':
      return {
        detail:
          'فقرة كبيرة lorem ipsum dolor sit amet، consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio، vel viverra ipsum. Sed pharetra varius gentissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu Turpis quam. نولا فاسيليسي.-',
      };
    case 'burmese':
      return {
        detail:
          'ကြီးမားသောစာပိုဒ် lorem ipsum dolor sit amet, consectetur adipiscing elit ။ Pellentesque porttitor mauris quis pulvinar ultrices Quisque eget placerat odio, vel viverra ipsum ။ Sed pharetra varius dignissim ဖြစ်သည်။ Cras varius luctus est amet sollicitudin ထိုင်သည်။ Donec eget dui eget nulla luctus ultrices ။ Sed eu turpis quam ။ Nulla facilisi',
      };
    case 'japanese':
      return {
        detail:
          '大きな段落はインターネット自体の苦痛です。 Pellentesque porttitor mauris quis pulvinarultrices。誰もが本物、または漫画自体を嫌う必要があります。しかし、矢筒は資産です。悲しみは大変なことです。住宅の必要性が痛みを必要としないまで。しかし、どれほど素晴らしくて醜い。複雑なことは何もありません。',
      };
    default:
      return {
        detail:
          'Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio, vel viverra ipsum. Sed pharetra varius dignissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu turpis quam. Nulla facilisi.',
      };
  }
};

export default {
  title: 'Foundation/Typography/P',
  parameters: {
    docs: {
      page: () => (
        <>
        <h1>Paragraph Component</h1>

<p>The Paragraph component defines a paragraph.</p>

<ul>
    <li>We can use the <code>p</code> tag in any component to define a paragraph.</li>
</ul>

<p>Typographic scale when using paragraph in text component:</p>

<Canvas>
  <Story name="P">
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return <P label={caption.detail}></P>;
    }}
  </Story>
</Canvas>

<h3>Usage:</h3>
<ul>
    <li>Copy the HTML from the HTML tab and include the CSS mentioned below.</li>
</ul>

<h3>CSS and JS References:</h3>

<h4>CSS:</h4>
<ul>
    <li>Add the base layout style from <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css" target="_blank">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
    <li>NA</li>
</ul>

        </>
      ),
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <P label={caption.detail}></P>;
}

export const ParagraphStory = Template.bind({});
ParagraphStory.storyName = 'P';
