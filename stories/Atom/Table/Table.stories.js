import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { TableTag } from './Table';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return {
        headertext: 'Table header',
        tdtext: 'Content Goes Here',
        details:
          'In publishing and graphic design, dummy is a placeholder text commonly used to demonstrate',
      };
    case 'ukrainian':
      return {
        headertext: 'Заголовок таблиці',
        tdtext: 'вміст',
        details: 'Програма ПРООН із підвищення стійкості та відновлення',
      };
    case 'arabic':
      return {
        headertext: 'رأس الجدول',
        tdtext: 'المحتوى يذهب هنا',
        details:
          'في النشر والتصميم الجرافيكي ، الدمية هي عنصر نائب يستخدم عادة للتوضيح',
      };
    case 'burmese':
      return {
        headertext: 'ဇယားခေါင်းစီး',
        tdtext: 'အကြောင်းအရာကဒီမှာ',
        details:
          'ထုတ်ဝေခြင်းနှင့် ဂရပ်ဖစ်ဒီဇိုင်းများတွင်၊  သည် သရုပ်ပြရန်အတွက် အသုံးများသော နေရာယူထားသော စာသားဖြစ်သည်။',
      };
    case 'japanese':
      return {
        headertext: 'テーブルヘッダー',
        tdtext: 'コンテンツはここにあります',
        details:
          '出版やグラフィックデザインでは、ダミーはデモンストレーションに一般的に使用されるプレースホルダーテキストです',
      };
    default:
      return {
        headertext: 'Table header',
        tdtext: 'Content Goes Here',
        details:
          'In publishing and graphic design, dummy is a placeholder text commonly used to demonstrate',
      };
  }
};

export default {
  title: 'Foundation/Typography/Table',
  component: TableTag,
  parameters: {
    argTypes: {
      size: {
        options: ['large', 'small'],
        control: { type: 'inline-radio' },
      },
      variant: {
        options: ['default', 'striped', 'border'],
        control: { type: 'inline-radio' },
      },
      responsive: {
        options: ['stacked', 'auto', 'scroll'],
        control: { type: 'inline-radio' },
      },
    },
    args: {
      size: 'large',
      variant: 'default',
      responsive: 'auto',
    },
  },
};

const Template = () => (
  <>
    <h1>Table</h1>

    <p>
      Tables are used to represent data sets that are easy to understand and access.
    </p>

    <h3>Overview</h3>
    <p>
      Tables are used for large volumes of data that can be accessed easily and understandable by the user. These tables are created using various modifiers like default, striped, bordered, small, stacked, scroll.
    </p>

    <h4>When to use:</h4>
    <ul>
      <li>These tables are used when there is huge data.</li>
      <li>When there is a huge volume of data to handle. Using this the data can be accessed easily.</li>
    </ul>

    <h3>Formatting</h3>

    <h4>Default</h4>
    <p>The table is large in size, variant default and responsive is auto</p>

    <h3>Behaviors</h3>

    <h4>States</h4>
    <p>The tables are created using various modifiers:</p>

    <ul>
      <li>
        <strong>Default:</strong> In this, there are 2 different states:
        <ul>
          <li>
            <strong>Large:</strong> In this state, the table size will be large, the variant is the default, and has auto responsive.
          </li>
          <li>
            <strong>Small:</strong> In the state, the table size is small, the variant is the default, and has auto responsive.
          </li>
        </ul>
      </li>
      <li>
        <strong>Selected:</strong> In this, it has 2 different types of modifiers:
        <ul>
          <li>
            <strong>Striped:</strong> The table size can be larger, or small, the variant is striped and the responsiveness of the table is either stacked, auto or scroll.
          </li>
          <li>
            <strong>Stripped with stacked table view:</strong> In this, the table has stripped rows with stacked views.
          </li>
          <li>
            <strong>Stripped with scrolled table view:</strong> In this, the table has a stripped style of view with scrollable content. The table size can be large or small, the variant is the border. The responsiveness of the table is either stacked, auto or scroll.
          </li>
          <li>
            <strong>Border with stacked table view:</strong> This table has a border and will be stacked.
          </li>
          <li>
            <strong>Border with scroll table view:</strong> In this, the table has a border and will be scrollable.
          </li>
        </ul>
      </li>
    </ul>

    <Canvas>
      <Story name="Table">
        {(args, { globals: { locale } }) => {
          const caption = getCaptionForLocale(locale);
          return (
            <TableTag
              text={caption.headertext}
              tdtext={caption.tdtext}
              details={caption.details}
              {...args}
            ></TableTag>
          );
        }}
      </Story>
    </Canvas>

    <h3>Usage</h3>
    <ul>
      <li>Select the size control as either Large or Small, variant as Default, Stripped or Border and responsive control as Stacked, Auto or Scroll from the control tab of canvas.</li>
      <li>Copy the HTML from the HTML tab and include the CSS mentioned below.</li>
    </ul>

    <h3>CSS and JS References</h3>

    <h4>CSS:</h4>
    <ul>
      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css" target="_blank">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
    </ul>

    <h4>JS:</h4>
    <ul>
      <li>NA</li>
    </ul>

    <h3>Interactions</h3>
    <p>No interactions are needed with the progress bar.</p>

    <h3>Changelog</h3>
    <p>1.0 — Released component</p>
  </>
);

