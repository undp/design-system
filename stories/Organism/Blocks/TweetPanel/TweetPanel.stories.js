import { Meta, Story } from "@storybook/addon-docs";
import { TweetPanel } from "./TweetPanel";
import img from "../../../assets/images/undp-twitter.jpg";
import { Link } from '../../../Atom/Typography/Links/Links';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        tweetpaneldata: [
          {
            contenttile: "UN Development",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "VIEW ON TWITTER",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "UN Development",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "VIEW ON TWITTER",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "UN Development",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "VIEW ON TWITTER",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "UN Development",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "VIEW ON TWITTER",
            link: "#",
            imgback: img,
          },
        ],
        headertext: ["@UNDP",<br/>,"Tweets",<span className="twitter" />]
      };
      return engText;
    case "arabic":
      const arabicText = {
        tweetpaneldata: [
          {
            contenttile: "الأمم المتحدة للتنمية",
            contentsubtitle: "برنامج الأمم المتحدة الإنمائي",
            contentdate: ["5:00:11 مساءً · 12/2/2020"],
            descriptiontext:
             ["إدارة مخاطر الكوارث التي يتم إجراؤها بشكل جيد يمكن أن تكون الفرق بين: الحياة والموت ؛ التعرض للإصابة أو اللياقة ؛ وجود سقف فوق رأسك أو أن تكون بلا مأوى: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "اقرأ أكث",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "الأمم المتحدة للتنمية",
            contentsubtitle: "برنامج الأمم المتحدة الإنمائي",
            contentdate: ["5:00:11 مساءً · 12/2/2020"],
            descriptiontext: ["إدارة مخاطر الكوارث التي يتم إجراؤها بشكل جيد يمكن أن تكون الفرق بين: الحياة والموت ؛ التعرض للإصابة أو اللياقة ؛ وجود سقف فوق رأسك أو أن تكون بلا مأوى: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "اقرأ أكث",
            link:"#",
            imgback: img
          },
          {
            contenttile: "الأمم المتحدة للتنمية",
            contentsubtitle: "برنامج الأمم المتحدة الإنمائي",
            contentdate: ["5:00:11 مساءً · 12/2/2020"],
            descriptiontext: ["إدارة مخاطر الكوارث التي يتم إجراؤها بشكل جيد يمكن أن تكون الفرق بين: الحياة والموت ؛ التعرض للإصابة أو اللياقة ؛ وجود سقف فوق رأسك أو أن تكون بلا مأوى: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "اقرأ أكث",
            link:"#",
            imgback: img
          },
          {
            contenttile: "الأمم المتحدة للتنمية",
            contentsubtitle: "برنامج الأمم المتحدة الإنمائي",
            contentdate: ["5:00:11 مساءً · 12/2/2020"],
            descriptiontext: ["إدارة مخاطر الكوارث التي يتم إجراؤها بشكل جيد يمكن أن تكون الفرق بين: الحياة والموت ؛ التعرض للإصابة أو اللياقة ؛ وجود سقف فوق رأسك أو أن تكون بلا مأوى: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "اقرأ أكث",
            link:"#",
            imgback: img
          }
        ],
        headertext: ["@UNDP",<br/>,"تغريدات",<span className="twitter" />]
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        tweetpaneldata: [
          {
            contenttile: "ကုလသမဂ္ဂ ဖွံ့ဖြိုးတိုးတက်ရေး",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["သဘာဝဘေး အန္တရာယ်ဆိုင်ရာ စီမံခန့်ခွဲမှုကို ကောင်းမွန်စွာလုပ်ဆောင်နိုင်သည်- အသက်နှင့် သေဆုံးမှုအကြား ခြားနားချက်ဖြစ်နိုင်သည်။ ထိခိုက်ဒဏ်ရာရခြင်း၊ သင့်ခေါင်းပေါ်တွင် အမိုးရှိခြင်း သို့မဟုတ် အိုးမဲ့အိမ်မဲ့ဖြစ်ခြင်း။: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "ကုလသမဂ္ဂ ဖွံ့ဖြိုးတိုးတက်ရေး",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["သဘာဝဘေး အန္တရာယ်ဆိုင်ရာ စီမံခန့်ခွဲမှုကို ကောင်းမွန်စွာလုပ်ဆောင်နိုင်သည်- အသက်နှင့် သေဆုံးမှုအကြား ခြားနားချက်ဖြစ်နိုင်သည်။ ထိခိုက်ဒဏ်ရာရခြင်း၊ သင့်ခေါင်းပေါ်တွင် အမိုးရှိခြင်း သို့မဟုတ် အိုးမဲ့အိမ်မဲ့ဖြစ်ခြင်း။: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "ကုလသမဂ္ဂ ဖွံ့ဖြိုးတိုးတက်ရေး",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["သဘာဝဘေး အန္တရာယ်ဆိုင်ရာ စီမံခန့်ခွဲမှုကို ကောင်းမွန်စွာလုပ်ဆောင်နိုင်သည်- အသက်နှင့် သေဆုံးမှုအကြား ခြားနားချက်ဖြစ်နိုင်သည်။ ထိခိုက်ဒဏ်ရာရခြင်း၊ သင့်ခေါင်းပေါ်တွင် အမိုးရှိခြင်း သို့မဟုတ် အိုးမဲ့အိမ်မဲ့ဖြစ်ခြင်း။: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "ကုလသမဂ္ဂ ဖွံ့ဖြိုးတိုးတက်ရေး",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["သဘာဝဘေး အန္တရာယ်ဆိုင်ရာ စီမံခန့်ခွဲမှုကို ကောင်းမွန်စွာလုပ်ဆောင်နိုင်သည်- အသက်နှင့် သေဆုံးမှုအကြား ခြားနားချက်ဖြစ်နိုင်သည်။ ထိခိုက်ဒဏ်ရာရခြင်း၊ သင့်ခေါင်းပေါ်တွင် အမိုးရှိခြင်း သို့မဟုတ် အိုးမဲ့အိမ်မဲ့ဖြစ်ခြင်း။: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
          }
        ],
        headertext: ["@UNDP",<br/>,"တွိပါ။",<span className="twitter" />]
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        tweetpaneldata: [
          {
            contenttile: "国連開発",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM・2020年12月2日"],
            descriptiontext:
              ["災害リスクガバナンスがうまく行われていることが、生と死の違いになる可能性があります。けがをしたり、体調を崩したりする。頭上に屋根があるか、ホームレスになっている: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "続きを読む",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "国連開発",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM・2020年12月2日"],
            descriptiontext:
              ["災害リスクガバナンスがうまく行われていることが、生と死の違いになる可能性があります。けがをしたり、体調を崩したりする。頭上に屋根があるか、ホームレスになっている: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "続きを読む",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "国連開発",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM・2020年12月2日"],
            descriptiontext:
              ["災害リスクガバナンスがうまく行われていることが、生と死の違いになる可能性があります。けがをしたり、体調を崩したりする。頭上に屋根があるか、ホームレスになっている: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "続きを読む",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "国連開発",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM・2020年12月2日"],
            descriptiontext:
              ["災害リスクガバナンスがうまく行われていることが、生と死の違いになる可能性があります。けがをしたり、体調を崩したりする。頭上に屋根があるか、ホームレスになっている: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "続きを読む",
            link: "#",
            imgback: img,
          }
        ],
        headertext: ["@UNDP",<br/>,"ツイート",<span className="twitter" />]
      };
      return japaneseText;
    default:
      const dummy = {
        tweetpaneldata: [
          {
            contenttile: "UN Development",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "VIEW ON TWITTER",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "UN Development",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "VIEW ON TWITTER",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "UN Development",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "VIEW ON TWITTER",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "UN Development",
            contentsubtitle: "@UNDP",
            contentdate: ["5:00:11 PM ·12/2/2020"],
            descriptiontext:
              ["Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless: ",<Link variant='animated' label='https://bit.ly/2FWFsqH' />],
            button: "VIEW ON TWITTER",
            link: "#",
            imgback: img,
          },
        ],
        headertext: ["@UNDP",<br/>,"Tweets",<span className="twitter" />]
      };
      return dummy;
  }
};