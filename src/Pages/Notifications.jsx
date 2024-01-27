import PopopConfirm from "../Components/PopopConfirme";








export default function Notification(){
    return(
        <>
            <div className=" flex ">
                <a href="/Dashboard"><img src="src/assets/contour-du-bouton-circulaire-fleche-arriere-gauche.png" alt="Flèche retour" className="w-10 h-10 mt-5  flex-none ml-5" /></a>
                <h2 className="text-4xl font-medium leading-tight text-center font-bold mt-4 mb-10 text-center flex-auto">Notifications</h2>
            </div> 

           {/* Carte de notification  */}
            <div className="flex rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 gap-5">
                <div>
                    <img src="src/assets/grace.jpg" alt="" className="border-2 w-20 h-20  m-auto rounded-full mt-5" />
                </div>
                <div>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Grace Coriana vient de faire une réservation sur votre trajet . Veuillez s’il vous plait répondre !
                </p>
                <PopopConfirm/>
                </div>
                
            </div>
                
        
        
        </>
    )
}