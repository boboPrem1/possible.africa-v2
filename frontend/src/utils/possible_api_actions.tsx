import axios from "axios";

// const apiKey = process.env.NEXT_PUBLIC_POSSIBLE_APIKEY;
const apiKey = "94cb26H6b7a882e9c5713a10c6826706b17";

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



type Params = {
  query?: string;
  page?: string;
  limit?: string;
  region?: string;
  sector?: string;
  headquarter?: string;
  subSector?: string;
  tier?: string;
  operatingCountries?: string;
};

function actionQueryTransformer(params: Params, resource: string): string {
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
      baseQueryString += `&${key}=${encodeURIComponent(value as string)}`;
    }
  });

  return baseQueryString;
}

export async function fetchResource(resource: string, params: any) {
  const queryString = actionQueryTransformer(params, resource);
  const data = await axiosInstance.get(queryString);
  return data;
}

