import { useRef, useState } from "react";
import { BsSend } from "react-icons/bs"
import emailjs from '@emailjs/browser';
import { success, error, info } from "../utils/notification";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react"
import { useInView } from "react-intersection-observer";

export const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const boxVariant = {
        hidden: { opacity: 0, slice: 0, y: 100 },
        visible: { opacity: 1, slice: 1, y: 0, transition: { duration: 1.5 } }
    };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);


    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            if (!name || !email || !message) {
                info("Please fill in all fields.")
            } else {
                const sendRequest = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
                if (sendRequest.status === 200) {
                    success("Message was sent successfully.")
                    resetInputs();
                }
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
            <div className="flex justify-center mt-24 text-white font-electrolize md:ml-0">
                <span className="text-3xl underline decoration-blue-dark/80 xl:ml-10 md:ml-0">
                    Contact Me
                </span>
            </div>

            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                <form ref={form} onSubmit={sendEmail} className="grid gap-5 mt-5 text-white rounded-md justify-items-center">
                    <input className="w-2/5 h-12 bg-transparent bg-black border rounded-md md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40" name="user_name" placeholder="Name" value={name} onChange={({ target }) => setName(target.value)} />
                    <input type="email" className="w-2/5 h-12 bg-transparent bg-black border rounded-md md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40" name="user_email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                    <textarea className="w-2/5 h-12 bg-transparent bg-black border rounded-md md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40 " name="message" placeholder="Message" value={message} onChange={({ target }) => setMessage(target.value)} />
                    <button className="w-2/5 p-1 mb-16 text-2xl rounded-md shadow-md md:w-11/12 bg-gradient-to-r from-teal to-purple shadow-grey-dark hover:shadow-gray via-blue" ><BsSend className="inline-block" /></button>
                </form >
            </motion.div>
        </>
    )
}
