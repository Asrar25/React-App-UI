import { useState } from "react";


function GeneralInfo({ formAllData, handleChange, nextStep }) {


    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();


        let errors = {};
        if (!formAllData.fullName) {
            errors.fullName = "Full Name is required";
        }
        else if (formAllData.fullName.length < 3) {
            errors.fullName = "Full Name must be at least 3 characters";
        }
        else if (!/^[a-zA-Z\s]+$/.test(formAllData.fullName)) {
            errors.fullName = "Full Name can only contain letters and spaces";
        }
        // Add more validation rules as needed for other fields
        if (!formAllData.phoneNumber.trim()) {
            errors.phoneNumber = "Phone Number is required";
        } else if (!/^\d{10}$/.test(formAllData.phoneNumber.trim())) {
            errors.phoneNumber = "Phone Number must be exactly 10 digits";
        }
        if (!formAllData.faxNumber.trim()) {
            errors.faxNumber = "Fax Number is required";
        } else if (!/^\+\d{2}\d{10}$/.test(formAllData.faxNumber.trim())) {
            errors.faxNumber = "Fax Number must be in the format '+XX1234567890'";
        }
        if (!formAllData.email.trim()) {
            errors.email = "email is required";
        } else if (!/\S+@\S+\.\S+/.test(formAllData.email.trim())) {
            errors.email = "Invalid email format";
        }
        if (!formAllData.address.trim()) {
            errors.address = "address is required";
        }

        // position validation
        if (!formAllData.position.trim()) {
            errors.position = "position is required";
        }

        // Present Salary validation
        if (!formAllData.presentSalary.trim()) {
            errors.presentSalary = "Present Salary is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(formAllData.presentSalary.trim())) {
            errors.presentSalary = "Present Salary must be a valid number";
        }

        if (!formAllData.salaryDesire.trim()) {
            errors.salaryDesire = "Salary Desire is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(formAllData.salaryDesire.trim())) {
            errors.salaryDesire = "Salary Desire must be a valid number";
        }

        if (!formAllData.time.trim()) {
            errors.time = "time is required";
        }


        if (!formAllData.alreadySB.trim()) {
            errors.alreadySB = "This Fiel is required";
        }
        if (!formAllData.application.trim()) {
            errors.application = "application is required";
        }
        if (!formAllData.legallyWork.trim()) {
            errors.legallyWork = "Legally Work is required";
        }
        if (!formAllData.sponsorshipEmployement.trim()) {
            errors.sponsorshipEmployement = "Sponsorship Employement is required";
        }
        if (!formAllData.convictedCrime.trim()) {
            errors.convictedCrime = "Convicted Crime is required";
        }
        if (!formAllData.time.trim()) {
            errors.time = 'time is required';
        }
        if (!formAllData.date.trim()) {
            errors.date = "date is required";
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
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.fullName && 'border-red-500'}`} type="text" name="fullName" value={formAllData.fullName} onChange={handleChange} />
                {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
            </div>

            <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">MOBILE NUMBER</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNumber && 'border-red-500'}`} type="text" name="phoneNumber" value={formAllData.phoneNumber} onChange={handleChange} />
                    {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
                </div>
                <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">FAX NUMBER</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.faxNumber && 'border-red-500'}`} type="text" name="faxNumber" value={formAllData.faxNumber} onChange={handleChange} />
                    {errors.faxNumber && <p className="text-red-500 text-xs italic">{errors.faxNumber}</p>}
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">EMAIL ID</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'}`} type="text" name="email" value={formAllData.email} onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                </div>
                <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">EARLIEST START date</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.date && 'border-red-500'}`} type="date" name="date" value={formAllData.date} onChange={handleChange} />
                    {errors.date && <p className="text-red-500 text-xs italic">{errors.date}</p>}
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">ADDRESS</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address && 'border-red-500'}`} type="text" name="address" value={formAllData.address} onChange={handleChange} />
                    {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
                </div>
                <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">POSITION</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.position && 'border-red-500'}`} type="text" name="position" vvalue={formAllData.position} onChange={handleChange} />
                    {errors.position && <p className="text-red-500 text-xs italic">{errors.position}</p>}
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">PRESENT SALARY</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.presentSalary && 'border-red-500'}`} type="text" name="presentSalary" value={formAllData.presentSalary} onChange={handleChange} />
                    {errors.presentSalary && <p className="text-red-500 text-xs italic">{errors.presentSalary}</p>}
                </div>
                <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">SALARY DESIRED</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.salaryDesire && 'border-red-500'}`} type="text" name="salaryDesire" value={formAllData.salaryDesire} onChange={handleChange} />
                    {errors.salaryDesire && <p className="text-red-500 text-xs italic">{errors.salaryDesire}</p>}
                </div>
            </div>

            <div className="mb-4">

            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0 md:mr-4">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="time" value="Parttime" checked={formAllData.time === 'Parttime'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />PART-TIME</label>

                </div>
                <div className="w-full md:w-1/2 flex items-center">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="time" value="Fulltime" checked={formAllData.time === 'Fulltime'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />FULL-TIME</label>
                </div>
            </div>
            {errors.time && <p className="text-red-500 text-xs italic mb-4">{errors.time}</p>}


            <div className="flex flex-col md:flex-row mt-4 items-center">
                <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER APPLIED TO SB & COMPANY, LLC BEFORE</label>
                <div className="flex items-center">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="alreadySB" value="yes" checked={formAllData.alreadySB === 'yes'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />YES</label>

                </div>
                <div className="flex items-center ml-4">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="alreadySB" value="no" checked={formAllData.alreadySB === 'no'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />NO</label>
                </div>
            </div>
            {errors.alreadySB && <p className="text-red-500 text-xs italic mb-4">{errors.alreadySB}</p>}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">IF YES, WHAT?</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="where" />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">How Did you Find About The SB & Company,LLC</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.application && 'border-red-500'}`} type="text" name="application" value={formAllData.application} onChange={handleChange} />
                {errors.application && <p className="text-red-500 text-xs italic">{errors.application}</p>}
            </div>

            <div className="flex flex-col md:flex-row items-center">
                <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">ARE YOU LEGALLY PERMITTED TO WORK IN THIS COUNTRY?</label>
                <div className="flex items-center">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="legallyWork" value="yes" checked={formAllData.legallyWork === 'yes'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />YES</label>

                </div>
                <div className="flex items-center ml-4">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="legallyWork" value="no" checked={formAllData.legallyWork === 'no'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />NO</label>
                </div>

            </div>
            {errors.legallyWork && <p className="  mb-4 text-red-500 text-xs italic">{errors.legallyWork}</p>}

            <div className="flex flex-col mt-4 md:flex-row items-center ">
                <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">WILL YOU NOW OR IN THE FUTURE REQUIRE SPONSORSHIP FOR EMPLOYMENT VISA STATUS?</label>
                <div className="flex items-center">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="sponsorshipEmployement" value="yes" checked={formAllData.sponsorshipEmployement === 'yes'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />YES</label>

                </div>
                <div className="flex items-center ml-4">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="sponsorshipEmployement" value="no" checked={formAllData.sponsorshipEmployement === 'no'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />NO</label>
                </div>

            </div>
            {errors.sponsorshipEmployement && <p className="text-red-500 text-xs italic mb-4">{errors.sponsorshipEmployement}</p>}

            <div className="flex mt-4 flex-col md:flex-row items-center ">
                <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER BEEN CONVICTED OF A CRIME OTHER THAN A MINOR TRAFFIC VIOLATION?</label>
                <div className="flex items-center">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="convictedCrime" value="yes" checked={formAllData.convictedCrime === 'yes'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />YES</label>

                </div>
                <div className="flex items-center ml-4">
                    <label className="ml-2 text-gray-700 text-sm font-bold">
                        <input type="radio" name="convictedCrime" value="no" checked={formAllData.convictedCrime === 'no'} onChange={handleChange} className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />NO</label>
                </div>

            </div>
            {errors.convictedCrime && <p className="text-red-500 text-xs italic mb-4">{errors.convictedCrime}</p>}

            <div className="mb-4 mt-4">
                <label className="block text-gray-700 text-sm font-bold">IF YES, GIVE DETAILS ON A SEPARATE PAGE AND ATTACH TO THE application</label>
            </div>
            <div className="flex items-center justify-center mt-4">
                <input type="submit" value="Next" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit} />
            </div>
        </div>

    )
}


export default GeneralInfo;
