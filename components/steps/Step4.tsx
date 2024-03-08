import { DatePicker, Input, Space } from "antd";
import React from "react";

export default function Step4() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="w-[80%]">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Informations de Contact
          </h2>
          <p className="text-gray-600 my-2">Nom</p>
          <Input
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
          <p className="text-gray-600 my-2">Prénom</p>
          <Input
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
          <p className="text-gray-600 my-2">Adresse complète</p>
          <Input
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="w-[80%]">
        <p className="text-gray-600 my-2">Email</p>
        <Input
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 my-2">Numéro de téléphone</p>
        <Input
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 mt-2">Meilleur moment pour être contacté</p>
        <p className="text-gray-600 text-xs italic mb-2">
          Pour améliorer notre service et vous assurer un suivi personnalisé,
          veuillez indiquer le meilleur moment pour vous contacter
        </p>
        <Input
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 my-2">Date et de l'heure du rendez-vous</p>
        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm"
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%", height: "6vh" }}
        />
      </div>
    </>
  );
}
