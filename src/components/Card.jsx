/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

export const Card = ({ title, section, place, date, recommendation }) => {
    return (
        <>
            <div className="w-4/5 max-w-sm p-6 m-3 text-center text-white duration-300 rounded-md shadow-lg shadow-grey-dark border-gray hover:shadow-gray xl:w-full lg:max-w-none ">
                <div className="px-6 pt-4 pb-2">
                    <span className="selection inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-gray-200 rounded-full text-gray">{date}</span>
                </div>

                <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">
                        <span className="selection">{title}</span>
                    </div>

                    <div className="mb-5 text-lg">
                        <span className="selection">{place}</span>
                    </div>

                    <p className="selection text-lg text-gray-700">
                        {section}
                    </p>
                </div>

                <a className="selection underline text-blue" target="_blank" href="https://fuchsia-madeline-16.tiiny.site">{recommendation}</a>
            </div>
        </>

    )
}
