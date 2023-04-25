/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

export const Card = ({ title, section, place, date, recommendation }) => {
    return (
        <>
            <div className="w-4/5 max-w-sm p-6 m-3 text-center duration-300 shadow-lg shadow-grey-dark border-gray rounded-t-3xl hover:shadow-gray xl:w-full text-white">
                <div className="px-6 pt-4 pb-2">

                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray mr-2 mb-2">{date}</span>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        <span>{title}</span>
                    </div>

                    <div className="mb-5 text-lg">
                        <span >{place}</span>
                    </div>

                    <p className="text-gray-700 text-base">
                        {section}
                    </p>
                </div>
                <a className="text-blue underline" target="_blank" href="https://fuchsia-madeline-16.tiiny.site"  >{recommendation}</a>
            </div>
        </>

    )
}
