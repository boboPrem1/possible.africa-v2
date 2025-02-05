import axios from "axios";

const apiKey = import.meta.env.VITE_POSSIBLE_API_KEY;

// Configuration de base pour l'instance Axios
const axiosInstance = axios.create({
  baseURL: "https://api.possible.africa/", // Remplacez par votre URL de base
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur de requêtes : Ajoute la clé API à chaque requête
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `ApiKey ${apiKey}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponses : Traite les réponses ou erreurs
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data; // Renvoie uniquement les données
  },
  (error) => {
    // console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

function actionQueryTransformer(params, resource) {
  let baseQueryString = `/${resource}`;
  const { limit = 10, page = 1, ...filters } = params;
  let _start = 0;
  if(Number(page) <= 1){
    _start = 0;
  } else {
    _start = (Number(page) - 1) * Number(limit);
  }
 const _end = _start + Number(limit);

  // Ajoute les paramètres `page` et `limit`
  baseQueryString += `?page=${page}&_start=${_start}&_end=${_end}`;

  // Ajoute les filtres (autres paramètres)
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      baseQueryString += `&${key}=${encodeURIComponent(value)}`;
    }
  });

  return baseQueryString;
}

export async function fetchResource(resource, params) {
  const queryString = actionQueryTransformer(params, resource);
  const data = await axiosInstance.get(queryString);
  return data;
}

