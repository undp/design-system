export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case "english":
        const engText = {
          languagedata: [
            {
              descriptionText: "Français",
              lang: "fr",
            },
            {
              descriptionText: "Español",
              lang: "es",
            },
          ],
          headerText: "English",
        };
        return engText;
      case "ukrainian":
        const ukText = {
          languagedata: [
            {
              descriptionText: "Français",
              lang: "fr",
            },
            {
              descriptionText: "Español",
              lang: "es",
            },
          ],
          headerText: "Українська",
        };
        return ukText;
      case "arabic":
        const arabicText = {
          languagedata: [
            {
              descriptionText: "Français",
              lang: "fr",
            },
            {
              descriptionText: "Español",
              lang: "es",
            },
          ],
          headerText: "إنجليزي",
        };
        return arabicText;
      case "burmese":
        const burmeseText = {
          languagedata: [
            {
              descriptionText: "Français",
              lang: "fr",
            },
            {
              descriptionText: "Español",
              lang: "es",
            },
          ],
          headerText: "အင်္ဂလိပ်စာ",
        };
        return burmeseText;
      case "japanese":
        const japaneseText = {
          languagedata: [
            {
              descriptionText: "Français",
              lang: "fr",
            },
            {
              descriptionText: "Español",
              lang: "es",
            },
          ],
          headerText: "英語",
        };
        return japaneseText;
      default:
        const dummy = {
          languagedata: [
            {
              descriptionText: "Français",
              lang: "fr",
            },
            {
              descriptionText: "Español",
              lang: "es",
            },
          ],
          headerText: "English",
        };
        return dummy;
    }
  };