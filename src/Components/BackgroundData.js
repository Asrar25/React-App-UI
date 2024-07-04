
export default function BackgroundData({ preStep, nextStep }) {
    return (


        <div class="px-20">
            <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
                <div class="flex flex-col md:flex-row mb-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">FIRST NAME</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" >
                        <label class="block text-gray-700 text-sm font-bold mb-2">LAST NAME</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div class="w-full md:w-1/2">
                        <label class="block text-gray-700 text-sm font-bold mb-2">SOCIAL SECURITU NO</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row mb-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">M.I</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div class="w-full md:w-1/2">
                        <label class="block text-gray-700 text-sm font-bold mb-2">OTHERS USED NAMES</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 text-center uppercase">Please list the address of place you have lived ever the previous five year</label>
                </div>

                <table className="min-w-500 min-h-400 bg-white border border-gray-200 mx-auto">

                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Street</th>
                            <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Address</th>
                            <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Date From to</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b border-gray-200 px-6 py-4 text-center ">
                                <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                            </td>
                            <td className="border-b border-gray-200 px-6 py-4 text-center">
                                <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                            </td>
                            <td className="border-b border-gray-200 px-6 py-4 text-center">
                                <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-gray-200 px-6 py-4 text-center">
                                <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                            </td>
                            <td className="border-b border-gray-200 px-6 py-4 text-center">
                                <input type="text" className="w-full  text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                            </td>
                            <td className="border-b border-gray-200 px-6 py-4 text-center">
                                <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center justify-between mt-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>
                        Back
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextStep}>
                        Next
                    </button>
                </div>


            </form>
        </div>

    )
}