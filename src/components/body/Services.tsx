import { motion } from "framer-motion";
import Preparations from "../home/ServicesPreparation";
import sec from "../../assets/UNM/sec.jpeg";
import gousse from "../../assets/UNM/gousse.jpeg";
import boite from "../../assets/UNM/boite.jpeg";
import poudre from "../../assets/UNM/poudre.jpeg";
import { useTranslation } from "react-i18next";

export default function ProductFeatures() {
  const { t } = useTranslation();

  // Récupérer les étapes depuis le fichier de traduction
  const features = t("services.etapes", { returnObjects: true }) as Array<{
    titre: string;
    texte: string;
  }>;

  // Images associées à chaque étape
  const images = [gousse, sec, poudre, boite];

  return (
    <section id="Services" className="bg-gray-50 py-10">
      {/* --- Titre principal --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center font-bold text-green-700"
      >
        {t("services.titre")} <span className="text-4xl md:text-6xl">?</span>
      </motion.div>

      {/* --- Paragraphe d’intro --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-justify text-xl md:text-center py-6 px-6 md:px-10"
      >
        {t("services.intro")}
      </motion.p>

      {/* --- Composant préparations --- */}
      <Preparations />

      {/* --- Sous-titre --- */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-4xl font-bold text-start ml-6 md:ml-30 text-gray-800 my-5 md:my-10"
      >
        {t("services.sousTitre")}{" "}
        <span className="text-green-700">{t("services.miseEnAvant")}</span>
      </motion.h2>

      {/* --- Paragraphe de description --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-justify md:text-center text-xl px-6 md:px-20 my-5 md:my-10"
      >
        {t("services.description")}
      </motion.p>

      {/* --- Cartes animées --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ amount: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={images[index]}
              alt={item.titre}
              className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-center text-white bg-black/40">
              <h3 className="text-2xl font-semibold">{item.titre}</h3>
              <p className="text-sm mt-2 px-4 opacity-90">{item.texte}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
