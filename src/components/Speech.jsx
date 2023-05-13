import { useSpeechSynthesis } from 'react-speech-kit';
import speaker from "../assets/images/speaker.png";

export const Speech = () => {
    const text = '-אני מְפַתֵּחַ תוכנה מְנֻסֶּה עם ניסיון של שנה וחצי בתעשייה ותשוקה עמוקה לתכנות. במהלך הקריירה שלי, אני תמיד מחפש דרכים לשפר את הַכִּשורִים  שלי ולהישאר מעודכן בטכנולוגיות הָעַדְכָּנִיות ביותר. יש לי עבודה וניסיוןב Node.js, Express.js, DOT NET, No SQL, React, Remix, Tailwind ועוד.';
    const { speak } = useSpeechSynthesis();

    return (
        <img title='Click me' className='w-7 h-7 mt-20 relative bottom-2.5 ml-2 cursor-pointer' src={speaker} onClick={() => speak({ text })} />
    );
}
