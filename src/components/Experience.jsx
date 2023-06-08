import { useEffect } from "react";
import { Card } from "./Card"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion";

export const Experience = () => {

    const boxVariant = {
        hidden: { opacity: 0.1, slice: 0, y: 100 },
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

    return (
        <main className="bg-gradient-to-tl from-purple/10 to-teal/25 via-blue/5">
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                <div className="flex justify-center text-white font-electrolize ">
                    <span className="selection text-3xl underline decoration-blue-dark/80 sm:mr-1 md:mt-5 sm:mt-40">
                        Experience
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-2 p-6  ml-3 justify-items-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:justify-items-center -mt-2 md:ml-0 sm:w-full ">

                    <Card place={"Maxsoft company"} title={"Full-Stack Developer"} date={"Aug 2022 to present"} section={"A Full Stack Developer at a professional software company. Worked on several projects for various customers. developedand maintained code with assorted tools, such as: Node.js, .NET, mongoDB, Sql, JavaScriptand React."} />
                    <Card place={"Zefat College"} title={"Computer Science Tutor"} date={"Jan 2023 to present"} section={"Teaching C#, Data structures and Algorithms courses."} recommendation={"Letter of recommendation"} />
                    <Card place={"Codeo company"} title={"Full-Stack Developer"} date={"Jun 2021 to Jul 2022"} section={"I worked as Full Stack Developer, developed and maintained code, and had the chance to work with: Node.js, .NET, JavaScript and React."} />
                </div>
            </motion.div>
        </main>
    )
}
