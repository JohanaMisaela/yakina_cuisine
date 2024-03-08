import Image from "next/image";
import React from "react";
import blueKitchen from "@/public/images/ci_6.webp";
export default function AboutUs() {
  return (
    <section className="relative">
      <div className="h-16"></div>
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-[80vh]">
          <Image
            className="h-full w-full object-cover"
            src={blueKitchen}
            alt="Winding mountain road"
          />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-blue-900 lg:text-4xl">
              Qui sommes-nous ?
            </h2>
            <p className="mt-4 text-gray-600 ">
              Notre métier est passionnant, et nous sommes ravis de vous faire
              part de notre savoir-faire et de vous aider à aménager votre
              intérieur. Conçus dans un style de design, nos meubles selon vos
              envies reflètent non seulement notre souci constant de confort et
              d'ergonomie, mais ils recèlent sous leur allure minimaliste des
              trésors de rangement.
              <br />À vous de déterminer les dimensions, nous nous chargeons de
              les réaliser.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block w-full text-center text-lg font-medium text-blue-900  border-solid border-2 border-blue-900 py-4 px-10 hover:text-white hover:bg-blue-900 hover:shadow-md md:w-56"
              >
                Contactez-nous{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
