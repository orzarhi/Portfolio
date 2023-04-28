import { Card } from "./Card"

export const Experience = () => {
    return (
        <>
            <div className="flex justify-center text-white lg:mt-5 font-electrolize xl:mt-44 sm:mt-44">
                <span className="text-3xl underline decoration-blue-dark/80 ">
                    Experience
                </span>
            </div>
            <div className="grid grid-cols-3 gap-2 p-8 mt-5 ml-3 justify-items-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:justify-items-center md:ml-0 sm:w-full md:mt-2 sm:-mt-5">
                <Card place={"Maxsoft company"} title={"Full-Stack Developer"} date={"Aug 2022 to present"} section={"A Full Stack developer at a professional software company. Worked on several projects for various customers. developedand maintained code with assorted tools, such as: Node.js, .net, mongoDB, Sql, JavaScriptand React."} />
                <Card place={"Zefat College"} title={"Computer Science Tutor"} date={"Jan 2023 to present"} section={"Teaching C#, Data structures and Algorithms courses."} recommendation={"Letter of recommendation"} />
                <Card place={"Codeo company"} title={"Full-Stack Developer"} date={"Jan 2022 to Jul 2022"} section={"I worked as Full Stack Developer. I developed and maintained code. I had the chance to work with: Node.js, .net, JavaScript and React."} />
            </div>
        </>
    )
}
