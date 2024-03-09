"use client";
import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import { useFormData } from "@/context/FormDataProvider";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState<string>("");

  const { formData }: any = useFormData();
  const {
    selectedProject1,
    selectedType,
    selectedColors,
    otherColors,
    specialEquipment,
    selectedType1,
    selectedPlace,
    otherPlace,
    selectedDoorType,
    description,
    selectedColor,
    otherColor1,
    dimension,
    selectedStyle,
    specificNeeds,
    plannedUsage,
    installationType,
    furnitureType,
    specificNeeds1,
    budget,
    discoveryChannel,
    otherChannel,
    additionalRemarks,
  } = formData;
  console.log(
    selectedProject1,
    selectedType,
    selectedColors,
    otherColors,
    specialEquipment,
    selectedType1,
    selectedPlace,
    otherPlace,
    selectedDoorType,
    description,
    selectedColor,
    otherColor1,
    dimension,
    selectedStyle,
    specificNeeds,
    plannedUsage,
    installationType,
    furnitureType,
    specificNeeds1,
    budget,
    discoveryChannel,
    otherChannel,
    additionalRemarks
  );

  const handleSelectedProjectChange = (value: string) => {
    setSelectedProject(value);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
      {currentStep === 0 && (
        <Step1 onSelectedProjectChange={handleSelectedProjectChange} />
      )}
      {currentStep === 1 && <Step2 selectedProject={selectedProject} />}
      {currentStep === 2 && <Step3 />}
      {currentStep === 3 && <Step4 />}
      <div className="flex max-w-screen-xl items-center justify-end">
        {currentStep > 0 && (
          <button
            onClick={handlePrev}
            className=" py-2 w-[25%] mx-2 text-center bg-transparent border border-solid border-blue-900 text-blue-900 rounded-[20px] hover:bg-blue-900 hover:text-white"
          >
            Retour
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button
            onClick={handleNext}
            className=" py-2 w-[25%] mx-2 text-center bg-transparent border border-solid border-blue-900 text-blue-900 rounded-[20px] hover:bg-blue-900 hover:text-white"
          >
            Suivant
          </button>
        )}
        {currentStep === steps.length - 1 && (
          <button className=" py-2 w-[25%] mx-2 text-center bg-transparent border border-solid border-blue-900 text-blue-900 rounded-[20px] hover:bg-blue-900 hover:text-white">
            Envoyer
          </button>
        )}
      </div>
    </div>
  );
}
