
import './App.css';
import ViewAllHorses from './components/ViewAllHorses';
import ViewAllOwners from './components/ViewAllOwners';
import HorsesByOwner from './components/HorsesByOwner';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewOneHorse from './components/ViewOneHorse';


function App() {

  return (


    <Router>
      <Routes>
        <Route path="/" element={<ViewAllHorses />} />
        <Route path="/owners" element={<ViewAllOwners />} />
        <Route path="/owner/:id" element={<HorsesByOwner />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/horses/:id" element={<ViewOneHorse />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;
