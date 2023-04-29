import { Card } from "./Card"

export const Education = () => {
    return (

        <>
            <div className="flex justify-center mt-24 text-white font-electrolize">
                <span className="text-3xl underline decoration-blue-dark/80 sm:mr-2">
                    Education
                </span>
            </div>

            <div className="flex justify-center mt-5 ml-3 sm:ml-0">
                <Card place={"Kinneret College"} title={"Practical Software Engineer Student"} date={"Nov 2019 to Jun 2023"} section={"93 GPA"} />
            </div>

        </>
    )
}
