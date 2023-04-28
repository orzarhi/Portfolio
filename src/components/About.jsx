/* eslint-disable react/jsx-no-target-blank */
import image from "../assets/images/or.jpg"
import { TbBrandGithub } from "react-icons/tb"
import { CiLinkedin } from "react-icons/ci"
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"
import { BsFiletypePdf } from "react-icons/bs"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";

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
        <div className="flex justify-start p-24 text-white font-electrolize lg:grid sm:w-full sm:p-5">
            <div className="h-36 sm:-ml-2 w-max">
                <h1 className="overflow-hidden text-5xl border-r-4 animate-typing whitespace-nowrap border-r-white lg:text-3xl sm:text-2xl ">
                    I&lsquo;m Or Zarhi, Full-Stack Developer
                </h1>
                <div className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover w-max">
                    <LazyLoadImage
                        alt="image-or"
                        effect="blur"
                        className="w-40 animate-[wiggle_2s_ease-in-out_infinite] rounded-full"
                        src={image} />
                </div>
            </div>
            <div className="w-2/5 ml-14 xl:w-full sm:ml-0 sm:w-full sm:p-2 lg:ml-0">

                <motion.div
                    variants={divVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className="lg:mt-10 lg:flex lg:justify-center">
                        <span className="mt-16 text-3xl underline decoration-blue-dark/80">
                            About me
                        </span>
                    </div>
                    <br />
                    <span className="text-2xl sm:text-xl">
                        I&lsquo;m a passionate Fullstack Developer with a love for creating complex apps and solving problems. I&lsquo;m always looking for ways to improve my skills and stay on top of the latest technologies.
                        I&lsquo;ve work and  experience in Node.js, Express.js, NoSQL, React, Remix, Tailwind and more.
                        Overall, I&lsquo;m a fast learner, a dedicated team player, and always up for a challenge. Let&lsquo;s build something awesome together!
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
        </div >



    )
}
