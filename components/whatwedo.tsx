import Image from "next/image";
import placard from "@/public/images/pl_1.webp";
import dressing from "@/public/images/pl_3.webp";
import wardrobe from "@/public/images/pl_4.webp";
export default function WhatWeDo() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-blue-900">
              Découvrez aussi nos meubles de qualité
            </h2>
            <p className="text-xl text-gray-600">
              Au-delà des simples cuisines, nous redéfinissons l'art de vivre en
              repensant également vos placards, armoires et dressings.
              Transformez votre espace avec style et fonctionnalité, car chez
              nous, la créativité n'a pas de limites.{" "}
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative h-[70vh] flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image
                src={placard}
                alt="blue kitchen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="relative h-[70vh] flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image
                src={dressing}
                alt="blue kitchen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="relative h-[70vh] flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image
                src={wardrobe}
                alt="blue kitchen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
