import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./styles/main.css";
import Navbar from "./components/universalComponents/Navbar";
import Footer from "./components/universalComponents/Footer";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import MenuOverlay from "./components/mobile/MenuOverlay";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <Navbar openMenuHandler={openMenuHandler} />

      {isMenuOpen && <MenuOverlay closeMenuHandler={closeMenuHandler} />}

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
