





export default function Profil(){
    return(
        <div>
            <div className=" flex ">
                <a href="/Dashboard"><img src="src/assets/contour-du-bouton-circulaire-fleche-arriere-gauche.png" alt="Flèche retour" className="w-10 h-10 mt-5  flex-none ml-5" /></a>
                <h2 className="text-4xl font-medium leading-tight text-center font-bold mt-4 mb-10 text-center flex-auto">Mon Profil</h2>
                <button className="mt-5 mr-5 h-10 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init data-te-ripple-color="light">Modifier</button>
            </div>

            <div>
                <form action="" className="border border-rounded-lg-black">
                    <div className="m-auto">
                        <img src="src/assets/benjimawax.jpg" alt="Photo de profil" className="border-2 w-20 h-20  m-auto rounded-full mt-5"/>
                        <img src="src/assets/bouton-modifier.png" alt="Modifier" className="w-6 m-auto "/>
                    
                    </div>

                    <div className="mb-4">
                        <label htmlFor="block text-gray-700 text-sm font-bold mb-2"> Nom </label>
                        <input type="Name"placeholder="Benji" id="formName"className="form-control border border-gray-300 rounded py-2 px-3 w-full " />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="block text-gray-700 text-sm font-bold mb-2">Prenom</label>
                        <input type="Name"placeholder="Mawax" id="formPrenom"className="form-control border border-gray-300 rounded py-2 px-3 w-full "/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="block text-gray-700 text-sm font-bold mb-2"> Email</label>
                        <input type="email"placeholder="benjimawax04@gmail.com" id="formemail"className="form-control border border-gray-300 rounded py-2 px-3 w-full "/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="block text-gray-700 text-sm font-bold mb-2"> Nombre de place</label> <span FontAwesomeIcon icon="fa-solid fa-pencil" />
                        <input type="number"placeholder="Combien de places disponible dans votre voiture" id="formplace"className="form-control border border-gray-300 rounded py-2 px-3 w-full " />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="block text-gray-700 text-sm font-bold mb-2"> Numéro téléphone</label>
                        <input type="tel"placeholder="Entrer votre numéro de téléphone" id="formnum"className="form-control border border-gray-300 rounded py-2 px-3 w-full "/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="block text-gray-700 text-sm font-bold mb-2"> Modèle de voiture</label>
                        <input type="number"placeholder="Combien de places disponible dans votre voiture" id="formemail"className="form-control border border-gray-300 rounded py-2 px-3 w-full "/>
                    </div>
                </form>

                

                
                
                
                
                
            </div>


        </div>
    )
}