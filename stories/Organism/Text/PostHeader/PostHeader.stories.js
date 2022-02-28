import { Meta, Story } from '@storybook/addon-docs';
import { PostHeader } from './PostHeader'

export const getCaptionForLocale = (locale) => {
  switch(locale) {
    case 'english': const engText = {postheaderdata: [{
      text: 'Home'
    },
    {
      text: 'Second-level'
    },
    {
      text: 'Third-level'
    },
    {
      text: 'Page Title'
    }],
    header: 'Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding Project’s Success amidst COVID-19',
    country: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet consequat vulputate.',
    description: 'Posted 27 January, 2021'}; return engText;
    case 'arabic': const arabicText = {postheaderdata: [{
     text: 'الصفحة الرئيسية'
    },
    {
      text: 'المستوى الثاني'
    },
    {
      text: 'المستوى الثالث'
    },
    {
      text: 'عنوان الصفحة'
    }],
    header: 'مقاطعتا مويامبا وبوجيهون تحصلان على 80٪ من مشروع مشترك بين برنامج الأمم المتحدة الإنمائي وبرنامج الأغذية العالمي لنجاح مشروع بناء السلام وسط COVID-19',
    country: 'الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Cras aliquet dueat vulputate.',
    description: 'تم النشر في ٢٧ يناير ٢٠٢١'}; return arabicText;
    case 'burmese': const burmeseText = {postheaderdata: [{
      text: 'အိမ်ပြန်'
    },
    {
      text: 'ဒုတိယအဆင့်'
    },
    {
      text: 'တတိယအဆင့်'
    },
    {
      text: 'စာမျက်နှာခေါင်းစဉ်'
    }],
    header: 'Moyamba နှင့် Pujehun ခရိုင်များသည် COVID-19 ကာလအတွင်းငြိမ်းချမ်းရေးတည်ဆောက်မှုစီမံကိန်းအောင်မြင်ရေးအတွက် UNDP နှင့် WFP ထောက်ပံ့ပေးသောစီမံကိန်း ၈၀% ပူးတွဲရမှတ်',
    country: 'Dummy စာသားသည် ၀ က်ဘ်ဆိုက်၏လှောင်ပြောင်မှုကိုဖြည့်ရန်အသုံးပြုသောအကြောင်းအရာအနည်းငယ်ကိုရည်ညွှန်းသည်။',
    description: 'ဇန်နဝါရီ ၂၇၊ ၂၀၂၁ တွင်တင်ခဲ့သည်'}; return burmeseText;
    case 'japanese': const japaneseText = {postheaderdata: [{
      text: 'الصفحة الرئيسية'
    },
    {
      text: 'セカンドレベル'
    },
    {
      text: '第3レベル'
    },
    {
      text: 'ページタイトル'
    }],
    header: 'モヤンバ地区とプジェフン地区は、COVID-19の中で平和構築プロジェクトが成功したことで、UNDPとWFPが支援する共同プロジェクトの80％を獲得しました。',
    country: 'ダミーテキストとは、Webサイトのモックアップを埋めるために使用されるコンテンツの一部を指します。',
    description: '2021年1月27日投稿'}; return japaneseText;
    default:
      const dummy =  {postheaderdata: [{
      text: 'Home'
    },
    {
      text: 'Second-level'
    },
    {
      text: 'Third-level'
    },
    {
      text: 'Page Title'
    }],
    header: 'Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding Project’s Success amidst COVID-19',
    country: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet consequat vulputate.',
    description: 'Posted 27 January, 2021'};
    return dummy
  }
};
