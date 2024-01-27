import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Connexion from './Pages/Connexion'
import Dashboard from './Pages/Dashboard' 
import Notifications from './Pages/Notifications'
import Profil from './Pages/Profil'
import Inscription from './Pages/Inscription' 
import Erreur from './Pages/Erreur'
import NewTrajet from './Components/NewTrajet'
import Trajets from './Pages/Trajets'
import StatusReservation from './Pages/StatusReservation'






export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Connexion />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/NewTrajet" element={<NewTrajet />} />
          <Route path= "/Trajets"   element={<Trajets/>} />
          <Route path= "/StatusReservation"   element={<StatusReservation/>} />

         
          <Route path= "*" element={<Erreur />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
