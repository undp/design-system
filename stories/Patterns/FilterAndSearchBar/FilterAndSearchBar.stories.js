import { Meta, Story, Canvas } from "@storybook/addon-docs";
import FilterAndSearchBar from "./FilterAndSearchBar";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return "Category";
    case "ukrainian":
      return "Категорія";
    case "arabic":
      const arabicText = "فئة";
      return arabicText;
    case "burmese":
      const burmeseText = "အမျိုးအစား";
      return burmeseText;
    case "japanese":
      const japaneseText = "カテゴリー";
      return japaneseText;
    default:
      return "Category";
  }
};
const getCaptionForClearLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = "Clear All";
      return engText;
    case "ukrainian":
      return "Очистити все";
    case "arabic":
      const arabicText = "امسح الكل";
      return arabicText;
    case "burmese":
      const burmeseText = "အားလုံးကိုရှင်း";
      return burmeseText;
    case "japanese":
      const japaneseText = "すべてクリア";
      return japaneseText;
    default:
      return "Clear All";
  }
};
const getCaptionForActiveLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = "Active Filters:";
      return engText;
    case "ukrainian":
      return "Активні фільтри:";
    case "arabic":
      const arabicText = "عوامل التصفية النشطة:";
      return arabicText;
    case "burmese":
      const burmeseText = "အသက်ဝင်သော စစ်ထုတ်မှုများ:";
      return burmeseText;
    case "japanese":
      const japaneseText = "すべてクリア:";
      return japaneseText;
    default:
      return "Active Filters:";
  }
};

const getButtonForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = { close: "Close", sort: "Search and filter" };
      return engText;
    case "ukrainian":
      const ukText = { close: "Закрити", sort: "Пошук і фільтр" };
      return ukText;
    case "arabic":
      const arabicText = { close: "قريب", sort: "البحث والتصفية" };
      return arabicText;
    case "burmese":
      const burmeseText = { close: "ပိတ်လိုက်", sort: "ရှာဖွေပြီး စစ်ထုတ်ပါ။" };
      return burmeseText;
    case "japanese":
      const japaneseText = { close: "選ぶ", sort: "検索とフィルタリング" };
      return japaneseText;
    default:
      return { close: "Close", sort: "Search and filter" };
  }
};

