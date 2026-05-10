import { Route, Routes } from "react-router-dom";

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PaketPage from './Pages/PaketPage';
import RentalPage from './Pages/RentalPage';
import GalleryPage from './Pages/GalleryPage';
import ContactPage from './Pages/ContactPage';

import NavbarComp from "./components/NavbarComp"
import FooterComp from "./components/FooterComp"

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="About" Component={AboutPage}/>
        <Route path="Paket" Component={PaketPage}/>
        <Route path="Rental" Component={RentalPage}/>
        <Route path="Gallery" Component={GalleryPage}/>
        <Route path="Contact" Component={ContactPage}/>
      </Routes>
      <FooterComp />
    </div>
  )
}

export default App
