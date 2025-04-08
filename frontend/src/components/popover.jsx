import { Button } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";

const Popover = ({ children, btnTitle }) => {
  // État pour savoir si le popover est ouvert ou non
  const [isOpen, setIsOpen] = useState(false);
  // Référence pour le conteneur du popover
  const popoverRef = useRef(null);

  // Fonction pour fermer le popover lorsqu'on clique en dehors
  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Ajout d'un écouteur d'événements lors du montage du composant
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      {/* Bouton pour basculer l'affichage du popover */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {btnTitle}
      </Button>

      {/* Affichage conditionnel du popover */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute z-[100] right-20 -top-5 mt-2 w-56 bg-white border border-gray-200 rounded-md overflow-hidden shadow-2xl"
        >
          <div className="p-0">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Popover;
