"use client";
import { Badge, ConfigProvider, Input, Select, Space, Tag } from "antd";
import React, { useState } from "react";
import { DatabaseOutlined, SkinOutlined } from "@ant-design/icons";
import { FaKitchenSet } from "react-icons/fa6";
import { LuHammer } from "react-icons/lu";
import { PlusOutlined } from "@ant-design/icons";
import {
  MdOutlineCurtainsClosed,
  MdOutlineFiberNew,
  MdOutlineFactory,
} from "react-icons/md";
import { TbBath, TbAirConditioningDisabled } from "react-icons/tb";
interface Step1Props {
  onSelectedProjectChange: (value: string) => void;
}

const Step1: React.FC<Step1Props> = ({ onSelectedProjectChange }) => {
  const [selectedProject, setSelectedProject] = useState<string>("");

  const projectData = [
    { label: "Cuisine", value: "cuisine", icon: <FaKitchenSet /> },
    { label: "Placard", value: "placard", icon: <DatabaseOutlined /> },
    { label: "Armoire", value: "armoire", icon: <MdOutlineCurtainsClosed /> },
    {
      label: "Meuble de salle de bain",
      value: "douche",
      icon: <TbBath />,
    },
    { label: "Dressing", value: "dressing", icon: <SkinOutlined /> },
  ];
  const typeData = [
    { label: "Moderne", value: "moderne", icon: <MdOutlineFiberNew /> },
    {
      label: "Classique",
      value: "classique",
      icon: <TbAirConditioningDisabled />,
    },
    { label: "Industriel", value: "Industriel", icon: <MdOutlineFactory /> },
    { label: "Rustique", value: "rustique", icon: <LuHammer /> },
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
              Parlons de votre projet .
            </h2>
            <div className="text-gray-600 mt-8">
              N'hésitez pas à nous contacter pour discuter de votre projet et
              obtenir un devis gratuit.
              <br />
              Nous sommes à votre écoute pour répondre à toutes vos questions .
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
              <div key={item.value}>
                <Space>
                  <p className="text-gray-600 mr-2">{item.icon}</p>
                  <p className="text-gray-600 mx-4">{item.label}</p>
                </Space>
              </div>
            ))}
          </Select>
          <p className="text-gray-600 my-2">Quel est votre style préféré ?</p>
          <Select style={{ width: "100%" }}>
            {typeData.map((item) => (
              <div key={item.value}>
                <Space>
                  <p className="text-gray-600 mr-2">{item.icon}</p>
                  <p className="text-gray-600 mx-4">{item.label}</p>
                </Space>
              </div>
            ))}
          </Select>
          <p className="text-gray-600 my-2">Palette de couleurs</p>
          <Select style={{ width: "100%" }}>
            {colors.map((item) => (
              <div key={item.value.join("-")}>
                <Space>
                  {item.value.map((color) => (
                    <ConfigProvider
                      theme={{
                        components: {
                          Badge: {
                            dotSize: 10,
                          },
                        },
                      }}
                    >
                      <Badge color={color}></Badge>
                    </ConfigProvider>
                  ))}
                  <p className="text-gray-600 mx-4">{item.name.join(" ")}</p>
                </Space>
              </div>
            ))}
          </Select>
          <p className="text-gray-600 my-2">Autres couleurs </p>
          <Input
            placeholder="Bleu petrole , jaune moutarde"
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
          <p className="text-gray-600 my-2">Équipements spéciaux </p>
          <Input
            placeholder="Ilot central, type de plan de travail"
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
        </div>
      </ConfigProvider>
    </>
  );
};
export default Step1;
