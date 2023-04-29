import { Card } from "./Card"

export const MilitaryService = () => {
    return (
        <>
            <div className="flex justify-center font-electrolize text-white mt-24 md:ml-0">
                <span className="text-3xl underline decoration-blue-dark/80">
                    Military service
                </span>
            </div>
            <div className="flex justify-center mt-5">
                <Card place={""} title={"Division 319"} date={"Feb 2016 to Oct 2018"} section={"I managed other soldiers, took care of orders and supplies."} />
            </div>
        </>

    )
}
