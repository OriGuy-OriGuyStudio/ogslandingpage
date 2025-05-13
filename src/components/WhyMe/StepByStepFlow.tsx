import {
  Code,
  ListTodo,
  PhoneCall,
  Rocket,
  SplinePointer,
  StepForward,
} from "lucide-react";
import React from "react";
interface StepProps {
  icon: any;
  stage: string;
  title: string;
  secondaryTitle: string;
  text: string;
}
function StepByStepFlow() {
  const data: StepProps[] = [
    {
      icon: <PhoneCall className="size-10 md:size-10 lg:size-16" />,
      stage: "שלב 1",
      title: "שיחה קצרה להיכרות",
      secondaryTitle: "קודם מדברים, לא ממלאים טפסים",
      text: "נקיים פגישה טלפונית ראשונית. ,תספרו לי על העסק שלכם, נבין מה אתם צריכים ונבחן התאמה ראשונית לבניית אתר ביחד, לאחר מכן נתאם לנו שיחת אפיון מלאה בזום",
    },
    {
      icon: <ListTodo className="size-10 md:size-10 lg:size-16" />,
      stage: "שלב 2",
      title: "אפיון מדויק",
      secondaryTitle: "עושים סדר לפני שמתחילים לבנות",
      text: "פגישת האיפיון תתבצע בזום בצורה דיגיטלית כך שאתם יכולים לבצע אותה מכל מקום שנוח לכם בלי לבזבז זמן יקר. בשיחת האיפיון נדבר בהרחבה על העסק, נקבע מטרות עסקיות לאתר ואני אוכל להתחיל לבנות מבנה לאתר ולייצר את חווית המשתמש שהלקוח שלכם יעבור באתר ",
    },
    {
      icon: <SplinePointer className="size-10 md:size-10 lg:size-16" />,
      stage: "שלב 3",
      title: "עיצוב בהתאמה אישית",
      secondaryTitle: "עיצוב ייחודי ומושך לקוחות עם חווית משתמש מודרנית",
      text: ",בשלב זה האתר שלכם מתחיל לקבל חיים. מתחילים בעיצוב בסיסי מאוד ומתקדמים לעיצוב מלא ומרשים שמתאים בדיוק ללקוחות שלכם ולעסק שלכם. הכל מותאם אישית, מיוחד וללא תבניות גנריות",
    },
    {
      icon: <Code className="size-10 md:size-10 lg:size-16" />,
      stage: "שלב 4",
      title: "פיתוח ובדיקות",
      secondaryTitle: "בניית אתר בסטנדרט גבוה ובדיקות איכות QA",
      text: "לאחר האישור שלכם על העיצוב אני מיד עובר לתהליך הפיתוח, הפיתוח מתבצע בכלים המתקדמים בתעשייה וברמת פיתוח גבוה. בנוסף האתר שלכם יעבור בדיקות איכות על מנת שנוודא שהכל עובד תקין, מהיר ומאובטח.",
    },
    {
      icon: <Rocket className="size-10 md:size-10 lg:size-16" />,
      stage: "שלב 5",
      title: "מסירה הדרכה וליווי",
      secondaryTitle: "אני לא משאיר אתכם לבד !",
      text: "איזה כיף 🎉  האתר מוכן! אני מדריך אתכם איך לתפעל אותו ואם שכחתם משהו אל דאגה אתם מקבלים ממני גם סרטון הסבר שזמין לכם תמיד בכל שעה ובכל מקום. עם שירות הליווי שלי – אתם לא נשארים לבד גם אחרי שהוא באוויר (שירות תמיכה בתשלום).",
    },
  ];
  return (
    <div className="grid col-span-full grid-cols-4 lg:grid-cols-12 gap-y-4 place-items-center">
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="border-1 flex flex-col gap-4 rounded-2xl border-colorBrandPurple500light px-8 py-10 shadow-sm shadow-colorBrandPurple500light col-span-full lg:col-start-2 lg:col-span-10">
              <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                <span className="inline-block">{item.icon}</span>
                <div className="font-black leading-none">
                  <h4 className="text-textsizebrandh5">{item.stage}</h4>
                  <h5 className="text-textsizebrandh3">{item.title}</h5>
                  <p className="mt-2 text-colorBrandPink500dark">
                    {item.secondaryTitle}
                  </p>
                </div>
              </div>
              <div id="bottom">
                <p className="w-full text-textsizebrandh6 leading-snug lg:w-8/12">
                  {item.text}
                </p>
              </div>
            </div>
            {index < data.length - 1 && (
              <span className="col-span-full">
                <StepForward className="size-16 text-colorBrandPink500dark lg:size-16 " />
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default StepByStepFlow;
