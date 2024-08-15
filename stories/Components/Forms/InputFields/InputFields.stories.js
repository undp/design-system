import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Inputcomponent } from './InputFields';

const getCaptionForLocale = (locale) => {
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
  argTypes: {
    State: {
      options: ['Default', 'Focus', 'Error', 'Disabled'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    State: 'Default',
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Input Fields</h1>
            <p>The Input Field is used when the user is required to fill in the information.</p>

            <h3>Overview</h3>
            <p>The input HTML element is used to create interactive controls for web-based forms in order to accept data from the user. A variety of input types and states are available, depending on the device and user agent. The input element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.</p>

            <h4>When to use:</h4>
            <ul>
              <li>When the user needs to fill in data.</li>
            </ul>

            <h3>Formatting</h3>

            <h4>Default</h4>
            <p>The Input Field consists of various fields of rectangular boxes used to fill information. There is a Base Input where the user needs to fill data, a Label that describes the input box, Help Text which is a sub-heading to the input box but doesn’t appear in the field area, and an Error message which pops up if an error has occurred.</p>

            <ol>
              <li>Base Input:</li>
              <li>Label:</li>
              <li>Help Text:</li>
              <li>Error message:</li>
            </ol>

            <p>The Input Fields are:</p>
            <ol>
              <li><strong>Text:</strong> Input elements of type text create basic single-line text fields.</li>
              <li><strong>Search:</strong> Input elements of type search are text fields designed for the user to enter search queries into.</li>
              <li><strong>Number:</strong> Input elements of type number are used to let the user enter a number. They include built-in validation to reject non-numerical entries.</li>
              <li><strong>Date:</strong> Input elements of type date create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface.</li>
              <li><strong>Phone:</strong> Input elements of type tel are used to let the user enter and edit a telephone number.</li>
              <li><strong>Password:</strong> Input elements of type password provide a way for the user to enter a password.</li>
              <li><strong>Textarea:</strong> The Textarea HTML element requires a multi-line plain-text editing control useful when you want to allow users to enter a sizable amount of free-form text, for example, a comment on a review or feedback form.</li>
            </ol>

            <h3>Behaviors</h3>

            <h4>States</h4>
            <p>The Input Field has four states: Default, Focus, Error, and Disabled.</p>

            <Canvas of={InputcomponentDate} />

            <Canvas of={InputcomponentNumber} />

            <Canvas of={InputcomponentPassword} />

            <Canvas of={InputcomponentTelephone} />

            <Canvas of={InputcomponentText} />

            <h3>Usage</h3>
            <ol>
              <li>Choose the state Default, Focus, Error, and Disabled from the control tab of the canvas.</li>
              <li>Copy the HTML from the HTML tab and also include the CSS listed below.</li>
            </ol>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>
            <p>Add the base layout style from:</p>
            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</a></li>
            </ul>

            <h4>JS:</h4>
            <p>NA</p>

            <h3>Interactions</h3>
            <ul>
              <li>By clicking on the box, the user can fill in the information.</li>
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
    <Inputcomponent
      labelText={caption.detail1}
      errorText={caption.detail2}
      element="input"
      type="text"
      id="text"
      placeholder={caption.text3}
      {...args}
    ></Inputcomponent>
  );
};

export const InputcomponentDate = Template.bind({});
InputcomponentDate.args = {
  element: 'input',
  type: 'date',
  id: 'date',
};
export const InputcomponentNumber = Template.bind({});
InputcomponentNumber.args = {
  element: 'input',
  type: 'number',
  id: 'number',
  pattern: '[0-9]*',
  placeholder: 'Enter search term',
};
export const InputcomponentPassword = Template.bind({});
InputcomponentPassword.args = {
  element: 'input',
  type: 'password',
  id: 'password',
  minlength: '8',
  placeholder: 'Password',
};
export const InputcomponentTelephone = Template.bind({});
InputcomponentTelephone.args = {
  element: 'input',
  type: 'tel',
  id: 'tel',
  placeholder: '+234 000 000 0000',
  pattern: '[0-9]{3}-[0-9]{2}-[0-9]{3}',
};
export const InputcomponentText = Template.bind({});
InputcomponentText.args = {
  element: 'input',
  type: 'text',
  id: 'text',
  placeholder: 'Placeholder',
};

InputcomponentDate.storyName = 'Date';
InputcomponentNumber.storyName = 'Number';
InputcomponentPassword.storyName = 'Password';
InputcomponentTelephone.storyName = 'Telephone';
InputcomponentText.storyName = 'Text';