export const TableStory = () => <Template />;

TableStory.parameters = {
  docs: {
    source: {
      code: `
import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { TableTag } from "./Table";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return {
        headertext: "Table header",
        tdtext: "Content Goes Here",
        details:
          "In publishing and graphic design, dummy is a placeholder text commonly used to demonstrate",
      };
    case "ukrainian":
      return {
        headertext: "Заголовок таблиці",
        tdtext: "вміст",
        details:
          "Програма ПРООН із підвищення стійкості та відновлення",
      };
    case "arabic":
      return {
        headertext: "رأس الجدول",
        tdtext: "المحتوى يذهب هنا",
        details:
          "في النشر والتصميم الجرافيكي ، الدمية هي عنصر نائب يستخدم عادة للتوضيح",
      };
    case "burmese":
      return {
        headertext: "ဇယားခေါင်းစီး",
        tdtext: "အကြောင်းအရာကဒီမှာ",
        details:
          "ထုတ်ဝေခြင်းနှင့် ဂရပ်ဖစ်ဒီဇိုင်းများတွင်၊  သည် သရုပ်ပြရန်အတွက် အသုံးများသော နေရာယူထားသော စာသားဖြစ်သည်။",
      };
    case "japanese":
      return {
        headertext: "テーブルヘッダー",
        tdtext: "コンテンツはここにあります",
        details:
          "出版やグラフィックデザインでは、ダミーはデモンストレーションに一般的に使用されるプレースホルダーテキストです",
      };
    default:
      return {
        headertext: "Table header",
        tdtext: "Content Goes Here",
        details:
          "In publishing and graphic design, dummy is a placeholder text commonly used to demonstrate",
      };
  }
};

<Meta
  title="Foundation/Typography/Table"
  component={TableTag}
  argTypes={{
    size: {
      options: ["large", "small"],
      control: { type: "inline-radio" },
    },
    variant: {
      options: ["default", "striped", "border"],
      control: { type: "inline-radio" },
    },
    responsive: {
      options: ["stacked", "auto", "scroll"],
      control: { type: "inline-radio" },
    },
  }}
  args={{
    size: "large",
    variant: "default",
    responsive: "auto",
  }}
/>

# Table

Tables are used to represent data sets that are easy to understand and access.

### Overview

Tables are used for large volumes of data that can be accessed easily and understandable by the user. These tables are created using various modifiers like default, striped, bordered, small, stacked, scroll.

#### When to use:

These tables are used when there is huge data. When there is a huge volume of data to handle. Using this the data can be accessed easily.

### Formatting

#### Default

The table is large in size, variant default and responsive is auto

### Behaviors

#### States

The tables are created using various modifiers:

**Default**: In this, there are 2 different states:

Large: In this state, the table size will be large, the variant is the default, and has auto responsive.
Small: In the state, the table size is small, the variant is the default, and has auto responsive.

**Selected**: In this, it has 2 different types of modifiers:

Striped: The table size can be larger, or small, the variant is striped and the responsiveness of the table is either stacked, auto or scroll.

Stripped with stacked table view: In this, the table has stripped rows with stacked views.

Stripped with scrolled table view: In this, the table has a stripped style of view with scrollable content.

The table size can be large or small, the variant is the border. The responsiveness of the table is either stacked, auto or scroll.

- Border with stacked table view: This table has a border and will be stacked.
- Border with scroll table view: In this, the table has a border and will be scrollable.

<Canvas>
  <Story name="Table">
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return (
        <TableTag
          text={caption.headertext}
          tdtext={caption.tdtext}
          details={caption.details}
          {...args}
        ></TableTag>
      );
    }}
  </Story>
</Canvas>

### Usage

- Select the size control as either Large or Small, variant as Default, Stripped or Border and responsive control as Stacked, Auto or Scroll from the control tab of canvas.
- Copy the HTML from the HTML tab and include the CSS mentioned below.

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css

#### JS:

NA

### Interactions

No interactions are needed with the progress bar.

### Changelog

1.0 — Released component
`,
    },
  },
};
