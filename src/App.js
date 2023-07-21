import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/about"  element={<About />}/>
          <Route path="/projects"  element={<Projects />}/>
          <Route path="/contact"  element={<Contact />}/>
      </Routes>
     
    </div>
  );
}

export default App;
