import axios from "axios";
import { Header } from "./Landing";

import { useState } from "react";

export default function Waitlist() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Veuillez entrer un email valide.");
      return;
    }

    const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
    const contactsBaseaseId = import.meta.env.VITE_AIRTABLE_CONTACTS_BASE_ID;
    const waitListTableId = import.meta.env.VITE_AIRTABLE_WAITLIST_TABLE_ID;

    const url = `https://api.airtable.com/v0/${contactsBaseaseId}/${waitListTableId}`;

    try {
      setLoading(true);
      const response = await axios.post(
        url,
        {
          fields: { Email: email },
        },
        {
          headers: {
            Authorization: `Bearer ${airtableApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      setSuccessMessage("Merci ! Vous serez informé du lancement.");
      setLoading(false);
    } catch (error) {
      console.error("Error submitting data:", error.message);

      setErrorMessage(
        "Erreur ! Quelque chose s'est mal passé durant l'envoi de la requête."
      );

      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Header page="/waitlist" />
      </div>
      <div className="font-nexaRegular flex h-screen items-center justify-center bg-gray-900 text-white px-6">
        <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">
            🚀 Pyramid.Africa arrive bientôt !
          </h1>
          <p className="text-gray-300 mb-6">
            Une plateforme innovante pour l’outreach B2B et l’intelligence
            commerciale en Afrique.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email professionnel"
              className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className={`bg-[#2BB19C] hover:bg-[#248b7c] text-white font-bold py-3 rounded-lg transition duration-300 ${
                loading ? "animate-pulse" : ""
              }`}
            >
              Je veux en savoir plus
            </button>
          </form>

          {successMessage && (
            <p className="mt-4 text-[#2BB19C]">{successMessage}</p>
          )}
          {errorMessage && <p className="mt-4 text-red-400">{errorMessage}</p>}

          <p className="mt-6 text-sm text-gray-400">
            Inscrivez-vous dès maintenant pour être informé du lancement !
          </p>
        </div>
      </div>
    </>
  );
}
