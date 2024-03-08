'use client'
import {useState} from "react";
import co_1 from "@/public/images/co_1.jpg";
import pl_3 from "@/public/images/pl_3.jpg";
import pl_5 from "@/public/images/pl_5.jpg";
import mv_7 from "@/public/images/mv_7.jpg";
import Image from "next/image";
import { Badge, ConfigProvider, Input, Select, Space } from "antd";

interface Step2Props {
  selectedProject: string;
}
const typeData = [
  {
    label: "Renouvellement de cuisine existante ",
    value: "Renouvellement de cuisine existante ",
  },
  {
    label: "Conception pour une nouvelle construction  ",
    value: "Conception pour une nouvelle construction ",
  },
];
const placeData = [
  { label: "Cuisine", value: "cuisine" },
  { label: "Chambre ", value: "chambre" },
  { label: "Couloir", value: "couloir" },
];
const doorData = [
  { label: "Coullisante", value: "coullisante" },
  { label: "Battante", value: "battante" },
  { label: "Sans porte", value: "sansPorte" },
];
const doorData1 = [
  { label: "Coullisante", value: "coullisante" },
  { label: "Battante", value: "battante" },
];
const colors = [
  {
    name: ["White", "Black", "Gray"],
    value: ["#ffffff", "#000000", "#808080"],
  },
  {
    name: ["Red", "Green", "Blue"],
    value: ["#ff0000", "#00ff00", "#0000ff"],
  },
];
const usageData = [
  { label: "Vêtements ", value: "vêtements " },
  { label: "Usages divers ", value: "usagesDivers" },
];
const styleData = [
  { label: "Moderne", value: "moderne" },
  { label: "Vintage", value: "vintage" },
  { label: "Classique", value: "classique" },
];
const modeleData = [
  { label: " Dressing ouvert ", value: " Dressing ouvert " },
  {
    label: "Dressing fermé (avec portes) ",
    value: "Dressing fermé (avec portes) ",
  },
];
const style2Data = [
  { label: "Moderne", value: "moderne" },
  { label: "Classique", value: "classique" },
  { label: "Minimaliste", value: "minimaliste" },
];
const type2Data = [
  { label: "Vasque", value: "vasque" },
  { label: "Rangement", value: "rangement" },
];
const style3Data = [
  { label: "Moderne", value: "moderne" },
  { label: "Classique", value: "classique" },
  { label: "Zen/Nature", value: "zen/nature" },
];



