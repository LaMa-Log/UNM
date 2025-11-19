import { motion } from "framer-motion";
import photo1 from "../../assets/UNM/photo1.jpeg";
import { useTranslation } from "react-i18next";
import Typewriter from "../head/typerwrite";


export default function SlideHome() {
  const { t } = useTranslation();

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div id="Home" className="flex flex-col md:flex-row justify-center w-full h-screen overflow-hidden bg-green-700">
      {/* --- Image --- */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden"
      >
        <img
          src={photo1}
          alt="Slide1"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
        />
      </motion.div>

      {/* --- Texte --- */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center  md:items-start px-6 md:px-20 my-6 md:my-20 gap-6 h-1/2 md:h-full text-white text-center md:text-left"
      >
        <div className="w-full mb-2 md:mb-10 ">
          <h1 className="text-6xl sm:text-7xl md:text-[5rem] xl:text-[7rem] mb-4 font-bold leading-none">
            <Typewriter texts={[t("accueil.txt1"), t("accueil.txt2"), t("accueil.txt3")]} />
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-xl md:ml-3 font-medium tracking-tight">
            {t("accueil.sousTitre")}
          </h2>
        </div>

        <p className=" text-base md:text-xl leading-relaxed max-w-lg">
          {t("accueil.description")}
        </p>

        <div className="w-full flex justify-center md:justify-end mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick("Quisommesnous")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
          >
            {t("accueil.bouton")}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
