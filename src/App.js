import React,{useContext, useState} from 'react';
import './App.css';
import GeneralInfo from './Components/GeneralInfo';
import EducationInfo from './Components/EducationInfo';
import PreviousExpInfo from './Components/PreviousExpInfo';
import PreviousExpInfoConduct from './Components/PreviousExpInfoConduct';
import AdditionalQualification from './Components/AdditionalQualification';
import References from './Components/References';
import BackgroundData from './Components/BackgroundData';
import ApplicantCertification from './Components/ApplicantCertification';

function App() {
  const formArray=[1,2,3,4,5,6,7,8];
  const[formNo,setFormNo]=useState(formArray[0]);
  function submitForm(){
    document.body.innerHTML += '<h1>Submitted</h1>';
  }
  function showStep(step){
    switch(step){
      case 1:
        return <GeneralInfo nextStep={() => setFormNo(formNo + 1)} />
      case 2:
        return <EducationInfo nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 3:
        return <PreviousExpInfo nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 4:
        return <PreviousExpInfoConduct nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 5:
        return <AdditionalQualification nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 6:
        return <References nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 7:
        return <BackgroundData nextStep={() => setFormNo(formNo + 1)} preStep={() => setFormNo(formNo - 1)} />
      case 8:
        return <ApplicantCertification nextStep={submitForm} preStep={() => setFormNo(formNo - 1)} />
      default:
        return <p>End</p>
    }
  }
  return (
<div>
        <div className=' px-6 flex justify-center items-center'> 
            {
              formArray.map((v,i)=><><div className={`w-[45px] my-3 text-white rounded-full ${formNo-1 === i || formNo-1===i+1 || formNo===formArray.length ?`bg-gray-700`:`bg-slate-400` } h-[35px] flex justify-center items-center`}>{v}
                </div>
                { i!== formArray.length-1 &&  <div className={`w-[100px]  h-[2px] ${formNo === i+2  || formNo==formArray.length?`bg-gray-700`:`bg-slate-400` }`}></div>}
                </>)
            }
        </div>
       {showStep(formNo)}
      </div>
  );
}

export default App;


