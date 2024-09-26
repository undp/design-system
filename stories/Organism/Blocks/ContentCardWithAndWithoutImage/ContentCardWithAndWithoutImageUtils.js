import img from "../../../assets/images/card2.jpg";
import img2 from "../../../assets/images/donate.png";
import img3 from "../../../assets/images/explore.png";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        contentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "green",
            type: "image",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“We are a forgotten population.” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "gray",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "UN calls for comprehensive debt standstill in all developing countries.",
            contentnametwo:
              "UN calls for comprehensive debt standstill in all developing countries.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "green",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“I cry for no apparent reason.”",
            contentnametwo: "“I cry for no apparent reason.”",
            paragraph:
              "More than nine years of war have left 11.7 million Syrians in need of assistance and 6.2 million are internally displaced, some many times over.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "gray",
            type: "color",
            BackgroundColor: "card",
          },
        ],
        storyBtn: "SEE ALL STORIES",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        contentdata: [
          {
            contenttile: " Реагування на війну в Україні ",
            contentname:
              " Програма ПРООН із підвищення стійкості та відновлення ",
            button: "Читати далі ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "green",
            type: "image",
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "gray",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: " Фоторепортаж ",
            contentname:
              " Світ дуже бурхливий, і ти адаптуєшся ",
            contentnametwo:
              " Світ дуже бурхливий, і ти адаптуєшся ",
            paragraph:
              "Просуваючи цифрову рівність під час війни",
            button: "Більше ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "green",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: " Блог ",
            contentname: " Виявлення реального стану енергетичної інфраструктури України після руйнівних обстрілів ",
            contentnametwo: " Виявлення реального стану енергетичної інфраструктури України після руйнівних обстрілів ",
            paragraph:
              "Нова оцінка стану енергетичного сектора в усій країні підтвердила, що нанесені збитки перевищують 10 млрд дол. США, а здатність України виробляти електроенергію знизилася на 61%. Оскільки інтенсивність обстрілів енергосистеми не вщухає, що чекає на Україну в майбутньому?",
            button: "Більше ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "gray",
            type: "color",
            BackgroundColor: "card",
          },
        ],
        storyBtn: "ПЕРЕГЛЯНУТИ БІЛЬШЕ",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        contentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname:
              "في كوستاريكا ، تقوم النساء الريفيات بتنمية أعمالهن الخاصة.",
            button: "اقرأ أكث",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "green",
            type: "image",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: ' "نحن شعب منسي."',
            contentnametwo: '"نحن شعب منسي."',
            paragraph:
              "استخدام وسائل التواصل الاجتماعي لمساعدة الفئات المهمشة في الحصول على خدمات فيروس نقص المناعة البشرية خلال COVID-19",
            button: "اقرأ أكث",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "النشر",
            contentname:
              " الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.",
            contentnametwo:
              " الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "green",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: '"أبكي بدون سبب واضح."',
            contentnametwo: '"أبكي بدون سبب واضح."',
            paragraph:
              "خلفت أكثر من تسع سنوات من الحرب 11.7 مليون سوري بحاجة إلى المساعدة و 6.2 مليون نازح داخليًا ، عدة مرات أكثر.",
            button: "اقرأ أكث",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
        ],
        storyBtn: "شاهد كل القصص",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        contentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ကော်စတာရီကာတွင် ကျေးလက်နေ အမျိုးသမီးများသည် ၎င်းတို့၏ ကိုယ်ပိုင်စီးပွားရေးများကို တိုးချဲ့လုပ်ကိုင်ကြသည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "green",
            type: "image",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname: '"ကျွန်ုပ်တို့သည် မေ့လျော့နေသော လူဦးရေများ"',
            contentnametwo: '"ကျွန်ုပ်တို့သည် မေ့လျော့နေသော လူဦးရေများ"',
            paragraph:
              "COVID-19 ကာလအတွင်း ဘေးဖယ်ခံထားရသော အုပ်စုများအား HIV ဝန်ဆောင်မှုများ ရရှိနိုင်ရန် လူမှုမီဒီယာကို အသုံးပြုခြင်း။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "စာအုပ်ထုတ်ဝေရေး",
            contentname:
              "ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။",
            contentnametwo:
              "ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "green",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname: '"ကျွန်တော် အကြောင်းပြချက်မရှိဘဲ ငိုတယ်။"',
            contentnametwo: '"ကျွန်တော် အကြောင်းပြချက်မရှိဘဲ ငိုတယ်။"',
            paragraph:
              "စစ်ပွဲ ကိုးနှစ်ကျော်ကြာ ဖြစ်ပွားခဲ့သော ဆီးရီးယားနိုင်ငံသား ၁၁.၇ သန်းသည် အကူအညီများ လိုအပ်နေပြီး ၆.၂ သန်းမှာ ပြည်တွင်း အိုးအိမ်စွန့်ခွာ ထွက်ပြေးခဲ့ရပြီး အချို့မှာ အကြိမ်များစွာ ပြီးဆုံးသွားခဲ့သည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
        ],
        storyBtn: "ဇာတ်လမ်းများအားလုံးကို ကြည့်ပါ။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        contentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname:
              "コスタリカでは、地方の女性が自分たちのビジネスを成長させています。",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "green",
            type: "image",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "「私たちは忘れられた人口です。」",
            contentnametwo: "「私たちは忘れられた人口です。」",
            paragraph:
              "社会的に疎外されたグループがCOVID-19中にHIVサービスを受けるのを助けるためにソーシャルメディアを使用する",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "出版物",
            contentname:
              "国連は、すべての開発途上国で包括的な債務停止を求めています",
            contentnametwo:
              "国連は、すべての開発途上国で包括的な債務停止を求めています",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "green",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "「私は明白な理由もなく泣きます。」",
            contentnametwo: "「私は明白な理由もなく泣きます。」",
            paragraph:
              "9年以上の戦争により、1170万人のシリア人が支援を必要としており、620万人が国内避難民であり、何回も繰り返されています。",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
        ],
        storyBtn: "すべてのストーリーを見る",
      };
      return japaneseText;
    default:
      const dummy = {
        contentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "green",
            type: "image",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“We are a forgotten population.” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "UN calls for comprehensive debt standstill in all developing countries.",
            contentnametwo:
              "UN calls for comprehensive debt standstill in all developing countries.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "green",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“I cry for no apparent reason.”",
            contentnametwo: "“I cry for no apparent reason.”",
            paragraph:
              "More than nine years of war have left 11.7 million Syrians in need of assistance and 6.2 million are internally displaced, some many times over.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
        ],
        storyBtn: "SEE ALL STORIES",
      };
      return dummy;
  }
};