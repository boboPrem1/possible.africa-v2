import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industrySector: "",
    website: "",
    voice: false,
    sms: false,
    ussd: false,
    whatsapp: false,
    stt: false,
    tts: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const apiKey = "pat2732ViJYBSSYs2.0e2362370755861a7ce8546aeebb17a9ccfeef0b472b154a36b03134944763c6";
    const baseId = "apptABNLl0Crx6A9o";
    const tableId = "tblhAon3drcSAI68r";
    const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

    try {
      const response = await axios.post(
        url,
        {
          "fields": formData,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error.message);
      console.error("Error submitting data:", error.type);
    }
  };

  return (
    <form
      id="register"
      onSubmit={handleSubmit}
      className=" md:w-[80%] lg:w-[60%] mx-auto p-4 bg-white rounded-lg"
    >
      <h2 className="text-xl md:text-2xl lg:text-4xl lg:py-10 text-center font-semibold mb-4">
        Inscrivez-vous dès maintenant pour transformer votre startup
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:text-base lg:text-lg gap-4">
        <div className="mb-4">
          <label className="block text-gray-700">Nom complet</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 rounded-xl w-full border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Nom de l'entreprise</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 p-2 rounded-xl w-full border border-gray-300"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:text-base lg:text-lg gap-4">
        <div className="mb-4">
          <label className="block text-gray-700">Adresse e-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 rounded-xl w-full border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Téléphone (WhatsApp)</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:text-base lg:text-lg gap-4">
        <div className="mb-4">
          <label className="block text-gray-700">Secteur d'activité</label>
          <input
            type="text"
            name="industrySector"
            value={formData.industrySector}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Site Web</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="mb-4 lg:text-lg">
        <label className="block text-gray-700 mb-2">
          La solution intègre-t-elle :
        </label>
        <div className="flex flex-wrap gap-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="voice"
              checked={formData.voice}
              onChange={handleChange}
              className="mr-2"
            />
            Voix
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="sms"
              checked={formData.sms}
              onChange={handleChange}
              className="mr-2"
            />
            SMS
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="ussd"
              checked={formData.ussd}
              onChange={handleChange}
              className="mr-2"
            />
            USSD
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="whatsapp"
              checked={formData.whatsapp}
              onChange={handleChange}
              className="mr-2"
            />
            WhatsApp
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="stt"
              checked={formData.stt}
              onChange={handleChange}
              className="mr-2"
            />
            Speech-to-Text (STT)
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="tts"
              checked={formData.tts}
              onChange={handleChange}
              className="mr-2"
            />
            Text-to-Speech (TTS)
          </label>
        </div>
      </div>

      <div className="mb-4 md:text-base lg:text-lg">
        <label className="block text-gray-700">
          Description du startup (500 caractères max)
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
          maxLength="500"
          rows={6}
        />
      </div>
      <div className="lg:w-[50%] mx-auto lg:py-6">
        <button
          type="submit"
          className="w-full lg:justify-center bg-[#3030F9] text-white md:text-base lg:text-lg py-2 px-4 rounded-xl hover:bg-blue-600"
        >
          Valider ma candidature
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
