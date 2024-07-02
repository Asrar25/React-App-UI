import { useState } from "react";
export default function EducationInfo({ preStep, nextStep }){
    
  const [formData, setformData] = useState({
    r1c1: "",r1c2:"",r1c3:"",r1c4:"",r1c5:"",r1c6:"",r1c7:"",r1c8:"",r1c9:"",r1c10:"",
    r2c1: "",r2c2:"",r2c3:"",r2c4:"",r2c5:"",r2c6:"",r2c7:"",r2c8:"",r2c9:"",r2c10:"",
    r3c1: "",r3c2:"",r3c3:"",r3c4:"",r3c5:"",r3c6:"",r3c7:"",r3c8:"",r3c9:"",r3c10:""
});
const [errors, setErrors] = useState({});
const handleChange = (e) => {
  setformData({
      ...formData,
      [e.target.name]: e.target.value
  });
  setErrors({
      ...errors,
      [e.target.name]: ""
  });
};
const handleSubmit = (e) => {
  e.preventDefault();


  let errors = {};
  if (formData.r1c1) {
        if(!formData.r1c2){errors.r1c2 = "r1c2 is required";}
        if(!formData.r1c3){errors.r1c3 = "r1c3 is required";}
        if(!formData.r1c4){errors.r1c4 = "r1c4 is required";}
        if(!formData.r1c5){errors.r1c5 = "r1c5 is required";}
        if(!formData.r1c6){errors.r1c6 = "r1c6 is required";}
        if(!formData.r1c7){errors.r1c7 = "r1c7 is required";}
        if(!formData.r1c8){errors.r1c8 = "r1c8 is required";}
        if(!formData.r1c9){errors.r1c9 = "r1c9 is required";}
        if(!formData.r1c10){errors.r1c10 = "r1c10 is required";}
    }
    else{
      errors.r1c1 = "r1c1 is required";
    }
    if (formData.r2c1) {
      if(!formData.r2c2){errors.r2c2 = "r2c2 is required";}
      if(!formData.r2c3){errors.r2c3 = "r2c3 is required";}
      if(!formData.r2c4){errors.r2c4 = "r2c4 is required";}
      if(!formData.r2c5){errors.r2c5 = "r2c5 is required";}
      if(!formData.r2c6){errors.r2c6 = "r2c6 is required";}
      if(!formData.r2c7){errors.r2c7 = "r2c7 is required";}
      if(!formData.r2c8){errors.r2c8 = "r2c8 is required";}
      if(!formData.r2c9){errors.r2c9 = "r2c9 is required";}
      if(!formData.r2c10){errors.r2c10 = "r2c10 is required";}
  }
  else{
    errors.r1c1 = "r2c1 is required";
  }
  if (formData.r3c1) {
    if(!formData.r3c2){errors.r3c2 = "r3c2 is required";}
    if(!formData.r3c3){errors.r3c3 = "r3c3 is required";}
    if(!formData.r3c4){errors.r3c4 = "r3c4 is required";}
    if(!formData.r3c5){errors.r3c5 = "r3c5 is required";}
    if(!formData.r3c6){errors.r3c6 = "r3c6 is required";}
    if(!formData.r3c7){errors.r3c7 = "r3c7 is required";}
    if(!formData.r3c8){errors.r3c8 = "r3c8 is required";}
    if(!formData.r3c9){errors.r3c9 = "r3c9 is required";}
    if(!formData.r3c10){errors.r3c10 = "r3c10 is required";}
}
else{
  errors.r1c1 = "r3c1 is required";
}



  if (Object.keys(errors).length == 0) {
    nextStep();
} else {
    console.log(errors);
    setErrors(errors);
}

};
    
    
    
    
    
    
    return (
<div className="px-20">
<div className="container mx-auto py-8">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                <th className="px-4 py-2 uppercase">College/University</th>
                  <th className="px-4 py-2 uppercase">State</th>
                  <th className="px-4 py-2 uppercase">Dates Attended</th>
                  <th className="px-4 py-2 uppercase">Degree</th>
                  <th className="px-4 py-2 uppercase">Graduation Date</th>
                  <th className="px-4 py-2 uppercase">Major</th>
                  <th className="px-4 py-2 uppercase">Minor</th>
                  <th className="px-4 py-2 uppercase">Overall GPA</th>
                  <th className="px-4 py-2 uppercase">GPA in Major</th>
                  <th className="px-4 py-2 uppercase">No_Of_Hrs_Work</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c1' value={formData.r1c1} onChange={handleChange} />{errors.r1c1 && <p className="text-red-500 text-xs italic">{errors.r1c1}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c2'value={formData.r1c2} onChange={handleChange} />{errors.r1c2 && <p className="text-red-500 text-xs italic">{errors.r1c2}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c3'value={formData.r1c3} onChange={handleChange} />{errors.r1c3 && <p className="text-red-500 text-xs italic">{errors.r1c3}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c4'value={formData.r1c4} onChange={handleChange} />{errors.r1c4 && <p className="text-red-500 text-xs italic">{errors.r1c4}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c5'value={formData.r1c5} onChange={handleChange} />{errors.r1c5 && <p className="text-red-500 text-xs italic">{errors.r1c5}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c6'value={formData.r1c6} onChange={handleChange} />{errors.r1c6 && <p className="text-red-500 text-xs italic">{errors.r1c6}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c7'value={formData.r1c7} onChange={handleChange} />{errors.r1c7 && <p className="text-red-500 text-xs italic">{errors.r1c7}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c8'value={formData.r1c8} onChange={handleChange} />{errors.r1c8 && <p className="text-red-500 text-xs italic">{errors.r1c8}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c9'value={formData.r1c9} onChange={handleChange} />{errors.r1c9 && <p className="text-red-500 text-xs italic">{errors.r1c9}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c10'value={formData.r1c9} onChange={handleChange} />{errors.r1c10 && <p className="text-red-500 text-xs italic">{errors.r1c10}</p>}</td> 
                </tr>
                <tr>
                <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c1' value={formData.r2c1} onChange={handleChange} />{errors.r2c1 && <p className="text-red-500 text-xs italic">{errors.r2c1}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c2'value={formData.r2c2} onChange={handleChange} />{errors.r2c2 && <p className="text-red-500 text-xs italic">{errors.r2c2}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c3'value={formData.r2c3} onChange={handleChange} />{errors.r2c3 && <p className="text-red-500 text-xs italic">{errors.r2c3}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c4'value={formData.r2c4} onChange={handleChange} />{errors.r2c4 && <p className="text-red-500 text-xs italic">{errors.r2c4}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c5'value={formData.r2c5} onChange={handleChange} />{errors.r2c5 && <p className="text-red-500 text-xs italic">{errors.r2c5}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c6'value={formData.r2c6} onChange={handleChange} />{errors.r2c6 && <p className="text-red-500 text-xs italic">{errors.r2c6}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c7'value={formData.r2c7} onChange={handleChange} />{errors.r2c7 && <p className="text-red-500 text-xs italic">{errors.r2c7}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c8'value={formData.r2c8} onChange={handleChange} />{errors.r2c8 && <p className="text-red-500 text-xs italic">{errors.r2c8}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r2c9'value={formData.r2c9} onChange={handleChange} />{errors.r2c9 && <p className="text-red-500 text-xs italic">{errors.r2c9}</p>}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r1c10'value={formData.r2c10} onChange={handleChange} />{errors.r2c10 && <p className="text-red-500 text-xs italic">{errors.r2c10}</p>}</td> 
                </tr>
                <tr>
                <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c1' /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c2'/></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c3'/></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c4'/></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c5'/></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c6'/></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c7'/></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c8'/></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='r3c9'/></td>
                </tr>
            </tbody>
        </table>
    </div>
    {/* <div className="container mt-1">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 uppercase">Course</th>
                  <th className="px-4 py-2 uppercase">School</th>
                  <th className="px-4 py-2 uppercase">Credit Hour</th>
                  <th className="px-4 py-2 uppercase">Grade</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                </tr>
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                </tr>
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="container mt-10">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 uppercase">SAT Verbal</th>
                  <th className="px-4 py-2 uppercase">GRE Verbal</th>
                  <th className="px-4 py-2 uppercase">ACt</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="container mt-10">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 uppercase">SAT Math</th>
                  <th className="px-4 py-2 uppercase">GRE Math</th>
                  <th className="px-4 py-2 uppercase">LSAT</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="container mt-10">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 uppercase">Sat Total</th>
                  <th className="px-4 py-2 uppercase">GRE Total</th>
                  <th className="px-4 py-2 uppercase">GMAT</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="container mt-10">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 uppercase">Scholastic honours and scholarships</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="container mt-10">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 uppercase">Parts Taken Passed</th>
                  <th className="px-4 py-2 uppercase">State</th>
                  <th className="px-4 py-2 uppercase">License Number</th>
                  <th className="px-4 py-2 uppercase">Active</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" /></td>
                    <td class="px-4 py-2 flex items-center">
                        <label className="flex items-center mr-4">
                            <input type="radio" className="form-radio h-4 w-4 text-gray-600" name="agree" value="yes"/>
                            <span className="ml-2 text-sm text-gray-900">Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" className="form-radio h-4 w-4 text-gray-600" name="agree" value="no"/>
                            <span className="ml-2 text-sm text-gray-900">No</span>
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div> */}
    <div class="flex items-center justify-between container mt-10">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>Next</button>
                    </div>
       </div>
    )
}