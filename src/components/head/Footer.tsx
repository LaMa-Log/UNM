import { motion } from "framer-motion";
import {
  GlobeIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import MessageForm from "./form";
import { useTranslation, Trans } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = t("footer.liens", { returnObjects: true }) as Array<{
    titre: string;
    articles: string[];
  }>;

  return (
    <motion.footer
      id="Contacts"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mt-10 px-6 py-14 md:px-20 md:py-16 bg-green-700 text-white"
    >
      {/* Liens + Formulaire */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {footerLinks.map((section, idx) => (
          <div key={idx} className="w-full md:w-auto">
            <h4 className="font-bold mb-4 text-lg">{section.titre}</h4>
            <ul className="space-y-2 font-light">
              {section.articles.map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="w-full md:w-1/3">
          <MessageForm />
        </div>
      </div>

      {/* Slogan mieux placé */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex justify-center items-center my-15 text-center md:text-left text-xl md:text-3xl uppercase font-bold tracking-wide" >
        <h1>{t("footer.slogan")}</h1>
      </motion.div>

      {/* Bas du footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="
          border-t border-green-500 mt-10 pt-6
          flex flex-col md:flex-row justify-between items-center
          text-sm gap-6
        "
      >
        <div className="text-center md:text-left">
          <Trans i18nKey="footer.copyright">
            © 2025 <span className="font-bold">Mahiratra Groupe</span> Antalaha.
          </Trans>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center space-x-2"
          >
            <GlobeIcon className="w-5 h-5" />
            <span>{t("footer.langue")}</span>
          </motion.div>

          <div className="flex space-x-4">
            <motion.a
              href="#"
              aria-label="Twitter"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="hover:text-gray-200 transition-colors"
            >
              <TwitterLogoIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Instagram"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="hover:text-gray-200 transition-colors"
            >
              <InstagramLogoIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
