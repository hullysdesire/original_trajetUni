import Navbar from "./Navbar";







export default function NewTrajet(){
    return(
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-medium leading-tight text-center font-bold mt-4 mb-10">Nouveau trajet</h2>
        {/* <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4  mb-6">
          <h6 className="text-xl font-medium leading-tight text-center align-middle text-white">Enregister un trajet</h6>
        </div> */}
        <form className="">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeTextDepart">
              Point de départ
            </label>
            <div className="form-outline">
              <input
                type="text"
                id="typeTextDepart"
                className="form-control border border-gray-300 rounded py-2 px-3 w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeTextArrivee">
              Point d`arrivé
            </label>
            <div className="form-outline">
              <input
                type="text"
                id="typeTextArrivee"
                className="form-control border border-gray-300 rounded py-2 px-3 w-full"
              />
            </div>
          </div>
          {/* <h6 className="text-xl font-medium leading-tight text-center mt-6 mt-8 text-white">Horaire</h6> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeTimeDepart">
              Heure de départ
            </label>
            <div className="form-outline">
              <input
                type="time"
                id="typeTimeDepart"
                className="form-control border border-gray-300 rounded py-2 px-3 w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exampleFormControlInputNumber">
              Nombre de places du véhicule
            </label>
            <div className="form-outline">
              <input
                type="number"
                id="exampleFormControlInputNumber"
                className="form-control border border-gray-300 rounded py-2 px-3 w-full"
              />
            </div>
          </div>
          {/* <h6 className="text-xl font-medium leading-tight text-center mt-6 mt-8 text-white">Informations Supplémentaires</h6> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exampleFormControlTextarea1">
              Informations supplémentaires
            </label>
            <div className="form-outline">
              <textarea
                id="exampleFormControlTextarea1"
                className="form-control border border-gray-300 rounded py-2 px-3 w-full"
                rows="4"
                placeholder="Informations supplémentaires tels que les précautions et les interdits!"
              ></textarea>
            </div>
          </div>
          <button
            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}
          >
            Valider
          </button>
        </form>
      </div>
    </div>
    </>
    )
}