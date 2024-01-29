// import React from "react";
// import NewTrajet from "../Components/NewTrajet";


export default function Atterissage () {
    return (
      <div>
  
  
        {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
          <div className="container w-auto mx-auto">
            <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 w-plein">
              <div className="">
                <div className=" w-auto w-screen block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                  <div className="g-0 lg:flex lg:flex-wrap">
                    {/* Left column container*/}
                    <div className="px-4 md:px-0 lg: ">
                      <div className="md:mx-6 md:p-12">
                        {/*Logo*/}
                        <div className="text-center">
                          <img className="mx-auto w-48" src="src/assets/Green Simple Company Negative Space Car Logo.png" alt="logo" />
                          <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Quel profil vous intéresse?
                          </h4>
                        </div>
  
                        
  
                          {/*Submit button*/}
                          <div className="mb-12 pb-1 pt-1 text-center">
                          <a href="/Connexion"><button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="button" data-te-ripple-init data-te-ripple-color="light" style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}> Conducteur </button></a>
                            
                            <a href="/Passager"><button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="button" data-te-ripple-init data-te-ripple-color="light" style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}> Inscription </button></a>
                            
                          </div>

                      </div>
                    </div>
  
                    {/* Right column container with background and description */}
                    <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none" style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>
                      <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                        <h4 className=" m-auto mb-6 text-xl font-semibold">
                          Veuillez faire le choix qui vous convient le mieux
                        </h4>
                        <p className="text-sm m-auto">
                         TrajetUni est la plateforme Gabonaise qui vous permet d'aider des personnes qui souhaite se deplacer sur le même trajet que vous !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  
  