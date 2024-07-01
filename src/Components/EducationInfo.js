
export default function EducationInfo({ preStep, nextStep }){
    return (
       
      <div className="overflow-hidden px-20">
  <table className="min-w-500 min-h-400 bg-white border border-gray-200 mx-auto">
  
    <thead>
      <tr className="bg-gray-100">
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">College/University</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">State</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Dates Attended</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Degree</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Graduation Date</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Major</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Minor</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Overall GPA</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">GPA in Major</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">No_Of_Hrs_Work</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td className="border-b px-6 py-4 text-center ">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full  text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
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
        <td className="border-b border-gray-200 px-6 py-4 text-center ">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full  text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center">
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        </tr>
      <tr className="bg-gray-100">
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold" colSpan={3}>Course</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold" colSpan={3}>School</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold" colSpan={2}>Credit Hour</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold" colSpan={2}>Grade</th>
        </tr><tr>
        <td className="border-b border-gray-200 px-6 py-4 text-center " colSpan={3}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={3}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <input type="text" className="w-full  text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        </tr>
        <tr>
        <td className="border-b border-gray-200 px-6 py-4 text-center " colSpan={3}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={3}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center"colSpan={2}>
          <input type="text" className="w-full  text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        </tr>
        <tr>
        <td className="border-b px-6 py-4 text-center bg-gray-100 "colSpan={4}>
         <p className="text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900">List applicable Test Result Verbal</p>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0 ">SAT</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0">GRE</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0">ACT</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        </tr>
        <tr>
        <td className="border-b border-gray-200 px-6 py-4 text-center bg-gray-100"colSpan={4}>
         <p className="text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900">List applicable Test Result Math </p>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0">SAT</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0">GRE</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0">ACT</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        </tr>
        <tr>
        <td className="border-b border-gray-200 px-6 py-4 text-center bg-gray-100 "colSpan={4}>
         <p className="text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900">Total </p>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0">SAT</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0">GRE</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
          <div className="flex items-center justify-center gap-2">
            <p className="m-0">GMAT</p>
            <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
          </div>
        </td>
        </tr>
        <tr>
  <td className=" border-b border-gray-200 px-6 py-4 text-center bg-gray-100 " colSpan={4}>
   <h3>Scholarship Honour and Scholarships</h3>
  </td>
  <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={6}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
</tr>
  <tr className="bg-gray-100">
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold" colSpan={3}>CPA Status</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold" colSpan={2}>State</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold" colSpan={3}>License Number</th>
        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold" colSpan={2}>Active</th>
        </tr>
        <tr>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={3}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center"colSpan={2}>
          <input type="text" className="w-full text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center"colSpan={3}>
          <input type="text" className="w-full  text-center bg-transparent border-none focus:outline-none text-sm leading-5 text-gray-900" />
        </td>
        <td className="border-b border-gray-200 px-6 py-4 text-center" colSpan={2}>
  <div className="flex gap-10  ">
    <label className="flex items-center">
      <input type="radio" name="active" className="mr-1 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
      <span className="text-sm leading-5 text-gray-900">Yes</span>
    </label>
    <label className="flex items-center">
      <input type="radio" name="active" className="mr-1 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
      <span className="text-sm leading-5 text-gray-900">No</span>
    </label>
  </div>
</td>
        </tr>
        </tbody>
      </table>
      <div class="flex items-center justify-between mt-2 mb-2">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextStep}>Next</button>
                    </div>
      </div>
    )
}