const Step2: React.FC<Step2Props> = ({ selectedProject }) => {
  const [selectedType, setSelectedType] = useState(""); // Pour "Type de Projet"
  const [selectedPlace, setSelectedPlace] = useState(""); // Pour "Emplacement" dans le cas de "placard"
  const [otherPlace, setOtherPlace] = useState(""); // Pour "Autres emplacement" si nécessaire
  const [selectedDoorType, setSelectedDoorType] = useState(""); // Pour "Type de porte"
  const [description, setDescription] = useState(""); // Pour "Description"
  const [selectedColor, setSelectedColor] = useState([]); // Pour "Couleurs des matériaux", pourrait être un array si multiselect
  const [otherColor, setOtherColor] = useState(""); // Pour "Autres couleurs"
  const [dimension, setDimension] = useState(""); // Pour "Dimensions"
  const [selectedStyle, setSelectedStyle] = useState(""); // Pour "Style"
  const [specificNeeds, setSpecificNeeds] = useState(""); // Pour "Besoins spécifiques"
  const [plannedUsage, setPlannedUsage] = useState(""); // Pour "Utilisation prévue" dans le cas d'"armoire"
  const [installationType, setInstallationType] = useState(""); // Pour "Type d'installation" dans le cas de "dressing"
  const [furnitureType, setFurnitureType] = useState(""); //
  

  
  
  console.log('step2:'+selectedType,selectedDoorType,selectedStyle,selectedPlace,otherPlace, specificNeeds ,description,plannedUsage,installationType,furnitureType,dimension);
  


  const renderProjectContent = () => {
    switch (selectedProject) {
      case "cuisine":
        return (
          <>
            <div className="flex flex-col justify-between">
              <div className="h-[60vh]">
                <Image
                  src={co_1}
                  alt="Cuisine"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-[80%]">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Parlons de votre projet de cuisine
              </h2>
              <p className="text-gray-600 my-2">Type de Projet</p>
              <Select onChange={value => setSelectedType(value)} style={{ width: "100%" }}>
                {typeData.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
            </div>
          </>
        );
      case "placard":
        return (
          <>
            <div className="flex flex-col justify-between">
              <div className="h-[60vh]">
                <Image
                  src={pl_3}
                  alt="placard"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-[80%]">
              <p className="text-gray-600 my-2">Emplacement</p>
              <Select onChange={value => setSelectedPlace(value)} style={{ width: "100%" }}>
                {placeData.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Autres emplacement</p>
              <Input
                placeholder="À préciser si autres"
                onChange={e => setOtherPlace(e.target.value)}
                style={{ width: "100%" }}
              />
              <p className="text-gray-600 my-2">Type de porte</p>
              <Select onChange={value => setSelectedDoorType(value)} style={{ width: "100%" }}>
                {doorData.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Description</p>
              <textarea
                placeholder="Description du type de rangement souhaité"
                onChange={e => setDescription(e.target.value)}
                style={{ width: "100%", height: "10vh" }}
              />
            </div>
          </>
        );
      case "armoire":
        return (
          <>
            <div className="flex flex-col justify-between">
              <div className="h-[60vh]">
                <Image
                  src={pl_5}
                  alt="armoire"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-[80%]">
              <p className="text-gray-600 my-2">Utilisation prévue</p>
              <Select onChange={value => setPlannedUsage(value)} style={{ width: "100%" }}>
                {usageData.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Dimensions</p>
              <Input
                placeholder="Dimension de votre armoire"
                onChange={e => setDimension(e.target.value)}
                style={{ width: "100%" }}
              />
              <p className="text-gray-600 my-2">Style</p>
              <Select onChange={value => setSelectedStyle(value)} style={{ width: "100%" }}>
                {styleData.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Type de porte</p>
              <Select onChange={value => setSelectedDoorType(value)} style={{ width: "100%" }}>
                {doorData1.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Aménagements internes</p>
              <textarea
                placeholder="Description détaillée des besoins spécifiques"
                onChange={e => setSpecificNeeds(e.target.value)}
                style={{ width: "100%", height: "10vh" }}
              />
            </div>
          </>
        );
      case "dressing":
        return (
          <>
            <div className="flex flex-col justify-between">
              <div className="h-[60vh]">
                <Image
                  src={pl_5}
                  alt="dressing"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-[80%]">
              <p className="text-gray-600 my-2">Type d'installation</p>
              <Select onChange={value => setInstallationType(value)} style={{ width: "100%" }}>
                {modeleData.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Dimensions</p>
              <Input
                placeholder="Dimension de votre dressing"
                onChange={e => setDimension(e.target.value)}
                style={{ width: "100%" }}
              />
              <p className="text-gray-600 my-2">Style</p>
              <Select onChange={value => setSelectedStyle(value)} style={{ width: "100%" }}>
                {style2Data.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Aménagements internes</p>
              <textarea
                placeholder="Description détaillée des besoins spécifiques"
                onChange={e => setSpecificNeeds(e.target.value)}
                style={{ width: "100%", height: "10vh" }}
              />
            </div>
          </>
        );
      case "douche":
        return (
          <>
            <div className="flex flex-col justify-between">
              <div className="h-[60vh]">
                <Image
                  src={mv_7}
                  alt="douche"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-[80%]">
              <p className="text-gray-600 my-2">Type de meuble</p>
              <Select onChange={value => setFurnitureType(value)} style={{ width: "100%" }}>
                {type2Data.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Dimensions</p>
              <Input
                placeholder="Dimensions"
                onChange={e => setDimension(e.target.value)}
                style={{ width: "100%" }}
              />
              <p className="text-gray-600 my-2">Style</p>
              <Select onChange={value => setSelectedStyle(value)} style={{ width: "100%" }}>
                {style3Data.map(item => (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                ))}
              </Select>
              <p className="text-gray-600 my-2">Besoins spécifiques</p>
              <textarea
                placeholder="Nombre de tiroirs, espaces ouverts, etc."
                onChange={e => setSpecificNeeds(e.target.value)}
                style={{ width: "100%", height: "10vh" }}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            controlHeight: 40,
          },
        }}
      >
        {renderProjectContent()}
      </ConfigProvider>
    </>
  );
};
export default Step2;
