"use client";
import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import { useFormData } from "@/context/FormDataProvider";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

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
    name,
    firstName,
    address,
    email,
    phone,
    bestContactTime,
    dateObject,
  } = formData;
  console.log(dateObject);

  const handleSelectedProjectChange = (value: string) => {
    setSelectedProject(value);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const Message: string = `
    Message venant de  ${name} ${firstName} 
    contact : ${phone} ${address}  ${email} 
    Meilleur moment pour etre contacté : ${bestContactTime} 
    Date et heure de rendez-vous : ${dateObject}

    LE PROJET :
    - espace souhaitez à aménager:    ${selectedProject1}  ${selectedType1}
    - de style : ${selectedType} ${selectedStyle} ${furnitureType}
    - couleur choisi : ${selectedColors} ${otherColors} 
    - informations supplementaire : ${specialEquipment}

    -utilisation prevue : ${plannedUsage}
    -emplacement : ${selectedPlace} ${otherPlace}
    -type de porte :${selectedDoorType} ${installationType}
    -description :${description} ${specificNeeds}
    -dimensions : ${dimension}

    -besoin specidfiques : ${specificNeeds1}
    -budget approximatif : ${budget}
    - Comment avez-vous entendu parler de nous ?
    ${discoveryChannel} ${otherChannel}
    -remarques ou specifications sur le projet : ${additionalRemarks}
  `;

  const sendEmail = (e: any) => {
    if (
      !name ||
      !firstName ||
      !address ||
      !email ||
      !phone ||
      !bestContactTime ||
      !selectedProject1 ||
      !selectedType ||
      !selectedColors ||
      !specificNeeds1 ||
      !budget ||
      !additionalRemarks
    ) {
      alert("Veuillez remplir tout les champs");
      window.history.pushState({}, "", "/contact");
    } else {
      e.preventDefault();

      emailjs
        .send(
          "service_ozzx9ui",
          "template_sshynzk",
          { message: Message },
          "w-44YdWir9gv4NeJ3"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Votre message a été bien envoyé");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
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
          <button
            onClick={sendEmail}
            className=" py-2 w-[25%] mx-2 text-center bg-transparent border border-solid border-blue-900 text-blue-900 rounded-[20px] hover:bg-blue-900 hover:text-white"
          >
            Envoyer
          </button>
        )}
      </div>
    </div>
  );
}
