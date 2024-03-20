"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-full h-screen flex items-start justify-center">
            <ul className="w-full mx-2 py-2">
              <li className="mb-1">
                <a
                  className="block p-4 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/"
                >
                  accueil
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/about"
                >
                  A propos
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/achievement"
                >
                  Réalisations
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-8 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/achievement#cuisine"
                >
                  Cuisine
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-8 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/achievement#placard"
                >
                  Placard
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-8 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/achievement#vasque"
                >
                  Meuble de salle de bain
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-8 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/achievement#placard"
                >
                  Dressing
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-base font-lato text-gray-400 hover:bg-gradient-to-r from-blue-900 to-teal-400  hover:text-white rounded"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
