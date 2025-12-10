import { motion } from "framer-motion";
import Preparations from "../home/ServicesPreparation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

interface ProduitItem {
  photo: string;
  photo_title: string;
  photo_desc: string;
}

interface Produit {
  title: string;
  title_desc: string;
  preparation: ProduitItem[];
}

export default function ProductFeatures() {
  const { i18n } = useTranslation();
  const [produitsData, setProduitsData] = useState<Produit | null>(null);
  const [preparationData, setPreparationData] = useState<Produit | null>(null);

  // Récupération des produits
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/produit?lang=${i18n.language}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setProduitsData(res.data[0]);
        }
        console.log("Contenu chargé pour produit :", res.data);
      })
      .catch((err) => console.error("Erreur chargement produits:", err));
  }, [i18n.language]);

  // Récupération de la préparation (titre + description)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/preparation?lang=${i18n.language}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setPreparationData(res.data[0]);
        }
        console.log("Contenu chargé pour préparation :", res.data);
      })
      .catch((err) => console.error("Erreur chargement préparation:", err));
  }, [i18n.language]);

  if (!produitsData) return null;

  return (
    <section id="Services" className="bg-gray-50 py-10">
      {/* --- Titre principal de la préparation --- */}
      {preparationData && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-center font-bold text-green-700 mb-6"
          >
            {preparationData.title}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-justify text-xl md:text-center px-6 md:px-10 mb-10"
          >
            {preparationData.title_desc}
          </motion.p>
        </>
      )}

      {/* --- Composant préparations détaillées --- */}
      {<Preparations />}

      {/* --- Sous-titre produits --- */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-4xl font-bold text-green-700 text-center my-5 md:my-10"
      >
        {produitsData.title}
      </motion.h2>

      {/* --- Paragraphe de description produits --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-justify md:text-center text-xl px-6 md:px-20 my-5 md:my-10"
      >
        {produitsData.title_desc}
      </motion.p>

      {/* --- Cartes produits --- */}
      <div className="max-w-6xl lg:max-w-full lg:h-[350px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {produitsData.preparation.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ amount: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={`http://localhost:3000${item.photo}`}
              alt={item.photo_title}
              className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 lg:pb-0 lg:justify-start sm:pb-6 md:pt-[170px] text-center text-white bg-black/40">
              <h3 className="text-2xl font-semibold">{item.photo_title}</h3>
              <p className="text-sm mt-2 px-4 opacity-90">{item.photo_desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
