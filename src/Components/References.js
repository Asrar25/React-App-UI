import React,{useContext} from "react";
 import { Button ,TextField} from "@mui/material";
 import { multiStepContext } from "../StepContext";

export default function References(){
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    return (
        <div className="px-4">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Full Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text"/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone_number" type="text"/>
          </div>
          <div class="flex items-center justify-between">
            <button class=" mx- bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>setStep(5)}>
              Back
            </button>
            <button class=" mx- bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>setStep(7)}>
              Next
            </button>
          </div>
           
        </form>
      </div>
    )
}