import { useState } from "react";
<<<<<<< HEAD
export default function AdditionalQualification({ additionalSkill, setAdditionalSkill, preStep, nextStep }) {
  const [errors, setErrors] = useState({});

  const handleinput = (e) => {
    setAdditionalSkill({
      ...additionalSkill,
      [e.target.name]: e.target.value
    });
  }
  const handlesubmit = (e) => {
    let errors = {};

    if (!additionalSkill.Qualification) {
      errors.Qualification = "Qualification is required";
    }
    if (Object.keys(errors).length == 0) {
      console.log(additionalSkill);
      nextStep();
    } else {
      console.log(errors);
      setErrors(errors);
    }
  }



=======
export default function AdditionalQualification({ additionalSkill,setAdditionalSkill, preStep, nextStep }){
  const [errors, setErrors] = useState({});
  
  const handleinput=(e)=>{
    setAdditionalSkill({
      ...additionalSkill,
      [e.target.name]: e.target.value
  });
  }
  const handlesubmit=(e)=>{
    console.log(additionalSkill);
  nextStep();
  }
  
>>>>>>> d9f5586dbdbc9a61d22fdc63eb906a628e72bc42
  return (


    <div class="px-20">
      <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
        <div className="px-4">
<<<<<<< HEAD
          <label className="block text-gray-700 text-sm font-bold mb-2">PLEASE IDENTIFY ANY ADDITIONAL KNOWLEDGE,SKILLS,QUALIFICATION OR AWARDS THAT WILL BE HELPDUL TOMAS IN CONSIDERING YOUR APPLICATION FOR EMPLOYEMENT</label>
          <textarea rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" name="Qualification" onChange={handleinput} value={additionalSkill.Qualification}></textarea>
          {errors.Qualification && <p className="text-red-500 text-xs italic">{errors.Qualification}</p>}
        </div>
        <div class="flex items-center justify-between mt-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handlesubmit}>Next</button>
=======
            <label className="block text-gray-700 text-sm font-bold mb-2">PLEASE IDENTIFY ANY ADDITIONAL KNOWLEDGE,SKILLS,QUALIFICATION OR AWARDS THAT WILL BE HELPDUL TOMAS IN CONSIDERING YOUR APPLICATION FOR EMPLOYEMENT</label>
            <textarea rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" name="Qualification" onChange={handleinput} value={additionalSkill.Qualification}></textarea>
        </div>
        <div class="flex items-center justify-between mt-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handlesubmit}>Next</button>
>>>>>>> d9f5586dbdbc9a61d22fdc63eb906a628e72bc42
        </div>
      </form>
    </div>

  )
}
