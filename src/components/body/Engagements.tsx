import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import couverture from "../../assets/UNM/couverture.jpeg";

export default function Engagements() {
  const { t } = useTranslation();
  const engagements = t("engagements.articles", { returnObjects: true }) as unknown as string[];

  return (
    <section
      id="Engagements"
      className="flex flex-col  justify-center items-center w-full h-full "
    >
        <div 
        className="relative w-full shadow-2xl">
        {/* --- Image de fond --- */}
        <motion.img
          src={couverture}
          alt="culture"
          className="absolute inset-0 w-full h-screen object-cover "
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* --- Couche d’ombre --- */}
        <div>
          <div className="absolute inset-0 w-full h-screen bg-black/40 md:hidden z-0"></div>
          <div className="absolute inset-0 w-full h-screen hidden md:block bg-linear-to-l from-green-900/85 via-green-800/70 to-transparent z-0"></div>
        </div>

        {/* --- Contenu principal --- */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-end items-center h-full px-4 sm:px-10 lg:px-20 py-10  text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: false }}
            className="max-w-4xl w-full h-screen space-y-4"
          >
            {/* --- TITRE (aligné à droite et justifié) --- */}
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center md:text-right leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("engagements.titre1")}
            </motion.h1>

            {/* --- DESCRIPTION (alignée à droite et justifiée) --- */}
            <motion.p
              className="text-base sm:text-lg text-gray-100 text-center md:text-right leading-relaxed "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9 }}
            >
              <Trans i18nKey="engagements.description">
                Chez <span className="text-green-300 font-semibold ">UNM Company</span>, nous partageons...
              </Trans>
            </motion.p>

            {/* --- LISTE DES ENGAGEMENTS (alignés à gauche) --- */}
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center md:text-right  leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("engagements.titre2")}
            </motion.h1>
            <div className="space-y-3 ml-0 md:ml-20  text-left">
              {engagements.map((text, index) => (
                <motion.div
                  key={index}
                  className="w-full flex items-start gap-3 sm:gap-3 justify-start"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-green-400 rounded-lg text-sm sm:text-lg font-bold text-green-800 bg-white shadow-md"
                  >
                    {index + 1}
                  </motion.div>

                  <p className="max-w-5xl text-gray-100 text-sm sm:text-base text-left">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>      
          </motion.div>

        </div>
      </div>
      <div className="flex  justify-center  px-4 sm:px-6 md:px-4 md:pt-10 ">
          <div className=" text-xl md:text-[2rem] text-center">
            <Trans
              i18nKey="engagements.regles"
              components={{
                1: <span className="text-green-400 font-bold" /> // norme colorée
              }}
            />
          </div>
        </div>


    </section>
  );
}
