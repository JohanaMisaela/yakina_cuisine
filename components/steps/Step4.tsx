"use client";
import { useFormData } from "@/context/FormDataProvider";
import { DatePicker, Input, Space } from "antd";
import React, { useState } from "react";

export default function Step4() {
  const { formData, updateFormData } = useFormData();

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ): void => {
    updateFormData({ [field]: value });
  };
  const [appointmentDateTime, setAppointmentDateTime] = useState();
  const handledatetime = (value: any) => {
    setAppointmentDateTime(value);
    const dateObject = appointmentDateTime
      ? (appointmentDateTime as any).$d
      : null;
    handleInputChange("dateObject", dateObject);
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="w-[80%]">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Informations de Contact
          </h2>
          <p className="text-gray-600 my-2">Nom</p>
          <Input
            onChange={(event) => {
              const value = event.target.value;
              handleInputChange("name", value);
            }}
            value={formData.name}
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
          <p className="text-gray-600 my-2">Prénom</p>
          <Input
            onChange={(event) => {
              const value = event.target.value;
              handleInputChange("firstName", value);
            }}
            value={formData.firstName}
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
          <p className="text-gray-600 my-2">Adresse complète</p>
          <Input
            onChange={(event) => {
              const value = event.target.value;
              handleInputChange("address", value);
            }}
            value={formData.address}
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="w-[80%]">
        <p className="text-gray-600 my-2">Email</p>
        <Input
          onChange={(event) => {
            const value = event.target.value;
            handleInputChange("email", value);
          }}
          value={formData.email}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 my-2">Numéro de téléphone</p>
        <Input
          onChange={(event) => {
            const value = event.target.value;
            handleInputChange("phone", value);
          }}
          value={formData.phone}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 mt-2">Meilleur moment pour être contacté</p>
        <p className="text-gray-600 text-xs italic mb-2">
          Pour améliorer notre service et vous assurer un suivi personnalisé,
          veuillez indiquer le meilleur moment pour vous contacter
        </p>
        <Input
          onChange={(event) => {
            const value = event.target.value;
            handleInputChange("bestContactTime", value);
          }}
          value={formData.bestContactTime}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 my-2">Date et heure du rendez-vous</p>
        <DatePicker
          value={appointmentDateTime}
          onChange={(value) => handledatetime(value)}
          showTime
          format="YYYY-MM-DD HH:mm"
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}
