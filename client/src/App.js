
import ViewAllHorses from './components/ViewAllHorses';
import ViewAllOwners from './components/ViewAllOwners';
import HorsesByOwner from './components/HorsesByOwner';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewOneHorse from './components/ViewOneHorse';
import Navigation from './components/Navigation';
import ViewAllLocations from './components/ViewAllLocations';
import HorsesByLocation from './components/HorsesByLocation';
import AddHorseForm from './components/AddAHorse';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AddOwnerForm from './components/addAOwner';


function App() {

  return (


    <Router>
      <div className='web-page'>
      <Navigation/>
      <div className='page-content'>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/horses" element={<ViewAllHorses />} />
        <Route path="/owners" element={<ViewAllOwners />} />
        <Route path="/locations" element={<ViewAllLocations />} />
        <Route path="/add" element={<AddHorseForm />} />
        <Route path="/location/:id" element={<HorsesByLocation />} />
        <Route path="/owner/:id" element={<HorsesByOwner />} />
        <Route path="/horses/:id" element={<ViewOneHorse />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/addOwner" element={<AddOwnerForm />} />
        {/* ... other routes */}
      </Routes>
      </div>
     <Footer/>
     </div>
    </Router>
  );
}

export default App;
