import React, { useState } from 'react';
import './App.css';
import SubmitPop from './Components/SubmitPop';
import GeneralInfo from './Components/GeneralInfo';
import EducationInfo from './Components/EducationInfo';
import PreviousExpInfo from './Components/PreviousExpInfo';
import PreviousExpInfoConduct from './Components/PreviousExpInfoConduct';
import AdditionalQualification from './Components/AdditionalQualification';
import References from './Components/References';
import BackgroundData from './Components/BackgroundData';
import ApplicantCertification from './Components/ApplicantCertification';
import axios from "axios";

function App() {
  const [showPop, setShowPop] = useState(false);
  const [errors, setErrors] = useState({});
  
  const [formAllData, setFormAllData] = useState({
    fullName: "",
    phoneNumber: "",
    faxNumber: "",
    email: "",
    address: "",
    position: "",
    presentSalary: "",
    salaryDesire: "",
    date: "",
    time: "",
    alreadySB: "",
    where: "",
    application: "",
    legallyWork: "",
    sponsorshipEmployement: "",
    convictedCrime: ""
  });
  const [educationData, setEducationData] = useState([
    { Education: "", State: "", DateAttend: "", Degree: "", GraduationDate: "", Major: "", Minor: "", OverallGPA: "", GpaMajor: "", HrsWork: "" },
    { Education: "", State: "", DateAttend: "", Degree: "", GraduationDate: "", Major: "", Minor: "", OverallGPA: "", GpaMajor: "", HrsWork: "" },
    { Education: "", State: "", DateAttend: "", Degree: "", GraduationDate: "", Major: "", Minor: "", OverallGPA: "", GpaMajor: "", HrsWork: "" }
  ]);
  const educationdata = educationData.filter(row => {
    return Object.values(row).some(field => field !== "");
  });

  const [courseData, setCourseData] = useState([
    { Course: "", School: "", creditHour: "", Grade: "" },
    { Course: "", School: "", creditHour: "", Grade: "" },
    { Course: "", School: "", creditHour: "", Grade: "" },
    { Course: "", School: "", creditHour: "", Grade: "" },
    { Course: "", School: "", creditHour: "", Grade: "" }
  ]);
  const coursedata = courseData.filter(row => {
    return Object.values(row).some(field => field !== "");
  });


  const [resultVerbalData, setResultVerbalData] = useState(
    { SatVerbal: "", GreVerbal: "", Act: "" }
  );

  const [resultMathData, setMathData] = useState(
    { SatMath: "", GreMath: "", Lsat: "" }
  );

  const [resultTotalData, setTotalData] = useState(
    { SatTotal: "", GreTotal: "", Gmat: "" }
  );

  const [scholarshipData, setScholarshipData] = useState(
    { Scholarship: "" }
  );

  const [cpaData, setCpaData] = useState(
    { partTaken: "", cpaState: "", licenseNumber: "", Active: "" }
  );

  const [previousexpData, setPreviousExpData] = useState(
    { from: "", monthYear: "", phoneNumber: "", startSalary: "", lastSalary: "", to: "",street: "", city: "", state: "", zip: "",jobTitle:"",supervisorName:"",supervisorTitle:"",firmName:"", responsibility: "", leaveReason: "", contactEmployer: "", why: "" }
);

  const [previousexpInfoData, setPreviousExpInfoData] = useState([
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

  const [additionalSkill, setAdditionalSkill] = useState({
    Qualification: "",
  });

  const [referencedata, setReferencedata] = useState([
    { Name: "", Organization: "", Relationship: "", Telephonic: "" },
    { Name: "", Organization: "", Relationship: "", Telephonic: "" },
    { Name: "", Organization: "", Relationship: "", Telephonic: "" },
    { Name: "", Organization: "", Relationship: "", Telephonic: "" },

  ])
  const referenceData = referencedata.filter(row => {
    return Object.values(row).some(field => field !== "");
  });

  const [backgroundData, setBackgroundData] = useState(
    {
      firstName: "",
      lastName: "",
      securityNo: "",
      mi: "",
      usedName: ""
    }
  )

  const [addressData, setAddressData] = useState([
    { street: "", address: "", fromTo: "" },
    { street: "", address: "", fromTo: "" },
    { street: "", address: "", fromTo: "" }
  ])
  const addressdata = addressData.filter(row => {
    return Object.values(row).some(field => field !== "");
  });

  const [certifiedData, setCertifiedData] = useState({
    signature: "", signatureDate: ""
  })
  const handleChange = (e) => {
    setFormAllData({
      ...formAllData,
      [e.target.name]: e.target.value
    });
  };
  const handleOnClose=(e)=>{
    setShowPop(false);
  }


  const formArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const [formNo, setFormNo] = useState(formArray[0]);
  const submitForm = async () => {
    
    try {
      const response = await axios.post('http://localhost:8000/api/store',{
        fullName:formAllData.fullName,
        mobileNumber:formAllData.phoneNumber,
        faxNumber:formAllData.faxNumber,
        email:formAllData.email,
        address:formAllData.address,
        position:formAllData.position,
        presentSalary:formAllData.presentSalary,
        salaryDesire:formAllData.salaryDesire,
        date:formAllData.date,
        time:formAllData.time,
        alreadySB:formAllData.alreadySB,
        where: formAllData.where,
        application:formAllData.application,
        legallyWork:formAllData.legallyWork,
        sponsorshipEmployement:formAllData.sponsorshipEmployement,
        convictedCrime:formAllData.convictedCrime,
        educationdata:educationdata,
        coursedata:coursedata,
        resultVerbalData:resultVerbalData,
        resultMathData:resultMathData,
        resultTotalData:resultTotalData,
        scholarshipData:scholarshipData,
        cpaData:cpaData,
        experienceFrom:previousexpData.from,
          monthYear: previousexpData.monthYear, 
          phoneNumber:previousexpData.phoneNumber,
           startSalary: previousexpData.startSalary,
           lastSalary: previousexpData.lastSalary,
           experienceTo:previousexpData.to,
           street:previousexpData.street, 
           city: previousexpData.city,
           state:previousexpData.state, 
           zip: previousexpData.zip,
           jobTitle:previousexpData.jobTitle,
           supervisorName:previousexpData.supervisorName,
           supervisorTitle:previousexpData.supervisorTitle,
           firmName:previousexpData.firmName,
           responsibility: previousexpData.responsibility,
           leaveReason:previousexpData.leaveReason,
           contactEmployer: previousexpData.contactEmployer, 
           why: previousexpData.why,
           previousexpInfoData:previousexpInfoData,
           Qualification:additionalSkill.Qualification,
           referenceData:referenceData,
           backgroundData:backgroundData,
           addressdata:addressdata,
           signature:certifiedData.signature,
           signatureDate:certifiedData.signatureDate
      })
      console.log(previousexpData);
      console.log(response.data);
      setShowPop(true);
    } catch (error) {
        if (error.response && error.response.status === 400) { setErrors(error.response.data.errors); }
        console.log(errors);
    }
    
   

  }

  function showStep(step) {
    switch (step) {
      case 1:
        return <GeneralInfo formAllData={formAllData}
          setFormAllData={setFormAllData} handleChange={handleChange} nextStep={() => setFormNo(formNo + 1)} />
      case 2:
        return <EducationInfo setCpaData={setCpaData} cpaData={cpaData} setScholarshipData={setScholarshipData} educationData={educationData} scholarshipData={scholarshipData} setTotalData={setTotalData} setMathData={setMathData} resultTotalData={resultTotalData} resultMathData={resultMathData} resultVerbalData={resultVerbalData} setResultVerbalData={setResultVerbalData} courseData={courseData} setCourseData={setCourseData} setEducationData={setEducationData} nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 3:
        return <PreviousExpInfo previousexpData={previousexpData} setPreviousExpData={setPreviousExpData} nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 4:
        return <PreviousExpInfoConduct previousexpInfoData={previousexpInfoData} setPreviousExpInfoData={setPreviousExpInfoData} nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 5:
        return <AdditionalQualification additionalSkill={additionalSkill} setAdditionalSkill={setAdditionalSkill} nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 6:
        return <References referencedata={referencedata} setReferencedata={setReferencedata} nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 7:
        return <BackgroundData addressData={addressData} setAddressData={setAddressData} backgroundData={backgroundData} setBackgroundData={setBackgroundData} nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 8:
        return <ApplicantCertification setCertifiedData={setCertifiedData} certifiedData={certifiedData} errors={errors} setErrors={setErrors} nextStep={submitForm} preStep={() => setFormNo(formNo - 1)} />
      default:
        return <p>End</p>
    }
  }
  return (
    <div>

      <div className=' px-6 flex justify-center items-center'>
        {

          formArray.map((v, i) =>
            <>
              <div className={`w-[45px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo - 2 === i + 1 || formNo - 3 === i + 1 || formNo - 4 === i + 1 || formNo - 5 === i + 1 || formNo - 6 === i + 1 || formNo === formArray.length ? `bg-gray-700` : `bg-slate-400`} h-[35px] flex justify-center items-center`}>
                {v}
              </div>
              {i !== formArray.length - 1 && <div className={`w-[100px]  h-[2px] ${formNo === i + 2 || formNo == formArray.length ? `bg-gray-700` : `bg-slate-400`}`}></div>}
            </>
          )
        }
      </div>
      {showStep(formNo)}
      {showPop && <SubmitPop handleOnClose={handleOnClose} visible={showPop} />}
    </div>
  );
}

export default App;


