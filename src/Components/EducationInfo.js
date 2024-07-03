import { useState } from "react";
export default function EducationInfo({ preStep, nextStep }){
    
  const[formdata,setFormData]=useState({
    Education:"",
    State:"",
    DateAttend:"",
    Degree:"",
    GraduationDate:"",
    Major:"",
    Minor:"",
    OverallGPA:"",
    GpaMajor:"",
    HrsWork:""
  })
   const onChangeName=(e)=>{
    setFormData((currentState)=>{
      return {...currentState,[e.target.name]: e.target.value}
    });
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formdata);
    nextStep();
   }
    
    
    
    
    
    
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
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='Education'value={formdata.Education} onChange={onChangeName} /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='State'value={formdata.State} onChange={onChangeName} /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='DateAttend'value={formdata.DateAttend} onChange={onChangeName} /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='Degree'value={formdata.Degree} onChange={onChangeName} /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='GraduationSate'value={formdata.GraduationDate} onChange={onChangeName} /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='Major'value={formdata.Major} onChange={onChangeName} /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='Minor'value={formdata.Minor} onChange={onChangeName} /> </td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='OverallGpa'value={formdata.OverallGPA} onChange={onChangeName} /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='GpaMajor'value={formdata.GpaMajor} onChange={onChangeName} /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full text-center text-sm  text-gray-900" name='HrsWork'value={formdata.HrsWork} onChange={onChangeName} /></td> 
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
