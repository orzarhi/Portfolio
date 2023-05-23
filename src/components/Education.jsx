import { Card } from "./Card"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const Education = () => {
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

    return (
        <main className="bg-gradient-to-tr from-teal/30 to-purple/10 via-blue/5">
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                <div className="flex justify-center  text-white font-electrolize">
                    <span className="selection text-3xl mt-24 underline decoration-blue-dark/80 sm:mr-2">
                        Education
                    </span>
                </div>
                <div className="flex justify-center mt-5 ml-3 sm:ml-0">
                    <Card place={"Kinneret College"} title={"Practical Software Engineer Student"} date={"Nov 2019 to Jun 2023"} section={"93 GPA"} style={"card h-72"} />
                </div>
            </motion.div>
        </main >
    )
}
