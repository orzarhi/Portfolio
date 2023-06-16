import { useSpeechSynthesis } from 'react-speech-kit';
import speaker from "../assets/images/speaker.png";

export const Speech = () => {
    const text = '-אני מְפַתֵּחַ תוכנה מְנֻסֶּה עם ניסיון של שנתיים בתעשייה ותשוקה עמוקה לְתִכְנוּת. במהלך הקריירה שלי, אני תמיד מחפש דרכים לשפר את הַכִּשורִים שלי ולהישאר מעודכן בטכנולוגיות הָעַדְכָּנִיות ביותר. יש לי עבודה וניסיון עם Node.js, Express.js, DOT NET, No SQL, React, Next.js, Remix, Tailwind ועוד.';
    const { speak } = useSpeechSynthesis();

    return (
        <img title='Click me' className='duration-300 shadow-lg animate-[wiggle_2s_ease-in-out_infinite] hover:animate-[wiggle_0s_ease-in-out_infinite] hover:-translate-y-0.5 not-drag w-9 h-9 mt-[70px] relative bottom-2.5 ml-3 cursor-pointer md:w-7 md:h-7 md:mt-20' src={speaker} onClick={() => speak({ text })} />
    );
}
