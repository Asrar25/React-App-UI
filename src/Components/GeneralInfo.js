
import { useState } from "react";

function GeneralInfo({nextStep}){
   
    const[formData,setformData]=useState({
        FullName: "",
        PhoneNumber: "",
        FaxNumber: "",
        Email: "",
        Address: "",
        Position: "",
        PresentSalary: "",
        SalaryDesire: "",
        Date: "",
        Time: "",
        AlreadySB: "",
        Where: "",
        Application: "",
        LegallyWork: "",
        SponsorshipEmployement: "",
        ConvictedCrime: ""
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

        // Validation logic
        let errors = {};
        if (!formData.FullName) {
            errors.FullName = "Full Name is required";
        } 
        else if (formData.FullName.length < 3) {
            errors.FullName = "Full Name must be at least 3 characters";
        } 
         else if (!/^[a-zA-Z\s]+$/.test(formData.FullName)) {
            errors.FullName = "Full Name can only contain letters and spaces";
        }
        // Add more validation rules as needed for other fields
        if (Object.keys(errors).length == 0) {
            // If no errors, proceed to the next step
            nextStep(); // Call the nextStep function passed as prop
        } else {
            setErrors(errors); // Update the state with errors
        }
        if (!formData.PhoneNumber.trim()) {
            errors.PhoneNumber = "Phone Number is required";
          } else if (!/^\d{10}$/.test(formData.PhoneNumber.trim())) {
            errors.PhoneNumber = "Phone Number must be exactly 10 digits";
          }
          if (!formData.FaxNumber.trim()) {
            errors.FaxNumber = "Fax Number is required";
          } else if (!/^\+\d{2}\d{10}$/.test(formData.FaxNumber.trim())) {
            errors.FaxNumber = "Fax Number must be in the format '+XX1234567890'";
          }
          if (!formData.Email.trim()) {
            errors.Email = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(formData.Email.trim())) {
            errors.Email = "Invalid email format";
          }
          if (!formData.Address.trim()) {
            errors.Address = "Address is required";
          }
      
          // Position validation
          if (!formData.Position.trim()) {
            errors.Position = "Position is required";
          }
      
          // Present Salary validation
          if (!formData.PresentSalary.trim()) {
            errors.PresentSalary = "Present Salary is required";
          } else if (!/^\d+(\.\d{1,2})?$/.test(formData.PresentSalary.trim())) {
            errors.PresentSalary = "Present Salary must be a valid number";
          }

          if (!formData.SalaryDesire.trim()) {
            errors.SalaryDesire = "Salary Desire is required";
          } else if (!/^\d+(\.\d{1,2})?$/.test(formData.SalaryDesire.trim())) {
            errors.SalaryDesire = "Salary Desire must be a valid number";
          }

          if (!formData.Time.trim()) {
            errors.Time = "Time is required";
          }
      
          // AlreadySB validation
          if (!formData.AlreadySB.trim()) {
            errors.AlreadySB = "Already SB is required";
          } 
          if (formData.Where.trim().length > 255) {
            errors.Where = "Where must be at most 255 characters";
          }
      
          // Application validation
          if (!formData.Application.trim()) {
            errors.Application = "Application is required";
          }

          if (!formData.LegallyWork.trim()) {
            errors.LegallyWork = "Legally Work is required";
          }
      
          // Sponsorship Employement validation
          if (!formData.SponsorshipEmployement.trim()) {
            errors.SponsorshipEmployement = "Sponsorship Employement is required";
          }
      
          // Convicted Crime validation
          if (!formData.ConvictedCrime.trim()) {
            errors.ConvictedCrime = "Convicted Crime is required";
          }



          if (!formData.Date.trim()) {
            errors.Date = "Date is required";
          } else {
            const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(formData.Date.trim());
            if (!isValidDate) {
              errors.Date = "Date must be in the format YYYY-MM-DD";
            }
          }
       
    };
    
    return (
       
        
        <div className="px-20">
    <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">FULL NAME</label>
            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.FullName && 'border-red-500'}`}type="text"name="FullName"value={formData.FullName}onChange={handleChange}/>
            {errors.FullName && <p className="text-red-500 text-xs italic">{errors.FullName}</p>}
        </div>

        <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">MOBILE NUMBER</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.PhoneNumber && 'border-red-500'}`}type="text"name="PhoneNumber"value={formData.PhoneNumber}onChange={handleChange}/>
                {errors.PhoneNumber && <p className="text-red-500 text-xs italic">{errors.PhoneNumber}</p>}
            </div>
            <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">FAX NUMBER</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.FaxNumber && 'border-red-500'}`} type="text"name="FaxNumber"value={formData.FaxNumber}onChange={handleChange}/>
                {errors.FaxNumber && <p className="text-red-500 text-xs italic">{errors.FaxNumber}</p>}
            </div>
        </div>

        <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">EMAIL</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Email && 'border-red-500'}`} type="text"name="Email"value={formData.Email}onChange={handleChange}/>
                {errors.Email && <p className="text-red-500 text-xs italic">{errors.Email}</p>}
            </div>
            <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">EARLIEST START DATE</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Date && 'border-red-500'}`} type="date"name="Date"value={formData.Date}onChange={handleChange}/>
                {errors.Date && <p className="text-red-500 text-xs italic">{errors.Date}</p>}
            </div>
        </div>

        <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">PRESENT SALARY</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.PresentSalary && 'border-red-500'}`}type="text"name="PresentSalary"value={formData.PresentSalary}onChange={handleChange}/>
                {errors.PresentSalary && <p className="text-red-500 text-xs italic">{errors.PresentSalary}</p>}
            </div>
            <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">SALARY DESIRED</label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.SalaryDesire && 'border-red-500'}`}type="text"name="SalaryDesire"value={formData.SalaryDesire}onChange={handleChange}/>
                {errors.SalaryDesire  && <p className="text-red-500 text-xs italic">{errors.SalaryDesire }</p>}
            </div>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">POSITION DESIRED</label>
            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Position && 'border-red-500'}`}type="text" name="Position"vvalue={formData.Position}onChange={handleChange}/>
            {errors.Position  && <p className="text-red-500 text-xs italic">{errors.Position}</p>}
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0 md:mr-4">
                <input id="part-time" type="radio" name="employment" className={`form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-3001${errors.Time && 'border-red-500'}`} value={formData.Time}onChange={handleChange}/>
                <label for="part-time" className="ml-2 text-gray-700 text-sm font-bold">PART-TIME</label>
                
            </div>
            <div className="w-full md:w-1/2 flex items-center">
                <input id="full-time" type="radio" name="employment" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
                <label for="full-time" className="ml-2 text-gray-700 text-sm font-bold">FULL-TIME</label>
            </div>
            {errors.Time  && <p className="text-red-500 text-xs italic">{errors.Time }</p>}
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER APPLIED TO SB & COMPANY, LLC BEFORE</label>
            <div className="flex items-center">
                <input id="applied-yes" type="radio" name="applied" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4" value="yes"/>
                <label for="applied-yes" className={`ml-2 text-gray-700 text-sm font-bold`}>Yes</label>
            </div>
            <div className="flex items-center ml-4">
                <input id="applied-no" type="radio" name="applied" className={`form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" value="no" ${errors.AlreadySB && 'border-red-500'}`} value={formData.AlreadySB}onChange={handleChange} />
                <label for="applied-no" className="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
            {errors.AlreadySB   && <p className="text-red-500 text-xs italic">{errors.AlreadySB  }</p>}
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">IF YES, WHAT?</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">ARE YOU LEGALLY PERMITTED TO WORK IN THIS COUNTRY?</label>
            <div className="flex items-center">
                <input id="work-yes" type="radio" name="work" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="work-yes" className="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div className="flex items-center ml-4">
                <input id="work-no" type="radio" name="work" className={`form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${errors.LegallyWork && 'border-red-500'}`} value={formData.LegallyWork}onChange={handleChange}/>
                <label for="work-no" className="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
            {errors.LegallyWork  && <p className="text-red-500 text-xs italic">{errors.LegallyWork }</p>}
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">WILL YOU NOW OR IN THE FUTURE REQUIRE SPONSORSHIP FOR EMPLOYMENT VISA STATUS?</label>
            <div className="flex items-center">
                <input id="visa-yes" type="radio" name="visa" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="visa-yes" className="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div className="flex items-center ml-4">
                <input id="visa-no" type="radio" name="visa" className={`form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${errors.SponsorshipEmployement && 'border-red-500'}`} value={formData.SponsorshipEmployement}onChange={handleChange}/>
                <label for="visa-no" className="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
            {errors.SponsorshipEmployement  && <p className="text-red-500 text-xs italic">{errors.SponsorshipEmployement }</p>}
        </div>

        <div className="flex flex-col md:flex-row items-center mb-4">
            <label className="w-full md:w-auto text-gray-700 text-sm font-bold mb-2 md:mb-0">HAVE YOU EVER BEEN CONVICTED OF A CRIME OTHER THAN A MINOR TRAFFIC VIOLATION?</label>
            <div className="flex items-center">
                <input id="crime-yes" type="radio" name="crime" className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ml-4"/>
                <label for="crime-yes" className="ml-2 text-gray-700 text-sm font-bold">Yes</label>
            </div>
            <div className="flex items-center ml-4">
                <input id="crime-no" type="radio" name="crime" className={`form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${errors.ConvictedCrime && 'border-red-500'}`} value={formData.ConvictedCrime}onChange={handleChange}/>
                <label for="crime-no" className="ml-2 text-gray-700 text-sm font-bold">No</label>
            </div>
            {errors.ConvictedCrime && <p className="text-red-500 text-xs italic">{errors.ConvictedCrime}</p>}
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold">IF YES, GIVE DETAILS ON A SEPARATE PAGE AND ATTACH TO THE APPLICATION</label>
        </div>
        <div className="flex items-center justify-center mt-4">
        <input type="submit" value="Next" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
        </div>
    </form>
</div>

    )
}


export default GeneralInfo;
