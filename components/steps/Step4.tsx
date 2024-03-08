import { DatePicker, Input, Space } from "antd";
import React, { useState } from "react";

export default function Step4() {
  // Définition des états pour chaque champ d'entrée
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bestContactTime, setBestContactTime] = useState("");
  const [appointmentDateTime, setAppointmentDateTime] = useState(null);

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="w-[80%]">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Informations de Contact
          </h2>
          <p className="text-gray-600 my-2">Nom</p>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
          <p className="text-gray-600 my-2">Prénom</p>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
          <p className="text-gray-600 my-2">Adresse complète</p>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="w-[80%]">
        <p className="text-gray-600 my-2">Email</p>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 my-2">Numéro de téléphone</p>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 mt-2">Meilleur moment pour être contacté</p>
        <p className="text-gray-600 text-xs italic mb-2">
          Pour améliorer notre service et vous assurer un suivi personnalisé, veuillez indiquer le meilleur moment pour vous contacter
        </p>
        <Input
          value={bestContactTime}
          onChange={(e) => setBestContactTime(e.target.value)}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 my-2">Date et heure du rendez-vous</p>
        <DatePicker
          value={appointmentDateTime}
          onChange={(value) => setAppointmentDateTime(value)}
          showTime
          format="YYYY-MM-DD HH:mm"
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}
