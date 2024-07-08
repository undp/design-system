import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Inputcomponent } from './InputFields';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return {
        detail1: 'Form Label:',
        detail2: '*Error: this field is required',
        detail3: 'Search',
        detail4: 'Enter search term',
        detail5: 'Number of projects',
        detail6: 'Create password',
        detail7: 'Password',
        detail8: '8 characters minimum',
        detail9: 'Phone number',
        detail10: 'Brief description',
        text: 'Date label',
        text2: 'Enter text',
        text3: 'Placeholder',
      };
    case 'ukrainian':
      return {
        detail1: 'Введіть текст:',
        detail2: "*Помилка: це поле обов'язкове",
        detail3: 'Пошук',
        detail4: 'Введіть пошуковий термін',
        detail5: 'Кількість проектів',
        detail6: 'Створити пароль',
        detail7: 'Пароль',
        detail8: 'Мінімум 8 символів',
        detail9: 'Номер телефону',
        detail10: 'Короткий опис',
        text: 'Дата',
        text2: 'Введіть текст',
        text3: '',
      };
    case 'arabic':
      return {
        detail1: 'تسمية النموذج:',
        detail2: '* خطأ: هذا الحقل مطلوب',
        detail3: 'بحث',
        detail4: 'أدخل مصطلح البحث',
        detail5: 'عدد المشاريع',
        detail6: 'أنشئ كلمة مرور',
        detail7: 'كلمه السر',
        detail8: '8 أحرف كحد أدنى',
        detail9: 'رقم الهاتف',
        detail10: 'وصف مختصر',
        text: 'تسمية التاريخ',
        text2: 'أدخل النص',
        text3: 'نائب',
      };
    case 'burmese':
      return {
        detail1: 'ပုံစံတံဆိပ်:',
        detail2: '*အမှား - ဤအကွက်လိုအပ်သည်',
        detail3: 'ရှာဖွေပါ',
        detail4: 'ရှာဖွေရေးစာလုံးရိုက်ထည့်ပါ',
        detail5: 'စီမံကိန်းအရေအတွက်',
        detail6: 'စကားဝှက်ဖန်တီးပါ',
        detail7: 'စကားဝှက်',
        detail8: 'အနည်းဆုံးစာလုံး ၈ လုံး',
        detail9: 'ဖုန်းနံပါတ်',
        detail10: 'အကျဉ်းချုပ်ဖော်ပြချက်',
        text: 'ရက်စွဲတံဆိပ်',
        text2: 'စာသားရိုက်ထည့်ပါ',
        text3: 'နေရာယူသည်',
      };
    case 'japanese':
      return {
        detail1: 'フォームラベル：',
        detail2: '*エラー：このフィールドは必須です',
        detail3: '検索',
        detail4: '検索語を入力してください',
        detail5: 'プロジェクト数',
        detail6: 'パスワードを作成する',
        detail7: 'パスワード',
        detail8: '最小8文字',
        detail9: '電話番号',
        detail10: '簡単な説明',
        text: '日付ラベル',
        text2: 'テキストを入力してください',
        text3: 'プレースホルダー',
      };
    default:
      return {
        detail1: 'Form Label:',
        detail2: '*Error: this field is required',
        detail3: 'Search',
        detail4: 'Enter search term',
        detail5: 'Number of projects',
        detail6: 'Create password',
        detail7: 'Password',
        detail8: '8 characters minimum',
        detail9: 'Phone number',
        detail10: 'Brief description',
        text: 'Date label',
        text2: 'Enter text',
        text3: 'Placeholder',
      };
  }
};

