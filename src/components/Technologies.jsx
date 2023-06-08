import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { technologiesIcon } from "../technologiesIcon"

export const Technologies = () => {

    const domain = import.meta.env.MODE ? "http://localhost:5173" : "https://orzarhi.life"

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
        <main className="bg-gradient-to-br from-teal/30 to-blue/5 via-purple/5 w-full text-white font-electrolize">
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                <div className="flex justify-center">
                    <span className="selection text-3xl underline  mt-24 decoration-blue-dark/80">My favorite technologies</span>
                </div>
                <div className="grid grid-cols-4 p-8 mt-5 ml-24 justify-items-center gap-y-10 xl:full lg:ml-0">
                    {technologiesIcon.map((item) => (
                        <img key={item.id} src={`${domain}/src/assets/images/${item.image}.png`} alt={item.title} className={`${item.title === "zustand" ? "w-24" : "w-12"} not-drag image-items`} />
                    ))}
                </div>
            </motion.div>
        </main>

    )
}
