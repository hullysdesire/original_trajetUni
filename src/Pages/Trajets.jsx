import Search from "../Components/Seach"



export default function Trajets(){
    return(
        <>
        
            <div className=" flex ">
                <a href="/Dashboard"><img src="src/assets/contour-du-bouton-circulaire-fleche-arriere-gauche.png" alt="Flèche retour" className="w-10 h-10 mt-5  flex-none ml-5" /></a>
                <h2 className="text-4xl font-medium leading-tight text-center font-bold mt-4 mb-10 text-center flex-auto">Mes trajets</h2>
            </div> 
            <Search/>

            <img src="src/assets/Free Vector _ Man standing by car with cityscape in background (1).jpg" alt="" className="m-auto" />
            <p className="m-auto mt-5 mb-5 text-center">Vous n'avez enregister aucun trajet</p>

            <div>
                <a href="/NewTrajet"><button
            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}
          >
            Créer un nouveau
          </button></a>
          </div>
        
        
        </>
    )
}