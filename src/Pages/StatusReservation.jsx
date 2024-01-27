import Search from "../Components/Seach"





export default function StatusReservation(){
    return(
        <>
         <div className=" flex ">
                <a href="/Dashboard"><img src="src/assets/contour-du-bouton-circulaire-fleche-arriere-gauche.png" alt="Flèche retour" className="w-10 h-10 mt-5  flex-none ml-5" /></a>
                <h2 className="text-4xl font-medium leading-tight text-center font-bold mt-4 mb-10 text-center flex-auto">Status Reservations</h2>
            </div> 

            <Search/>

            <p className="m-auto mt-5 mb-5 ">Vous n'avez aucun statut de reservation en cours </p>
        
        
        </>
    )
}