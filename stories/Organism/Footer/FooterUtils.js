export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case "english":
        const engText = {
          footerdata: [
            {
              text: "Page title",
            },
            {
              text: "Page title",
            },
            {
              text: "Page title",
            },
            {
              text: "Page title",
            },
            {
              text: "Page title",
            },
          ],
          menudata: [
            {
              menu: "Report Fraud, Abuse, Misconduct",
            },
            {
              menu: "Submit Social Or Environmental Complaint",
            },
            {
              menu: "Scam Alert",
            },
            {
              menu: "Terms Of Use",
            },
          ],
          menudata2: [
            {
              menu: "Terms Of Use",
            },
          ],
          headerText: ["United Nations", <br />, "Development Programme"],
          labelname: "Sign up for our newsletter",
          buttonname: "SUBMIT",
          placeholdername: "Email",
          errorLabel: "*Error: this field is required",
          pageTitle: "Page Title",
          copyright: "© United Nations Development Programme",
        };
        return engText;
      case "ukrainian":
        const ukText = {
          footerdata: [
            {
              text: "Назва сторінки",
            },
            {
              text: "Назва сторінки",
            },
            {
              text: "Назва сторінки",
            },
            {
              text: "Назва сторінки",
            },
            {
              text: "Назва сторінки",
            },
          ],
          menudata: [
            {
              menu: "Повідомити про обман, порушення або неналежну поведінку",
            },
            {
              menu: "Гаряча лінія з соціальних та екологічних питань",
            },
            {
              menu: "Запобігання шахрайству",
            },
            {
              menu: "Умови використання",
            },
          ],
          menudata2: [
            {
              menu: "Умови використання",
            },
          ],
          headerText: ["United Nations", <br />, "Development Programme"],
          labelname: "Підпишіться на наші новини",
          buttonname: "SUBMIT",
          placeholdername: "Email",
          errorLabel: "*Помилка: це поле обов'язкове",
          pageTitle: "Назва сторінки",
          copyright: "© ПРООН",
        };
        return ukText;
      case "arabic":
        const arabicText = {
          footerdata: [
            {
              text: "عنوان الصفحة",
            },
            {
              text: "عنوان الصفحة",
            },
            {
              text: "عنوان الصفحة",
            },
            {
              text: "عنوان الصفحة",
            },
            {
              text: "عنوان الصفحة",
            },
          ],
          menudata: [
            {
              menu: "الإبلاغ عن الاحتيال والإساءة وسوء السلوك",
            },
            {
              menu: "إرسال شكوى اجتماعية أو بيئية",
            },
            {
              menu: "تنبيه احتيال",
            },
            {
              menu: "تعليمات الاستخدام",
            },
          ],
          menudata2: [
            {
              menu: "تعليمات الاستخدام",
            },
          ],
          headerText: ["الأمم المتحدة", <br />, "برنامج التطوير"],
          labelname: "سجل للحصول على اخر اخبارنا",
          buttonname: "يقدم",
          placeholdername: "بريد الالكتروني",
          errorLabel: "* خطأ: هذا الحقل مطلوب",
          pageTitle: "عنوان الصفحة",
          copyright: "© برنامج الأمم المتحدة الإنمائي ",
        };
        return arabicText;
      case "burmese":
        const burmeseText = {
          footerdata: [
            {
              text: "စာမျက်နှာခေါင်းစဉ်",
            },
            {
              text: "စာမျက်နှာခေါင်းစဉ်",
            },
            {
              text: "စာမျက်နှာခေါင်းစဉ်",
            },
            {
              text: "စာမျက်နှာခေါင်းစဉ်",
            },
            {
              text: "စာမျက်နှာခေါင်းစဉ်",
            },
          ],
          menudata: [
            {
              menu: "လိမ်လည်မှု၊ အလွဲသုံးစားမှု၊ အကျင့်ပျက်ခြစားမှုကိုအစီရင်ခံပါ",
            },
            {
              menu: "လူမှုရေးသို့မဟုတ်ပတ်ဝန်းကျင်ဆိုင်ရာတိုင်ကြားစာကိုတင်ပါ",
            },
            {
              menu: "Scam သတိပေးချက်",
            },
            {
              menu: "သတ်မှတ်ချက်များ",
            },
          ],
          menudata2: [
            {
              menu: "သတ်မှတ်ချက်များ",
            },
          ],
          headerText: ["ကုလသမဂ္ဂ", <br />, "ဖွံ့ဖြိုးရေးအစီအစဉ်"],
          labelname: "ကျွန်ုပ်တို့၏သတင်းလွှာအတွက်စာရင်းပေးသွင်းပါ",
          buttonname: "တင်ပေးပါ",
          placeholdername: "အီးမေးလ်",
          errorLabel: "*အမှား - ဤအကွက်လိုအပ်သည်",
          pageTitle: "စာမျက်နှာခေါင်းစဉ်",
          copyright: "© ကုလသမဂ္ဂဖွံ့ဖြိုးမှုအစီအစဉ်",
        };
        return burmeseText;
      case "japanese":
        const japaneseText = {
          footerdata: [
            {
              text: "ページタイトル",
            },
            {
              text: "ページタイトル",
            },
            {
              text: "ページタイトル",
            },
            {
              text: "ページタイトル",
            },
            {
              text: "ページタイトル",
            },
          ],
          menudata: [
            {
              menu: "詐欺、虐待、不正行為を報告する",
            },
            {
              menu: "社会的または環境的苦情を提出する",
            },
            {
              menu: "詐欺警告",
            },
            {
              menu: "利用規約",
            },
          ],
          menudata2: [
            {
              menu: "利用規約",
            },
          ],
          headerText: ["国連", <br />, "開発プログラム"],
          labelname: "ニュースレターに登録する",
          buttonname: "送信",
          placeholdername: "Eメール",
          errorLabel: "*エラー：このフィールドは必須です",
          pageTitle: "ページタイトル",
          copyright: "© 国連開発計画",
        };
        return japaneseText;
      default:
        const dummy = {
          footerdata: [
            {
              text: "Page title",
            },
            {
              text: "Page title",
            },
            {
              text: "Page title",
            },
            {
              text: "Page title",
            },
            {
              text: "Page title",
            },
          ],
          menudata: [
            {
              menu: "Report Fraud, Abuse, Misconduct",
            },
            {
              menu: "Submit Social Or Environmental Complaint",
            },
            {
              menu: "Scam Alert",
            },
            {
              menu: "Terms Of Use",
            },
          ],
          menudata2: [
            {
              menu: "Terms Of Use",
            },
          ],
          headerText: ["United Nations", <br />, "Development Programme"],
          labelname: "Sign up for our newsletter",
          buttonname: "SUBMIT",
          placeholdername: "Email",
          errorLabel: "*Error: this field is required",
          pageTitle: "Page Title",
          copyright: "© United Nations Development Programme",
        };
        return dummy;
    }
  };