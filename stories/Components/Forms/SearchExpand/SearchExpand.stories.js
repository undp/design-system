import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { SearchExpand } from './SearchExpand';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { label: 'Category', value: 'category' };
    case 'ukrainian':
      return { label: 'Категорія', value: 'Категорія' };
    case 'arabic':
      return { label: 'فئة', value: 'فئة' };
    case 'burmese':
      return { label: 'အမျိုးအစား', value: 'အမျိုးအစား' };
    case 'japanese':
      return { label: 'カテゴリー', value: 'カテゴリー' };
    default:
      return { label: 'Category' };
  }
};

export default {
  title: 'Components/Forms/Search expand',
  component: SearchExpand,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Search expand</h1>
            <p>Input will increase on search click.</p>

            <h3>Overview</h3>
            <p>On Search icon click, input elements of type <code>text</code> will increase and be clickable to type. Upon typing the text, a close button will appear on the right side. On close icon click, the typed data will be erased from the input.</p>

            <h4>When to use:</h4>
            <ul>
              <li>When the user needs to search.</li>
            </ul>

            <h3>Behaviors</h3>

            <h4>States</h4>
            <p>The search expand feature has defaulted, active, and hover states which indicate that an option is to be selected or already selected.</p>

            <p>The following behavior modifiers are available:</p>
            <ol>
              <li><strong>Default state:</strong> The search icon is displayed and can be selected.</li>
              <li><strong>Text on input state:</strong> A close icon appears alongside the search icon and input field.</li>
            </ol>

              <Canvas>
                <Story name="SearchExpand">
                  {(args) => (
                    <SearchExpand
                      label={caption.label}
                      value={caption.value}
                      id="edit-search"
                      {...args}
                    />
                  )}
                </Story>
              </Canvas>

            <h3>Usage</h3>
            <p>Copy the HTML from the HTML tab of the canvas and include the JS and CSS files mentioned below.</p>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>
            <p>Add the base layout style from:</p>
            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/search-expand.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/search-expand.min.css</a></li>
            </ul>

            <h4>JS:</h4>
            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/expand-search.min.js" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/expand-search.min.js</a></li>
            </ul>

            </>
          )
        },
      },
    };

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <SearchExpand
      label={caption.label}
      value={caption.value}
      id="edit-search"
      {...args}
    />
  );
}

export const SearchExpandStory = Template.bind({});
SearchExpandStory.storyname = 'Search expand';

