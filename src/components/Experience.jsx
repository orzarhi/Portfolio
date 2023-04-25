import { Card } from "./Card"

export const Experience = () => {
    return (
        <>
            <div className="flex justify-center font-electrolize text-white mt-5">
                <span className="text-3xl underline decoration-blue-dark/80 ">
                    Experience
                </span>
            </div>
            <div className="grid justify-items-center grid-cols-3 gap-2 p-8 xl:grid-cols-3 md:grid-cols-1 md:justify-items-center mt-5 ml-3 md:ml-0 sm:w-full md:mt-2 sm:-mt-5">
                <Card place={"Zefat College"} title={"Computer Science Tutor"} date={"Jan 2023 to present"} section={"Teaching C#, Data structures and Algorithmscourses."} recommendation={"Letter of recommendation"} />
                <Card place={"Maxsoft company"} title={"Full-Stack Developer"} date={"Aug 2022 to present"} section={"A Full Stack developer at a professional software company. Worked on several projects for various customers. developedand maintained code with assorted tools,such as: Node.js, .net, mongoDB, Sql, JavaScriptand React."} />
                <Card place={"Codeo company"} title={"Full-Stack Developer"} date={"Jan 2022 to Jul 2022"} section={"I worked as Full Stack Developer. I developedand maintained code. I had the chance to work with: Node.js, .net, JavaScript and React."} />
            </div>
        </>
    )
}
