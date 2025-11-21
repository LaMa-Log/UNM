import { motion } from "framer-motion";
import beems from "../../assets/UNM/beems.jpeg";
import seeds from "../../assets/UNM/seeds.jpeg";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  // Récupère le contenu depuis fr.json (produits.articles)
  const products = t("produits.articles", { returnObjects: true }) as Array<{
    id: number;
    nom: string;
    description: string;
    caracteristiques: string[];
    info: string;
  }>;

  const images = [beems, seeds];

  return (
    <div id="Produits" className="p-6 md:p-10 my-20">
      {/* --- Titre principal --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="text-4xl md:text-5xl text-center font-bold text-green-700 mb-10 md:mb-20"
      >
        {t("produits.titre")} {" "}
        <span className="text-5xl md:text-6xl">!</span>
      </motion.div>

      {/* --- Cartes produits --- */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false, amount: 0.3 }}
            className="border border-slate-200 bg-green-700/90 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all"
          >
            <motion.img
              src={images[index]}
              alt={product.nom}
              className="w-full h-[300px] md:h-[400px] object-fit md:object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />

            <div className="p-6">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-white mb-3"
              >
                {product.nom}
              </motion.h3>

              {/* <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white mb-4"
              >
                {product.description}
              </motion.p> */}

              <ul className="list-disc list-inside text-xs md:text-sm text-white space-y-2 mb-4">
                {product.caracteristiques.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {/* <p className="text-sm text-white">{product.info}</p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