export default {
  title: "Patterns/Filter and search sidebar",
  argTypes: {
    Height: {
      options: ["Fix height", "Auto height"],
      control: { type: "radio" },
    },
  },
  args: {
    Height: "Auto height",
  },
  parameters: {
    docs: {
        page: () => (
            <>
<h1>Filter and Search Sidebar</h1>
<p>The Filter and Search option allows the user to apply filters to the search section.</p>

<h3>Overview</h3>
<p>This is a combination of several multi-select boxes with a search input field expanding on focus.</p>

<h4>When to use:</h4>
<p>When filters are to be added to the search bar.</p>

<h3>Formatting</h3>

<h4>Default</h4>
<p>The search bar is rectangular-shaped with a search icon. The active filters are chips with a cross.</p>

<h3>Behaviors</h3>

<h4>States</h4>
<p>This is the default state where the user can search using a particular keyword. This indicates the search bar is ready to search.</p>
<p><strong>Select:</strong> The search bar having a horizontal line below the search icon indicates that the search bar is in an open state.</p>

<Canvas>
  <Story name="Filter and search sidebar">
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      const buttonData = getButtonForLocale(locale);
      const clearText = getCaptionForClearLocale(locale);
      const activeFilterText = getCaptionForActiveLocale(locale);
      return (
        <FilterAndSearchBar
          locale={locale}
          buttonData={buttonData}
          args={args}
          clearText={clearText}
          activeFilterText={activeFilterText}
          data={caption}
        ></FilterAndSearchBar>
      );
    }}
  </Story>
</Canvas>

<h3>Usage:</h3>
<ul>
  <li>Copy HTML from the HTML tab of the canvas and also include the CSS and JS files listed below.</li>
  <li>Initialize the search, multi-select, and filter by calling functions <code>expandSearch()</code>, <code>multiSelect()</code>, and <code>toggleFilter()</code> respectively.</li>
  <li>Custom code can be triggered by available Custom Events on the filter items. See <strong>Custom Events</strong> and <strong>Custom Event Data</strong> below.</li>
</ul>

<hr />

<h3>Custom Events:</h3>

<ul>
  <li><strong>multiSelectToggle:</strong> When a multi-select item is toggled open or closed:
    <pre>
<code>
{/* $(document).on('multiSelectToggle', (e) => {
  ...Your custom code...
}); */}
</code>
    </pre>
  </li>
  <li><strong>multiSelectInputToggle:</strong> When a checkbox in the multi-select is toggled on or off:
    <pre>
<code>
  
{/* $(document).on('multiSelectInputToggle', (e) => {
  ...Your custom code...
}); */}
</code>
    </pre>
  </li>
  <li><strong>filterSearchChipRemoval:</strong> When a search chip is removed:
    <pre>
<code>
  {/* $(document).on('filterSearchChipRemoval', (e) => {
  ...Your custom code...
}); */}
</code>
    </pre>
  </li>
  <li><strong>filterSearchClear:</strong> When the Search "Clear all" link is clicked:
    <pre>
<code>
  {/* $(document).on('filterSearchClear', (e) => {
  ...Your custom code...
}); */}
</code>
    </pre>
  </li>
</ul>

<h3>Custom Event Data:</h3>
<p>Each of the custom events contains specific data.</p>

<h4>The <code>multiSelectInputToggle</code> event data contains:</h4>
<ul>
  <li><code>checkbox_id:</code> (string) The ID of the triggering input.</li>
  <li><code>state:</code> (boolean) The current state of the triggering input, true or false.</li>
  <li><code>toggle_state:</code> (string) whether the triggering input is "checked" or "unchecked".</li>
  <li><code>selected:</code> (boolean) true if the input is selected.</li>
  <li><code>unselected:</code> (boolean) true if the input is unselected.</li>
</ul>

<h4>The <code>multiSelectToggle</code> event data contains:</h4>
<ul>
  <li><code>select_trigger_dataset_id:</code> (string) The Dataset ID of the triggering button (if one is set).</li>
  <li><code>select_trigger_id:</code> (string) The ID of the triggering button, (if one is set).</li>
  <li><code>state:</code> (string) The current state of the triggering select group, "open" or "closed".</li>
  <li><code>open:</code> (boolean) true if the list is open.</li>
  <li><code>closed:</code> (boolean) true if the list is closed.</li>
  <li><code>target:</code> The target select item that is toggled open and closed by the triggering button.</li>
</ul>

<h4>The <code>filterSearchChipRemoval</code> event data contains:</h4>
<ul>
  <li><code>chip_id:</code> (string) The ID of the chip being removed.</li>
</ul>

<h4>The <code>filterSearchClear</code> event does not contain any specific data:</h4>

<hr />

<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base layout style from:</p>
<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/filter-and-search-bar.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/filter-and-search-bar.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/multi-select.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/multi-select.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/checkbox.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/checkbox.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/radio.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/radio.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/search-expand.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/search-expand.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/chips.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/chips.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/filter-search-bar.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/filter-search-bar.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/multi-select.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/multi-select.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/expand-search.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/expand-search.min.js</a></li>
</ul>

<h3>Interactions</h3>
<ul>
  <li>The checked state is applied to the entire option.</li>
  <li>The hover state is applied to the entire option.</li>
  <li>By clicking on the X icon, the filters are removed.</li>
</ul>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  const buttonData = getButtonForLocale(locale);
  const clearText = getCaptionForClearLocale(locale);
  const activeFilterText = getCaptionForActiveLocale(locale);
  return (
    <FilterAndSearchBar
      locale={locale}
      buttonData={buttonData}
      args={args}
      clearText={clearText}
      activeFilterText={activeFilterText}
      data={caption}
    ></FilterAndSearchBar>
  );
}

export const FilterAndSearchBarStory = Template.bind({});
FilterAndSearchBarStory.storyName = "Filter and Search Bar";
