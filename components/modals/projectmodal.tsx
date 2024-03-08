"use client";
import { Select, Space, Tag } from "antd";
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
  { name: "Red", value: "#ff0000" },
  { name: "Green", value: "#00ff00" },
  { name: "Blue", value: "#0000ff" },
];

export default function ProjectModal() {
  const [selectedColors, setSelectedColors] = useState([]);

  return (
    <>
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
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
          <Select style={{ width: "80%" }}>
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
          <Select style={{ width: "80%" }}>
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
          <Select
            mode="multiple"
            allowClear
            style={{ width: "80%" }}
            placeholder="Select colors"
            value={selectedColors}
            dropdownRender={(menu) => (
              <div>
                {menu}
                <div
                  style={{
                    padding: "8px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <PlusOutlined /> Add Color
                </div>
              </div>
            )}
          >
            {colors.map((color) => (
              <div key={color.value}>
                <div className="flex items-center">
                  <Tag
                    color={color.value}
                    className="mr-2"
                    style={{ border: "1px solid #ddd" }}
                  ></Tag>
                  {color.name}
                </div>
              </div>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
}
