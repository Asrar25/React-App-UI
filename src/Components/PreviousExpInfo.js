import { useState } from "react";
export default function PreviousExpInfo({ previousexpData, setPreviousExpData, preStep, nextStep }) {
    const [errors, setErrors] = useState({});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPreviousExpData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        let errors = {};
        if (!previousexpData.from) {
            errors.from = "from is required";
        }
        if (!previousexpData.firmName) {
            errors.firmName = "Firm Name is required";
        }
        if (!previousexpData.to) {
            errors.to = "To is required";
        }
        if (!previousexpData.monthYear) {
            errors.monthYear = "Month/Year Field is required";
        }

        // Add more validation rules as needed for other fields
        if (!previousexpData.phoneNumber) {
            errors.phoneNumber = "Phone Number is required";
        } else if (!/^\d{10}$/.test(previousexpData.phoneNumber.trim())) {
            errors.phoneNumber = "Phone Number must be exactly 10 digits";
        }
        if (!previousexpData.street) {
            errors.street = "Street is required";
        }
        if (!previousexpData.city) {
            errors.city = "City is required";
        }
        if (!previousexpData.zip) {
            errors.zip = "ZIp is required";
        }
        if (!previousexpData.jobTitle) {
            errors.jobTitle = "Job Title is required";
        }
        if (!previousexpData.supervisorName) {
            errors.supervisorName = "Supervisor Name is required";
        }if (!previousexpData.supervisorTitle) {
            errors.supervisorTitle = "Supervisor Title is required";
        }
        if (!previousexpData.state) {
            errors.state = "State is required";
        }
        if (!previousexpData.responsibility) {
            errors.responsibility = "Responsibility Field is required";
        }
        if (!previousexpData.leaveReason) {
            errors.leaveReason = "leaveReason Field is required";
        }
        if (!previousexpData.contactEmployer) {
            errors.contactEmployer = "contactEmployer Work is required";
        }
        if ( previousexpData.contactEmployer === 'no' && !previousexpData.why ) {
                errors.why = "If No,This Field is required";
           
        }
        // Present Salary validation
        if (!previousexpData.startSalary) {
            errors.startSalary = "Starting Salary is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(previousexpData.startSalary.trim())) {
            errors.startSalary = "Starting Salary must be a valid number";
        }
        if (!previousexpData.lastSalary) {
            errors.lastSalary = "Last Salary is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(previousexpData.lastSalary.trim())) {
            errors.lastSalary = "Last Salary must be a valid number";
        }


        if (Object.keys(errors).length == 0) {
            console.log(previousexpData)
            nextStep();
        } else {
            console.log(errors);
            setErrors(errors);
        }

    };
    return (

        <div class="px-20">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">FROM</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.from && 'border-red-500'}`} type="text" name="from" value={previousexpData.from} onChange={handleInputChange} />
                {errors.from && <p className="text-red-500 text-xs italic">{errors.from}</p>}
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">FIRM NAME</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firmName && 'border-red-500'}`} type="text" name="firmName" value={previousexpData.firmName} onChange={handleInputChange} />
                {errors.firmName && <p className="text-red-500 text-xs italic">{errors.firmName}</p>}
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">MONTH/YEAR</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.monthYear && 'border-red-500'}`} type="text" name="monthYear" value={previousexpData.monthYear} onChange={handleInputChange} />
                    {errors.monthYear && <p className="text-red-500 text-xs italic">{errors.monthYear}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">PHONE NUMBER</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.phoneNumber && 'border-red-500'}`} type="text" name="phoneNumber" value={previousexpData.phoneNumber} onChange={handleInputChange} />
                    {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
                </div>
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">START SALARY</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.startSalary && 'border-red-500'}`} type="text" name="startSalary" value={previousexpData.startSalary} onChange={handleInputChange} />
                    {errors.startSalary && <p className="text-red-500 text-xs italic">{errors.startSalary}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">LAST SALARY</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.lastSalary && 'border-red-500'}`} type="text" name="lastSalary" value={previousexpData.lastSalary} onChange={handleInputChange} />
                    {errors.lastSalary && <p className="text-red-500 text-xs italic">{errors.lastSalary}</p>}
                </div>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">TO</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.to && 'border-red-500'}`} type="text" name="to" value={previousexpData.to} onChange={handleInputChange} />
                {errors.to && <p className="text-red-500 text-xs italic">{errors.to}</p>}
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">STREET</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.street && 'border-red-500'}`} type="text" name="street" value={previousexpData.street} onChange={handleInputChange} />
                    {errors.street && <p className="text-red-500 text-xs italic">{errors.street}</p>}
                </div>
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">CITY</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.city && 'border-red-500'}`} type="text" name="city" value={previousexpData.city} onChange={handleInputChange} />
                    {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
                </div>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">JOB TITLE</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.jobTitle && 'border-red-500'}`} type="text" name="jobTitle" value={previousexpData.jobTitle} onChange={handleInputChange} />
                {errors.jobTitle && <p className="text-red-500 text-xs italic">{errors.jobTitle}</p>}
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">SUPERVISOR NAME</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.supervisorName && 'border-red-500'}`} type="text" name="supervisorName" value={previousexpData.supervisorName} onChange={handleInputChange} />
                    {errors.supervisorName && <p className="text-red-500 text-xs italic">{errors.supervisorName}</p>}
                </div>
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">SUPERVISOR TITLE</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.supervisorTitle && 'border-red-500'}`} type="text" name="supervisorTitle" value={previousexpData.supervisorTitle} onChange={handleInputChange} />
                    {errors.supervisorTitle && <p className="text-red-500 text-xs italic">{errors.supervisorTitle}</p>}
                </div>
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">STATE</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.state && 'border-red-500'}`} type="text" name="state" value={previousexpData.state} onChange={handleInputChange} />
                    {errors.state && <p className="text-red-500 text-xs italic">{errors.state}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">ZIP</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.zip && 'border-red-500'}`} type="text" name="zip" value={previousexpData.zip} onChange={handleInputChange} />
                    {errors.zip && <p className="text-red-500 text-xs italic">{errors.zip}</p>}
                </div>
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">RESPONSIBILITY</label>
                    <textarea id="email" name="responsibility" rows="4" class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${errors.responsibility && 'border-red-500'}`} value={previousexpData.responsibility} onChange={handleInputChange} ></textarea>
                    {errors.responsibility && <p className="text-red-500 text-xs italic">{errors.responsibility}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label for="start_date" class="block text-gray-700 text-sm font-bold mb-2">REASON FOR LEAVING</label>
                    <textarea id="start_date" name="leaveReason" rows="4" class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" ${errors.leaveReason && 'border-red-500'}`} value={previousexpData.leaveReason} onChange={handleInputChange} ></textarea>
                    {errors.leaveReason && <p className="text-red-500 text-xs italic">{errors.leaveReason}</p>}
                </div>
            </div>
            <div class="items-center mb-4">
                <div class="flex gap-3 items-center">
                    <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">MAY WE CONTACT THE ABOVE EMPLOYER</label>
                    <input id="applied-yes" type="radio" name="contactEmployer" value="yes" checked={previousexpData.contactEmployer === 'yes'} onChange={handleInputChange} class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4" />
                    <label for="applied-yes" class="ml-2 text-gray-700 text-sm font-bold">Yes</label>
                    <input id="applied-no" type="radio" name="contactEmployer" value="no" checked={previousexpData.contactEmployer === 'no'} onChange={handleInputChange} class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <label for="applied-no" class="ml-2 text-gray-700 text-sm font-bold">No</label>
                </div>
                {errors.contactEmployer && <p className="text-red-500 text-xs italic">{errors.contactEmployer}</p>}
            </div>

            {previousexpData.contactEmployer === 'no' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">IF NO, WHY?
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="Why"
                value={previousexpData.why}
                onChange={handleInputChange}
              /></label>
                {errors.why&&<p className="text-red-500 text-xs italic">{errors.why}</p>}
            </div>
          )}
            <div class="flex items-center justify-between mt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>Next</button>
            </div>
        </div>

    )
}