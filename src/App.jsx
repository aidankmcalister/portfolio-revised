import { Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Navbar from "./components/universalComponents/Navbar";
import Footer from "./components/universalComponents/Footer";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import MenuOverlay from "./components/mobile/MenuOverlay";

function App() {
  return (
    <div>
      <Navbar />
      <MenuOverlay />
      <div className="mt-10"></div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <div className="mb-10"></div>

      <Footer />
    </div>
  );
}

export default App;
