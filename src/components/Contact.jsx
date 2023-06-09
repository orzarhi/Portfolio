import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import emoji from "../assets/images/emoji.png";
import { error, info, success } from "../utils/notification";
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const boxVariant = {
        hidden: { opacity: 0, slice: 0, y: 100 },
        visible: { opacity: 1, slice: 0, y: 0, transition: { duration: 1.5 } }
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
                setSent(true)
                const sendRequest = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
                if (sendRequest.status === 200) {
                    setSent(false)
                    success("Message was sent successfully.")
                    resetInputs();
                }
            }

        } catch (err) {
            setSent(false)
            error(err ? err.message : "Something went wrong, try again.")
        }

    };

    const resetInputs = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <main className='bg-gradient-to-tr from-purple/20  to-teal/10 via-blue/5'>
            <div className="flex justify-center  text-white font-electrolize md:ml-0">
                <span className="selection text-3xl underline mt-24 decoration-blue-dark/80 xl:ml-0">
                    Contact me
                </span>
            </div>
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                <div className='flex justify-center'>
                    <img className='not-drag w-36 -mb-16' src={emoji} />
                </div>
            </motion.div>
            <form ref={form} onSubmit={sendEmail} className="grid gap-5 mt-5 text-white rounded-md justify-items-center">
                <input className="contact-form bg-gradient-to-tl from-black  to-purple/20 via-blue/20" required name="user_name" placeholder="Name" value={name} onChange={({ target }) => setName(target.value)} />
                <input className="contact-form bg-gradient-to-tl from-purple/20 via-teal/10 to-teal/20" required type="email" name="user_email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                <textarea className="contact-form bg-gradient-to-tl from-black/5 to-purple/20 via-teal/20" required name="message" placeholder="Message" value={message} onChange={({ target }) => setMessage(target.value)} />
                <button className={` w-2/5 p-1 mb-16 text-2xl rounded-md shadow-md lg:w-2/3 md:w-11/12  shadow-grey-dark hover:shadow-gray  bg-gradient-to-r ${!sent ? "from-teal to-purple via-blue" : "from-teal/40 to-purple/40 via-blue/40"}`} disabled={sent}> <BsSend className="inline-block" /></button>
            </form >

        </main>
    )
}
