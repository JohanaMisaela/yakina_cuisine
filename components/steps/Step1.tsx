import React, { useState } from "react";
import { Badge, ConfigProvider, Input, Select, Space } from "antd";
import { DatabaseOutlined, SkinOutlined } from "@ant-design/icons";
import { FaKitchenSet } from "react-icons/fa6";
import { LuHammer } from "react-icons/lu";
import { MdOutlineCurtainsClosed, MdOutlineFiberNew, MdOutlineFactory } from "react-icons/md";
import { TbBath, TbAirConditioningDisabled } from "react-icons/tb";
import Image from "next/image";
import color1 from '@/public/images/color1.webp'
import color2 from '@/public/images/color2.webp'
interface Step1Props {
  onSelectedProjectChange: (value: string) => void;
}

const Step1: React.FC<Step1Props> = ({ onSelectedProjectChange , }) => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [otherColors, setOtherColors] = useState<string>("");
  const [specialEquipment, setSpecialEquipment] = useState<string>("");

  console.log([selectedProject, selectedType, selectedColors, otherColors, specialEquipment]);

  const projectData = [
    { label: "Cuisine", value: "cuisine", icon: <FaKitchenSet /> },
    { label: "Placard", value: "placard", icon: <DatabaseOutlined /> },
    { label: "Armoire", value: "armoire", icon: <MdOutlineCurtainsClosed /> },
    { label: "Meuble de salle de bain", value: "douche", icon: <TbBath /> },
    { label: "Dressing", value: "dressing", icon: <SkinOutlined /> },
  ];
  const typeData = [
    { label: "Moderne", value: "moderne", icon: <MdOutlineFiberNew /> },
    { label: "Classique", value: "classique", icon: <TbAirConditioningDisabled /> },
    { label: "Industriel", value: "Industriel", icon: <MdOutlineFactory /> },
    { label: "Rustique", value: "rustique", icon: <LuHammer /> },
  ];
  const colors = [
    { id:1, name: ["White", "Black", "Gray"], value:"White Black Gray",img:color1 },
    { id:2, name: ["Red", "Green", "Blue"], value:"Red Green Blue", img:color2 },
  ];

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            controlHeight: 40,
          },
        }}
      >
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Parlons de votre projet.
            </h2>
            <div className="text-gray-600 mt-8">
              N'hésitez pas à nous contacter pour discuter de votre projet et
              obtenir un devis gratuit.
              <br />
              Nous sommes à votre écoute pour répondre à toutes vos questions.
            </div>
          </div>
          <div className="mt-8 text-center"></div>
        </div>
        <div className="w-[80%]">
          <p className="text-gray-600 my-2">
            Quel espace souhaitez-vous aménager ?
          </p>
          <Select
            style={{ width: "100%" }}
            value={selectedProject}
            onChange={(value) => {
              setSelectedProject(value);
              onSelectedProjectChange(value);
            }}
          >
            {projectData.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                <Space>
                  <p className="text-gray-600 mr-2">{item.icon}</p>
                  <p className="text-gray-600 mx-4">{item.label}</p>
                </Space>
              </Select.Option>
            ))}
          </Select>
          <p className="text-gray-600 my-2">Quel est votre style préféré ?</p>
          <Select
            style={{ width: "100%" }}
            value={selectedType}
            onChange={(value) => setSelectedType(value)}
          >
            {typeData.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                <Space>
                  <p className="text-gray-600 mr-2">{item.icon}</p>
                  <p className="text-gray-600 mx-4">{item.label}</p>
                </Space>
              </Select.Option>
            ))}
          </Select>
          <p className="text-gray-600 my-2">Palette de couleurs</p>
          <Select
            style={{ width: "100%" }}
            value={selectedColors}
            onChange={(value) => setSelectedColors(value)}
          >
            {colors.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                <Space>
                   <Image className="" src={item.img} alt="" width={50} height={50}/>
                  
                  <p className="text-gray-600 mx-4">{item.name}</p>
                </Space>
              </Select.Option>
            ))}
          </Select>
       
          <p className="text-gray-600 my-2">Autres couleurs </p>
          <Input
            placeholder="Bleu petrole , jaune moutarde"
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
            value={otherColors}
            onChange={(e) => setOtherColors(e.target.value)}
          />
          <p className="text-gray-600 my-2">Équipements spéciaux </p>
          <Input
            placeholder="Ilot central, type de plan de travail"
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
            value={specialEquipment}
            onChange={(e) => setSpecialEquipment(e.target.value)}
          />
        </div>
      </ConfigProvider>
    </>
  );
};

export default Step1;
