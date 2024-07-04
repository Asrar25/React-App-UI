import { useState } from "react";
export default function PreviousExpInfoConduct({ previousexpInfoData, setPreviousExpInfoData, preStep, nextStep }) {
  const [errors, setErrors] = useState({});



  const handleAddEntry = () => {
    setPreviousExpInfoData([...previousexpInfoData, {
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
    const newEntries = [...previousexpInfoData];
    newEntries[index][name] = value;
    setPreviousExpInfoData(newEntries);
  };

  const validate = () => {
    const newErrors = {};
    previousexpInfoData.forEach((entry, index) => {
      if (!entry.From) newErrors[`From-${index}`] = "From date is required";
      if (!entry.monthYear) newErrors[`monthYear-${index}`] = "Month/Year is required";
      if (!entry.phoneNumber) newErrors[`phoneNumber-${index}`] = "Phone number is required";
      if (!entry.startSalary) newErrors[`startSalary-${index}`] = "Starting salary is required";
      if (!entry.lastSalary) newErrors[`lastSalary-${index}`] = "Last salary is required";
      if (!entry.To) newErrors[`To-${index}`] = "To date is required";
      if (!entry.Street) newErrors[`Street-${index}`] = "Street is required";
      if (!entry.City) newErrors[`City-${index}`] = "City is required";
      if (!entry.State) newErrors[`State-${index}`] = "State is required";
      if (!entry.Zip) newErrors[`Zip-${index}`] = "Zip code is required";
      if (!entry.Responsibility) newErrors[`Responsibility-${index}`] = "Responsibility is required";
      if (!entry.leaveReason) newErrors[`leaveReason-${index}`] = "Reason for leaving is required";
    });
    return newErrors;
  };

  const handlesubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      nextStep();
    }
  };

  return (

    <div className="px-20">
      {previousexpInfoData.map((entry, index) => (
        <div key={index}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">FROM</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="From" value={entry.From} onChange={(e) => handleInputChange(index, e)} />
          </div>
          {errors[`From-${index}`] && <p className="text-red-500 text-xs italic">{errors[`From-${index}`]}</p>}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">MONTH/YEAR</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="monthYear" value={entry.monthYear} onChange={(e) => handleInputChange(index, e)} />
              {errors[`monthYear-${index}`] && <p className="text-red-500 text-xs italic">{errors[`monthYear-${index}`]}</p>}
            </div>
            
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">PHONE NUMBER</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="phoneNumber" value={entry.phoneNumber} onChange={(e) => handleInputChange(index, e)} />
              {errors[`phoneNumber-${index}`] && <p className="text-red-500 text-xs italic">{errors[`phoneNumber-${index}`]}</p>}
            </div>
          </div>
         
          <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">STARTING SALARY</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="startSalary" value={entry.startSalary} type="text" onChange={(e) => handleInputChange(index, e)} />
              {errors[`startSalary-${index}`] && <p className="text-red-500 text-xs italic">{errors[`startSalary-${index}`]}</p>}
            </div>
            
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">LAST SALARY</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="lastSalary" value={entry.lastSalary} type="text" onChange={(e) => handleInputChange(index, e)} />
              {errors[`lastSalary-${index}`] && <p className="text-red-500 text-xs italic">{errors[`lastSalary-${index}`]}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">TO</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="To" value={entry.To} type="text" onChange={(e) => handleInputChange(index, e)} />
            {errors[`To-${index}`] && <p className="text-red-500 text-xs italic">{errors[`To-${index}`]}</p>}
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">STREET</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="Street" value={entry.Street} type="text" onChange={(e) => handleInputChange(index, e)} />
              {errors[`Street-${index}`] && <p className="text-red-500 text-xs italic">{errors[`Street-${index}`]}</p>}
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">CITY</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="City" value={entry.City} type="text" onChange={(e) => handleInputChange(index, e)} />
              {errors[`City-${index}`] && <p className="text-red-500 text-xs italic">{errors[`City-${index}`]}</p>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">STATE</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="State" value={entry.State} type="text" onChange={(e) => handleInputChange(index, e)} />
              {errors[`State-${index}`] && <p className="text-red-500 text-xs italic">{errors[`State-${index}`]}</p>}
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">ZIP</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="Zip" value={entry.Zip} type="text" onChange={(e) => handleInputChange(index, e)} />
              {errors[`Zip-${index}`] && <p className="text-red-500 text-xs italic">{errors[`Zip-${index}`]}</p>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">RESPONSIBILITY</label>
              <textarea rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" name="Responsibility" value={entry.Responsibility} onChange={(e) => handleInputChange(index, e)}></textarea>
              {errors[`Responsibility-${index}`] && <p className="text-red-500 text-xs italic">{errors[`Responsibility-${index}`]}</p>}
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="start_date" className="block text-gray-700 text-sm font-bold mb-2">REASON FOR LEAVING</label>
              <textarea rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" name="leaveReason" value={entry.leaveReason} onChange={(e) => handleInputChange(index, e)}></textarea>
              {errors[`leaveReason-${index}`] && <p className="text-red-500 text-xs italic">{errors[`leaveReason-${index}`]}</p>}
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center mb-4">
            <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">MAY WE CONTACT THE ABOVE EMPLOYER</label>
            {errors.contactAboveExp && <p className="text-red-500 text-xs italic">{errors.contactAboveExp}</p>}
            <div class="flex items-center">
              <input id="applied-yes" type="radio" name="contactAboveExp" value="yes" checked={entry.contactAboveExp === 'yes'} onChange={(e) => handleInputChange(index, e)} class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4" />
              <label for="applied-yes" class="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div class="flex items-center ml-4">
              <input id="applied-no" type="radio" name="contactAboveExp" value="no" checked={entry.contactAboveExp === 'no'} onChange={(e) => handleInputChange(index, e)} class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
              <label for="applied-no" class="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">IF NO,WHY?</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="Why" value={entry.Why} type="text" onChange={(e) => handleInputChange(index, e)} />
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