import { BsSend } from "react-icons/bs"
//BsSendCheck
export const Contact = () => {
    return (
        <>
            <div className="flex justify-center font-electrolize text-white  mt-24 md:ml-0">
                <span className="text-3xl underline decoration-blue-dark/80 xl:ml-10 md:ml-0">
                    Contact Me
                </span>
            </div>
            <div className="grid justify-items-center gap-5 mt-5  rounded-md text-white">
                <input className="bg-transparent bg-black border rounded-md  w-2/5 h-12  md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Name" />
                <input className="bg-transparent bg-black border rounded-md w-2/5 h-12 md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email" />
                <input className="bg-transparent bg-black border rounded-md w-2/5 h-12 md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Subject" />
                <textarea className="bg-transparent bg-black border rounded-md w-2/5 h-12 md:w-11/12 placeholder:p-2 focus:border-teal focus:ring-purple focus:outline-none focus:ring focus:ring-opacity-40 " placeholder="Message" />
                <button className="mb-16 md:w-11/12 text-2xl p-1 rounded-md bg-gradient-to-r from-teal to-purple shadow-md shadow-grey-dark hover:shadow-gray via-blue w-2/5"><BsSend className="inline-block" /></button>
            </div>
        </>
    )
}
