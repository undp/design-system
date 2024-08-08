import { Meta, Story } from '@storybook/addon-docs';

export const getCaptionForLocale = (locale) => {
  switch(locale) {
    case 'english': const engText = {detail1: 'HEADLINE 1', detail2: 'Headline 2', detail3: 'Headline 3', detail4: 'Headline 4', detail5: 'Headline 5', detail6: 'HEADLINE 6'}; return engText;
    case "ukrainian": return {detail1: "Заголовок 1", detail2: "Заголовок 2", detail3: "Заголовок 3", detail4: "Заголовок 4", detail5: "Заголовок 5", detail6: "Заголовок 6"};
    case 'arabic': const arabicText = {detail1: 'العنوان 1.', detail2: 'العنوان 2', detail3: 'العنوان 3', detail4: 'العنوان 4', detail5: 'العنوان 5', detail6: 'العنوان 6'}; return arabicText;
    case 'burmese': const burmeseText = {detail1: 'ခခေါင်းစီး ၁', detail2: 'ခေါင်းစဉ် ၂', detail3: 'ခေါင်းစဉ် ၃', detail4: 'ခေါင်းစဉ် ၄', detail5: 'ခေါင်းစဉ် ၅', detail6: 'ခေါင်းစဉ် ၆'}; return burmeseText;
    case 'japanese': const japaneseText = {detail1: '見出し1', detail2: '見出し2', detail3: '見出し3', detail4: '見出し4', detail5: '見出し5', detail6: '見出し6'}; return japaneseText;
    default:
      return {detail1: 'HEADLINE 1', detail2: 'Headline 2', detail3: 'Headline 3', detail4: 'Headline 4', detail5: 'Headline 5', detail6: 'HEADLINE 6'};
  }
};

<Meta title="Foundation/Typography/Headers"  />

export default {
  title: 'Foundation/Typography/Headers',
};
