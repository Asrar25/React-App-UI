import React,{useContext} from "react";
import { multiStepContext } from "../StepContext";

export default function GeneralInfo(){
    const{setStep,userData,setUserData}=useContext(multiStepContext);
    return (
        // <div>
        //     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        //     <div><TextField label="Full Name" margin="normal" variant="outlined" color="secondary"/></div>
        //     <div><TextField label="Mobile Number" margin="normal" variant="outlined" color="secondary"/></div>
        //     <div><TextField label="Email" margin="normal" variant="outlined" color="secondary"/></div>
        //     <div><Button variant="contained" onClick={()=>setStep(2)} color="primary">Next</Button></div>
        //     </form>

        // </div>
        <div className="px-4">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="m-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
             FULL NAME
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start_date" type="text"/>
          </div>

        <div class="flex mb-4">
            <div class="w-1/2  h-12 m-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" >MOBILE NUMBER</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone_number" type="text"/>
            </div>
            <div class="w-1/2  h-12 m-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" >FAX NUMBER</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fax_number" type="text"/>
            </div>
        </div>
        
        
        <div class="flex mb-4">
            <div class="w-1/2  h-12 m-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" >EMAIL</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fax_number" type="email"/>
            </div>
            <div class="w-1/2  h-12 m-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">EARLIST START DATE </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="date"/>
            </div>
        </div>
        <div class="flex mb-4">
            <div class="w-1/2  h-12 m-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" >PRESENT SALARY</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fax_number" type="text"/>
            </div>
            <div class="w-1/2  h-12 m-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">SALARY DESIRED</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"/>
            </div>
        </div>
          <div class="m-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">POSITION DESIRED</label><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start_date" type="text"/>
          </div>
          <div class="flex m-4">
    <div class="w-1/2 m-4 flex items-center">
        <input id="present_salary" type="radio" name="salary" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
        <label for="present_salary" class="ml-2 text-gray-700 text-sm font-bold">PART-TIME</label>
    </div>
    <div class="w-1/2 m-4 flex items-center">
        <input id="desired_salary" type="radio" name="salary" class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
        <label for="desired_salary" class="ml-2 text-gray-700 text-sm font-bold">FULL-TIME</label>
    </div>
</div>

        <div class="flex mb-4">
            <div class="w-1/2  h-12 m-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" >HAVE YOU EVER APPLIED TO SB & COMPANY,LLC BEFORE</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fax_number" type="text"/>
            </div>
            <div class="w-1/2  h-12 m-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">IF YES,WHAT ?</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"/>
            </div>
        </div>
        <div class="m-4">
            <label class="block text-gray-700 text-sm font-bold m-2" >HOW DID YOU FIND OUT ABOUT SB & COMPANY,LLC<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"/></label>
        </div>
        <div class="m-4">
            <label class="block text-gray-700 text-sm font-bold m-2" >Are You Legally<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"/></label>
        </div>

    </form>
</div>
    )
}