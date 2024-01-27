

function InscriptionConducteur (){
  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #ee7724, #d8363a, #dd3675, #b44593)' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('src/assets/Green Simple Company Negative Space Car Logo.png')" }}>
            <h1 className="text-white text-3xl mb-3"></h1>
            <div>
              <p className="text-white"> <a href="#" className="text-white-500 font-semibold"></a></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h1 className="text-3xl mb-4">Inscription conducteur</h1>
            <p className="mb-4">
              
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Nom" className="border border-gray-400 py-1 px-2" />
                <input type="text" placeholder="Prenom" className="border border-gray-400 py-1 px-2" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <input type="email" placeholder="E-mail" className="border border-gray-400 py-1 px-2" />
                <input type="tel" placeholder="Tel" className="border border-gray-400 py-1 px-2" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Modèle de voiture" className="border border-gray-400 py-1 px-2" />
                <input type="text" placeholder="Type de voiture" className="border border-gray-400 py-1 px-2" />
              </div>
              <div className="mt-5">
              <label htmlFor="file-upload" className="block text-sm font-medium leading-6 text-gray-900">Permis conduite</label>
              <input type="file" id="file-upload" accept="image/*" className="border border-gray-400 py-1 px-2" />

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
              <a href="/Dashboard"><button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="button" data-te-ripple-init data-te-ripple-color="light" style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>Inscription</button></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionConducteur;

  






































// import { useState } from 'react';

// const InscriptionConducteur = () => {
//   const [nom, setNom] = useState('');
//   const [prenom, setPrenom] = useState('');
//   const [email, setEmail] = useState('');
//   const [numeroTelephone, setNumeroTelephone] = useState('');
//   const [modeleVoiture, setModeleVoiture] = useState('');
//   const [nombrePlaces, setNombrePlaces] = useState('');
//   const [photoPermis, setPhotoPermis] = useState(null);
//   const [photoVoiture, setPhotoVoiture] = useState(null);

//   const gestionUploadPhotoPermis = (e) => {
//     const fichier = e.target.files[0];
//     setPhotoPermis(fichier);
//   };

//   const gestionUploadPhotoVoiture = (e) => {
//     const fichier = e.target.files[0];
//     setPhotoVoiture(fichier);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Ajoutez ici la logique pour traiter les données, y compris les images
//     console.log({
//       nom,
//       prenom,
//       email,
//       numeroTelephone,
//       modeleVoiture,
//       nombrePlaces,
//       photoPermis,
//       photoVoiture,
//     });
//   };

//   return (
//     <div className="w-1/2 py-16 px-12">
//       <h2 className="text-3xl mb-4">Inscription conducteur</h2>
//       <p className="mb-4">Créer un compte en quelques minutes</p>
//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
//         <div>
//           <input
//             type="text"
//             placeholder="Nom"
//             className="border border-gray-400 py-1 px-2"
//             value={nom}
//             onChange={(e) => setNom(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Prenom"
//             className="border border-gray-400 py-1 px-2"
//             value={prenom}
//             onChange={(e) => setPrenom(e.target.value)}
//           />
//         </div>

//         <div className="mt-5">
//           <input
//             type="text"
//             placeholder="E-mail"
//             className="border border-gray-400 py-1 px-2"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mt-5">
//           <input
//             type="number"
//             placeholder="Numéro téléphone"
//             className="border border-gray-400 py-1 px-2"
//             value={numeroTelephone}
//             onChange={(e) => setNumeroTelephone(e.target.value)}
//           />
//         </div>

//         <div className="mt-5">
//           <input
//             type="text"
//             placeholder="Modèle de voiture"
//             className="border border-gray-400 py-1 px-2"
//             value={modeleVoiture}
//             onChange={(e) => setModeleVoiture(e.target.value)}
//           />
//         </div>

//         <div className="mt-5">
//           <input
//             type="number"
//             placeholder="Nombre de places du véhicule"
//             className="border border-gray-400 py-1 px-2"
//             value={nombrePlaces}
//             onChange={(e) => setNombrePlaces(e.target.value)}
//           />
//         </div>

//         <div className="mt-5">
//           <label htmlFor="photoPermis">Photo du Permis</label>
//           <input
//             type="file"
//             accept="image/*"
//             id="photoPermis"
//             onChange={gestionUploadPhotoPermis}
//           />
//         </div>

//         <div className="mt-5">
//           <label htmlFor="photoVoiture">Photo de la Voiture</label>
//           <input
//             type="file"
//             accept="image/*"
//             id="photoVoiture"
//             onChange={gestionUploadPhotoVoiture}
//           />
//         </div>

//         <div className="mt-5">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Inscription
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default InscriptionConducteur;
