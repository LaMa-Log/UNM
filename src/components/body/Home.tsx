import { useState, useEffect } from "react";
import SlideHome from "../home/slideHome";
import Gallery from "../home/Gallery";
import Commentaires from "../home/Localisation";
import QuiSommesNous from "./QuiSommesNous";
import Produits from "./Services";
import Services from "./Produits";
import Engangements from "./Engagements";
import NavbarItem from "../head/Navbar";
import Footer from "../head/Footer";
import LanguageSelector from "../head/traducteur";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile(); // Vérifie dès le chargement
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="overflow-hidden">
      <NavbarItem />
      <div className="w-full h-screen min-h-[500px] overflow-hidden">
        <SlideHome />
      </div>
      <QuiSommesNous />
      <Produits />
      <Services />
      <Engangements />
      <Gallery />
      <Commentaires />
      <Footer />

      {/* --- Sélecteur de langue flottant mobile --- */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <LanguageSelector />
        </div>
      )}
    </div>
  );
}
