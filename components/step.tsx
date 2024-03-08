import React from 'react'
import { FaTools ,FaCalendar ,FaLightbulb,FaCheck  } from "react-icons/fa";

export default function Step() {
  return (
    <>
        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-700">Comment ca marche ?</p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
                En seulement 5 étapes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            Transformez votre espace culinaire en un chef-d'œuvre personnalisé .
            </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-900 bg-white transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                    <FaCalendar  
                        style={{width:'24px', height:'24px', color:'#01587a'}}
                    />
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-normal text-gray-600 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Prise de rendez-vous
                    </h3>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                 <div
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-900 bg-white transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                    <FaLightbulb  
                        style={{width:'24px', height:'24px', color:'#01587a'}}
                    />
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-normal text-gray-600 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Conception 
                    </h3>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-900 bg-white transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                    <FaCheck   
                        style={{width:'24px', height:'24px', color:'#01587a'}}
                    />
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-nprmal text-gray-600 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Confirmation 
                    </h3>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <div
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-900 bg-white transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                    <FaTools 
                        style={{width:'24px', height:'24px', color:'#01587a'}}
                    />
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-normal text-gray-600 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Fabrication et pose
                    </h3>
                </div>
            </li>
            
        </ul>
    </div>
</section>
    </>
  )
}
