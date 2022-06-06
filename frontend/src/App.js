
import './App.css';
import Navbar from './components/Navbar';
import {Route,Router} from 'react-router-dom'
import Home from './pages/Home';
function App() {
  return (
    // <Router>
    //     <Route path="/" exact={true}>
    //       <Navbar />
    //     </Route>
    //     <Route path="/Home" exact={true}>
    //       <Home />
    //     </Route>
    // </Router>
    <Home />
  );
}

export default App;
