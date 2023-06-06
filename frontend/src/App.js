import './App.css';
import StructureItems from './components/StructureItems';
import AmericanHotels from './pages/AmericanHotels';
import Main from "./pages/Main"
import 'bootstrap/dist/css/bootstrap.min.css'; //importacion de bootstrap
import {Routes, Route} from "react-router-dom"
import SouthAmericaHotels from './pages/SouthAmericaHotels';
import EuropeHotels from './pages/EuropeHotels';
import AllWorldHotels from './pages/AllWorldHotels';

function App() {
  return (
    <div className="app">

     <Routes>
           <Route path='/' element={<Main />}></Route> 
           <Route path='/americanHotels' element={<AmericanHotels />}></Route> 
           <Route path='/southAmericaHotels' element={<SouthAmericaHotels />}></Route> 
           <Route path='/europeHotels' element={<EuropeHotels />}></Route> 
           <Route path='/allHotels' element={<AllWorldHotels />}></Route> 
      </Routes>
        
    </div>
  );
}

export default App;
