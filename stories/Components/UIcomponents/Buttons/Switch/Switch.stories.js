import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { Switch } from "./Switch";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return { on: "On", off: "Off", label: "Label:" };
    case "ukrainian":
      return { on: "Увімкн.", off: "Вимкн.", label: "Перемикач" };
    case "arabic":
      return { on: "على", off: "إيقاف", label: "تبديل" };
    case "burmese":
      return { on: "ဖွင့်", off: "ပိတ်", label: "ပြောင်း" };
    case "japanese":
      return { on: "オン", off: "オフ", label: "スイッチラベル" };
    default:
      return { on: "On", off: "Off", label: "Label:" };
  }
};


export default {
  title: "Components/UI components/Buttons/Switch",
  argTypes: {
    size: {
      name: "Size",
      options: ["default", "small"],
      control: { type: "inline-radio" },
    },
    state: {
      name: "State",
      options: ["default", "disabled"],
      control: { type: "inline-radio" },
    },
    isToggled: {
      name: "Is Toggled",
      control: { type: "boolean" },
    },
    showIcon: {
      name: "Show Icon",
      control: { type: "boolean" },
    },
    showLabel: {
      name: "Show Label",
      control: { type: "boolean" },
    },
    showValue: {
      name: "Show Value",
      control: { type: "boolean" },
    },
  },
  args: {
    size: "default",
    state: "default",
    isToggled: true,
    showIcon: false,
    showLabel: false,
    showValue: false,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Switch Component</h1>

          <p>A switch allows a user to toggle between two mutually exclusive options.</p>

          <h3>Overview</h3>

          <p>The switch component is used to toggle between two mutually exclusive options, such as on and off. It can be customized in size, state, and display options.</p>

          <h4>When to use:</h4>

          <ul>
            <li>Use a switch when you need to allow the user to toggle between two states.</li>
            <li>Switches are commonly used in settings and forms.</li>
          </ul>

          <h3>Formatting</h3>

          <h4>Default</h4>

          <p>The switch component can have different sizes and states:</p>

          <ol>
            <li>Sizes: <code>default</code>, <code>small</code></li>
            <li>States: <code>default</code>, <code>disabled</code></li>
          </ol>

          <h3>Behaviors</h3>

          <h4>States</h4>

          <p>Switch components can have the following states:</p>

          <ul>
            <li><strong>Default:</strong> The switch is in its normal state.</li>
            <li><strong>Focus:</strong> The switch is focused, often indicated with a border or shadow.</li>
            <li><strong>Disabled:</strong> The switch is disabled and cannot be toggled.</li>
          </ul>

          <Canvas>
            <Story name="Switch" >
              {(args) => (
                <Switch
                  label={caption.label}
                  valueOn={caption.on}
                  valueOff={caption.off}
                  id="edit-switch"
                  {...args}
                />
              )}
            </Story>
          </Canvas>

          <h3>Usage</h3>

          <ul>
            <li>Copy the HTML from the HTML Tab of the canvas for the switch component from the controls.</li>
            <li>Include the CSS files listed below concerning the switch component.</li>
          </ul>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>

          <p>Add the base layout style from:</p>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/switch.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/switch.min.css</a></li>
          </ul>

          <p>Use the above CSS concerning the switch component.</p>

          <h4>JS:</h4>

          <p>NA</p>

          <h3>Interactions</h3>

          <ul>
            <li>The switch changes its appearance when toggled.</li>
            <li>The switch changes its appearance when hovered or focused.</li>
          </ul>

          <h3>Changelog</h3>

          <p>1.0 — Released component</p>

        </>
      ),
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Switch
      label={caption.label}
      valueOn={caption.on}
      valueOff={caption.off}
      id="edit-switch"
      {...args}
    />
  );
}

export const SwitchStory = Template.bind({});
SwitchStory.storyName = "Switch";