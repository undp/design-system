export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case 'english':
        return {
          sidebardata: [
            {
              descriptionText: 'Subpage title',
            },
            {
              descriptionText: 'Subpage with an exceptionally long title on two lines',
            },
            {
              descriptionText: 'Subpage title',
            },
          ],
          headerText: 'PAGE TITLE',
          label: 'MENU',
        };
      case 'ukrainian':
        return {
          sidebardata: [
            {
              descriptionText: 'Назва підсторінки',
            },
            {
              descriptionText:
                'Підсторінка з надзвичайно довгим заголовком у два рядки',
            },
            {
              descriptionText: 'Назва підсторінки',
            },
          ],
          headerText: 'Назва підсторінки',
          label: 'МЕНЮ',
        };
      case 'arabic':
        return {
          sidebardata: [
            {
              descriptionText: 'عنوان الصفحة الفرعية',
            },
            {
              descriptionText: 'صفحة فرعية بعنوان طويل بشكل استثنائي في سطرين',
            },
            {
              descriptionText: 'عنوان الصفحة الفرعية',
            },
          ],
          headerText: 'عنوان الصفحة',
          label: 'قائمة',
        };
      case 'burmese':
        return {
          sidebardata: [
            {
              descriptionText: 'စာမျက်နှာခွဲခေါင်းစဉ်',
            },
            {
              descriptionText:
                'စာကြောင်းနှစ်ကြောင်းတွင်ထူးခြားသောခေါင်းစဉ်ရှည်ပါ ၀ င်သောစာမျက်နှာခွဲ',
            },
            {
              descriptionText: 'စာမျက်နှာခွဲခေါင်းစဉ်',
            },
          ],
          headerText: 'စာမျက်နှာခေါင်းစဉ်',
          label: 'မီနူး',
        };
      case 'japanese':
        return {
          sidebardata: [
            {
              descriptionText: 'サブページのタイトル',
            },
            {
              descriptionText: '2行に非常に長いタイトルのサブページ',
            },
            {
              descriptionText: 'サブページのタイトル',
            },
          ],
          headerText: 'ページタイトル',
          label: 'メニュー',
        };
      default:
        return {
          sidebardata: [
            {
              descriptionText: 'Subpage title',
            },
            {
              descriptionText:
                'Subpage with an exceptionally long title on two lines',
            },
            {
              descriptionText: 'Subpage title',
            },
          ],
          headerText: 'PAGE TITLE',
          label: 'Menu',
        };
    }
  };

