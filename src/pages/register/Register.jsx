import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import RegisterType from './RegisterType';
import RegisterCompany from './registerCompany/RegisterCompany';
import RegisterUser from './registerUser/RegisterUser';
import Suscription from '../suscription/Suscription';
import OwnerSubscription from '../suscription/OwnerSuscription';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Register = () => {
  const [type, setType] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Tipo de Cuenta', 'Detalles', 'Plan'];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <div className='grid w-full min-h-screen gap-4 p-4 grid-row-10'>
      <div className='w-1/2 row-span-1 mx-auto my-auto bg-white'>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={activeStep > index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div className='flex flex-col items-center justify-center h-full bg-gray-100 row-span-9'>
        <div className='flex items-center justify-center'>
          {activeStep === 0 && <RegisterType handleNext={handleNext} setType={setType} />}
          {(activeStep === 1 && type == 'owner') && <RegisterUser />}
          {(activeStep === 1 && type == 'company') && <RegisterCompany />}
          {(activeStep === 2 && type == 'owner') && <OwnerSubscription />}
          {(activeStep === 2 && type == 'company') && <Suscription />}
        </div>

        {activeStep > 0 && (
          <div className='flex justify-between px-4 mt-6'>
            <button
              onClick={handleBack}
              className='px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50'
              disabled={activeStep === 0}
            >
              <ArrowBackIosNewIcon />
            </button>
            <button
              onClick={handleNext}
              className='px-4 py-2 text-sm font-semibold text-white bg-[#00455E] rounded-md hover:bg-[#00555E] disabled:opacity-50'
              disabled={activeStep === steps.length - 1}
            >
              <ArrowBackIosNewIcon style={{ transform: 'rotate(180deg)' }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
