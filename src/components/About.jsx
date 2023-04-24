import image from "../assets/images/or.jpg"
import { TbBrandGithub } from "react-icons/tb"
import { CiLinkedin } from "react-icons/ci"
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"

export const About = () => {
    return (

        <div className="flex font-electrolize text-white justify-start p-24 lg:grid sm:w-full sm:p-5">
            <div className="h-36 sm:-ml-2 w-max">
                <h1 className="animate-typing overflow-hidden  whitespace-nowrap border-r-4 border-r-white text-5xl lg:text-3xl sm:text-2xl ">
                    Hello, i&lsquo;m Or Zarhi Full-stack developer
                </h1>
                <div className="w-max relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img className="w-40 animate-[wiggle_2s_ease-in-out_infinite] rounded-full" src={image} alt="image-or" />
                </div>
            </div>
            <div className="ml-14 w-2/5 lg:w-full sm:ml-0 sm:w-full sm:p-2">
                <div className="lg:mt-10 lg:flex lg:justify-center">
                    <span className="text-3xl mt-16 underline decoration-blue-dark/80">
                        About me
                    </span>
                </div>
                <br />
                <span className="text-2xl sm:text-xl">
                    I&lsquo;m a passionate Fullstack Developer with a love for creating complex apps and solving problems. I&lsquo;m always looking for ways to improve my skills and stay on top of the latest technologies.
                    I&lsquo;ve work and  experience in HTML, CSS, JavaScript, TypeScript, React, Remix, tailwindcss, Node.js, MongoDB, Docker, Git and more.
                    Overall, I&lsquo;m a fast learner, dedicated team player, and always up for a challenge. Let&lsquo;s build something awesome together!
                </span>
                <div className="flex justify-start text-2xl mt-5 ">
                    <TbBrandGithub className="cursor-pointer shadow-md rounded-lg hover:shadow-blue" />
                    <CiLinkedin className="ml-4 cursor-pointer shadow-md rounded-lg hover:shadow-blue" />
                    <AiOutlineMail className="ml-4 cursor-pointer shadow-md rounded-lg hover:shadow-blue" />
                    <AiOutlineWhatsApp className="ml-4 cursor-pointer shadow-md rounded-lg hover:shadow-blue" />
                </div>
            </div>
        </div>


    )
}
