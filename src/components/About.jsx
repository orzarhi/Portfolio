/* eslint-disable react/jsx-no-target-blank */
import image from "../assets/images/or.jpg"
import { TbBrandGithub } from "react-icons/tb"
import { CiLinkedin } from "react-icons/ci"
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"
import { BsFiletypePdf } from "react-icons/bs"
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const About = () => {
    const blockVariants = {
        initial: {
            rotate: 0,
        },
        target: {
            rotate: 360,
        },
    };
    const rotate = useMotionValue(0);
    const scale = useTransform(rotate, [0, 1], [0, 1]);
    return (
        <div className="flex font-electrolize text-white justify-start p-24 lg:grid sm:w-full sm:p-5">
            <div className="h-36 sm:-ml-2 w-max">
                <h1 className="animate-typing overflow-hidden  whitespace-nowrap border-r-4 border-r-white text-5xl lg:text-3xl sm:text-2xl ">
                    I&lsquo;m Or Zarhi, Full-Stack Developer
                </h1>
                <div className="w-max relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img className="w-40 animate-[wiggle_2s_ease-in-out_infinite] rounded-full" src={image} alt="image-or" />
                </div>
            </div>
            <div className="ml-14 w-2/5 lg:w-full sm:ml-0 sm:w-full sm:p-2">

                <motion.div
                    style={{

                        borderRadius: '10px',
                        rotate,
                        scale,
                    }}
                    variants={blockVariants}
                    initial="initial"
                    animate="target"
                    transition={{
                        ease: 'easeInOut',
                        duration: 4,
                    }}
                >
                    <div className="lg:mt-10 lg:flex lg:justify-center">
                        <span className="text-3xl mt-16 underline decoration-blue-dark/80">
                            About me
                        </span>
                    </div>
                    <br />
                    <span className="text-2xl sm:text-xl">
                        I&lsquo;m a passionate Fullstack Developer with a love for creating complex apps and solving problems. I&lsquo;m always looking for ways to improve my skills and stay on top of the latest technologies.
                        I&lsquo;ve work and  experience in HTML, CSS, JavaScript, TypeScript, React, React Native, Remix, tailwind, Node.js, .net, SQL, NoSQL, Docker and more.
                        Overall, I&lsquo;m a fast learner, dedicated team player, and always up for a challenge. Let&lsquo;s build something awesome together!
                    </span>
                    <div className="flex justify-start text-2xl mt-5 sm:justify-center">
                        <a target="_blank" href="https://github.com/orzarhi"> <TbBrandGithub className="contact-items" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/or-zarhi/"><CiLinkedin className="ml-6 contact-items" /></a>
                        <a target="_blank" href="mailto:or.zarhi11@gmail.com">  <AiOutlineMail className="ml-6 contact-items" /></a>
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=972523638638&text=שלום אור זרחי,&type=phone_number&app_absent=0"> <AiOutlineWhatsApp className="ml-6 contact-items" /></a>
                        <a href="Or Zarhi-CV.pdf" download="Or Zarhi-CV.pdf"> <BsFiletypePdf className="ml-6 cursor-pointer shadow-md hover:shadow-blue" /></a>
                    </div>
                </motion.div>
            </div>
        </div>



    )
}
