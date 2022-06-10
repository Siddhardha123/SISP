import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as  Router,Route,Switch } from "react-router-dom";
import Home from "./pages/Home";
import InternshipInfo from "./pages/InternshipInfo";
import StudyMaterials from "./pages/StudyMaterials";
import Academics from "./pages/Academics";
import Profile from "./pages/Profile";
import Studentforum from "./pages/Studentforum";
function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Internshipinfo">
            <InternshipInfo />
          </Route>
          <Route path="/Studymaterials">
            <StudyMaterials />
          </Route>
          <Route path="/Academics">
            <Academics />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/studentforum">
            <Studentforum />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
