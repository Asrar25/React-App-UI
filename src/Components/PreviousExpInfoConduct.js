import { useState } from "react";
export default function PreviousExpInfoConduct({ preStep, nextStep }){
   
    const [previousexpData, setPreviousExpData] = useState([
        // Initial state with an empty object
        {
          From: "",
          monthYear: "",
          phoneNumber: "",
          startSalary: "",
          lastSalary: "",
          To: "",
          Street: "",
          City: "",
          State: "",
          Zip: "",
          Responsibility: "",
          leaveReason: "",
          contactAboveEmp: "",
          Why: ""
        }
      ]);

      const handleAddEntry = () => {
        setPreviousExpData([...previousexpData, {
          From: "",
          monthYear: "",
          phoneNumber: "",
          startSalary: "",
          lastSalary: "",
          To: "",
          Street: "",
          City: "",
          State: "",
          Zip: "",
          Responsibility: "",
          leaveReason: "",
          contactAboveEmp: "",
          Why: ""
        }]);
      };

      const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newEntries = [...previousexpData];
        newEntries[index][name] = value;
        setPreviousExpData(newEntries);
      };

      const handlesubmit=(e)=>{
        console.log(previousexpData);
        nextStep();
      }
  
    return (

        <div className="px-20">
        {previousexpData.map((entry, index) => (
        <div key={index}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">FROM</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">MONTH/YEAR</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">PHONE NUMBER</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">STARTING SALARY</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"onChange={(e) => handleInputChange(index, e)} />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">LAST SALARY</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">TO</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">STREET</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">CITY</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">STATE</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">ZIP</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">RESPONSIBILITY</label>
                <textarea id="email" name="email" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" onChange={(e) => handleInputChange(index, e)}></textarea>
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="start_date" className="block text-gray-700 text-sm font-bold mb-2">REASON FOR LEAVING</label>
                <textarea id="start_date" name="start_date" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" onChange={(e) => handleInputChange(index, e)}></textarea>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-4">
              <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">MAY WE CONTACT THE ABOVE EMPLOYER</label>
              <div className="flex items-center">
                <input id={`applied-yes-${index}`} type="radio" name={`applied-${index}`} className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4" />
                <label htmlFor={`applied-yes-${index}`} className="ml-2 text-gray-700 text-sm font-bold">Yes</label>
              </div>
              <div className="flex items-center ml-4">
                <input id={`applied-no-${index}`} type="radio" name={`applied-${index}`} className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                <label htmlFor={`applied-no-${index}`} className="ml-2 text-gray-700 text-sm font-bold">No</label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">IF NO,WHY?</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleInputChange(index, e)}/>
            </div>
          </div>
        ))}
       <div className="flex justify-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleAddEntry}>Add Details</button>
      </div>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handlesubmit}>Next</button>
        </div>
      </div>
    );
}