export default {
  title: 'Components/Forms/Input fields',
  parameters: {
    docs: {
      title: 'Components/Forms/Input fields',
      description: `
        The Input Field is used when the user is required to fill in the information.
        
        ### Overview
        
        The input HTML element is used to create interactive controls for web-based forms in order to accept data from the user. A variety of input types and states are available, depending on the device and user agent. The input element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
        
        #### When to use:
        
        - When the user needs to fill in data.
        
        ### Formatting
        
        #### Default
        
        The Input Field consists of various fields of rectangular boxes used to fill information. There is a Base Input where the user needs to fill data, a Label that describes the input box, Help Text which is a sub-heading to the input box but doesn’t appear in the field area, and an Error message which pops up if an error has occurred.
        
        1. Base Input:
        2. Label:
        3. Help Text:
        4. Error message:
        
        The Input Fields are:
        
        1. Text: Input elements of type text create basic single-line text fields.
        2. Search: Input elements of type search are text fields designed for the user to enter search queries into.
        3. Number: Input elements of type number are used to let the user enter a number. They include built-in validation to reject non-numerical entries.
        4. Date: Input elements of type date create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface.
        5. Phone: Input elements of type tel are used to let the user enter and edit a telephone number.
        6. Password: Input elements of type password provide a way for the user to enter a password.
        7. Textarea: The Textarea HTML element requires a multi-line plain-text editing control useful when you want to allow users to enter a sizable amount of free-form text, for example, a comment on a review or feedback form.
        
        ### Behaviors
        
        States
        The Input Field has four states: Default, Focus. Error and Disabled.
      `,
    },
  },
  argTypes: {
    State: {
      options: ['Default', 'Focus', 'Error', 'Disabled'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    State: 'Default',
  },
};

const Template = (args) => {
  const locale = 'english'; // Set default locale here or via controls in Storybook
  const caption = getCaptionForLocale(locale);

  return (
    <div>
      <h1>Input Fields</h1>

      <h2>Overview</h2>
      <p>The Input Field is used when the user is required to fill in the information.</p>

      <h3>When to use:</h3>
      <p>Use the Input Field when the user needs to fill in data.</p>

      <h2>Formatting</h2>
      <h3>Default</h3>
      <p>
        The Input Field consists of various fields of rectangular boxes used to fill information.
        There is a Base Input where the user needs to fill data, a Label that describes the input
        box, Help Text which is a sub-heading to the input box but doesn’t appear in the field area,
        and an Error message which pops up if an error has occurred.
      </p>

      <ul>
        <li>Base Input:</li>
        <li>Label:</li>
        <li>Help Text:</li>
        <li>Error message:</li>
      </ul>

      <p>The Input Fields are:</p>
      <ol>
        <li>Text: Input elements of type text create basic single-line text fields.</li>
        <li>
          Search: Input elements of type search are text fields designed for the user to enter
          search queries into.
        </li>
        <li>
          Number: Input elements of type number are used to let the user enter a number. They include
          built-in validation to reject non-numerical entries.
        </li>
        <li>
          Date: Input elements of type date create input fields that let the user enter a date, either
          with a textbox that validates the input or a special date picker interface.
        </li>
        <li>
          Phone: Input elements of type tel are used to let the user enter and edit a telephone number.
        </li>
        <li>
          Password: Input elements of type password provide a way for the user to enter a password.
        </li>
        <li>
          Textarea: The Textarea HTML element requires a multi-line plain-text editing control useful
          when you want to allow users to enter a sizable amount of free-form text, for example, a
          comment on a review or feedback form.
        </li>
      </ol>

      <h3>Behaviors</h3>
      <p>States: The Input Field has four states: Default, Focus, Error, and Disabled.</p>

      <Canvas>
        <Story name="Date">
          {(args, { globals: { locale } }) => (
            <Inputcomponent
              labelText={caption.text}
              errorText={caption.detail2}
              element="input"
              type="date"
              id="date"
              placeholder="dd/mm/yyyy"
              {...args}
            />
          )}
        </Story>
      </Canvas>

      <Canvas>
        <Story name="Number">
          {(args, { globals: { locale } }) => (
            <Inputcomponent
              labelText={caption.detail5}
              errorText={caption.detail2}
              element="input"
              type="number"
              id="number"
              pattern="[0-9]*"
              placeholder={caption.text3}
              {...args}
            />
          )}
        </Story>
      </Canvas>

      <Canvas>
        <Story name="Password">
          {(args, { globals: { locale } }) => (
            <Inputcomponent
              labelText={caption.detail6}
              element="input"
              helpText={caption.detail8}
              errorText={caption.detail2}
              type="password"
              id="password"
              minLength="8"
              placeholder={caption.detail7}
              {...args}
            />
          )}
        </Story>
      </Canvas>

      <Canvas>
        <Story name="Telephone">
          {(args, { globals: { locale } }) => (
            <Inputcomponent
              labelText={caption.detail9}
              element="input"
              type="tel"
              id="tel"
              errorText={caption.detail2}
              placeholder="+234 000 000 0000"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              {...args}
            />
          )}
        </Story>
      </Canvas>

      <Canvas>
        <Story name="Text">
          {(args, { globals: { locale } }) => (
            <Inputcomponent
              labelText={caption.detail1}
              errorText={caption.detail2}
              element="input"
              type="text"
              id="text"
              placeholder={caption.text3}
              {...args}
            />
          )}
        </Story>
      </Canvas>

      <h2>Usage</h2>
      <ol>
        <li>
          Choose the state Default, Focus, Error, and Disabled from the control tab of the canvas.
        </li>
        <li>
          Copy the HTML from the HTML tab and also include the below-mentioned CSS listed below.
        </li>
      </ol>

      <h2>CSS and JS References</h2>
      <h3>CSS:</h3>
      <ul>
        <li>
          Add the base layout style from:
          <ul>
            <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
            <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</li>
          </ul>
        </li>
      </ul>

      <h3>JS:</h3>
      <p>NA</p>

      <h2>Interactions</h2>
      <ul>
        <li>By clicking on the box, the user can fill in the information.</li>
      </ul>

      <h2>Changelog</h2>
      <p>1.0 — Released component</p>
    </div>
  );
};

export const InputFields = Template.bind({});
InputFields.args = {
  State: 'Default',
};
