import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import csharp from "../assets/images/csharp.png"
import css from "../assets/images/css.png"
import docker from "../assets/images/docker.png"
import html from "../assets/images/html.png"
import javascript from "../assets/images/javascript.png"
import mongodb from "../assets/images/mongodb.png"
import node from "../assets/images/node.png"
import reactQury from "../assets/images/react-query.png"
import react from "../assets/images/react.png"
import tailwind from "../assets/images/tailwind.png"
import typescript from "../assets/images/typescript.png"
import zustand from "../assets/images/zustand.png"

export const Technologies = () => {

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
                    <img src={zustand} className="w-24 not-drag image-items " />
                    <img src={css} className="w-12 not-drag image-items" />
                    <img src={csharp} className="w-12 not-drag image-items" />
                    <img src={mongodb} className="w-12 not-drag image-items" />
                    <img src={node} className="w-12 not-drag image-items" />
                    <img src={javascript} className="w-12 not-drag image-items" />
                    <img src={typescript} className="w-12 not-drag image-items" />
                    <img src={docker} className="w-12 not-drag image-items" />
                    <img src={tailwind} className="w-12 not-drag image-items" />
                    <img src={react} className="w-12 not-drag image-items" />
                    <img src={reactQury} className="w-12 not-drag image-items" />
                    <img src={html} className="w-12 not-drag image-items" />
                </div>
            </motion.div>
        </main>

    )
}