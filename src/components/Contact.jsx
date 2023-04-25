import { useRef, useState } from "react";
import { BsSend } from "react-icons/bs"
import emailjs from '@emailjs/browser';
import { success, error } from "../utils/notification";

//BsSendCheck
export const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const sendRequest = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            if (sendRequest.status === 200) {
                success("Message was sent successfully.")
                resetInputs();
                return;
            }

        } catch (err) {
            error(err ? err.message : "Something went wrong, try again.")
        }

    };

    const resetInputs = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
            <div className="flex justify-center font-electrolize text-white  mt-24 md:ml-0">
                <span className="text-3xl underline decoration-blue-dark/80 xl:ml-10 md:ml-0">
                    Contact Me
                </span>
            </div>

            <form ref={form} onSubmit={sendEmail} className="grid justify-items-center gap-5 mt-5  rounded-md text-white">
                <input className="bg-transparent bg-black border rounded-md  w-2/5 h-12  md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40" name="user_name" placeholder="Name" value={name} onChange={({ target }) => setName(target.value)} />
                <input type="email" className="bg-transparent bg-black border rounded-md w-2/5 h-12 md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40" name="user_email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                <textarea className="bg-transparent bg-black border rounded-md w-2/5 h-12 md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40 " name="message" placeholder="Message" value={message} onChange={({ target }) => setMessage(target.value)} />
                <button className="mb-16 md:w-11/12 text-2xl p-1 rounded-md bg-gradient-to-r from-teal to-purple shadow-md shadow-grey-dark hover:shadow-gray via-blue w-2/5" ><BsSend className="inline-block" /></button>
            </form >
        </>
    )
}
