import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeHeader } from "./components/HomeHeader";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites/Actualites.jsx";
import ActualitesCopy from "./pages/Actualites/Actualites_copy.jsx";
import OneActualite from "./pages/Actualites/OneActualite";
import Agenda from "./pages/Agenda";
import Emplois from "./pages/Emplois";
import Entrepreneurs from "./pages/Entrepreneurs";
import Interviews from "./pages/Interviews";
import OneAgenda from "./pages/OneAgenda.jsx";
import OneEmplois from "./pages/OneEmplois.jsx";
import OneInterview from "./pages/OneInterview.jsx";
import OneOpportunity from "./pages/OneOpportunity.jsx";
import OneOrganisation from "./pages/OneOrganisation.jsx";
import Opportunites from "./pages/Opportunites";
import Search from "./pages/Search.jsx";
import TimeForAfrica from "./pages/TimeForAfrica";
import Maintenance from "./pages/Maintenance";
import Yprlink from "./pages/Yprlink.jsx";
import Database from "./pages/Database.jsx";
import News from "./pages/Actualites/NewActualite.jsx";
import Organisations from "./pages/NewOrganisations.jsx";
import Landing from "./pages/Landing.jsx";
import Waitlist from "./pages/Waitlist.jsx";
import { useReducer } from "react";
import { LangContext, LangDispatchContext } from "./langContext.js";

function langReducer(lang, action) {
  switch (action.type) {
    case "change": {
      return action.lang;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialLang = "en";

function App() {
  const [lang, dispatch] = useReducer(langReducer, initialLang);
  const MODE = import.meta.env.VITE_APP_MODE;
  return (
    <>
      {MODE === "maintenance" ? (
        <Maintenance />
      ) : (
        <LangContext.Provider value={lang}>
          <LangDispatchContext.Provider value={dispatch}>
            <BrowserRouter>
              <Routes>
                <Route path="/waitlist">
                  <Route index path="/waitlist" element={<Waitlist />} />
                </Route>
                <Route path="/">
                  <Route index path="/" element={<Landing />} />
                </Route>
                <Route path="/database">
                  <Route index path="/database" element={<Database />} />
                </Route>
                <Route path="/news">
                  <Route index path="/news" element={<News />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </LangDispatchContext.Provider>
        </LangContext.Provider>
      )}
    </>
  );
}

export default App;
