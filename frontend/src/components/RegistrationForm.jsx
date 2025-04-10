import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    "Nom complet": "",
    "Adresse e-mail": "",
    fld8KB8rJvFpjGNuG: "",
    "Numéro de téléphone (WhatsApp)": "",
    fldUGHfKImEzVCSYb: "",
    "Site Web ou lien vers le pitch deck": "",
    Solution: "",
    Description: "",
    Voix: false,
    SMS: false,
    USSD: false,
    Whatsapp: false,
    "Speech-to-Text (STT)": false,
    "Text-to-Speech (TTS)": false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    if (type === "checkbox") {
      let solution = Array.isArray(updatedFormData.Solution)
      ? updatedFormData.Solution
      : [];
      if (checked) {
      if (!solution.includes(name)) {
        solution.push(name);
      }
      } else {
      solution = solution.filter((item) => item !== name);
      }
      updatedFormData.Solution = solution;
    }

    // Remove all checkbox fields from the formData
    Object.keys(updatedFormData).forEach((key) => {
      if (typeof updatedFormData[key] === "boolean") {
        delete updatedFormData[key];
      }
    });

    setFormData(updatedFormData);
  };

  const showToast = (message, type) => {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("opacity-100");
    type === "success"
      ? toast.classList.add("bg-green-500")
      : toast.classList.add("bg-red-500");
    setTimeout(() => {
      toast.classList.remove("opacity-100");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
    const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
    const tableId = import.meta.env.VITE_AIRTABLE_TABLE_ID;
    const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

    try {
      const response = await axios.post(
        url,
        {
          fields: formData,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data submitted successfully:", response.data);
      showToast("Data submitted successfully!", "success");
    } catch (error) {
      console.error("Error submitting data:", error.message);
      showToast("Error submitting data!");
    }
  };

  return (
    <div>
      <div
        id="toast"
        className="fixed top-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded shadow-lg opacity-0 transition-opacity duration-300"
      >
        <span id="desc"></span>
      </div>
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
              name="Nom complet"
              value={formData["Nom complet"]}
              onChange={handleChange}
              className="mt-1 p-2 rounded-xl w-full border border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Nom de l'entreprise</label>
            <input
              type="text"
              name="fld8KB8rJvFpjGNuG"
              value={formData["fld8KB8rJvFpjGNuG"]}
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
              name="Adresse e-mail"
              value={formData["A²dresse e-mail"]}
              onChange={handleChange}
              className="mt-1 p-2 rounded-xl w-full border border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Téléphone (WhatsApp)</label>
            <input
              type="text"
              name="Numéro de téléphone (WhatsApp)"
              value={formData["Numéro de téléphone (WhatsApp)"]}
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
              name="fldUGHfKImEzVCSYb"
              value={formData["fldUGHfKImEzVCSYb"]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Site Web</label>
            <input
              type="url"
              name="Site Web ou lien vers le pitch deck"
              value={formData["Site Web ou lien vers le pitch deck"]}
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
                name="Voix"
                checked={formData["Voix"]}
                onChange={handleChange}
                className="mr-2"
              />
              Voix
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="SMS"
                checked={formData["SMS"]}
                onChange={handleChange}
                className="mr-2"
              />
              SMS
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="USSD"
                checked={formData["USSD"]}
                onChange={handleChange}
                className="mr-2"
              />
              USSD
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="Whatsapp"
                checked={formData["Whatsapp"]}
                onChange={handleChange}
                className="mr-2"
              />
              WhatsApp
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="Speech-to-Text (STT)"
                checked={formData["Speech-to-Text (STT)"]}
                onChange={handleChange}
                className="mr-2"
              />
              Speech-to-Text (STT)
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="Text-to-Speech (TTS)"
                checked={formData["Text-to-Speech (TTS)"]}
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
            name="Description"
            value={formData["Description"]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            maxLength="500"
            rows={6}
            required
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
    </div>
  );
};

export default RegistrationForm;
