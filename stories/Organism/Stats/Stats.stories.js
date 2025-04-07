import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Stats } from "./Stats";
import BackgroundImg from "../../assets/images/card2.jpg";
import { statsArray } from "./StatsUtils";


export default { 
  title: "Components/UI components/Stats",
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Stats</h1>

              <p>The Stats component is designed for showing the Statspanel grid and image in a particular section. It is a multi-usage component that often teases some kind of content.</p>

              <Canvas>
                <Story
                  name="Stats"
                >
                  {(args, { globals: { locale, accent } }) => {
                    const caption = statsArray(locale);
                    return <Stats data={caption} imageback={BackgroundImg} {...args}></Stats>;
                  }}
                </Story>
              </Canvas>

              <hr />

              <h3>Usage</h3>

              <ul>
                  <li>Copy the HTML from the canvas.</li>
                  <li>Include the <code>dist/css/components/stats.min.css</code> file.</li>
                  <li>Choose one of the following initialization methods:</li>
                  {/* <li>In your JS file, initialize the following JS function:</li>
                  <ul>
                      <li><code>statsHover();</code></li>
                  </ul>
                  <li>Add the following JS files as well:</li> */}
                  
                  <h4>Method 1: Automatic Initialization (Recommended)</h4>
                  <ul>
                    <li>Include the component initializer script:
                      <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.min.js"&gt;&lt;/script&gt;</code>
                    </li>
                    <li>Add the required data attribute to your stats grid element:
                      <code>data-undpds-component="stats"</code>
                    </li>
                    <li>The stats hover effect will initialize automatically when the page loads - no JavaScript calls required!</li>
                  </ul>

                  <h4>Method 2: Manual Initialization (Traditional)</h4>
                  <ul>
                    <li>Call the initialization function directly in your JavaScript:
                      <code>statsHover();</code>
                    </li>
                  </ul>

                  <ul>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/stats.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/stats.min.js</a></li>
                  </ul>
              </ul>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return <Stats data={caption} imageback={BackgroundImg} {...args}></Stats>;
}

export const StatsStory = Template.bind({});
StatsStory.storyName = "Stats";