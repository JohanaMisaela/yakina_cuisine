import Image from "next/image";
import blueKitchen from "@/public/images/ci_6.webp";
import grayKitchen from "@/public/images/co_2.webp";
import whiteKitchen from "@/public/images/ci_1.webp";
export default function Features() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-blue-800">
              Osez l'élégance artisanale
            </h1>
            <p className="text-xl text-gray-600">
              Explorez une expérience culinaire unique en créant la cuisine qui
              vous ressemble. Chez Yakina, chaque détail est pensé pour
              transformer vos rêves culinaires en réalité. Découvrez notre
              expertise artisanale alliée à un design exceptionnel, et donnez
              vie à l'élégance dans votre espace de vie.
            </p>
            <div className="w-full flex items-center justify-between h-[80vh]">
              <div className="h-[60vh] w-1/3">
                <Image
                  src={grayKitchen}
                  alt="blue kitchen"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="h-[60vh] w-1/3">
                <Image
                  src={blueKitchen}
                  alt="blue kitchen"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="h-[60vh] w-1/3">
                <Image
                  src={whiteKitchen}
                  alt="blue kitchen"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-full flex items*center justify-center">
              <button className=" flex items-center transform -translate-y-1/2 border-2 border-blue-900 hover:bg-blue-900 rounded-full text-blue-900 hover:text-white font-medium group p-4 my-4 shadow-lg">
                <a href="/abour">
                  <span className="mx-3 flex ">
                    En savoir plus{" "}
                    <span>
                      <svg
                        className="w-6 h-6 ml-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
