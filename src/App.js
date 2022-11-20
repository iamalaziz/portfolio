import "./App.scss";
import Particle from "./components/Particle";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import MobileMenu from "./components/Navbar/MobileMenu";


function App() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="App">
    
      <Navbar navbar={navbar} setNavbar={setNavbar} />
      {navbar === true ? (
        <MobileMenu navbar={navbar} setNavbar={setNavbar} />
      ) : (
        ""
      )}
      <Particle />
      <Home />
    </div>
  );
}

export default App;
