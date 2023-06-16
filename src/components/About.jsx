/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import image from "../assets/images/or.jpg"
import { TbBrandGithub } from "react-icons/tb"
import { CiLinkedin } from "react-icons/ci"
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"
import { BsFiletypePdf } from "react-icons/bs"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";
import { Speech } from "./Speech"

export const About = () => {
    const divVariants = {
        initial: {
            x: "100vw",
        },
        animate: {
            x: 0,
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <main className="flex justify-start p-24 text-white  bg-gradient-to-tl from-teal/5 to-purple/25 via-blue/20 font-electrolize lg:grid sm:w-full sm:p-5">
            <div className="h-36 sm:-ml-2 w-max">
                <h1 className="overflow-hidden text-5xl border-r-4 selection animate-typing whitespace-nowrap border-r-white lg:text-3xl sm:text-2xl ">
                    I&lsquo;m Or Zarhi, Full-Stack Developer
                </h1>
                <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover w-max">
                    <LazyLoadImage
                        alt="image-or"
                        effect="blur"
                        className="not-drag w-40 animate-[wiggle_2s_ease-in-out_infinite] rounded-full"
                        src={image} />
                </div>
            </div>
            <div className="w-2/5 ml-14 xl:w-full lg:ml-0 md:mt-10 sm:ml-0 sm:w-full sm:p-2 ">
                <motion.div
                    variants={divVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className="flex -mb-4 lg:mt-10 lg:justify-center">
                        <span className="mt-16 text-3xl underline selection decoration-blue-dark/80 sm:mr-1">
                            About me
                        </span>
                        <Speech />
                    </div>

                    <br />
                    <span className="text-2xl selection sm:text-xl">
                        I'm an experienced software developer with 2 years of experience in the industry and a deep passion for programming. Throughout my career, I‘m always looking for ways to improve my skills and stay on top of the latest technologies. I‘ve work and experience in Node.js, Express.js, .NET, NoSQL, React, Next.js, Remix, Tailwind and more.
                    </span>
                    <div className="flex justify-start mt-5 text-2xl sm:justify-center">
                        <a target="_blank" href="https://github.com/orzarhi"> <TbBrandGithub className="contact-icons" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/or-zarhi/"><CiLinkedin className="ml-6 contact-icons" /></a>
                        <a target="_blank" href="mailto:or.zarhi11@gmail.com">  <AiOutlineMail className="ml-6 contact-icons" /></a>
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=972523638638&text=שלום אור זרחי,&type=phone_number&app_absent=0"> <AiOutlineWhatsApp className="ml-6 contact-icons" /></a>
                        <a href="Or Zarhi-CV.pdf" download="Or Zarhi-CV.pdf"> <BsFiletypePdf className="ml-6 shadow-md cursor-pointer hover:shadow-blue" /></a>
                    </div>

                </motion.div>
            </div>
        </main >



    )
}
