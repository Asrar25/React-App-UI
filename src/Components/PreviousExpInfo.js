import { useState } from "react";
<<<<<<< HEAD
export default function PreviousExpInfo({ previousexpData, setPreviousExpData, preStep, nextStep }) {
=======
export default function PreviousExpInfo({previousexpData,setPreviousExpData, preStep, nextStep }){
>>>>>>> d9f5586dbdbc9a61d22fdc63eb906a628e72bc42
    const [errors, setErrors] = useState({});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPreviousExpData((prevState) => ({
<<<<<<< HEAD
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

=======
          ...prevState,
          [name]: value
        }));
      };
      
    const handleSubmit = (e) => {
        e.preventDefault();

>>>>>>> d9f5586dbdbc9a61d22fdc63eb906a628e72bc42

        let errors = {};
        if (!previousexpData.From) {
            errors.From = "From is required";
        }
        if (!previousexpData.To) {
            errors.To = "To is required";
        }
        if (!previousexpData.monthYear) {
            errors.monthYear = "Month/Year Field is required";
        }
<<<<<<< HEAD

=======
        
>>>>>>> d9f5586dbdbc9a61d22fdc63eb906a628e72bc42
        // Add more validation rules as needed for other fields
        if (!previousexpData.phoneNumber) {
            errors.phoneNumber = "Phone Number is required";
        } else if (!/^\d{10}$/.test(previousexpData.phoneNumber.trim())) {
            errors.phoneNumber = "Phone Number must be exactly 10 digits";
        }
        if (!previousexpData.Street) {
            errors.Street = "Street is required";
        }
        if (!previousexpData.City) {
            errors.City = "City is required";
        }
        if (!previousexpData.Zip) {
            errors.Zip = "ZIp is required";
        }
        if (!previousexpData.Responsibility) {
            errors.Responsibility = "Responsibility Field is required";
        }
        if (!previousexpData.leaveReason) {
            errors.leaveReason = "leaveReason Field is required";
        }
        if (!previousexpData.contactAboveExp) {
<<<<<<< HEAD
            errors.contactAboveExp = "contactAboveExp Work is required";
        }
        if (previousexpData.Why === 'no') {
            if (!previousexpData.Why) {
                errors.Why = "Responsibility Field is required";
=======
                errors.contactAboveExp = "contactAboveExp Work is required";
            }
        if(previousexpData.Why==='no'){
            if(!previousexpData.Why){
                errors.Why="Responsibility Field is required";
>>>>>>> d9f5586dbdbc9a61d22fdc63eb906a628e72bc42
            }
        }
        // Present Salary validation
        if (!previousexpData.startSalary) {
            errors.startSalary = "Starting Salary is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(previousexpData.lastSalary.trim())) {
            errors.startSalary = "Starting Salary must be a valid number";
        }
        if (!previousexpData.lastSalary) {
            errors.lastSalary = "Starting Salary is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(previousexpData.lastSalary.trim())) {
            errors.lastSalary = "Starting Salary must be a valid number";
        }

<<<<<<< HEAD

=======
        
>>>>>>> d9f5586dbdbc9a61d22fdc63eb906a628e72bc42
        if (Object.keys(errors).length == 0) {
            console.log(previousexpData)
            nextStep();
        } else {
            console.log(errors);
            setErrors(errors);
        }

    };
    return (
<<<<<<< HEAD

        <div class="px-20">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">FROM</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.From && 'border-red-500'}`} type="text" name="From" value={previousexpData.From} onChange={handleInputChange} />
                {errors.From && <p className="text-red-500 text-xs italic">{errors.From}</p>}
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
                    <label class="block text-gray-700 text-sm font-bold mb-2">STARTING SALARY</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${errors.startSalary && 'border-red-500'}`} type="text" name="startSalary" value={previousexpData.startSalary} onChange={handleInputChange} />
                    {errors.startsalary && <p className="text-red-500 text-xs italic">{errors.startSalary}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">LAST SALARY</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.lastSalary && 'border-red-500'}`} type="text" name="lastSalary" value={previousexpData.lastSalary} onChange={handleInputChange} />
                    {errors.lastSalary && <p className="text-red-500 text-xs italic">{errors.lastSalary}</p>}
                </div>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">TO</label>
                <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${errors.To && 'border-red-500'}`} type="text" name="To" value={previousexpData.To} onChange={handleInputChange} />
                {errors.To && <p className="text-red-500 text-xs italic">{errors.To}</p>}
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">STREET</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.Street && 'border-red-500'}`} type="text" name="Street" value={previousexpData.Street} onChange={handleInputChange} />
                    {errors.Street && <p className="text-red-500 text-xs italic">{errors.Street}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">CITY</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${errors.City && 'border-red-500'}`} type="text" name="City" value={previousexpData.City} onChange={handleInputChange} />
                    {errors.City && <p className="text-red-500 text-xs italic">{errors.City}</p>}
                </div>
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">STATE</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.State && 'border-red-500'}`} type="text" name="State" value={previousexpData.State} onChange={handleInputChange} />
                    {errors.State && <p className="text-red-500 text-xs italic">{errors.State}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">ZIP</label>
                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.Zip && 'border-red-500'}`} type="text" name="Zip" value={previousexpData.Zip} onChange={handleInputChange} />
                    {errors.Zip && <p className="text-red-500 text-xs italic">{errors.Zip}</p>}
                </div>
            </div>
            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">RESPONSIBILITY</label>
                    <textarea id="email" name="Responsibility" rows="4" class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${errors.Responsibility && 'border-red-500'}`} value={previousexpData.Responsibility} onChange={handleInputChange} ></textarea>
                    {errors.Responsibility && <p className="text-red-500 text-xs italic">{errors.Responsibility}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label for="start_date" class="block text-gray-700 text-sm font-bold mb-2">REASON FOR LEAVING</label>
                    <textarea id="start_date" name="leaveReason" rows="4" class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" ${errors.leaveReason && 'border-red-500'}`} value={previousexpData.leaveReason} onChange={handleInputChange} ></textarea>
                    {errors.leaveReason && <p className="text-red-500 text-xs italic">{errors.leaveReason}</p>}
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center mb-4">
                <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">MAY WE CONTACT THE ABOVE EMPLOYER</label>
                {errors.contactAboveExp && <p className="text-red-500 text-xs italic">{errors.contactAboveExp}</p>}
                <div class="flex items-center">
                    <input id="applied-yes" type="radio" name="contactAboveExp" value="yes" checked={previousexpData.contactAboveExp === 'yes'} onChange={handleInputChange} class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4" />
                    <label for="applied-yes" class="ml-2 text-gray-700 text-sm font-bold">Yes</label>
                </div>
                <div class="flex items-center ml-4">
                    <input id="applied-no" type="radio" name="contactAboveExp" value="no" checked={previousexpData.contactAboveExp === 'no'} onChange={handleInputChange} class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <label for="applied-no" class="ml-2 text-gray-700 text-sm font-bold">No</label>
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">IF NO,WHY?</label>
                <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.Why && 'border-red-500'}`} name="Why" value={previousexpData.Why} onChange={handleInputChange} type="text" />
            </div>
            <div class="flex items-center justify-between mt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>Next</button>
            </div>
=======

        <div class="px-20">
                <div class="mb-4">
                     <label class="block text-gray-700 text-sm font-bold mb-2">FROM</label>
                     <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.From && 'border-red-500'}`} type="text" name="From" value={previousexpData.From} onChange={handleInputChange} />
                     {errors.From && <p className="text-red-500 text-xs italic">{errors.From}</p>}
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
                                <label class="block text-gray-700 text-sm font-bold mb-2">STARTING SALARY</label>
                                     <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${errors.startSalary && 'border-red-500'}`} type="text" name="startSalary" value={previousexpData.startSalary} onChange={handleInputChange} />
                                     {errors.startsalary && <p className="text-red-500 text-xs italic">{errors.startSalary}</p>}
                            </div>
                            <div class="w-full md:w-1/2">
                                 <label class="block text-gray-700 text-sm font-bold mb-2">LAST SALARY</label>
                                    <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.lastSalary && 'border-red-500'}`} type="text" name="lastSalary" value={previousexpData.lastSalary} onChange={handleInputChange} />
                                    {errors.lastSalary && <p className="text-red-500 text-xs italic">{errors.lastSalary}</p>}
                            </div>
                         </div>
                     <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">TO</label>
                             <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${errors.To && 'border-red-500'}`} type="text" name="To" value={previousexpData.To} onChange={handleInputChange} />
                             {errors.To && <p className="text-red-500 text-xs italic">{errors.To}</p>}
                    </div>
                    <div class="flex flex-col md:flex-row mb-4">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">STREET</label>
                                 <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.Street && 'border-red-500'}`} type="text" name="Street" value={previousexpData.Street} onChange={handleInputChange} />
                                 {errors.Street && <p className="text-red-500 text-xs italic">{errors.Street}</p>}
                        </div>
                        <div class="w-full md:w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2">CITY</label>
                                <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${errors.City && 'border-red-500'}`} type="text" name="City" value={previousexpData.City} onChange={handleInputChange} />
                                {errors.City && <p className="text-red-500 text-xs italic">{errors.City}</p>}
                        </div>
                     </div>
                    <div class="flex flex-col md:flex-row mb-4">
                         <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">STATE</label>
                                <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.State && 'border-red-500'}`} type="text" name="State" value={previousexpData.State} onChange={handleInputChange} />
                                {errors.State && <p className="text-red-500 text-xs italic">{errors.State}</p>}
                         </div>
                         <div class="w-full md:w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2">ZIP</label>
                                <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.Zip && 'border-red-500'}`} type="text" name="Zip" value={previousexpData.Zip} onChange={handleInputChange} />
                                {errors.Zip && <p className="text-red-500 text-xs italic">{errors.Zip}</p>} 
                         </div>
                     </div>
                     <div class="flex flex-col md:flex-row mb-4">
                         <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                             <label for="email" class="block text-gray-700 text-sm font-bold mb-2">RESPONSIBILITY</label>
                                <textarea id="email" name="Responsibility" rows="4" class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${errors.Responsibility && 'border-red-500'}`}  value={previousexpData.Responsibility} onChange={handleInputChange} ></textarea>
                                {errors.Responsibility && <p className="text-red-500 text-xs italic">{errors.Responsibility}</p>}
                        </div>
                        <div class="w-full md:w-1/2">
                             <label for="start_date" class="block text-gray-700 text-sm font-bold mb-2">REASON FOR LEAVING</label>
                            <textarea id="start_date" name="leaveReason" rows="4" class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" ${errors.leaveReason && 'border-red-500'}`}  value={previousexpData.leaveReason} onChange={handleInputChange} ></textarea>
                            {errors.leaveReason && <p className="text-red-500 text-xs italic">{errors.leaveReason}</p>}
                        </div>
                     </div>
                     <div class="flex flex-col md:flex-row items-center mb-4">
                        <label class="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">MAY WE CONTACT THE ABOVE EMPLOYER</label>
                        {errors.contactAboveExp && <p className="text-red-500 text-xs italic">{errors.contactAboveExp}</p>}
                            <div class="flex items-center">
                                <input id="applied-yes" type="radio" name="contactAboveExp" value="yes" checked={previousexpData.contactAboveExp === 'yes'} onChange={handleInputChange} class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                                 <label for="applied-yes" class="ml-2 text-gray-700 text-sm font-bold">Yes</label>
                            </div>
                            <div class="flex items-center ml-4">
                                <input id="applied-no" type="radio" name="contactAboveExp" value="no" checked={previousexpData.contactAboveExp === 'no'} onChange={handleInputChange}class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                                <label for="applied-no" class="ml-2 text-gray-700 text-sm font-bold">No</label>
                             </div>
                      </div>

                     <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">IF NO,WHY?</label>
                        <input class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${errors.Why && 'border-red-500'}`}  name="Why" value={previousexpData.Why} onChange={handleInputChange}  type="text"/>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>Next</button>
                    </div>
>>>>>>> d9f5586dbdbc9a61d22fdc63eb906a628e72bc42
        </div>

    )
}
