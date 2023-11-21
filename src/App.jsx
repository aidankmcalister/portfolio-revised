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
    <div className="font-fira overflow-x-hidden">
      <Navbar openMenuHandler={openMenuHandler} />

      {isMenuOpen && <MenuOverlay closeMenuHandler={closeMenuHandler} />}

      <div className="mt-10 lg:mt-0"></div>
      <div className="min-h-screen w-full flex items-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <div className="mb-10 lg:mb-0"></div>

      <Footer />
    </div>
  );
}

export default App;
