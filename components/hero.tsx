import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl text-gray-400 font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            Transformez votre espace avec  
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-teal-400">
            {' '}élégance{' '}</span>et fonctionnalité
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mx-8 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  Des solutions sur mesure pour cuisines, dressings, placards, armoires et salles de bain
              </p>
              <div className="w-full flex items*center justify-center">
              <button className=" flex items-center transform -translate-y-1/2 border-2 border-blue-900 text-blue-900 hover:text-white hover:bg-blue-900 rounded-full font-medium group p-4 my-4 shadow-lg">
                  <a href="/contact">
                  <span className="mx-3 ">Démarrez votre projet</span>
                  </a>
              </button>
              </div>
            </div>
          </div>
          <ModalVideo/>
        </div>
      </div>
    </section>
  )
}