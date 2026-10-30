import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import FaceAntispoof from "./pages/FaceAntispoof";
import TomatoLeafDiseaseDetection from "./pages/TomatoLeafDiseaseDetection";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/face-antispoof" element={<FaceAntispoof/> }/>
        <Route path="/disease" element={<TomatoLeafDiseaseDetection/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<Contact />} /> 
      </Route>
    </Routes>
  );
}

export default App;
