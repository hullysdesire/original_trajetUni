import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* Hamburger button for mobile view */}
        <button onClick={() => setIsOpen(!isOpen)} className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden">
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        {/* Collapsible navbar container */}
        <div className={`${isOpen ? 'Block' : 'hidden'} mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:flex lg:basis-auto`} id="navbarSupportedContent13">
        <a href="/Connexion"><button className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init data-te-ripple-color="light">
                Deconnexion
              </button></a>
          <div className="ml-2">
            <a className="text-xl text-neutral-800 dark:text-neutral-200" href="/Dashboard">Dashboard</a>
          </div>
          {/* Left links */}
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row">
            {/* Home link */}
            <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
              <a className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" aria-current="page" href="/Notifications">Notification</a>
            </li>
            {/* Link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">
              <a className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href="/Profil">Profil</a>
            </li>
          </ul>
          <div className=" flex flex w-[300px] lg:pr-2 gap-4">
            <div className="relative flex w-full flex-wrap items-stretch ">
              <input type="search" className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary" placeholder="Votre recherche" aria-label="Search" aria-describedby="button-addon3" />
              {/*Search button*/}
              <button className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 motion-reduce:transition-none" type="button" id="button-addon3">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
