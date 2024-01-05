import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import EventCard from './Components/EventCard/EventCard';


function App() {
  return (
    
     <div className='App'>
<BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/eventCards/:id' element={<EventCard></EventCard>}></Route>
      </Routes>
      </BrowserRouter>
    
     </div>
    
    
  );
};


export default App;
