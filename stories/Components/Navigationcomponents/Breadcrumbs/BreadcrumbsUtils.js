export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case "english":
        return [
          { text: "Home" },
          { text: "Second-level" },
          { text: "Third-level" },
          { text: "Page title" },
        ];
      case "ukrainian":
        return [
          { text: "Home" },
          { text: "Другий рівень" },
          { text: "Третій рівень" },
          { text: "Назва сторінки" },
        ];
      case "arabic":
        return [
          { text: "الصفحة الرئيسية" },
          { text: "المستوى الثاني" },
          { text: "المستوى الثالث" },
          { text: "عنوان الصفحة" },
        ];
      case "burmese":
        return [
          { text: "အိမ်" },
          { text: "ဒုတိယအဆင့်" },
          { text: "တတိယအဆင့်" },
          { text: "စာမျက်နှာခေါင်းစဉ်" },
        ];
      case "japanese":
        return [
          { text: "家" },
          { text: "セカンドレベル" },
          { text: "第3レベル" },
          { text: "ページタイトル" },
        ];
      default:
        return [
          { text: "Home" },
          { text: "Second-level" },
          { text: "Third-level" },
          { text: "Page title" },
        ];
    }
  };