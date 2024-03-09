"use client";
import { useFormData } from "@/context/FormDataProvider";
import { Input, Radio, Space } from "antd";
import React, { useState } from "react";

export default function Step3() {
  const { formData, updateFormData } = useFormData();

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ): void => {
    updateFormData({ [field]: value });
  };
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="w-[80%]">
          <p className="text-gray-600 my-2">
            Avez-vous des besoins spécifiques ?
          </p>
          <textarea
            placeholder="Rangements, accessibilité, etc."
            onChange={(event) => {
              const value = event.target.value;
              handleInputChange("specificNeeds1", value);
            }}
            value={formData.specificNeeds1}
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%", height: "10vh" }}
          />
          <p className="text-gray-600 my-2">
            Quel est votre budget approximatif ?
          </p>
          <Radio.Group
            onChange={(event) => {
              const value = event.target.value;
              handleInputChange("budget", value);
            }}
            value={formData.budget}
          >
            <Space direction="vertical">
              <Radio value={"Moins de 10k€"}>Moins de 10k€ </Radio>
              <Radio value={"Entre 10k€ et 30k€ "}>Entre 10k€ et 30k€ </Radio>
              <Radio value={"Entre 30k€ et 60k€"}>Entre 30k€ et 60k€ </Radio>
              <Radio value={"Supérieur à 60k€"}>Supérieur à 60k€ </Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="w-[80%]">
        <p className="text-gray-600 my-2">
          Comment avez-vous entendu parler de nous ?
        </p>
        <Radio.Group
          onChange={(event) => {
            const value = event.target.value;
            handleInputChange("discoveryChannel", value);
          }}
          value={formData.discoveryChannel}
        >
          <Space direction="vertical">
            <Radio value={"Réseaux sociaux"}>Réseaux sociaux </Radio>
            <Radio value={"Bouche à oreille"}>Bouche à oreille</Radio>
            <Radio value={"Publicité"}>Publicité</Radio>
          </Space>
        </Radio.Group>
        <p className="text-gray-600 my-2">Autres</p>
        <Input
          onChange={(event) => {
            const value = event.target.value;
            handleInputChange("otherChannel", value);
          }}
          value={formData.otherChannel}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 my-2">
          Des remarques ou spécifications supplémentaires concernant votre
          projet ?
        </p>
        <Input
          onChange={(event) => {
            const value = event.target.value;
            handleInputChange("additionalRemarks", value);
          }}
          value={formData.additionalRemarks}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}
