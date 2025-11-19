import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import success from "../../assets/icons/success.svg";
import photo2 from "../../assets/UNM/photo2.jpeg";
import photo3 from "../../assets/UNM/photo3.jpeg";
import { useTranslation } from "react-i18next";

export default function QuiSommesNous() {
  const { t } = useTranslation();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false },
  };

  // --- Récupération des tableaux traduits ---
  const listItems = t("quiSommesNous.liste", { returnObjects: true }) as string[];
  const pillars = t("quiSommesNous.piliers", { returnObjects: true }) as {
    titre: string;
    description: string;
  }[];

  return (
    <section
      id="Quisommesnous"
      className="flex flex-col p-6 sm:p-10 mb-20 overflow-hidden"
    >
      {/* --- Titre principal --- */}
      <motion.div
        {...motionProps}
        variants={fadeUp}
        className="text-4xl sm:text-4xl md:text-5xl text-center font-bold text-green-700 mb-10 md:mb-20"
      >
        {t("quiSommesNous.titre")}{" "}
        <span className="text-3xl sm:text-4xl md:text-6xl">?</span>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-0">
        {/* --- Colonne gauche --- */}
        <motion.div {...motionProps} variants={fadeIn} className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-start mb-6">
              {t("quiSommesNous.intro.titreIntro")}
            </h1>

            <div className="mb-6 text-justify text-xl leading-relaxed md:mr-8">
              <p className="mb-4">{t("quiSommesNous.intro.paragraphe1")}</p>
              <p className="mb-4">{t("quiSommesNous.intro.paragraphe2")}</p>
            </div>
          </div>

          {/* --- Image + liste --- */}
          <div className="flex flex-col md:flex-row p-4 sm:p-6 w-full gap-5">
            <motion.div
              {...motionProps}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-1/2 h-[220px] sm:h-[300px] rounded-lg overflow-hidden shadow-xl transition-transform duration-300"
            >
              <img
                src={photo3}
                alt="culture"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.ul
              {...motionProps}
              variants={fadeUp}
              className="w-full md:w-1/2 flex flex-col justify-center space-y-4 items-start text-sm sm:text-base md:text-3xl md:space-y-10"
            >
              {listItems.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-start gap-3"
                >
                  <img
                    src={success}
                    alt="success"
                    className="w-6 sm:w-6 h-6 sm:h-6 md:w-10 md:h-10 rounded-full object-cover mt-1"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div {...motionProps} variants={fadeUp}>
            <h1 className="text-lg sm:text-xl md:text-3xl text-justify md:text-center md:mb-10 font-bold md:mr-8">
              {t("quiSommesNous.citation")}
            </h1>
          </motion.div>
        </motion.div>

        {/* --- Colonne droite --- */}
        <motion.div
          {...motionProps}
          variants={fadeIn}
          className="w-full md:w-1/2 mb-10 mt-10 md:mt-0 flex flex-col items-center"
        >
          <div className="relative w-full mx-2 sm:mx-6 md:mx-10 md:rounded-[8rem] shadow-xl overflow-visible h-[220px] sm:h-[260px] md:h-[400px]">
            <motion.img
              src={photo2}
              alt="culture"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover rounded-[4rem] sm:rounded-[6rem] md:rounded-[8rem]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[8rem] " />

            {/* Piliers desktop */}
            <div className="absolute hidden md:grid bottom-0 w-full grid-cols-3 gap-6 transform translate-y-1/2 z-20">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  {...motionProps}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-700/90 text-white font-bold text-center py-4 rounded-3xl shadow-lg hover:bg-green-800 transition duration-300"
                >
                  {p.titre}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Piliers mobile */}
          <motion.div
            {...motionProps}
            variants={fadeUp}
            className="relative w-full flex flex-col items-center space-y-6 transform translate-y-16 text-sm sm:text-base"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-green-700/90 flex flex-col justify-center items-center text-white p-4 sm:p-6 rounded-3xl shadow-lg w-full"
              >
                <h1 className="text-center font-bold mb-2">{p.titre}</h1>
                <p className="text-center leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
