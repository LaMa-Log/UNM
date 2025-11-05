import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./traducteur";

interface NavItemProps {
  text: string;
  onClick: () => void;
}

function NavItem({ text, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-3 cursor-pointer hover:text-green-500 transition-colors"
    >
      {text}
    </button>
  );
}

interface NavLink {
  text: string;
  id: string;
}

export default function NavbarItem() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- Récupération des libellés depuis i18n ---
  const rawNav = t("navbar.liens", { returnObjects: true }) as { texte: string }[];
  const navIds = [
    "Home",
    "Quisommesnous",
    "Services",
    "Produits",
    "Engagements",
    "Galleries",
    "Contacts",
  ];

  const navItems: NavLink[] = rawNav.map((r, i) => ({
    text: r.texte,
    id: navIds[i] || `section-${i}`,
  }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Détection de la taille de l’écran ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile(); // Exécute au chargement
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-green-700 text-white shadow-lg" : "bg-white text-green-700"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6 sm:px-10">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="Logo" className="w-20 h-10 object-contain rounded-md" />
        </div>

        {/* --- Mode Mobile --- */}
        {isMobile ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none bg-green-700 text-white p-2 rounded-md"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </>
        ) : (
          /* --- Mode Desktop --- */
          <>
            <nav className="flex flex-1 justify-center gap-4 text-base font-bold">
              {navItems.map((item) => (
                <NavItem key={item.id} text={item.text} onClick={() => handleClick(item.id)} />
              ))}
            </nav>

            <LanguageSelector />
          </>
        )}
      </div>

      {/* --- Menu Mobile déroulant --- */}
      {isMobile && isOpen && (
        <nav className="bg-white text-green-700 shadow-md px-6 pb-4 font-bold animate-fadeIn">
          <div className="flex flex-col gap-4 pt-4 mt-2">
            {navItems.map((item) => (
              <NavItem key={item.id} text={item.text} onClick={() => handleClick(item.id)} />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
