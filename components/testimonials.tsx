"use client";
import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { Testimonies } from "@/data/TestimoniesData";
export default function Testimonials() {
  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPreviousDesktop: HTMLElement | null =
      document.getElementById("keen-slider-previous-desktop");
    const keenSliderNextDesktop: HTMLElement | null = document.getElementById(
      "keen-slider-next-desktop"
    );

    if (keenSliderPreviousDesktop) {
      keenSliderPreviousDesktop.addEventListener("click", () =>
        keenSlider.prev()
      );
    }
    if (keenSliderNextDesktop) {
      keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());
    }

    const keenSliderPrevious: HTMLElement | null = document.getElementById(
      "keen-slider-previous"
    );
    const keenSliderNext: HTMLElement | null =
      document.getElementById("keen-slider-next");

    if (keenSliderPrevious) {
      keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    }

    if (keenSliderNext) {
      keenSliderNext.addEventListener("click", () => keenSlider.next());
    }
  }, []);

  return (
    <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-3xl text-lato text-blue-900 font-bold tracking-tight  sm:text-4xl">
            AVIS CLIENTS
          </h2>
          <p className="mt-4  text-gray-600">
            Préparez-vous à être transportés au cœur de vies extraordinaires.
            Laissez-vous emporter par la puissance des témoignages qui révèlent
            la véritable essence de l'expérience humaine.
          </p>

          <div className="hidden lg:mt-8 lg:flex lg:gap-4">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous-desktop"
              className="rounded-full border text-blue-900 border-blue-900 p-3 transition hover:bg-blue-900  hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next-desktop"
              className="rounded-full border text-blue-900 border-blue-900 p-3 transition hover:bg-blue-900  hover:text-white"
            >
              <svg
                className="w-8 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="-mx-6 lg:col-span-2 lg:mx-0">
          <div id="keen-slider" className="keen-slider">
            {Testimonies.map((data) => (
              <div className="keen-slider__slide" key={data.id}>
                <blockquote className="flex h-full flex-col justify-between bg-gray-100 p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 ">
                      <svg
                        className="h-6 w-6"
                        fill="#FFBF00"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-6 w-6"
                        fill="#FFBF00"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-6 w-6"
                        fill="#FFBF00"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="mt-4">
                      <p className="mt-4 leading-relaxed text-gray-600">
                        {data.testimony}
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-600 sm:mt-6">
                    &mdash; {data.name}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4 lg:hidden">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          className="rounded-full border text-blue-900 border-blue-900 p-3 transition hover:bg-blue-900  hover:text-white"
        >
          <svg
            className="w-8 -rotate-180 transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="rounded-full border text-blue-900 border-blue-900 p-3 transition hover:bg-blue-900  hover:text-white"
        >
          <svg
            className="w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
