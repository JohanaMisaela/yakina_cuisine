import React from 'react'

export default function Blog() {
  return (
    <section className='relative'>
        <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
            <h2 className="mb-16 text-center text-blue-900 text-2xl font-bold">Dernier articles</h2>

            <div className="mb-16 flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://www.sushi-room.fr/250-thickbox_default/wasabi.jpg" className="w-full" alt="Louvre" />
                <a href="#!">
                    <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </a>
                </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-2xl text-blue-900 font-bold">Le Wasabi</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
                </div>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                Published <u>14.01.2022</u> by
                <a href="#!">Lisa McCartney</a>
                </p>
                <p className="mb-6 text-gray-600">
                La cuisine japonaise, reconnue mondialement pour son raffinement et son équilibre, 
                puise ses origines dans une tradition millénaire. 
                Les deux piliers fondamentaux qui définissent cette cuisine exceptionnelle sont le respect de la 
                saisonnalité des ingrédients et la maîtrise des techniques de préparation. Les plats japonais, 
                qu'ils soient sushi, sashimi, tempura ou ramen, témoignent de l'harmonie entre les saveurs, les textures et les couleurs. La simplicité apparente des présentations cache une complexité subtile, où chaque élément est soigneusement choisi pour contribuer à l'ensemble du repas.
                </p>
                <p className="text-gray-600">
                Au cœur de la gastronomie japonaise se trouve le sushi, 
                une œuvre d'art culinaire qui marie parf"httaitement le riz vinaigré, le poisson cru et les légumes. 
                Le wasabi, le gingembre mariné et la sauce soja complètent cette symphonie gustative. Les chefs japonais, 
                héritiers d'une longue tradition, accordent une attention méticuleuse à la découpe du poisson et à la préparation du riz, 
                assurant une expérience gustative unique à chaque bouchée. 
                Cette délicatesse culinaire transcende les frontières, devenant une véritable ambassadrice de la culture japonaise.
                </p>
            </div>
            </div>

            <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
                <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://img.cuisineaz.com/1200x675/2019/08/06/i149723-.webp" className="w-full" alt="Louvre" />
                <a href="#!">
                    <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </a>
                </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
                <h3 className="mb-4 text-2xl font-bold text-blue-900">Sakés Japonais</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
                </div>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                Published <u>12.01.2022</u> by
                <a href="#!">Anna Doe</a>
                </p>
                <p className="text-gray-600">
                Le Japon, archipel aux saisons distinctes, voit sa cuisine évoluer au rythme du temps. 
                Le kaiseki, repas dégustation qui reflète les saisons à travers une succession de plats exquis, 
                incarne cette connexion profonde avec la nature. Chaque plat raconte une histoire, capturant l'essence même de l'instant.
                 Les sakés japonais, accompagnant ces festins, sont choisis avec précision pour compléter et sublimer les saveurs. 
                Ainsi, la cuisine japonaise transcende le simple acte de se nourrir pour devenir une expérience sensorielle et culturelle 
                inoubliable.
                </p>
            </div>
            </div>

            <div className="flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://jw-webmagazine.com/wp-content/uploads/2019/06/jw-5d147f27452fc5.35166026.jpeg" className="w-full" alt="Louvre" />
                <a href="#!">
                    <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </a>
                </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-2xl font-bold text-blue-900">Les izakayas</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-yellow-600">
                </div>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                Published <u>10.01.2022</u> by
                <a href="#!">Joe Svan</a>
                </p>
                <p className="text-gray-600">
                Les sushis, emblématiques de la cuisine japonaise, se transforment également au fil du temps. Les chefs introduisent des variations créatives, mêlant des saveurs inattendues et utilisant des ingrédients locaux pour donner une touche contemporaine aux classiques. Les ramens, autre pilier de la gastronomie japonaise, sont revisités avec des bouillons innovants et des garnitures audacieuses.

Parallèlement, les kaiseki, repas élaborés mettant en valeur la saisonnalité des ingrédients, évoluent pour refléter les tendances culinaires actuelles. La cuisine kaiseki moderne intègre des techniques de présentation artistiques et des associations de saveurs audacieuses, tout en respectant les principes de l'équilibre et de la simplicité.

Les desserts japonais ne sont pas en reste, avec l'incorporation de desserts occidentaux revisités à la japonaise. Des pâtisseries délicates, mettant en valeur des ingrédients japonais tels que le matcha et le yuzu, se mêlent à des techniques de pâtisserie européennes pour créer des créations uniques.

En somme, la cuisine japonaise, loin d'être figée dans la tradition, se réinvente constamment pour surprendre et ravir les palais du monde entier, offrant une expérience gustative à la croisée des chemins entre héritage culturel et innovation culinaire.
                </p>
            </div>
            </div>
        </section>
        </div>
    </section>
  )
}
