import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import FilterAndSearchBar from "./FilterAndSearchBar";
import { getCaptionForLocale, getButtonForLocale, getCaptionForClearLocale, getCaptionForActiveLocale } from "./FilterAndSearchBarUtils";


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
  {/* <li>Initialize the search, multi-select, and filter by calling functions <code>expandSearch()</code>, <code>multiSelect()</code>, and <code>toggleFilter()</code> respectively.</li> */}
  <li>Custom code can be triggered by available Custom Events on the filter items. See <strong>Custom Events</strong> and <strong>Custom Event Data</strong> below.</li>
</ul>
<h4>Method 1: Automatic Initialization (Recommended)</h4>
<ul>
   <li>Include the required CSS and JS files listed in the CSS and JS References section below.</li>
   <li>Include the component initializer script:
      <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.min.js"&gt;&lt;/script&gt;</code>
   </li>
   <li>Add the required data attributes to your filter and search bar elements:
      <code>data-undpds-component="filter-search-bar"</code> for the main container,
      <code>data-undpds-component="expand-search"</code> for the search field, and
      <code>data-undpds-component="multi-select"</code> for each filter dropdown
   </li>
   <li>The filter and search bar components will initialize automatically when the page loads - no JavaScript calls required!</li>
</ul>
<h4>Method 2: Manual Initialization (Traditional)</h4>
<ul>
   <li>Include the required CSS and JS files listed in the CSS and JS References section below (excluding init.min.js).</li>
   <li>Call the initialization functions directly in your JavaScript:
      <code>expandSearch();</code> for the search functionality,
      <code>multiSelect();</code> for the filter dropdowns, and
      <code>toggleFilter();</code> for the filter functionality
   </li>
</ul>
<hr />

<h3>Custom Events:</h3>

<ul>
  <li><strong>multiSelectToggle:</strong> When a multi-select item is toggled open or closed:
    <pre>
<code>
$(document).on('multiSelectToggle', (e) =&gt; &#123; <br />
   &emsp;&emsp;...Your custom code... <br />
&#125;);
</code>
    </pre>
  </li>
  <li><strong>multiSelectInputToggle:</strong> When a checkbox in the multi-select is toggled on or off:
    <pre>
<code>
  
$(document).on('multiSelectInputToggle', (e) =&gt;  &#123; <br />
&emsp;&emsp;...Your custom code... <br />
  &#125;);
  
</code>
    </pre>
  </li>
  <li><strong>filterSearchChipRemoval:</strong> When a search chip is removed:
    <pre>
<code>
  $(document).on('filterSearchChipRemoval', (e) =&gt; &#123; <br />
   &emsp;&emsp;...Your custom code... <br />
&#125;);
</code>
    </pre>
  </li>
  <li><strong>filterSearchClear:</strong> When the Search "Clear all" link is clicked:
    <pre>
<code>
  $(document).on('filterSearchClear', (e) =&gt; &#123; <br />
   &emsp;&emsp;...Your custom code... <br />
&#125;);
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
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/filter-and-search-bar.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/filter-and-search-bar.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/multi-select.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/multi-select.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/checkbox.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/checkbox.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/radio.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/radio.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/search-expand.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/search-expand.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/chips.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/chips.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/filter-search-bar.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/filter-search-bar.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/multi-select.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/multi-select.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/expand-search.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/expand-search.min.js</a></li>
</ul>

<h3>Interactions</h3>
<ul>
  <li>The checked state is applied to the entire option.</li>
  <li>The hover state is applied to the entire option.</li>
  <li>By clicking on the X icon, the filters are removed.</li>
</ul>




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
