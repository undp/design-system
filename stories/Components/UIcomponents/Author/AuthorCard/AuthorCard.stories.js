import { Meta, Canvas, Story } from '@storybook/addon-docs/blocks';
import { Authorcard } from './AuthorCard';
import authorImage from '../../../../assets/images/author.png';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return {
        authordata: [
          {
            Authorlabel: 'Achim Steiner',
            Authortext: 'Administrator',
          },
        ],
        paragraph:
          'Inventore magni accusantium labore qui. Dolorum numquam nihil labore quis harum dolorum. Sed eligendi ex quis delectus et tempore et eos. Molestias enim necessitatibus incidunt sit ab officiis aut. Qui aspernatur impedit nesciunt inventore quo. Reprehenderit voluptatum nihil voluptates et.',
        button: 'VIEW 234 POSTS',
      };
    case 'ukrainian':
      return {
        authordata: [
          {
            Authorlabel: 'Наталiя Бойко',
            Authortext: 'Керівник проекту',
          },
        ],
        paragraph:
          'ПРООН працює приблизно в 170 країнах і територіях, допомагаючи долати бідність, зменшити нерівність та дискримінацію, а також зміцнити стійкість, щоб країни могли підтримувати досягнутий прогрес. Як агентство ООН із розвитку, ПРООН відіграє важливу роль, допомагаючи країнам досягати Цілей сталого розвитку.',
        button: 'ПЕРЕГЛЯНУТИ 234 ПУБЛІКАЦІЇ',
      };
    case 'arabic':
      return {
        authordata: [
          {
            Authorlabel: 'أكيم شتاينر',
            Authortext: 'مدير',
          },
        ],
        paragraph:
          'مخترع يتهمه بعمل شاق كبير. لم أشعر أبدًا بأي ألم أو تعب أو أي من هذه الآلام. ولكن أن تختار من المختار والوقت وهم. تحدث المشاكل من الاحتياجات أو من الخدمات. أولئك الذين يرفضون الباحث لا يعرفون كيف يمنعونه. لا يلوم الملذات ولا الملذات.',
        button: 'عرض 234 وظيفة',
      };
    case 'burmese':
      return {
        authordata: [
          {
            Authorlabel: 'အောင်မြင်သည် စတီရီယို',
            Authortext: 'အုပ်ချုပ်သူ',
          },
        ],
        paragraph:
          'ကြီးကျယ်သောကြိုးစားအားထုတ်မှုကိုစွပ်စွဲသူတီထွင်သူတစ် ဦး ငါနာကျင်တာ၊ ပင်ပန်းတာမရှိဘူး၊ ဒီနာကျင်မှုတစ်ခုမှမရှိခဲ့ဘူး။ ဒါပေမယ့်ရွေးချယ်တဲ့သူတစ်ယောက်ကနေရွေးချယ်ဖို့နဲ့အချိန်နဲ့သူတို့အတွက်ပဲ။ ဒုက္ခများသည်လိုအပ်ချက်များသို့မဟုတ် ၀ န်ဆောင်မှုများမှဖြစ်သည်။ ရှာဖွေသူကိုငြင်းပယ်သူများသည်၎င်းကိုမည်သို့ကာကွယ်ရမည်ကိုမသိပါ။ သူသည်အပျော်အပါးနှင့်အပျော်အပါးကိုအပြစ်မတင်။',
        button: 'ပိုစ် ၂၃၄ ကိုကြည့်ပါ',
      };
    case 'japanese':
      return {
        authordata: [
          {
            Authorlabel: 'テレサウェッブ',
            Authortext: '管理者',
          },
        ],
        paragraph:
          '大変な努力を非難している発明家。 痛みも、倦怠感も、これらの痛みもありませんでした。 しかし、選択されたものと時間とそれらから選択すること。 トラブルはニーズやサービスから発生します。 ファインダーを拒否する人はそれを防ぐ方法を知りません。 彼は喜びも喜びも非難しません。',
        button: '234件の投稿を表示',
      };
    default:
      return {
        authordata: [
          {
            Authorlabel: 'Achim Steiner',
            Authortext: 'Administrator',
          },
        ],
        paragraph:
          'Inventore magni accusantium labore qui. Dolorum numquam nihil labore quis harum dolorum. Sed eligendi ex quis delectus et tempore et eos. Molestias enim necessitatibus incidunt sit ab officiis aut. Qui aspernatur impedit nesciunt inventore quo. Reprehenderit voluptatum nihil voluptates et.',
        button: 'VIEW 234 POSTS',
      };
  }
};

export default {
  title: 'Components/UI components/Authors/Author Card',
  argTypes: {
    Type: {
      options: ['Expanding Arrow', 'Space'],
      control: { type: 'inline-radio' },
    },
    button_option: {
      options: ['Hyperlink', 'Inline'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    Type: 'Expanding Arrow',
    button_option: 'Hyperlink',
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Author Card</h1>

            <p>An author card is a brief summary of an author highlighting their work.</p>

            <h3>Overview</h3>

            <p>An author card gives a quick overview of an author. It includes their name, title, profile picture—optionally, a summary of their work, and a count of the number of articles they have published on the site. It acts as an entry point to all the articles published by them.</p>

            <h4>When to use:</h4>

            <p>Author cards are mainly used in the author directory.</p>

            <h3>Formatting</h3>

            <h4>Default</h4>

            <h3>Content</h3>

            <p>An author card contains the first and last name, profile picture (optional), summary, count of the number of articles published by them on the site, and a CTA to a more detailed description and list of their published articles.</p>

            <h3>Behaviors</h3>

            <h4>States</h4>

            <p>There is a single state for the Author card.</p>

            <Canvas>
              <Story name="Author Card">
                {(args) => (
                  <Authorcard
                  authorImage={authorImage}
                  alt="Headshot of XYZ"
                  data={caption.authordata}
                  para={caption.paragraph}
                  button={caption.button}
                  link="#"
                  width="medium-12"
                    {...args}
                  />
                )}
              </Story>
            </Canvas>

            <h3>Usage:</h3>

            <ul>
              <li>Copy the HTML from the canvas and also include the below-listed CSS files.</li>
            </ul>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>

            <p>Add the base layout style from:</p>

            <ul>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/author-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/author-card.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/author-column.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/author-column.min.css</a></li>
              <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css</a></li>
            </ul>

            <h4>JS:</h4>

            <p>NA</p>

            <h3>Interactions</h3>

            <ul>
              <li>The entire card is clickable. Clicking any part of the card should take the user to the associated author detail page.</li>
            </ul>

            

            

        </>
      )
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Authorcard
    authorImage={authorImage}
          alt="Headshot of XYZ"
          data={caption.authordata}
          para={caption.paragraph}
          button={caption.button}
          link="#"
          width="medium-12"
      {...args}
    />
  );
};

export const AuthorcardStory = Template.bind({});
AuthorcardStory.storyName = 'Author Card';
AuthorcardStory.argTypes = {
  Type: { table: { disable: true } },
  button_option: { table: { disable: true } },
};

