import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Preparations() {
  const { t, i18n } = useTranslation();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/preparation?lang=${i18n.language}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setContent(res.data[0]);
        }
        console.log("Contenu chargé pour préparation :", res.data);
      })
      .catch((err) => console.error("Erreur chargement contenu:", err));
  }, [i18n.language]);

  if (!content || !content.preparation) return null;

  return (
    <div className="w-full bg-gray-50 pt-0 md:pb-10">
      
      <div className="flex flex-col gap-16 max-w-6xl mx-auto pt-6 px-6">
        {content.preparation.map((step: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ amount: 0.3 }}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full lg:w-1/2 h-64 lg:h-80 rounded-2xl shadow-md bg-cover bg-center"
              style={{ backgroundImage: `url(http://localhost:3000${step.photo})` }}
            ></motion.div>

            {/* Texte */}
            <div className="w-full lg:w-1/2">
              <motion.h3
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.3 }}
                className="text-2xl md:text-3xl font-semibold text-green-700 mb-3"
              >
                {index + 1}. {step.photo_title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
                className="text-gray-700 leading-relaxed text-justify text-xl"
              >
                {step.photo_desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
