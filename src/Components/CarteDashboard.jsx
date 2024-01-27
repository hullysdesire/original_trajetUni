// import React from 'react';

// import React from 'react';

const CarteDashboard = () => {
  return (
    <div>
      {/* Première carte */}
      <div className="flex items-center justify-between border rounded p-2 mt-10  ">
        <div className="icone border border-black rounded p-1 mr-2">
          <a href="/NewTrajet"><img src="src/assets/projet.png" alt="" className="w-6 h-6" /></a>
        </div>
        <div className="card-body">Créer un nouveau trajet</div>
        <div className="icone border border-black rounded p-1 ml-2">
          <a href="/Newtrajet"><img src="src/assets/fleche-pointant-vers-la-droite.png" alt="" className="w-6 h-6" /></a>
        </div>
      </div>

      {/* Deuxième carte */}
      <div className="flex items-center justify-between border rounded p-2 mb-4 mt-6">
        <div className="icone border border-black rounded p-1 mr-2">
          <a href=""><img src="src/assets/reservation.png" alt="" className="w-6 h-6" /></a>
        </div>
        <div className="card-body">Vos Trajets</div>
        <div className="icone border border-black rounded p-1 ml-2">
          <a href=""><img src="src/assets/fleche-pointant-vers-la-droite.png" alt="" className="w-6 h-6" /></a>
        </div>
      </div>

   
    </div>
  );
};
export default CarteDashboard;


