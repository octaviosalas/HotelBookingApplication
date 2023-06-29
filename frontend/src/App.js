import './App.css';
import * as React from 'react'
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
import { FilterProvider } from './store/filterscontext';
import FavouritesHotels from './pages/FavouritesHotels';
import TwentyToFifty from './pages/TwentyToFifty';
import FiftyToEighty from "./pages/FiftyToEighty"
import EightyToTwoHundred from './pages/EightyToTwoHundred';
import ThreeStars from './pages/ThreeStars';
import FourStarsHotels from './pages/FourStarsHotels';
import FiveStars from './pages/FiveStars';
import Reserves from './components/Reserves';
import NavBar from './components/Navbar';
import MyReserves from './components/MyReserves';
import FiltrosPrueba from './components/FiltrosPrueba';
import RecibimientoDeFiltro from './components/RecibimientoDeFiltro';












function App() {
  return (



    <div className="app">
  

      <UserProvider>
         <FilterProvider>
            <NavBar/>
              <Routes>
           <Route path='/' element={<Register />}></Route> 
           <Route path='/login' element={<Login />}></Route> 
           <Route path='/main/:id' element={<Main />}></Route> 
           <Route path='/americanHotels' element={<AmericanHotels />}></Route> 
           <Route path='/southAmericaHotels' element={<SouthAmericaHotels />}></Route> 
           <Route path='/europeHotels' element={<EuropeHotels />}></Route> 
           <Route path='/allHotels' element={<AllWorldHotels />}></Route> 
           <Route path='/hotelDetail/:id' element={<HotelDetail />}></Route> 
           <Route path='/favourites/:userId' element={<FavouritesHotels />}></Route> 
           <Route path='/twentyToFifty' element={<TwentyToFifty />}></Route> 
           <Route path='/fiftyToEighty' element={<FiftyToEighty />}></Route>
           <Route path='/eightyToTwoHundred' element={<EightyToTwoHundred />}></Route>
           <Route path='/threeStars' element={<ThreeStars />}></Route>
           <Route path='/fourStars' element={<FourStarsHotels />}></Route>
           <Route path='/fiveStars' element={<FiveStars />}></Route>
           <Route path='/reserves/:id' element={<Reserves />}></Route>
           <Route path='/myReserves/:userId' element={<MyReserves />}></Route>
         </Routes>
         <RecibimientoDeFiltro />
        </FilterProvider>
      </UserProvider>
 

        

    </div>
  );
}

export default App;
