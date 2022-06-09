import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home";
import InternshipInfo from "./pages/InternshipInfo";
function App() {
  return (
    <div className="main">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<InternshipInfo />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar/>
          <Home />
          <InternshipInfo /> */}
    </div>
  );
}

export default App;
