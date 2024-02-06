










function InscriptionPass (){
    return (
      <div className=" " style={{ backgroundImage: 'linear-gradient(115deg, #ee7724, #d8363a, #dd3675, #b44593)' }}>
        {/* <div className="container w-96 h-1 "> */}
        <div className="flex flex-col lg:flex-row w-full bg-white  mx-auto shadow-lg "> 
            <div className="w-full lg:w-1/2  flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('src/assets/Green Simple Company Negative Space Car Logo.png')" }}>
              <h1 className="text-white text-3xl mb-3"></h1>
              {/* <div>
                <p className="text-white"> <a href="#" className="text-white-500 font-semibold"></a></p>
              </div> */}
            </div>
            <div className="w-full lg:w-1/2 py-14 px-1">
              <h1 className="text-3xl mb-4 text-center font-bold">Inscription Passager</h1>
              <p className="mb-4">
                
              </p>
              <form className="" action="#">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Nom" className="border border-gray-400 py-1 px-2" />
                  <input type="text" placeholder="Prenom" className="border border-gray-400 py-1 px-2" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input type="email" placeholder="E-mail" className="border border-gray-400 py-1 px-2" />
                  <input type="tel" placeholder="Tel" className="border border-gray-400 py-1 px-2" />
                </div>
                
                <div className="mt-5">
                  <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400" />
                  <span>
                    J'accepte les conditions  <a href="#" className="text-black-500 font-semibold">et termes d'utlisations</a> &amp; <a href="#" className="text-black-500 font-semibold">de vie privée</a>
                  </span>
                </div>
                <div className="mt-5">
                <a href=""><button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="button" data-te-ripple-init data-te-ripple-color="light" style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>Inscription</button></a>
                </div>
              </form>
            </div>
          </div>
        </div>
    //   </div>
    );
  };
  
  export default InscriptionPass;
  
    
  
  
  