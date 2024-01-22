
import ViewAllHorses from './components/ViewAllHorses';
import ViewAllOwners from './components/ViewAllOwners';
import HorsesByOwner from './components/HorsesByOwner';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewOneHorse from './components/ViewOneHorse';
import Navigation from './components/Navigation';


function App() {

  return (


    <Router>
      <Navigation/>
      <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/horses" element={<ViewAllHorses />} />
        <Route path="/owners" element={<ViewAllOwners />} />
        <Route path="/owner/:id" element={<HorsesByOwner />} />
        <Route path="/horses/:id" element={<ViewOneHorse />} />
        <Route path="*" element={<NotFound />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;
