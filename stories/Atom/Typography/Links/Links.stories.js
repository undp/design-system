import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Link } from './Links';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { detail: 'Default link' };
    case 'ukrainian':
      return { detail: 'Посилання' };
    case 'arabic':
      return { detail: 'الارتباط الافتراضي' };
    case 'burmese':
      return { detail: 'မူရင်းလင့်ခ်' };
    case 'japanese':
      return { detail: 'デフォルトのリンク' };
    default:
      return { detail: 'Default link' };
  }
};

export default {
  title: 'Foundation/Typography/Links',
  component: Link,
  parameters: {
    docs: {
      page: () => (
        <>
        <h1>Link</h1>
          <p>The Link component is used to attach links to the text component.</p>

          <h3>Overview</h3>
          <p>The Link component defines a hyperlink that is used to link one page to another.</p>

          <h4>When to use:</h4>
          <p>When hyperlinks are to be attached.</p>

          <h3>Formatting</h3>

          <h4>Default</h4>
          <p>The Link component consists of the link with a red horizontal line below it.</p>

          <h3>Behaviors</h3>

          <h4>States</h4>
          <p>There are three states in the Link component: Desktop & Laptop. The component is compatible with tablets and mobile.</p>
          <p>Desktop & Laptop: The font size of the Link is biggest in Desktop and Laptop.</p>

          <Canvas>
            <Story name="Links">
              {(args, { globals: { locale } }) => {
                const caption = getCaptionForLocale(locale);
                return (
                  <>
                    <Link label={caption.detail} {...args}></Link>
                  </>
                );
              }}
            </Story>
          </Canvas>

          <h3>Usage</h3>
          <ul>
            <li>Copy the HTML from Canvas page</li>
          </ul>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>
          <p>Add the base layout style from</p>
          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
          </ul>

          <h4>JS:</h4>
          <p>NA</p>

          <h3>Interactions</h3>
          <p>By clicking on the link, the current page is forwarded to the next page.</p>

          <h3>Changelog</h3>
          <p>1.0 — Released component</p>

        </>
      )
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <Link label={caption.detail} {...args} />;
}

export const LinkStory = Template.bind({});
LinkStory.storyName = 'Link';