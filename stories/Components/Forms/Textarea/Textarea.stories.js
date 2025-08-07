import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { Textarea } from './Textarea';

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

export default {
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
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Textarea</h1>
            <p>The Text Area is a multi-line section used to enter text.</p>

            <h3>Overview</h3>
            <p>The TextArea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizable amount of free-form text.</p>

            <h4>When to use:</h4>
            <ul>
              <li>To enter multi-line texts.</li>
            </ul>

            <h3>Formatting</h3>

            <h4>Default</h4>
            <p>It consists of a textbox used to enter data.</p>

            <h3>Behaviors</h3>

            <h4>States</h4>
            <p>There are four states in Textarea: Default, Focus, Error, and Disabled</p>

            <ul>
              <li><strong>Default:</strong> The default state is the default textarea that is used to enter data.</li>
              <li><strong>Focus:</strong> The Focused state is the state in which the textarea is focused when the page is opened.</li>
              <li><strong>Error:</strong> In the Error state, an error message appears below the text area if mandatory data is to be filled in the textbox and it is not entered or if incorrect data is entered.</li>
              <li><strong>Disabled:</strong> In the Disabled state, the textbox is disabled and cannot be used.</li>
            </ul>

            <Canvas>
              <Story name="Textarea">
                {(args) => (
                  <Textarea
                    labelText={getCaptionForLocale('english').detail10}
                    errorText={getCaptionForLocale('english').detail2}
                    id="textarea"
                    type="textarea"
                    cols="40"
                    rows="10"
                    required="required"
                    placeholder={getCaptionForLocale('english').text2}
                    {...args}
                  />
                )}
              </Story>
            </Canvas>

            <h3>Usage</h3>
            <p>Copy the HTML from the HTML tab of the canvas and include the CSS file mentioned below.</p>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>
            <p>Add the base layout style from:</p>
            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/input-fields.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/input-fields.min.css</a></li>
            </ul>

            <h4>JS:</h4>
            <p>NA</p>

            <h3>Interactions</h3>
            <p>By clicking on the text area, data can be entered into it.</p>



        </>
      )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
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
}

export const TextareaStory = Template.bind({});
TextareaStory.storyName = 'Textarea';

