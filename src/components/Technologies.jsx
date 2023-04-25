import reactQury from "../assets/images/react-query.png"
import css from "../assets/images/css.png"
import docker from "../assets/images/docker.png"
import javascript from "../assets/images/javascript.png"
import mongodb from "../assets/images/mongodb.png"
import node from "../assets/images/node.png"
import react from "../assets/images/react.png"
import tailwind from "../assets/images/tailwind.png"
import html from "../assets/images/html.png"
import typescript from "../assets/images/typescript.png"
import csharp from "../assets/images/csharp.png"
import zustand from "../assets/images/zustand.png"

export const Technologies = () => {


    return (
        <div className="font-electrolize text-white w-full mt-24">
            <div className="flex justify-center">
                <span className="text-3xl underline decoration-blue-dark/80 mt-5">My favorite technologies</span>
            </div>

            <div className="grid justify-items-center grid-cols-4 gap-y-10 ml-24 mt-5 p-8 xl:full sm:ml-0">
                <img src={zustand} className="w-24 image-items " />
                <img src={css} className="w-12 image-items" />
                <img src={csharp} className="w-12 image-items" />
                <img src={mongodb} className="w-12 image-items" />
                <img src={node} className="w-12 image-items" />
                <img src={javascript} className="w-12 image-items" />
                <img src={typescript} className="w-12 image-items" />
                <img src={docker} className="w-12 image-items" />
                <img src={tailwind} className="w-12 image-items" />
                <img src={react} className="w-12 image-items" />
                <img src={reactQury} className="w-12 image-items" />
                <img src={html} className="w-12 image-items" />
            </div>
        </div >

    )
}
