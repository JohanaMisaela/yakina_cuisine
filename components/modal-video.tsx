"use client";

import react from "react";

export default function ModalVideo() {
  return (
    <div>
      <div>
        <div
          className="relative flex justify-center mb-8"
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <div className="w-full flex flex-col justify-center">
            <div className="w-full h-auto lg:h-[90vh] ">
              {/* <iframe
                height="100%"
                width="100%"
                src="https://embed.wave.video/cTnqPbsoeqId0k5v?autoplay=1&loop=1"
                allow="autoplay; fullscreen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></iframe> */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/bBPCcntxPZE?si=dgBpAopOGYQ42Izf"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></iframe>
            </div>
            <svg
              className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
              width="768"
              height="432"
              viewBox="0 0 768 432"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="hero-ill-a"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="99.24%"
                  id="hero-ill-b"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="48.57%" />
                  <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                </linearGradient>
                <radialGradient
                  cx="21.152%"
                  cy="86.063%"
                  fx="21.152%"
                  fy="86.063%"
                  r="79.941%"
                  id="hero-ill-e"
                >
                  <stop stopColor="#4FD1C5" offset="0%" />
                  <stop stopColor="#81E6D9" offset="25.871%" />
                  <stop stopColor="#338CF5" offset="100%" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-blue-900 rounded-full font-medium group p-4 shadow-lg">
            <a href="/achievement">
              <span className="mx-3 text-white">Découvrir nos cuisines</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
