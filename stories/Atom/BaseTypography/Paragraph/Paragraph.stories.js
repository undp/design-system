import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { P } from './Paragraph';
import { getCaptionForLocale } from './ParagraphUtils';

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
    <li>Add the base layout style from <a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css" target="_blank">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
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
