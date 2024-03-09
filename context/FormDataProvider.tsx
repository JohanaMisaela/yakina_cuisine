"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  ReactElement,
  useState,
} from "react";

interface FormData {
  selectedProject1: string;
  selectedType: string;
  selectedColors: string;
  otherColors: string;
  specialEquipment: string;
  selectedType1: string;
  selectedPlace: string;
  otherPlace: string;
  selectedDoorType: string;
  description: string;
  selectedColor: string;
  otherColor1: string;
  dimension: string;
  selectedStyle: string;
  specificNeeds: string;
  plannedUsage: string;
  installationType: string;
  furnitureType: string;
  specificNeeds1: string;
  budget: string;
  discoveryChannel: string;
  otherChannel: string;
  additionalRemarks: string;
  name: string;
  firstName: string;
  address: string;
  email: string;
  phone: string;
  bestContactTime: string;
  dateObject: string;
}

interface FormDataContextProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  const [formData, setFormData] = useState<FormData>({
    selectedProject1: "",
    selectedType: "",
    selectedColors: "",
    otherColors: "",
    specialEquipment: "",
    selectedType1: "",
    selectedPlace: "",
    otherPlace: "",
    selectedDoorType: "",
    description: "",
    selectedColor: "",
    otherColor1: "",
    dimension: "",
    selectedStyle: "",
    specificNeeds: "",
    plannedUsage: "",
    installationType: "",
    furnitureType: "",
    specificNeeds1: "",
    budget: "",
    discoveryChannel: "",
    otherChannel: "",
    additionalRemarks: "",
    name: "",
    firstName: "",
    address: "",
    email: "",
    phone: "",
    bestContactTime: "",
    dateObject: "",
  });

  const updateFormData = (data: Partial<FormData>): void => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = (): FormDataContextProps => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
