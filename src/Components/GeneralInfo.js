import React,{useContext} from "react";
export default function GeneralInfo({nextStep}){
    return (
       
        
        <div class="px-4">
    <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">FULL NAME</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
        </div>

        <div class="flex flex-col md:flex-row mb-4">
            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">MOBILE NUMBER</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </div>
            <div class="w-full md:w-1/2">
                <label class="block text-gray-700 text-sm font-bold mb-2">FAX NUMBER</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </div>
        </div>

        <div class="flex flex-col md:flex-row mb-4">
            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">EMAIL</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email"/>
            </div>
            <div class="w-full md:w-1/2">
                <label class="block text-gray-700 text-sm font-bold mb-2">EARLIEST START DATE</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date"/>
            </div>
        </div>

        <div class="flex flex-col md:flex-row mb-4">
            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">PRESENT SALARY</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </div>
            <div class="w-full md:w-1/2">
                <label class="block text-gray-700 text-sm font-bold mb-2">SALARY DESIRED</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </div>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">POSITION DESIRED</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
        </div>

        <div class="flex flex-col md:flex-row items-center mb-4">
            <div class="w-full md:w-1/2 flex items-center mb-4 md:mb-0 md:mr-4">
                <input id="part-time" type="radio" name="employment" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="part-time" class="ml-2 text-gray-700 text-sm font-bold">PART-TIME</label>
            </div>
            <div class="w-full md:w-1/2 flex items-center">
                <input id="full-time" type="radio" name="employment" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="full-time" class="ml-2 text-gray-700 text-sm font-bold">FULL-TIME</label>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center mb-4">
            <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER APPLIED TO SB & COMPANY, LLC BEFORE</label>
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
            <label class="block text-gray-700 text-sm font-bold mb-2">IF YES, WHAT?</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
        </div>

        <div class="flex flex-col md:flex-row items-center mb-4">
            <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">ARE YOU LEGALLY PERMITTED TO WORK IN THIS COUNTRY?</label>
            <div class="flex items-center">
                <input id="work-yes" type="radio" name="work" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="work-yes" class="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div class="flex items-center ml-4">
                <input id="work-no" type="radio" name="work" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="work-no" class="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center mb-4">
            <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">WILL YOU NOW OR IN THE FUTURE REQUIRE SPONSORSHIP FOR EMPLOYMENT VISA STATUS?</label>
            <div class="flex items-center">
                <input id="visa-yes" type="radio" name="visa" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="visa-yes" class="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div class="flex items-center ml-4">
                <input id="visa-no" type="radio" name="visa" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="visa-no" class="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center mb-4">
            <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER BEEN CONVICTED OF A CRIME OTHER THAN A MINOR TRAFFIC VIOLATION?</label>
            <div class="flex items-center">
                <input id="crime-yes" type="radio" name="crime" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="crime-yes" class="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div class="flex items-center ml-4">
                <input id="crime-no" type="radio" name="crime" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="crime-no" class="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold">IF YES, GIVE DETAILS ON A SEPARATE PAGE AND ATTACH TO THE APPLICATION</label>
        </div>
        <div class="flex items-center justify-center mt-4">
             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextStep}>Next</button>
        </div>

    </form>
</div>

    )
}