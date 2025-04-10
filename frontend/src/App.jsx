import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maintenance from "./pages/Maintenance";
import Database from "./pages/Database.jsx";
import News from "./pages/Actualites/NewActualite.jsx";
import Landing from "./pages/Landing.jsx";
import Waitlist from "./pages/Waitlist.jsx";
import { useEffect, useReducer } from "react";
import {
  initialLang,
  LangTransContext,
  LangTransDispatchContext,
} from "./langTransContext.js";
import { en_trans } from "./lang/en.js";
import { fr_trans } from "./lang/fr.js";
import PyramidLanding from "./pages/PyramidLanding.jsx";
import ApplicantList from "./pages/ApplicantList.jsx";
import OneAgendaTemplate from "./components/OneAgendaTemplate.jsx";
import OneActualite from "./pages/OneActualite.jsx";
import OneOrganisation from "./pages/OneOrganisationNew.jsx";


const existingLang = sessionStorage.getItem("lang");

function langTransReducer(lang, action) {
  switch (action.type) {
    case "change": {
      let trans;
      if (action.lang === "fr") {
        trans = { ...fr_trans };
      } else {
        trans = { ...en_trans };
      }
      // change lang key in session
      sessionStorage.setItem("lang", action.lang);
      return {
        lang: action.lang,
        _: trans,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function App() {
  const [lang_trans, dispatch] = useReducer(langTransReducer, initialLang);

  useEffect(() => {
    if (existingLang) {
      dispatch({ type: "change", lang: existingLang });
    }
  }, []);

  const MODE = import.meta.env.VITE_APP_MODE;
  return (
    <>
      {MODE === "maintenance" ? (
        <Maintenance />
      ) : (
        <LangTransContext.Provider value={lang_trans}>
          <LangTransDispatchContext.Provider value={dispatch}>
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
                  <Route path="/database/:name" element={<OneOrganisation />} />
                </Route>
                <Route path="/news">
                  <Route index path="/news" element={<News />} />
                  <Route path="/news/:slug" element={<OneActualite />} />
                </Route>
                <Route path="/pyramid">
                  <Route index path="/pyramid" element={<PyramidLanding />} />
                </Route>
                <Route path="/applicantList">
                  <Route
                    index
                    path="/applicantList"
                    element={<ApplicantList />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </LangTransDispatchContext.Provider>
        </LangTransContext.Provider>
      )}
    </>
  );
}

export default App;
