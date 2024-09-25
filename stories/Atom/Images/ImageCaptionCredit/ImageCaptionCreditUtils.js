export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case 'english':
        return {
          label: ['UNDP/Angola', <br />, <strong>Jerome Bell</strong>],
          paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus. ',
        };
      case 'ukrainian':
        return {
          label: ['ПРООН в Україні', <br />, <strong>Андрій Крєпкіх</strong>],
          paragraph:
            'Аварійні роботи, що сприяють відновленню та відбудові',
        };
      case 'arabic':
        return {
          label: [
            'برنامج الأمم المتحدة الإنمائي / أنغولا',
            <br />,
            <strong>جيروم بيل</strong>,
          ],
          paragraph:
            'الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Morbi lorem tortor، fermentum eu lorem at، venenatis malesuada laughter.',
        };
      case 'burmese':
        return {
          label: ['UNDP/အန်ဂိုလာ', <br />, <strong>ဂျရုမ်း ဘဲလ်</strong>],
          paragraph:
            'နာကျင်မှုကိုယ်တိုင်က နာကျင်ပေမယ့် အဓိက အာရုံစိုက်တာက ဖောက်သည်အပေါ်ပါ။ Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada ရယ်မောခြင်း။',
        };
      case 'japanese':
        return {
          label: ['UNDP /アンゴラ', <br />, <strong>ジェロームベル</strong>],
          paragraph:
            '痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Morbi lorem tortor、fermentum eu lorem at、venenatismalesuadaの笑い声。',
        };
      default:
        return {
          label: ['UNDP/Angola', <br />, <strong>Jerome Bell</strong>],
          paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem tortor, fermentum eu lorem at, venenatis malesuada risus. ',
        };
    }
  };