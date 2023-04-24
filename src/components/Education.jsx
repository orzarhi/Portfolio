import { CardEducation } from "./CardEducation"

export const Education = () => {
    return (
        <>
            <div className="flex justify-center font-electrolize text-white ml-10">
                <span className="text-2xl underline decoration-blue-dark/80 xl:ml-10">
                    Education
                </span>
            </div>
            <div className="flex justify-center mt-5 ml-3">
                <CardEducation />
                <CardEducation />
                <CardEducation />
            </div>
        </>
    )
}
