"use client";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function CookiesBanner() {
  const cookies = new Cookies();
  const value = cookies.get("cookieAccepted");
  const [cookieAccepted, setCookieAccepted] = useState(value);

  if (cookieAccepted) {
    return null;
  }

  const handleAccept = () => {
    cookies.set("cookieAccepted", true);
    setCookieAccepted(true);
  };

  return (
    <div className="w-full h-[100px] flex items-center justify-center fixed bottom-0 bg-gray-300">
      <p className="text-black">
        Ce site utilise des cookies. En continuant à naviguer, vous acceptez
        notre utilisation des cookies.
      </p>
      <button
        onClick={handleAccept}
        className="m-4 px-8 py-2 rounded-[20px] bg-blue-900"
      >
        J'accepte
      </button>
      <button className="m-4 px-8 py-2 rounded-[20px] text-blue-900 border border-solid border-blue-900">
        <a href="/legal-notice">Politique de confidentialité</a>
      </button>
    </div>
  );
}
