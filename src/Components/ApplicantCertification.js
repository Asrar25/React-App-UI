import { useState } from "react";
import SubmitPop from "./SubmitPop";
export default function ApplicantCertification({ certifiedData, errors, setErrors, setCertifiedData, preStep, nextStep }) {

  const [lasterrors, setLastErrors] = useState({});
  const handleChange = (e) => {
    setCertifiedData({
      ...certifiedData,
      [e.target.name]: e.target.value
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    let lasterrors = {};
    if (!certifiedData.signature) {
      lasterrors.signature = "Signature is must";
    }
    if (!certifiedData.signatureDate) {
      lasterrors.signatureDate = "Data is Required";
    }

    if (Object.keys(lasterrors).length === 0) {
      console.log(certifiedData);
      nextStep();
    } else {
      console.log(lasterrors);
      setLastErrors(lasterrors);
    }
  }






  return (


    <div class="px-20">
      {errors && (
        <ul className="text-red-500 text-center text-xs italic">
          {Object.keys(errors).map((key, index) => (
            <li key={index}>
              <strong>{key}: </strong>
              {errors[key].map((error, idx) => (
                <span key={idx}>{error}</span>
              ))}
            </li>
          ))}
        </ul>
      )}

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">I hereby certify that all statements made in this application and in the pre-employment process are true and correct to the best of my knowledge and belief. I understand and agree that any
          misrepresentation or omission of facts in my application or in the pre-employment process may result in rejection of my application, or termination of employment.</label>
        <label class="block text-gray-700 text-sm font-bold mb-2">  I understand an employee of SB & Company, LLC may make an investigation as to my character and general reputation. I authorize all current and past employers, schools, persons,and organizations having relevant information or
          knowledge to provide it to SB & Company, LLC or its designee, whether or not it is on their records. I hereby release SB & Company, LLC, its representatives and all such employers, schools, persons and organizations from all liability in making or responding to inquiries connected with my application.</label>
        <label class="block text-gray-700 text-sm font-bold mb-2">I understand that an employment relationship is established, my employment can be terminated at any time, with or without notice or cause, at the option of SB & Company, LLC or myself. I further understand that nothing contained in this
          application or in the interview and communication process between me and SB & Company, LLC or any SB & Company, LLC representative stated or implied, is intended to create an employment contract or any other binding obligation on SB & Company, LLC.</label>
        <label class="block text-gray-700 text-sm font-bold mb-2">  Further, if granted a position with SB & Company, LLC, I will comply with all of SB & Company, LLC policies and procedures, a copy of which will be provided to me at the time of my first week of employment.</label>
        <label class="block text-gray-700 text-sm font-bold mb-2">  Under Maryland law, an employer may not require or demand, as a condition of employment, perspective employment, or continued employment, that an individual submit to or take a lie detector or similar test. An employer who violates this law is guilty of a
          misdemeanor and subject to a fine not exceeding $100.</label>
        <label class="block text-gray-700 text-sm font-bold mb-2">
          In signing this form, I certify that I understand all the questions and statements in this application.
        </label>
      </div>
      <div className="flex gap-5">
        <div className="font-bold h-6 mt-5 text-gray-500 text-xs leading-4 uppercase">Acknowledge:</div>
        <div><input id="signature" name="signature" type="text" value={certifiedData.signature} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /><label htmlFor="signature" className="block text-gray-700 text-sm font-bold">
          Signature of Applicant
        </label>
          {lasterrors.signature && <p className="text-red-500 text-xs italic">{lasterrors.signature}</p>}
        </div>

        <div>
          <input id="date" name="signatureDate" type="date" value={certifiedData.signatureDate} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /><label htmlFor="date" className="block text-gray-700 text-sm font-bold ">
            {lasterrors.signatureDate && <p className="text-red-500 text-xs italic">{lasterrors.signatureDate}</p>}
          </label>
        </div>
      </div>
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">
        EEO Statement: SB & Company, LLC is an equal opportunity employer and will not discriminate against any application for employment on the basis of race, color, religion, sex, age, national origin, veteran status,
        disability, or any other basis prohibited by law.
      </div>

      <div class="flex items-center justify-between mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>
          Back
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handlesubmit}>
          Next
        </button>
      </div>



    </div>

  )
}