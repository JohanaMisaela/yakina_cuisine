export const metadata = {
  title: "Nos cuisines - YAKINA",
  description: "Achievement page",
};

import BathRoomProduct from "@/components/bathroomproduct";
import OtherProduct from "@/components/otherproduct";
import OurKitchen from "@/components/ourkitchen";
import React from "react";

export default function Achievements() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32  md:pt-40 ">
          <div className="text-center ">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl  text-gray-600 mb-8">
                Inspirez-vous de nos réalisations exceptionnelles, ou créez
                votre propre chef-d'œuvre sur mesure en collaborant avec notre
                équipe passionnée. Votre vision, notre expertise, une réalité
                magnifique à créer ensemble.
              </p>
              <div className="w-full flex items*center justify-center">
                <button className=" flex items-center transform -translate-y-1/2 border-2 border-blue-900 text-blue-900 hover:text-white hover:bg-blue-900 rounded-full font-medium group p-4 my-4 shadow-lg">
                  <span className="mx-3 ">Parlons de votre projet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurKitchen />
      <div id="placard" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className=" ">
          <div className="text-center ">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl  text-gray-600 mb-8">
                Au-delà des cuisines, nous redéfinissons l'art de vivre en
                repensant également vos placards, armoires et dressings.
                Transformez votre espace avec style et fonctionnalité, car chez
                nous, la créativité n'a pas de limites.
              </p>
              <div className="w-full flex items*center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
      <OtherProduct />
      <div id="vasque" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className=" ">
          <div className="text-center ">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl  text-gray-600 mb-8">
                Explorez notre gamme diversifiée de nos meubles de salle de
                bain. De la cuisine à la salle de bain, découvrez des designs
                exceptionnels pour chaque espace de votre maison.
              </p>
              <div className="w-full flex items*center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
      <BathRoomProduct />
    </>
  );
}
