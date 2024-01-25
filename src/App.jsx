import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Connexion from './Pages/Connexion'
import Dashboard from './Pages/Dashboard' 
import Notification from './Pages/Notification'
// import Profil from './Pages/Profil'
import Inscription from './Pages/Inscription' 
import Erreur from './Pages/Erreur'








export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Connexion />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Notification" element={<Notification />} />
          {/* <Route path="/Profil" element={<Profil />} /> */}
          <Route path="/Inscription" element={<Inscription />} />
          <Route path= "*" element={<Erreur />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
