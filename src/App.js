import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home';
import { About } from './About';
import { Featured } from './Featured';

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Featured/>
    </>
  );
}

export default App;
