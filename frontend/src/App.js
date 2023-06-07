import './App.css';
import AmericanHotels from './pages/AmericanHotels';
import Main from "./pages/Main"
import 'bootstrap/dist/css/bootstrap.min.css'; //importacion de bootstrap
import {Routes, Route} from "react-router-dom"
import SouthAmericaHotels from './pages/SouthAmericaHotels';
import EuropeHotels from './pages/EuropeHotels';
import AllWorldHotels from './pages/AllWorldHotels';
import HotelDetail from './pages/HotelDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import { UserProvider } from './store/usercontext';



function App() {
  return (

  
       


    <div className="app">

      <UserProvider>


         <Routes>
           <Route path='/' element={<Register />}></Route> 
           <Route path='/login' element={<Login />}></Route> 
           <Route path='/main/:id' element={<Main />}></Route> 
           <Route path='/americanHotels' element={<AmericanHotels />}></Route> 
           <Route path='/southAmericaHotels' element={<SouthAmericaHotels />}></Route> 
           <Route path='/europeHotels' element={<EuropeHotels />}></Route> 
           <Route path='/allHotels' element={<AllWorldHotels />}></Route> 
           <Route path='/hotelDetail/:id' element={<HotelDetail />}></Route> 
         </Routes>

      </UserProvider>

    
        

    </div>
  );
}

export default App;
