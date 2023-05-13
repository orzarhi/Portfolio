import { useSpeechSynthesis } from 'react-speech-kit';
import speaker from "../assets/images/speaker.png";

export const Speech = () => {
    const text = '-אני מְפַתֵּחַ תוכנה מנוסה עם ניסיון של שנה וחצי בתעשייה ותשוקה עמוקה לתכנות. במהלך הקריירה שלי, אני תמיד מחפש דרכים לשפר את הכישורים שלי ולהישאר מעודכן בטכנולוגיות העדכניות ביותר. יש לי עבודה וניסיוןב Node.js, Express.js, .NET, No SQL, React, Remix, Tailwind ועוד.';
    const { speak } = useSpeechSynthesis();

    return (
        <img className='w-8 h-8 mt-16 ml-2 cursor-pointer' src={speaker} onClick={() => speak({ text })} />
    );
}
