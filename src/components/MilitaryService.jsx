import { Card } from "./Card"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion";

export const MilitaryService = () => {
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
        <main className="bg-gradient-to-tl from-teal/10 to-purple/5 via-blue/5">
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                <div className="flex justify-center font-electrolize text-white  md:ml-0">
                    <span className="selection text-3xl underline decoration-blue-dark/80 mt-24">
                        Military service
                    </span>
                </div>
                <div className="flex justify-center mt-5">
                    <Card place={""} title={"Division 319"} date={"Feb 2016 to Oct 2018"} section={"I managed other soldiers, took care of orders and supplies."} />
                </div>
            </motion.div>
        </main>

    )
}
