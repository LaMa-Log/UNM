import { Outlet } from "react-router-dom";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fixé en haut */}
      <NavbarComponent />

      {/* Contenu principal */}
      <main className="flex-grow pt-20 pb-32">
        <Outlet /> {/* Ici s’affiche la page courante */}
      </main>

      {/* Footer fixé en bas */}
      <Footer />
    </div>
  );
}

export default Layout;
