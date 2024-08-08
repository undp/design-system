import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { SearchExpand } from './SearchExpand';

export const getCaptionForLocale = (locale) => {
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

export const parameters = {
  title: 'Components/Forms/Search expand',
};

export const SearchExpandComponent = () => (
  <>
    <Meta title="Components/Forms/Search expand" />

    <h1>Search expand</h1>

    <p>input will increase on search click</p>

    <h2>Overview</h2>

    <p>
      On Search icon click input elements of type <code>text</code> will increase and clickable to type. On type the text a close button on right side will show. On close icon click typed data will erase form input.
    </p>

    <h3>When to use:</h3>

    <p>When the user needs to search.</p>

    <h2>Behaviors</h2>

    <h3>States</h3>

    <p>
      The radio button has defaulted, active, and hovers states which indicates that an option is to be selected or already selected.
    </p>

    <h5>The following behavior modifiers are available:</h5>

    <ol>
      <li>
        Default state:
        The search icon is displayed that can be selected.
      </li>
      <li>
        Text on input state:
        A close icon along with search icon and input field.
      </li>
    </ol>

    <Canvas>
      <Story name="Search expand">
        {(args, { globals: { locale } }) => {
          const caption = getCaptionForLocale(locale);
          return <SearchExpand />;
        }}
      </Story>
    </Canvas>

    <h2>Usage</h2>

    <p>Copy the HTML from the HTML tab of canvas and include the Js and css files mentioned below.</p>

    <h2>CSS and JS References</h2>

    <h3>CSS:</h3>

    <ul>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/search-expand.min.css</li>
    </ul>

    <h3>JS:</h3>

    <ul>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/expand-search.min.js</li>
    </ul>

    <h2>Changelog</h2>

    <p>1.0 — Released component</p>
  </>
);

export default {
  title: 'Components/Forms/Search expand',
};
