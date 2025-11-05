import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import photo10 from '../../assets/gallery/photo10.jpeg'
import photo11 from '../../assets/gallery/photo11.jpeg'
import photo12 from '../../assets/gallery/photo12.jpeg'
import photo13 from '../../assets/gallery/photo13.jpeg'
import photo14 from '../../assets/gallery/photo14.jpeg'
import photo15 from '../../assets/gallery/photo15.jpeg'

const images = [
  photo10,
  photo13,
  photo15,
  photo11,
  photo12,
  photo14,
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <div id="Galleries" className="p-4 md:p-10 mb-20">
      {/* Titre */}
      <div className="flex justify-center md:mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center font-bold text-green-700 mb-10 md:mb-10"
        >
          {/* Utilisation de Trans pour traduire le titre */}
          <Trans i18nKey="gallery.title">Revivez nos moments forts en images</Trans>
        </motion.div>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              onClick={() => setSelectedImage(src)}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-54 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal plein écran */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 md:p-10">
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-500 transition"
            aria-label={t("gallery.close") || "Fermer"}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
