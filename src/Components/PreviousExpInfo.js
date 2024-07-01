
export default function PreviousExpInfo({ preStep, nextStep }){
    return (
        <div class="px-20">
            <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
                <div class="mb-4">
                     <label class="block text-gray-700 text-sm font-bold mb-2">FROM</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                </div>
                    <div class="flex flex-col md:flex-row mb-4">
                         <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                              <label class="block text-gray-700 text-sm font-bold mb-2">MONTH/YEAR</label>
                                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                         </div>
                         <div class="w-full md:w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2">PHONE NUMBER</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                         </div>
                     </div>
                    <div class="flex flex-col md:flex-row mb-4">
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2">STARTING SALARY</label>
                                     <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                            <div class="w-full md:w-1/2">
                                 <label class="block text-gray-700 text-sm font-bold mb-2">LAST SALARY</label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                         </div>
                     <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">TO</label>
                             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                    </div>
                    <div class="flex flex-col md:flex-row mb-4">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">STREET</label>
                                 <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                        </div>
                        <div class="w-full md:w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2">CITY</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                        </div>
                     </div>
                    <div class="flex flex-col md:flex-row mb-4">
                         <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">STATE</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                         </div>
                         <div class="w-full md:w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2">ZIP</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                         </div>
                     </div>
                     <div class="flex flex-col md:flex-row mb-4">
                         <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                             <label for="email" class="block text-gray-700 text-sm font-bold mb-2">RESPONSIBILITY</label>
                                <textarea id="email" name="email" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"></textarea>
                        </div>
                        <div class="w-full md:w-1/2">
                             <label for="start_date" class="block text-gray-700 text-sm font-bold mb-2">REASON FOR LEAVING</label>
                            <textarea id="start_date" name="start_date" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"></textarea>
                        </div>
                     </div>
                     <div class="flex flex-col md:flex-row items-center mb-4">
                        <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">MAY WE CONTACT THE ABOVE EMPLOYER</label>
                            <div class="flex items-center">
                                <input id="applied-yes" type="radio" name="applied" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                                 <label for="applied-yes" class="ml-2 text-gray-700 text-sm font-bold">Yes</label>
                            </div>
                            <div class="flex items-center ml-4">
                                <input id="applied-no" type="radio" name="applied" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                                <label for="applied-no" class="ml-2 text-gray-700 text-sm font-bold">No</label>
                             </div>
                      </div>

                     <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">IF NO,WHY?</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextStep}>Next</button>
                    </div>
            </form>
        </div>

    )
}