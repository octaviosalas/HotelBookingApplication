
import ContinentsItems from './components/ContinentsItems';
import NavBar from './components/Navbar';
import Sections from './components/Sections';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
          <NavBar/>
          <Sections />
          <ContinentsItems />
       

    </div>
  );
}

export default App;
