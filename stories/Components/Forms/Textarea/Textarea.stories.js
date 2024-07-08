import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Textarea } from './Textarea';

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
        detail10: 'Короткий опис',
        text2: 'Введіть текст',
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

export const parameters = {
  title: 'Components/Forms/Textarea',
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

export const TextareaComponent = () => (
  <>
    <Meta
      title="Components/Forms/Textarea"
      argTypes={{
        State: {
          options: ['Default', 'Focus', 'Error', 'Disabled'],
          control: { type: 'inline-radio' },
        },
      }}
      args={{
        State: 'Default',
      }}
    />

    <h1>Textarea</h1>

    <p>The Text Area is a multi-line section used to enter text.</p>

    <h2>Overview</h2>

    <p>
      The TextArea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizable amount of free-form text.
    </p>

    <h3>When to use:</h3>

    <ul>
      <li>To enter multi-line texts.</li>
    </ul>

    <h3>Formatting</h3>

    <h4>Default</h4>

    <p>It consists of a textbox used to enter data.</p>

    <h2>Behaviors</h2>

    <h3>States</h3>

    <p>There are four states in Textarea: Default, Focus, Error, and Disabled.</p>

    <h4>Default:</h4>

    <p>The default state is the default textarea that is used to enter data.</p>

    <h4>Focus:</h4>

    <p>The Focused state is the state in which the textarea is focused when the page is opened.</p>

    <h4>Error:</h4>

    <p>
      In the Error state, an error message appears below the text area if mandatory data is to be filled in the textbox and it is not entered or if incorrect data is entered.
    </p>

    <h4>Disabled:</h4>

    <p>In the Disabled state, the textbox is disabled and needs to be able used it.</p>

    <Canvas>
      <Story name="Textarea">
        {(args, { globals: { locale } }) => {
          const caption = getCaptionForLocale(locale);
          return (
            <Textarea
              labelText={caption.detail10}
              errorText={caption.detail2}
              id="textarea"
              type="textarea"
              cols="40"
              rows="10"
              required="required"
              placeholder={caption.text2}
              {...args}
            />
          );
        }}
      </Story>
    </Canvas>

    <h2>Usage:</h2>

    <p>Copy HTML from the HTML tab of canvas and also include the css file mentioned below.</p>

    <h2>CSS and JS References</h2>

    <h3>CSS:</h3>

    <ul>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</li>
      <li>https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</li>
    </ul>

    <h3>JS:</h3>

    <p>NA</p>

    <h2>Interactions</h2>

    <p>By clicking on the text area, data can be entered into it.</p>

    <h2>Changelog</h2>

    <p>1.0 — Released component</p>
  </>
);

export default {
  title: 'Components/Forms/Textarea',
};
