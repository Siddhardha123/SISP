
import './App.css';
import Navbar from './components/Navbar';
import {Route,Router} from 'react-router-dom'
import Home from './pages/Home';
import InternInfoCard from './components/InternInfoCard';
import InternshipInfo from './pages/InternshipInfo';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Home /> */}
       <InternshipInfo />


    </>
  );
}

export default App;
