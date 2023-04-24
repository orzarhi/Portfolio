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
import redux from "../assets/images/redux.png"
import csharp from "../assets/images/csharp.png"

export const Technologies = () => {
    return (
        <div className="font-electrolize text-white ml-10">
            <span className="text-2xl ml-20 underline decoration-blue-dark/80 xl:ml-10">My favorite technologies</span>
            <div className="grid justify-between w-1/5 grid-cols-3 gap-2 p-8 xl:full lg:full md:full sm:w-full">
                <img src={csharp} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={css} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={node} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={javascript} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={typescript} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={docker} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={tailwind} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={html} className="w-12 m-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={reactQury} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={react} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={mongodb} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
                <img src={redux} className="w-12 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" />
            </div>
        </div>
    )
}
