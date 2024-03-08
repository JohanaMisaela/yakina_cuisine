import { Input, Radio, Space } from "antd";
import React, { useState } from "react";

export default function Step3() {
  const [specificNeeds, setSpecificNeeds] = useState("");
  const [budget, setBudget] = useState(null); // Pour gérer la sélection du budget
  const [discoveryChannel, setDiscoveryChannel] = useState(null); // Pour gérer comment l'utilisateur a entendu parler de vous
  const [otherChannel, setOtherChannel] = useState(""); // Pour gérer la saisie du champ 'Autres'
  const [additionalRemarks, setAdditionalRemarks] = useState(""); // Pour gérer les remarques ou spécifications supplémentaires

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="w-[80%]">
          <p className="text-gray-600 my-2">
            Avez-vous des besoins spécifiques ?
          </p>
          <textarea
            placeholder="Rangements, accessibilité, etc."
            value={specificNeeds}
            onChange={(e) => setSpecificNeeds(e.target.value)}
            className="my-2 rounded-[5px] border-[#d9d9d9]"
            style={{ width: "100%", height: "10vh" }}
          />
          <p className="text-gray-600 my-2">
            Quel est votre budget approximatif ?
          </p>
          <Radio.Group onChange={(e) => setBudget(e.target.value)} value={budget}>
            <Space direction="vertical">
              <Radio value={1}>Moins de 10k€ </Radio>
              <Radio value={2}>Entre 10k€ et 30k€ </Radio>
              <Radio value={3}>Entre 30k€ et 60k€ </Radio>
              <Radio value={4}>Supérieur à 60k€ </Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="w-[80%]">
        <p className="text-gray-600 my-2">
          Comment avez-vous entendu parler de nous ?
        </p>
        <Radio.Group onChange={(e) => setDiscoveryChannel(e.target.value)} value={discoveryChannel}>
          <Space direction="vertical">
            <Radio value={1}>Réseaux sociaux </Radio>
            <Radio value={2}>Bouche à oreille</Radio>
            <Radio value={3}>Publicité</Radio>
          </Space>
        </Radio.Group>
        <p className="text-gray-600 my-2">Autres</p>
        <Input
          value={otherChannel}
          onChange={(e) => setOtherChannel(e.target.value)}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
        <p className="text-gray-600 my-2">
          Des remarques ou spécifications supplémentaires concernant votre projet ?
        </p>
        <Input
          value={additionalRemarks}
          onChange={(e) => setAdditionalRemarks(e.target.value)}
          className="my-2 rounded-[5px] border-[#d9d9d9]"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}
