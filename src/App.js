import React,{useContext} from 'react';
import './App.css';
import GeneralInfo from './Components/GeneralInfo';
import EducationInfo from './Components/EducationInfo';
import PreviousExpInfo from './Components/PreviousExpInfo';
import PreviousExpInfoConduct from './Components/PreviousExpInfoConduct';
import AdditionalQualification from './Components/AdditionalQualification';
import References from './Components/References';
import BackgroundData from './Components/BackgroundData';
import ApplicantCertification from './Components/ApplicantCertification';
import { Stepper,StepLabel,Step } from '@mui/material';
import { multiStepContext } from './StepContext';


function App() {
  const{currentStep,finalData}=useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1:
        return <GeneralInfo/>
      case 2:
        return <EducationInfo/>
      case 3:
        return <PreviousExpInfo/>
      case 4:
        return <PreviousExpInfoConduct/>
      case 5:
        return <AdditionalQualification/>
      case 6:
        return <References/>
      case 7:
        return <BackgroundData/>
      case 8:
        return <ApplicantCertification/>
      default:
        return <p>End</p>
    }
  }
  return (
  //   <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>
    <div class="lg:container lg:mx-auto">
  <div className="px-4">
        <Stepper style={{width:"100%"}} activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
        </Stepper>
        </div>
       {showStep(currentStep)}
      </div>
  );
}

export default App;
