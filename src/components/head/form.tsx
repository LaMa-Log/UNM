import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export default function MessageForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0">
      <h3 className="text-xl font-bold text-green-700 mb-4 text-center md:text-left">
        {t("formulaireContact.titre")}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-green-700">
        <div>
          <input
            type="text"
            id="fullName"
            placeholder={t("formulaireContact.placeholders.nomComplet")}
            className="w-full p-3 border border-gray-300 rounded-md text-sm md:text-base outline-none focus:ring-2 focus:ring-green-500"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            placeholder={t("formulaireContact.placeholders.email")}
            className="w-full p-3 border border-gray-300 rounded-md text-sm md:text-base outline-none focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <textarea
            id="message"
            placeholder={t("formulaireContact.placeholders.message")}
            className="w-full p-3 border border-gray-300 rounded-md text-sm md:text-base resize-none outline-none focus:ring-2 focus:ring-green-500"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors h-12 text-base md:text-lg"
        >
          {t("formulaireContact.bouton")}
        </Button>
      </form>
    </div>
  );
}
