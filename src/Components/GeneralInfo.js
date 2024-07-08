import { useState } from "react";


function GeneralInfo({formAllData, handleChange, nextStep}) {


    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();


        let errors = {};
        if (!formAllData.FullName) {
            errors.FullName = "Full Name is required";
        }
        else if (formAllData.FullName.length < 3) {
            errors.FullName = "Full Name must be at least 3 characters";
        }
        else if (!/^[a-zA-Z\s]+$/.test(formAllData.FullName)) {
            errors.FullName = "Full Name can only contain letters and spaces";
        }
        // Add more validation rules as needed for other fields
        if (!formAllData.PhoneNumber.trim()) {
            errors.PhoneNumber = "Phone Number is required";
        } else if (!/^\d{10}$/.test(formAllData.PhoneNumber.trim())) {
            errors.PhoneNumber = "Phone Number must be exactly 10 digits";
        }
        if (!formAllData.FaxNumber.trim()) {
            errors.FaxNumber = "Fax Number is required";
        } else if (!/^\+\d{2}\d{10}$/.test(formAllData.FaxNumber.trim())) {
            errors.FaxNumber = "Fax Number must be in the format '+XX1234567890'";
        }
        if (!formAllData.Email.trim()) {
            errors.Email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formAllData.Email.trim())) {
            errors.Email = "Invalid email format";
        }
        if (!formAllData.Address.trim()) {
            errors.Address = "Address is required";
        }

        // Position validation
        if (!formAllData.Position.trim()) {
            errors.Position = "Position is required";
        }

        // Present Salary validation
        if (!formAllData.PresentSalary.trim()) {
            errors.PresentSalary = "Present Salary is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(formAllData.PresentSalary.trim())) {
            errors.PresentSalary = "Present Salary must be a valid number";
        }

        if (!formAllData.SalaryDesire.trim()) {
            errors.SalaryDesire = "Salary Desire is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(formAllData.SalaryDesire.trim())) {
            errors.SalaryDesire = "Salary Desire must be a valid number";
        }

        if (!formAllData.Time.trim()) {
            errors.Time = "Time is required";
        }

       
        if (!formAllData.AlreadySB.trim()) {
            errors.AlreadySB = "This Fiel is required";
        }
        if (!formAllData.Application.trim()) {
            errors.Application = "Application is required";
        }
        if (!formAllData.LegallyWork.trim()) {
            errors.LegallyWork = "Legally Work is required";
        }
        if (!formAllData.SponsorshipEmployement.trim()) {
            errors.SponsorshipEmployement = "Sponsorship Employement is required";
        }
        if (!formAllData.ConvictedCrime.trim()) {
            errors.ConvictedCrime = "Convicted Crime is required";
        }
        if (!formAllData.Time.trim()) {
            errors.Time = 'Time is required';
        }
        if (!formAllData.Date.trim()) {
            errors.Date = "Date is required";
        } else {
            const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(formAllData.Date.trim());
            if (!isValidDate) {
                errors.Date = "Date must be in the format YYYY-MM-DD";
            }
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
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">FULL NAME</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.FullName && 'border-red-500'}`} type="text" name="FullName" value={formAllData.FullName} onChange={handleChange} />
                    {errors.FullName && <p className="text-red-500 text-xs italic">{errors.FullName}</p>}
                </div>

                <div className="flex flex-col md:flex-row mb-4">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">MOBILE NUMBER</label>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.PhoneNumber && 'border-red-500'}`} type="text" name="PhoneNumber" value={formAllData.PhoneNumber} onChange={handleChange} />
                        {errors.PhoneNumber && <p className="text-red-500 text-xs italic">{errors.PhoneNumber}</p>}
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">FAX NUMBER</label>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.FaxNumber && 'border-red-500'}`} type="text" name="FaxNumber" value={formAllData.FaxNumber} onChange={handleChange} />
                        {errors.FaxNumber && <p className="text-red-500 text-xs italic">{errors.FaxNumber}</p>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mb-4">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">EMAIL</label>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Email && 'border-red-500'}`} type="text" name="Email" value={formAllData.Email} onChange={handleChange} />
                        {errors.Email && <p className="text-red-500 text-xs italic">{errors.Email}</p>}
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">EARLIEST START DATE</label>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Date && 'border-red-500'}`} type="date" name="Date" value={formAllData.Date} onChange={handleChange} />
                        {errors.Date && <p className="text-red-500 text-xs italic">{errors.Date}</p>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mb-4">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Address && 'border-red-500'}`} type="text" name="Address" value={formAllData.Address} onChange={handleChange} />
                        {errors.Address && <p className="text-red-500 text-xs italic">{errors.Address}</p>}
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">POSITION DESIRED</label>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Position && 'border-red-500'}`} type="text" name="Position" vvalue={formAllData.Position} onChange={handleChange} />
                        {errors.Position && <p className="text-red-500 text-xs italic">{errors.Position}</p>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mb-4">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">PRESENT SALARY</label>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.PresentSalary && 'border-red-500'}`} type="text" name="PresentSalary" value={formAllData.PresentSalary} onChange={handleChange} />
                        {errors.PresentSalary && <p className="text-red-500 text-xs italic">{errors.PresentSalary}</p>}
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">SALARY DESIRED</label>
                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.SalaryDesire && 'border-red-500'}`} type="text" name="SalaryDesire" value={formAllData.SalaryDesire} onChange={handleChange} />
                        {errors.SalaryDesire && <p className="text-red-500 text-xs italic">{errors.SalaryDesire}</p>}
                    </div>
                </div>

                <div className="mb-4">

                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0 md:mr-4">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="Time" value="PartTime" checked={formAllData.Time === 'PartTime'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />PART-TIME</label>

                    </div>
                    <div className="w-full md:w-1/2 flex items-center">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="Time" value="FullTime" checked={formAllData.Time === 'FullTime'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />FULL-TIME</label>
                    </div>
                </div>
                {errors.Time && <p className="text-red-500 text-xs italic mb-4">{errors.Time}</p>}
              

                <div className="flex flex-col md:flex-row items-center">
                    <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER APPLIED TO SB & COMPANY, LLC BEFORE</label>
                    <div className="flex items-center">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="AlreadySB" value="yes" checked={formAllData.AlreadySB === 'yes'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />YES</label>
                            
                    </div>
                    <div className="flex items-center ml-4">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="AlreadySB" value="no" checked={formAllData.AlreadySB === 'no'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />NO</label>
                    </div>
                </div>
                {errors.AlreadySB && <p className="text-red-500 text-xs italic mb-4">{errors.AlreadySB}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">IF YES, WHAT?</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">How Did you Find About The SB & Company,LLC</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Application && 'border-red-500'}`} type="text" name="Application" value={formAllData.Application} onChange={handleChange} />
                    {errors.Application && <p className="text-red-500 text-xs italic">{errors.Application}</p>}
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">ARE YOU LEGALLY PERMITTED TO WORK IN THIS COUNTRY?</label>
                    <div className="flex items-center">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="LegallyWork" value="yes" checked={formAllData.LegallyWork === 'yes'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />YES</label>

                    </div>
                    <div className="flex items-center ml-4">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="LegallyWork" value="no" checked={formAllData.LegallyWork === 'no'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />NO</label>
                    </div>
                   
                </div>
                {errors.LegallyWork && <p className="  mb-4 text-red-500 text-xs italic">{errors.LegallyWork}</p>}

                <div className="flex flex-col md:flex-row items-center ">
                    <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">WILL YOU NOW OR IN THE FUTURE REQUIRE SPONSORSHIP FOR EMPLOYMENT VISA STATUS?</label>
                    <div className="flex items-center">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="SponsorshipEmployement" value="yes" checked={formAllData.SponsorshipEmployement === 'yes'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />YES</label>

                    </div>
                    <div className="flex items-center ml-4">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="SponsorshipEmployement" value="no" checked={formAllData.SponsorshipEmployement === 'no'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />NO</label>
                    </div>
                    
                </div>
                {errors.SponsorshipEmployement && <p className="text-red-500 text-xs italic mb-4">{errors.SponsorshipEmployement}</p>}

                <div className="flex flex-col md:flex-row items-center ">
                    <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER BEEN CONVICTED OF A CRIME OTHER THAN A MINOR TRAFFIC VIOLATION?</label>
                    <div className="flex items-center">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="ConvictedCrime" value="yes" checked={formAllData.ConvictedCrime === 'yes'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />YES</label>

                    </div>
                    <div className="flex items-center ml-4">
                        <label className="ml-2 text-gray-700 text-sm font-bold">
                            <input type="radio" name="ConvictedCrime" value="no" checked={formAllData.ConvictedCrime === 'no'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />NO</label>
                    </div>
                   
                </div>
                {errors.ConvictedCrime && <p className="text-red-500 text-xs italic mb-4">{errors.ConvictedCrime}</p>}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold">IF YES, GIVE DETAILS ON A SEPARATE PAGE AND ATTACH TO THE APPLICATION</label>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <input type="submit" value="Next" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}/>
                </div>
        </div>

    )
}


export default GeneralInfo;
