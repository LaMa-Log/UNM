import { motion } from "framer-motion";
import { useTranslation} from "react-i18next";
import plantage from "../../assets/UNM/plantage.jpg";
import triage from "../../assets/UNM/triage.jpeg";
import sechage from "../../assets/UNM/sechage.jpeg";
import photo2 from "../../assets/UNM/photo2.jpeg";
import mature from "../../assets/UNM/mature.jpg";

const images = [plantage, photo2, mature, sechage, triage];

export default function Preparations() {
  const { t } = useTranslation();
  // fr.json: preparations.etapes (titre, description)
  const steps = t("preparations.etapes", { returnObjects: true }) as Array<{
    titre: string;
    description: string;
  }>;

  return (
    <div className="w-full bg-gray-50 pt-0 md:pb-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}

        className="text-2xl md:text-4xl font-bold text-start ml-6 md:ml-30 text-gray-800 mb-5 md:mb-10"
      >
         {/* {t("preparations.titre")} */}
      </motion.h2>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto px-6">
  {steps.map((step: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.95 }}
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
              style={{ backgroundImage: `url(${images[index]})` }}
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
                {step.titre}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
                className="text-gray-700 leading-relaxed text-justify text-xl"
              >
                {step.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
